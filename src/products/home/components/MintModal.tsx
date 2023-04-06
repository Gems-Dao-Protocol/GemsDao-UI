import { LoadingButton } from '@app/common/components/LoadingButton'
import { NFT_CAs, RpcProviders } from '@app/constants/AppConstants'
import { INFTINfo, useGemsDao } from '@app/contexts'
import { useApproveCallback } from '@app/hooks/hooks'
import { decodeTxErrorMessage, getContract, isWrappedEther } from '@app/utils/utils'
import { Tooltip } from '@mui/material'
import { useEthers } from '@usedapp/core'
import { BigNumber, Contract } from 'ethers'
import React, { useMemo, useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import Modal from 'src/common/components/Modal'
import NFTAmountInput from './NFTAmountInput'
import ERC20_ABI from '@app/constants/contracts/abis/erc20.json'
import { MaxUint256 } from '@ethersproject/constants'

interface ModalProps {
    isOpen: boolean
    handleClose: () => void
}

const ID_NFT_INPUTAMOUNT = "id_nft_inputamount"

export default function MintModal({ isOpen, handleClose }: ModalProps) {
    const { account } = useEthers()
    const { nftInfo, currencyTokenInfo, userInfo, currentChainId, mintSingle, updateUserInfo, updateMintedInfo } = useGemsDao()
    const [amount, setInputAmount] = useState(0)
    const { approveCallback } = useApproveCallback()
    const [isWalletApproving, setIsWalletApproving] = useState(false)
    const [allowance, setAllowance] = useState(BigNumber.from(0))
    const [payAmount, setPayAmount] = useState(BigNumber.from(0))
    const [isMinting, setIsMinting] = useState(false)

    useEffect(() => {
        setInputAmount(0)
        setInputBoxValue(0)
    }, [isOpen])

    const onInputChange = (val: string) => {
        setInputAmount(Number(val))
    }

    const setInputBoxValue = (val: number) => {
        let element: any = document.getElementById(ID_NFT_INPUTAMOUNT)
        if (element) element.value = val
    }

    const initInputBox = () => {
        setInputAmount(0)
        let element: any = document.getElementById(ID_NFT_INPUTAMOUNT)
        if (element) element.value = ""
    }

    const handleMax = () => {
        if (account && userInfo && nftInfo) {
            let val = nftInfo.maxWallet - userInfo.balanceOf
            val = Math.min(val, nftInfo.maxSupply - nftInfo.totalSupply)
            setInputAmount(val)
            setInputBoxValue(val)
        } else {
            initInputBox()
        }
    }

    const onClose = () => {
        handleClose()
    }

    const onApprove = async () => {
        setIsWalletApproving(true)
        try {
            await approveCallback(NFT_CAs[currentChainId], currencyTokenInfo.address).then(res => {
                setAllowance(res.allowance)
                if (res.allowance.gte(payAmount)) toast.success("Approved!")
                else toast.error("Not enough allowance approved!")
            }).catch((error: any) => {
                console.log(error)
                let err: any = error
                toast.error(decodeTxErrorMessage(err))
            })
        } catch (error) {
            console.log(error)
        }
        setIsWalletApproving(false)
        return null
    }

    const onMint = async () => {
        setIsMinting(true)
        try {
            await mintSingle(BigNumber.from(amount), payAmount).then((res: any) => {
                if (res.status === 1) {
                    updateUserInfo()
                    updateMintedInfo()
                    updateAllowance()
                    handleClose()
                    toast.success('Successfully minted!')
                } else {
                    toast.error(`Transaction reverted! Tx:${res.hash}`)
                }
            }).catch((error: any) => {
                console.log(error)
                let err: any = error
                toast.error(decodeTxErrorMessage(err))
            })
        } catch (error) {
            console.log(error)
        }
        initInputBox()
        setIsMinting(false)
        return null
    }

    const updateAllowance = async () => {
        if (currencyTokenInfo) {
            if (isWrappedEther(currentChainId, currencyTokenInfo.address)) {
                setAllowance(MaxUint256)
                return
            } else {
                try {
                    const chainId = currentChainId;
                    const tokenContract: Contract = getContract(currencyTokenInfo.address, ERC20_ABI, RpcProviders[chainId], account ? account : undefined)
                    const res = await tokenContract.allowance(account, NFT_CAs[chainId])
                    setAllowance(res)
                    return
                } catch (err) { }
            }
        }
        setAllowance(BigNumber.from(0))
    }

    useEffect(() => {
        updateAllowance()
    }, [currencyTokenInfo])

    useEffect(() => {
        if (nftInfo) {
            setPayAmount(nftInfo.price.mul(BigNumber.from(amount)))
            return
        }
        setPayAmount(BigNumber.from(0))
    }, [nftInfo, amount])

    return (
        <div className='w-full'>
            <Modal
                isOpen={isOpen}
                handleClose={onClose}
                bgColor="#000A21"
            >
                <div className='w-full pt-4'>
                    <div className="flex flex-row justify-between w-full">
                        <div className='text-white text-[24px] md:text-[32px] ml-6'>
                            Mint
                        </div>
                        <div className="flex justify-end p-2">
                            <Tooltip title="Close" placement="left" componentsProps={{ tooltip: { sx: { backgroundColor: '#142028', }, } }}>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-black-400 hover:text-gray-500 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                    onClick={handleClose}>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className='w-full p-4 flex flex-col gap-4 items-center'>
                    <NFTAmountInput id={ID_NFT_INPUTAMOUNT} onChange={onInputChange} onMax={handleMax} />
                    {nftInfo && <>
                        <div className='w-full flex justify-between items-center text-[16px]'>
                            <div>Max Wallet:</div>
                            <div>{nftInfo.maxWallet}</div>
                        </div>
                        <div className='w-full flex justify-between items-center text-[16px]'>
                            <div>Supply Cap:</div>
                            <div>{nftInfo.maxSupply}</div>
                        </div>
                        <div className='w-full flex justify-between items-center text-[16px]'>
                            <div>Total Minted:</div>
                            <div>{nftInfo.totalSupply}</div>
                        </div>
                    </>}
                    {userInfo && <div className='w-full flex justify-between items-center text-[16px]'>
                        <div>Your Balance:</div>
                        <div>{userInfo.balanceOf}</div>
                    </div>}
                    {!allowance.gte(payAmount) && amount > 0 ?
                        <LoadingButton
                            type="primary"
                            style={{ width: "100%", paddingTop: '8px', paddingBottom: '8px' }}
                            loading={isWalletApproving}
                            onClick={onApprove}
                            disabled={!account}
                        >
                            <span className='text-[16px] sm:text-[18px]'>{isWalletApproving ? 'Enabling ...' : "Approve"}</span>
                        </LoadingButton>
                        :
                        <LoadingButton
                            type="primary"
                            style={{ width: "100%", paddingTop: '8px', paddingBottom: '8px' }}
                            loading={isMinting}
                            onClick={onMint}
                            disabled={!account || amount === 0}
                        >
                            <span className='text-[16px] sm:text-[18px]'>{isMinting ? 'Minting ...' : "Mint"}</span>
                        </LoadingButton>}
                </div>
            </Modal >
        </div >
    )
}
