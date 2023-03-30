import { CHAIN_ITEMS } from '@app/common/layout/SupportChainsConstants'
import { calculateGasMargin, getContract, getURL_FromIPFS_URI } from '@app/utils/utils'
import { useEthers } from '@usedapp/core'
import { BigNumber, Contract } from 'ethers'
import React, { useContext, useEffect, useState } from 'react'
import NFT_ABI from '@app/constants/contracts/abis/nft.json'
import { TransactionResponse } from '@ethersproject/providers'
import { NFT_CAs, RpcProviders } from '@app/constants/AppConstants'
import { useTokenCallback } from '@app/hooks/hooks'
import useRefresh from '@app/hooks/useRefresh'
import useMemoizedState from '@app/hooks/useMemorizedState'

declare type Maybe<T> = T | null | undefined

export interface INFTINfo {
    id: number
    maxWallet: BigNumber
    maxSupply: BigNumber
    price: BigNumber
    totalMinted: number
    metadata: any
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
    mintSingle: (id: BigNumber, amount: BigNumber) => Promise<any>
    mintBatch: (ids: BigNumber[], amounts: BigNumber[]) => Promise<any>
    updateAllNFTInfo: () => Promise<any>
    updateNFTInfo: (id: number) => Promise<any>
}

const GemsDaoContext = React.createContext<Maybe<IGemsDaoContext>>(null)

export const GemsDaoProvider = ({ children = null as any }) => {
    const [currentChainId, setCurrentChainId] = useState(CHAIN_ITEMS[0])
    const [allNFTInfos, setAllNFTInfos] = useState<INFTINfo[]>([])
    const { account, library } = useEthers()
    const [currencyTokenInfo, setCurrencyTokenInfo] = useMemoizedState<ITokenInfo>(undefined)
    const { tokenCallback } = useTokenCallback()
    const [isLoadingAllNFTs, setIsLoadingAllNFTs] = useState(false)
    const { slowRefresh } = useRefresh()
    const [updatedTime, setUpdatedTime] = useState(0)
    const [queueAllNFTInfo, setQueueAllNFTInfo] = useState({ updatedTime: 0, data: undefined })

    const mintSingle = async function (id: BigNumber, amount: BigNumber) {
        if (!account || !library) return
        const nftContract: Contract = getContract(NFT_CAs[currentChainId], NFT_ABI, library as any, account ? account : undefined)
        return nftContract.estimateGas.mintSingle(id, amount).then(estimatedGasLimit => {
            const gas = estimatedGasLimit
            return nftContract.mintSingle(id, amount, {
                gasLimit: calculateGasMargin(gas)
            }).then((response: TransactionResponse) => {
                return response.wait().then((res: any) => {
                    return { status: res.status, hash: response.hash }
                })
            })
        })
    }

    const mintBatch = async function (ids: BigNumber[], amounts: BigNumber[]) {
        if (!account || !library) return
        const nftContract: Contract = getContract(NFT_CAs[currentChainId], NFT_ABI, library as any, account ? account : undefined)
        return nftContract.estimateGas.mintBatch(ids, amounts).then(estimatedGasLimit => {
            const gas = estimatedGasLimit
            return nftContract.mintBatch(ids, amounts, {
                gasLimit: calculateGasMargin(gas)
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

    const getNFTINfoAndMetadata = async (nftInfo: any, uri: string) => {
        let metadata = await fetch(uri).then((res) => res.json())
        const imgURL = getURL_FromIPFS_URI(metadata.image)
        metadata = { ...metadata, image: imgURL }
        const nft: INFTINfo = {
            id: Number(nftInfo.id),
            maxWallet: nftInfo.maxWallet,
            maxSupply: nftInfo.maxSupply,
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
        const tokenInfo = await tokenCallback(currencyTokenCA, chainId)
        if (!tokenInfo) return

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

    useEffect(() => {
        if (!isLoadingAllNFTs) updateAllNFTInfo()
    }, [slowRefresh])

    return (
        <GemsDaoContext.Provider
            value={{
                currentChainId,
                allNFTInfos,
                currencyTokenInfo,
                mintSingle,
                mintBatch,
                updateAllNFTInfo,
                updateNFTInfo
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

