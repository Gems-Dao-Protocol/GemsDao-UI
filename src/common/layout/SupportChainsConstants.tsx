import { ChainId } from "@usedapp/core"

export enum ChainItem {
    ETH,
    GOERLI,
    BSC_TESTNET
}

export const CHAIN_ITEMS = {
    [ChainItem.ETH]: ChainId.Mainnet,
    [ChainItem.GOERLI]: ChainId.Goerli,
    [ChainItem.BSC_TESTNET]: ChainId.BSCTestnet,
}