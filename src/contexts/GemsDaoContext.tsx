import { CHAIN_ITEMS } from '@app/common/layout/SupportChainsConstants'
import { calculateGasMargin, getContract, getURL_FromIPFS_URI, isWrappedEther } from '@app/utils/utils'
import { useEthers } from '@usedapp/core'
import { BigNumber, Contract } from 'ethers'
import React, { useContext, useEffect, useState } from 'react'
import NFT_ABI from '@app/constants/contracts/abis/nft.json'
import { TransactionResponse } from '@ethersproject/providers'
import { Native_Currencies, NFT_CAs, RpcProviders, Wrapped_Ethers } from '@app/constants/AppConstants'
import { useTokenCallback } from '@app/hooks/hooks'
import useRefresh from '@app/hooks/useRefresh'
import useMemoizedState from '@app/hooks/useMemorizedState'

declare type Maybe<T> = T | null | undefined

export interface INFTINfo {
    price: BigNumber
    maxSupply: number
    maxWallet: number
    totalSupply: number
    mintable: boolean
    transferEnabled: boolean
    paused: boolean
    allRevealed: boolean
}

export interface IUserInfo {
    balanceOf: number
    tokenIds: number[]
}

export interface ITokenInfo {
    address: string
    name: string
    symbol: string
    decimals: number
}

export interface IGemsDaoContext {
    currentChainId: number
    nftInfo: INFTINfo
    currencyTokenInfo: ITokenInfo
    isLoadingNFTInfo: boolean
    userInfo: IUserInfo
    mintSingle: (amount: BigNumber, value: BigNumber) => Promise<any>
    updateMintedInfo: () => Promise<any>
    updateUserInfo: () => Promise<any>
}

const GemsDaoContext = React.createContext<Maybe<IGemsDaoContext>>(null)

export const GemsDaoProvider = ({ children = null as any }) => {
    const [currentChainId, setCurrentChainId] = useState(CHAIN_ITEMS[1])
    const [nftInfo, setNFTInfo] = useMemoizedState<INFTINfo>(undefined)
    const { account, library } = useEthers()
    const [currencyTokenInfo, setCurrencyTokenInfo] = useMemoizedState<ITokenInfo>(undefined)
    const { tokenCallback } = useTokenCallback()
    const [isLoadingNFTInfo, setIsLoadingNFTInfo] = useState(false)
    const { slowRefresh } = useRefresh()
    const [updatedTime, setUpdatedTime] = useState(0)
    const [queueNFTInfo, setQueueNFTInfo] = useState({ updatedTime: 0, data: undefined })
    const [userInfo, setUserInfo] = useMemoizedState<IUserInfo>(undefined)

    const mintSingle = async function (amount: BigNumber, value: BigNumber) {
        if (!account || !library) return
        const nftContract: Contract = getContract(NFT_CAs[currentChainId], NFT_ABI, library as any, account ? account : undefined)
        return nftContract.estimateGas.mint(amount, { value: isWrappedEther(currentChainId, currencyTokenInfo.address) ? value : BigNumber.from(0) }).then(estimatedGasLimit => {
            const gas = estimatedGasLimit
            return nftContract.mint(amount, {
                gasLimit: calculateGasMargin(gas), value: isWrappedEther(currentChainId, currencyTokenInfo.address) ? value : BigNumber.from(0)
            }).then((response: TransactionResponse) => {
                return response.wait().then((res: any) => {
                    return { status: res.status, hash: response.hash }
                })
            })
        })
    }

    const fetchNFTInfo = async (nftContract: Contract) => {
        const res = await nftContract.getStatus()
        return res
    }

    const fetchTokenURI = async (nftContract: Contract, id: number) => {
        const res = await nftContract.tokenURI(BigNumber.from(id))
        return res
    }

    const fetchBalanceOf = async (nftContract: Contract, owner: string) => {
        const res = await nftContract.balanceOf(owner)
        return res
    }

    const fetchTokenIdsOfAddress = async (nftContract: Contract, owner: string) => {
        const res = await nftContract.getTokenIdsOfAddress(owner)
        return res
    }

    const getMetadata = async (nftInfo: any, uri: string) => {
        const url = getURL_FromIPFS_URI(uri)
        let metadata = await fetch(getURL_FromIPFS_URI(uri)).then((res) => res.json())
        const imgURL = getURL_FromIPFS_URI(metadata.image)
        metadata = { ...metadata, image: imgURL }

        return metadata
    }

    useEffect(() => {
        if (queueNFTInfo.data) {
            if (queueNFTInfo.updatedTime === updatedTime) {
                setNFTInfo(queueNFTInfo.data)
                setIsLoadingNFTInfo(false)
            }
        }
    }, [queueNFTInfo])

    const updateNFTInfo = async () => {
        setIsLoadingNFTInfo(true)
        const chainId = currentChainId
        const nftContract: Contract = getContract(NFT_CAs[currentChainId], NFT_ABI, RpcProviders[chainId], account ? account : undefined)
        // const currencyTokenCA = await nftContract.currencyToken()
        // let tokenInfo = await tokenCallback(currencyTokenCA, chainId)
        // if (!tokenInfo) return
        let tokenInfo = Wrapped_Ethers[currentChainId]
        if (isWrappedEther(chainId, tokenInfo.address)) tokenInfo = { ...tokenInfo, symbol: Native_Currencies[chainId].symbol, name: Native_Currencies[chainId].name }
        setCurrencyTokenInfo(tokenInfo)

        await fetchNFTInfo(nftContract).then(async result => {
            setQueueNFTInfo({
                updatedTime: updatedTime,
                data: {
                    price: result[0],
                    maxSupply: Number(result[1]),
                    maxWallet: Number(result[2]),
                    totalSupply: Number(result[3]),
                    mintable: result[4],
                    transferEnabled: result[5],
                    paused: result[6],
                    allRevealed: result[7]
                }
            })
        }).catch(error => {
            console.log(error)
        })
    }

    const updateMintedInfo = async () => {
        setUpdatedTime((new Date()).getTime())
        const chainId = currentChainId
        const nftContract: Contract = getContract(NFT_CAs[currentChainId], NFT_ABI, RpcProviders[chainId], account ? account : undefined)
        await fetchNFTInfo(nftContract).then(async result => {
            setNFTInfo({
                price: result[0],
                maxSupply: Number(result[1]),
                maxWallet: Number(result[2]),
                totalSupply: Number(result[3]),
                mintable: result[4],
                transferEnabled: result[5],
                paused: result[6],
                allRevealed: result[7]
            })
        }).catch(error => {
            console.log(error)
        })
    }

    const updateUserInfo = async () => {
        const chainId = currentChainId;
        const nftContract: Contract = getContract(NFT_CAs[currentChainId], NFT_ABI, RpcProviders[chainId], account ? account : undefined)
        await fetchTokenIdsOfAddress(nftContract, account).then(async result => {
            let tokenIds: number[] = []
            for (let i = 0; i < result.length; i++) {
                tokenIds.push(Number(result[i]))
            }
            setUserInfo({ balanceOf: tokenIds.length, tokenIds: tokenIds })
        }).catch(error => {
            setUserInfo({ balanceOf: 0, tokenIds: [] })
            console.log(error)
        })
    }

    useEffect(() => {
        if (!isLoadingNFTInfo) updateNFTInfo()
    }, [slowRefresh])

    useEffect(() => {
        if (account) {
            updateUserInfo()
        } else {
            setUserInfo(undefined)
        }
    }, [account])

    return (
        <GemsDaoContext.Provider
            value={{
                currentChainId,
                nftInfo,
                currencyTokenInfo,
                isLoadingNFTInfo,
                userInfo,
                mintSingle,
                updateMintedInfo,
                updateUserInfo
            }}
        >
            {children}
        </GemsDaoContext.Provider >
    )
}

export const useGemsDao = () => {
    const context = useContext(GemsDaoContext)

    if (!context) {
        throw new Error('Component rendered outside the provider tree')
    }

    return context
}

