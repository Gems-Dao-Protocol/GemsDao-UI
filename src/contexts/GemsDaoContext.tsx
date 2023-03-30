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
    id: number
    maxWallet: number
    maxSupply: number
    price: BigNumber
    totalMinted: number
    metadata: any
}

export interface IUserMinted {
    id: number
    mintedAmount: number
}

export interface ITokenInfo {
    address: string
    name: string
    symbol: string
    decimals: number
}

export interface IGemsDaoContext {
    currentChainId: number
    allNFTInfos: INFTINfo[]
    currencyTokenInfo: ITokenInfo
    mintedInfos: IUserMinted[]
    mintSingle: (id: BigNumber, amount: BigNumber, value: BigNumber) => Promise<any>
    mintBatch: (ids: BigNumber[], amounts: BigNumber[], value: BigNumber) => Promise<any>
    updateAllNFTInfo: () => Promise<any>
    updateNFTInfo: (id: number) => Promise<any>
    updateMintedInfo: (id: number) => Promise<any>
}

const GemsDaoContext = React.createContext<Maybe<IGemsDaoContext>>(null)

export const GemsDaoProvider = ({ children = null as any }) => {
    const [currentChainId, setCurrentChainId] = useState(CHAIN_ITEMS[1])
    const [allNFTInfos, setAllNFTInfos] = useState<INFTINfo[]>([])
    const { account, library } = useEthers()
    const [currencyTokenInfo, setCurrencyTokenInfo] = useMemoizedState<ITokenInfo>(undefined)
    const { tokenCallback } = useTokenCallback()
    const [isLoadingAllNFTs, setIsLoadingAllNFTs] = useState(false)
    const { slowRefresh } = useRefresh()
    const [updatedTime, setUpdatedTime] = useState(0)
    const [queueAllNFTInfo, setQueueAllNFTInfo] = useState({ updatedTime: 0, data: undefined })
    const [mintedInfos, setMintedInfos] = useState<IUserMinted[]>([])

    const mintSingle = async function (id: BigNumber, amount: BigNumber, value: BigNumber) {
        if (!account || !library) return
        const nftContract: Contract = getContract(NFT_CAs[currentChainId], NFT_ABI, library as any, account ? account : undefined)
        return nftContract.estimateGas.mintSingle(id, amount, { value: isWrappedEther(currentChainId, currencyTokenInfo.address) ? value : BigNumber.from(0) }).then(estimatedGasLimit => {
            const gas = estimatedGasLimit
            return nftContract.mintSingle(id, amount, {
                gasLimit: calculateGasMargin(gas), value: isWrappedEther(currentChainId, currencyTokenInfo.address) ? value : BigNumber.from(0)
            }).then((response: TransactionResponse) => {
                return response.wait().then((res: any) => {
                    return { status: res.status, hash: response.hash }
                })
            })
        })
    }

    const mintBatch = async function (ids: BigNumber[], amounts: BigNumber[], value: BigNumber) {
        if (!account || !library) return
        const nftContract: Contract = getContract(NFT_CAs[currentChainId], NFT_ABI, library as any, account ? account : undefined)
        return nftContract.estimateGas.mintBatch(ids, amounts).then(estimatedGasLimit => {
            const gas = estimatedGasLimit
            return nftContract.mintBatch(ids, amounts, {
                gasLimit: calculateGasMargin(gas), value: isWrappedEther(currentChainId, currencyTokenInfo.address) ? value : BigNumber.from(0)
            }).then((response: TransactionResponse) => {
                return response.wait().then((res: any) => {
                    return { status: res.status, hash: response.hash }
                })
            })
        })
    }

    const fetchAllNFTInfo = async (nftContract: Contract) => {
        const res = await nftContract.getAllNFTInfo()
        return res
    }

    const fetchURI = async (nftContract: Contract, id: number) => {
        const res = await nftContract.uri(BigNumber.from(id))
        return res
    }

    const fetchNFTInfo = async (nftContract: Contract, id: number) => {
        const res = await nftContract.nftInfo(BigNumber.from(id))
        return res
    }

    const fetchBalanceOfNFT = async (nftContract: Contract, id: number) => {
        const res = await nftContract.balanceOf(account, BigNumber.from(id))
        return res
    }

    const getNFTINfoAndMetadata = async (nftInfo: any, uri: string) => {
        const url = getURL_FromIPFS_URI(uri)
        let metadata = await fetch(url).then((res) => res.json())
        const imgURL = getURL_FromIPFS_URI(metadata.image)
        metadata = { ...metadata, image: imgURL }
        const nft: INFTINfo = {
            id: Number(nftInfo.id),
            maxWallet: Number(nftInfo.maxWallet),
            maxSupply: Number(nftInfo.maxSupply),
            price: nftInfo.price,
            totalMinted: Number(nftInfo.totalMinted),
            metadata: metadata
        }

        return nft
    }

    useEffect(() => {
        if (queueAllNFTInfo.data) {
            if (queueAllNFTInfo.updatedTime === updatedTime) {
                setAllNFTInfos(queueAllNFTInfo.data)
                setIsLoadingAllNFTs(false)
            }
        }
    }, [queueAllNFTInfo])

    const updateAllNFTInfo = async () => {
        setIsLoadingAllNFTs(true)
        const chainId = currentChainId;
        const nftContract: Contract = getContract(NFT_CAs[currentChainId], NFT_ABI, RpcProviders[chainId], account ? account : undefined)
        const currencyTokenCA = await nftContract.currencyToken()
        let tokenInfo = await tokenCallback(currencyTokenCA, chainId)
        if (!tokenInfo) return
        if (isWrappedEther(chainId, tokenInfo.address)) tokenInfo = { ...tokenInfo, symbol: Native_Currencies[chainId].symbol, name: Native_Currencies[chainId].name }
        setCurrencyTokenInfo(tokenInfo)

        await fetchAllNFTInfo(nftContract).then(async result => {
            const nfts = result[0]
            const URIs = result[1]
            if (nfts.length > 0) {
                var nftInfo: INFTINfo[] = []
                await Promise.all(nfts.map(async (each: any, index: number) => {
                    try {
                        const nft = await getNFTINfoAndMetadata(each, URIs[index])
                        nftInfo.push(nft)
                    } catch (err) { }
                }))
                nftInfo.sort((a, b) => a.id - b.id)
                setQueueAllNFTInfo({ updatedTime: updatedTime, data: nftInfo })
            }
        }).catch(error => {
            console.log(error)
        })
    }

    const updateNFTInfo = async (id: number) => {
        if (isLoadingAllNFTs) return
        const chainId = currentChainId;
        const nftContract: Contract = getContract(NFT_CAs[currentChainId], NFT_ABI, RpcProviders[chainId], account ? account : undefined)
        try {
            const nftInfo = await fetchNFTInfo(nftContract, id)
            const uri = await fetchURI(nftContract, id)
            const nft = await getNFTINfoAndMetadata(nftInfo, uri)
            const index = allNFTInfos.findIndex(each => each.id === id)
            if (index >= 0) {
                let items = [...allNFTInfos]
                items[index] = { ...nft }
                setAllNFTInfos(items)
                setUpdatedTime((new Date()).getTime())
            }
        } catch (err) { }
    }

    const updateAllMintedInfo = async () => {
        const chainId = currentChainId;
        const nftContract: Contract = getContract(NFT_CAs[currentChainId], NFT_ABI, RpcProviders[chainId], account ? account : undefined)
        try {
            let minted: IUserMinted[] = []
            await Promise.all(allNFTInfos.map(async each => {
                try {
                    const res = await fetchBalanceOfNFT(nftContract, each.id)
                    minted.push({
                        id: each.id,
                        mintedAmount: Number(res)
                    })
                } catch (err) { }
            }))
            minted.sort((a, b) => a.id - b.id)
            setMintedInfos(minted)
        } catch (err) { }
    }

    const updateMintedInfo = async (id: number) => {
        const chainId = currentChainId;
        const nftContract: Contract = getContract(NFT_CAs[currentChainId], NFT_ABI, RpcProviders[chainId], account ? account : undefined)
        try {
            const res = await fetchBalanceOfNFT(nftContract, id)
            const index = allNFTInfos.findIndex(each => each.id === id)
            if (index >= 0) {
                let items = [...mintedInfos]
                items[index] = { id: id, mintedAmount: Number(res) }
                setMintedInfos(items)
            }
        } catch (err) { }
    }

    useEffect(() => {
        if (!isLoadingAllNFTs) updateAllNFTInfo()
    }, [slowRefresh])

    useEffect(() => {
        if (allNFTInfos.length > 0 && account) {
            updateAllMintedInfo()
        } else {
            setMintedInfos([])
        }
    }, [allNFTInfos, account])

    return (
        <GemsDaoContext.Provider
            value={{
                currentChainId,
                allNFTInfos,
                currencyTokenInfo,
                mintedInfos,
                mintSingle,
                mintBatch,
                updateAllNFTInfo,
                updateNFTInfo,
                updateMintedInfo
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

