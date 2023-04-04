import { ChainId } from "@usedapp/core"

export enum ChainItem {
    ETH,
    GOERLI
}

export const CHAIN_ITEMS = {
    [ChainItem.ETH]: ChainId.Mainnet,
    [ChainItem.GOERLI]: ChainId.Goerli
}