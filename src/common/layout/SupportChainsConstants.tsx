import { ChainId } from "@usedapp/core"

export enum ChainItem {
    // ETH
    BSC_TESTNET
}

export const CHAIN_ITEMS = {
    // [ChainItem.ETH]: ChainId.Mainnet
    [ChainItem.BSC_TESTNET]: ChainId.BSCTestnet,
}