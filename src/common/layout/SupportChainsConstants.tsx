import { ChainId } from "@usedapp/core"

export enum ChainItem {
    ETH,
    GOERLI,
    BSCTESTNET
}

export const CHAIN_ITEMS = {
    [ChainItem.ETH]: ChainId.Mainnet,
    [ChainItem.GOERLI]: ChainId.Goerli,
    [ChainItem.BSCTESTNET]: ChainId.BSCTestnet
}