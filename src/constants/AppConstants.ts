import { ChainId } from "@usedapp/core"
import { ethers } from "ethers"
import { JsonRpcProvider } from "@ethersproject/providers"

export const CORS = "cors"

export const DEAD_ADDRESS = "0x000000000000000000000000000000000000dead"
export const BNBTokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"

export const HTTP_METHODS: {
    [key: string]: "GET" | "POST" | "PUT" | "DELETE"
} = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
}

export const NFT_CAs: { [chainId in ChainId]?: any } = {
    [ChainId.Mainnet]: '',
    [ChainId.Goerli]: '0x6f3ccE2e1D52276B1372Ff90899D949E5fFEa02E',
    [ChainId.BSC]: '',
    [ChainId.BSCTestnet]: '0x52f0f3cf46A3042876C9023B153Db0105bA31032',
    [ChainId.Cronos]: '',
    [ChainId.Arbitrum]: ''
}

export const UniswapRouterV2_Addresses: { [chainId in ChainId]?: any } = {
    [ChainId.Mainnet]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    [ChainId.Goerli]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    [ChainId.BSC]: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    [ChainId.BSCTestnet]: '0xD99D1c33F9fC3444f8101754aBC46c52416550D1',
    [ChainId.Cronos]: '0x145677FC4d9b8F19B5D56d1820c48e0443049a30',
    [ChainId.Arbitrum]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'
}

export const UniswapFactory_Addresses: { [chainId in ChainId]?: any } = {
    [ChainId.Mainnet]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    [ChainId.Goerli]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    [ChainId.BSC]: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
    [ChainId.BSCTestnet]: '0x6725F303b657a9451d8BA641348b6761A6CC7a17',
    [ChainId.Cronos]: '0xd590cC180601AEcD6eeADD9B7f2B7611519544f4',
    [ChainId.Arbitrum]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
}

export const CHAIN_ID_NAME_MAP: { [key: ChainId | number]: string } = {
    [ChainId.Mainnet]: 'Ethereum',
    [ChainId.Goerli]: 'Goerli Testnet',
    [ChainId.BSC]: 'BNB Smart Chain',
    [ChainId.BSCTestnet]: 'BNB Smart Chain Testnet',
    [ChainId.Polygon]: 'Polygon',
    [ChainId.Avalanche]: 'Avalanche',
    [ChainId.Cronos]: 'Cronos',
    [ChainId.Moonbeam]: 'Moonbeam',
    [ChainId.Harmony]: 'Harmony',
    [ChainId.OasisEmerald]: 'Oasis Emerald',
    [ChainId.Andromeda]: 'Metis Andromeda',
    [ChainId.Optimism]: 'Optimism',
    [ChainId.Arbitrum]: 'Arbitrum',
    [ChainId.Aurora]: 'Aurora',
    [ChainId.Velas]: 'Velas EVM',
    [ChainId.Fantom]: 'Fantom Opera'
}

export const Rpc_URLS: { [chainId in ChainId]?: string } = {
    [ChainId.Mainnet]: 'https://ethereum.publicnode.com',
    [ChainId.Goerli]: 'https://eth-goerli.public.blastapi.io',
    [ChainId.BSC]: 'https://bsc.nodereal.io',
    [ChainId.BSCTestnet]: 'https://data-seed-prebsc-1-s3.binance.org:8545',
    [ChainId.Polygon]: 'https://polygon-rpc.com',
    [ChainId.Avalanche]: 'https://api.avax.network/ext/bc/C/rpc',
    [ChainId.Cronos]: 'https://evm.cronos.org',
    [ChainId.Moonbeam]: 'https://rpc.api.moonbeam.network',
    [ChainId.Harmony]: 'https://api.harmony.one',
    [ChainId.OasisEmerald]: 'https://emerald.oasis.dev',
    [ChainId.Andromeda]: 'https://andromeda.metis.io/?owner=1088',
    [ChainId.Optimism]: 'https://mainnet.optimism.io',
    [ChainId.Arbitrum]: 'https://arb1.arbitrum.io/rpc',
    [ChainId.Aurora]: 'https://mainnet.aurora.dev',
    [ChainId.Velas]: 'https://evmexplorer.velas.com/rpc',
    [ChainId.Fantom]: 'https://rpc.ftm.tools'
}

export const Wrapped_Ethers: { [chainId in ChainId]?: any } = {
    [ChainId.Mainnet]: { address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', name: 'Wrapped Ether', symbol: 'WETH', decimals: 18 },
    [ChainId.Goerli]: { address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', name: 'Wrapped Ether', symbol: 'WETH', decimals: 18 },
    [ChainId.BSC]: { address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', name: 'Wrapped BNB', symbol: 'WBNB', decimals: 18 },
    [ChainId.BSCTestnet]: { address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', name: 'Wrapped BNB', symbol: 'WBNB', decimals: 18 },
    [ChainId.Polygon]: { address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', name: 'Wrapped Matic', symbol: 'WMATIC', decimals: 18 },
    [ChainId.Avalanche]: { address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', name: 'Wrapped AVAX', symbol: 'WAVAX', decimals: 18 },
    [ChainId.Cronos]: { address: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23', name: 'Wrapped CRO', symbol: 'WCRO', decimals: 18 },
    [ChainId.Moonbeam]: { address: '0xAcc15dC74880C9944775448304B263D191c6077F', name: 'Wrapped GLMR', symbol: 'WGLMR', decimals: 18 },
    [ChainId.Harmony]: { address: '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a', name: 'Wrapped One', symbol: 'WONE', decimals: 18 },
    [ChainId.OasisEmerald]: { address: '0x21C718C22D52d0F3a789b752D4c2fD5908a8A733', name: 'Wrapped ROSE', symbol: 'WROSE', decimals: 18 },
    [ChainId.Andromeda]: { address: '0x75cb093E4D61d2A2e65D8e0BBb01DE8d89b53481', name: 'Wrapped METIS', symbol: 'WMETIS', decimals: 18 },
    [ChainId.Optimism]: { address: '0x4200000000000000000000000000000000000006', name: 'Wrapped Ether', symbol: 'WETH', decimals: 18 },
    [ChainId.Arbitrum]: { address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', name: 'Wrapped Ether', symbol: 'WETH', decimals: 18 },
    [ChainId.Aurora]: { address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', name: 'Wrapped Ether', symbol: 'WETH', decimals: 18 },
    [ChainId.Velas]: { address: '0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126', name: 'Wrapped VLX', symbol: 'WVLX', decimals: 18 },
    [ChainId.Fantom]: { address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', name: 'Wrapped Fantom', symbol: 'WFTM', decimals: 18 }
}

export const Native_Currencies: { [chainId in ChainId]?: any } = {
    [ChainId.Mainnet]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    [ChainId.Goerli]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    [ChainId.BSC]: { name: 'BNB', symbol: 'BNB', decimals: 18 },
    [ChainId.BSCTestnet]: { name: 'BNB', symbol: 'BNB', decimals: 18 },
    [ChainId.Polygon]: { name: 'Matic', symbol: 'MATIC', decimals: 18 },
    [ChainId.Avalanche]: { name: 'AVAX', symbol: 'AVAX', decimals: 18 },
    [ChainId.Cronos]: { name: 'CRO', symbol: 'CRO', decimals: 18 },
    [ChainId.Moonbeam]: { name: 'GLMR', symbol: 'GLMR', decimals: 18 },
    [ChainId.Harmony]: { name: 'One', symbol: 'ONE', decimals: 18 },
    [ChainId.OasisEmerald]: { name: 'ROSE', symbol: 'ROSE', decimals: 18 },
    [ChainId.Andromeda]: { name: 'METIS', symbol: 'METIS', decimals: 18 },
    [ChainId.Optimism]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    [ChainId.Arbitrum]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    [ChainId.Aurora]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    [ChainId.Velas]: { name: 'VLX', symbol: 'VLX', decimals: 18 },
    [ChainId.Fantom]: { name: 'Fantom', symbol: 'FTM', decimals: 18 }
}

export const BlockExplorer_URLS: { [chainId in ChainId]?: string } = {
    [ChainId.Mainnet]: 'https://etherscan.io',
    [ChainId.Goerli]: 'https://goerli.etherscan.io/',
    [ChainId.BSC]: 'https://bscscan.com',
    [ChainId.BSCTestnet]: 'https://testnet.bscscan.com',
    [ChainId.Polygon]: 'https://polygonscan.com',
    [ChainId.Avalanche]: 'https://snowtrace.io',
    [ChainId.Cronos]: 'https://cronoscan.com',
    [ChainId.Moonbeam]: 'https://moonbeam.moonscan.io',
    [ChainId.Harmony]: 'https://explorer.harmony.one',
    [ChainId.OasisEmerald]: 'https://explorer.emerald.oasis.dev',
    [ChainId.Andromeda]: 'https://andromeda-explorer.metis.io',
    [ChainId.Optimism]: 'https://optimistic.etherscan.io',
    [ChainId.Arbitrum]: 'https://arbiscan.io',
    [ChainId.Aurora]: 'https://aurorascan.dev',
    [ChainId.Velas]: 'https://evmexplorer.velas.com',
    [ChainId.Fantom]: 'https://ftmscan.com'
}

export const RpcProviders: { [chainId in ChainId]?: JsonRpcProvider } = {
    [ChainId.Mainnet]: new ethers.providers.JsonRpcProvider(Rpc_URLS[ChainId.Mainnet]),
    [ChainId.Goerli]: new ethers.providers.JsonRpcProvider(Rpc_URLS[ChainId.Goerli]),
    [ChainId.BSC]: new ethers.providers.JsonRpcProvider(Rpc_URLS[ChainId.BSC]),
    [ChainId.BSCTestnet]: new ethers.providers.JsonRpcProvider(Rpc_URLS[ChainId.BSCTestnet]),
    [ChainId.Polygon]: new ethers.providers.JsonRpcProvider(Rpc_URLS[ChainId.Polygon]),
    [ChainId.Avalanche]: new ethers.providers.JsonRpcProvider(Rpc_URLS[ChainId.Avalanche]),
    [ChainId.Cronos]: new ethers.providers.JsonRpcProvider(Rpc_URLS[ChainId.Cronos]),
    [ChainId.Moonbeam]: new ethers.providers.JsonRpcProvider(Rpc_URLS[ChainId.Moonbeam]),
    [ChainId.Harmony]: new ethers.providers.JsonRpcProvider(Rpc_URLS[ChainId.Harmony]),
    [ChainId.OasisEmerald]: new ethers.providers.JsonRpcProvider(Rpc_URLS[ChainId.OasisEmerald]),
    [ChainId.Andromeda]: new ethers.providers.JsonRpcProvider(Rpc_URLS[ChainId.Andromeda]),
    [ChainId.Optimism]: new ethers.providers.JsonRpcProvider(Rpc_URLS[ChainId.Optimism]),
    [ChainId.Arbitrum]: new ethers.providers.JsonRpcProvider(Rpc_URLS[ChainId.Arbitrum]),
    [ChainId.Aurora]: new ethers.providers.JsonRpcProvider(Rpc_URLS[ChainId.Aurora]),
    [ChainId.Velas]: new ethers.providers.JsonRpcProvider(Rpc_URLS[ChainId.Velas]),
    [ChainId.Fantom]: new ethers.providers.JsonRpcProvider(Rpc_URLS[ChainId.Fantom]),
}
