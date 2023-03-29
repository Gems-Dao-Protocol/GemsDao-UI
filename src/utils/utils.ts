import { JsonRpcSigner, Web3Provider, JsonRpcProvider, FallbackProvider } from '@ethersproject/providers'

import { AddressZero } from '@ethersproject/constants'
import { BigNumber, ethers, utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { formatUnits, parseUnits } from '@ethersproject/units'
import { getAddress } from '@ethersproject/address'
import { BlockExplorer_URLS, Native_Currencies, Wrapped_Ethers } from '@app/constants/AppConstants'

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
    if (value) {
        try {
            return getAddress(value)
        } catch (e) {
            return false
        }
    }
    return false
}

export function getEtherscanLink(
    chainId: number,
    data: string,
    type: 'transaction' | 'token' | 'address' | 'block'
): string {
    let prefix = `https://etherscan.io`
    if (BlockExplorer_URLS[chainId]) {
        prefix = BlockExplorer_URLS[chainId]
    }
    switch (type) {
        case 'transaction': {
            return `${prefix}/tx/${data}`
        }
        case 'token': {
            return `${prefix}/token/${data}`
        }
        case 'block': {
            return `${prefix}/block/${data}`
        }
        case 'address':
        default: {
            return `${prefix}/address/${data}`
        }
    }
}

export function calculateGasMargin(value: BigNumber): BigNumber {
    return value.mul(BigNumber.from(10000).add(BigNumber.from(2000))).div(BigNumber.from(10000))
    // return value.mul(BigNumber.from(2))    
}

export function calculateGasMarginForMaxTxTicked(value: BigNumber): BigNumber {
    return value.mul(BigNumber.from(10000).add(BigNumber.from(5000))).div(BigNumber.from(10000))
    // return value.mul(BigNumber.from(2))
}

export function shortenAddress(address: string, chars = 4): string {
    const parsed = isAddress(address)
    if (!parsed) {
        throw Error(`Invalid 'address' parameter '${address}'.`)
    }
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
}

export function getSigner(library: JsonRpcProvider | FallbackProvider, account: string): JsonRpcSigner {
    return (library as Web3Provider).getSigner(account).connectUnchecked()
}

export function getProviderOrSigner(library: JsonRpcProvider | FallbackProvider, account?: string): JsonRpcProvider | FallbackProvider | JsonRpcSigner {
    return account ? getSigner(library, account) : library
}

export function getContract(address: string, ABI: any, library: JsonRpcProvider | FallbackProvider, account?: string): Contract {
    if (!isAddress(address) || address === AddressZero) {
        throw Error(`Invalid 'address' parameter '${address}'.`)
    }

    return new Contract(address, ABI, getProviderOrSigner(library, account) as any)
}

export const wait = (time: number) =>
    new Promise(resolve => {
        setTimeout(resolve, time * 1000)
    })

export const formatEther = (amount: BigNumber, decimals: number = 18, toFixed: number, groupSeparator: boolean): string => {
    let res
    if (toFixed >= decimals) {
        res = ethers.FixedNumber.fromString(utils.formatUnits(amount, decimals)).toString()
    } else {
        let fixed = ethers.FixedNumber.fromString(utils.formatUnits(BigNumber.from(10).pow(toFixed), 0))
        res = ethers.FixedNumber.fromString(utils.formatUnits(amount, decimals - toFixed)).floor().divUnsafe(fixed).toString()
    }
    if (res.substring(res.length - 2, res.length) === '.0') {
        res = res.substring(0, res.length - 2)
    }
    if (groupSeparator) {
        res = utils.commify(res)
    }

    return res
}

export const parseEther = (n: string, decimals: number = 18): BigNumber => {
    return utils.parseUnits(n, decimals)
}

export const getNativeSymbol = (chainId: number): string => {
    let symbol = 'BNB'
    if (Native_Currencies[chainId]) {
        return Native_Currencies[chainId].symbol
    }
    return symbol
}

export const isWrappedEther = (chainId: number, address: string) => {
    if (address) {
        if (Wrapped_Ethers[chainId]) {
            if (Wrapped_Ethers[chainId].address.toLowerCase() === address.toLowerCase()) return true
        }
    }
    return false
}

export const getFixedDecimals = (p: number, precisions: number): number => {
    for (let i = 0; i >= -18; i--) {
        if (p >= Math.pow(10, i)) {
            return Math.abs(i) + precisions
        }
    }
    return 0
}

export const decodeTxErrorMessage = (err: any) => {
    let message = ""
    if (err) {
        if (err.code) {
            if (err.code === "ACTION_REJECTED") return "ACTION_REJECTED"
        }
        let index = err?.message.indexOf("execution reverted:")
        if (index >= 0) {
            try {
                message = err.error.data.message
            } catch (error) { }
            if (message) {
                if (message.length > 0) return message
            }
        }
        if (err.reason) {
            return err.reason.toString()
        }
        try {
            message = (err.data?.message || err?.message || err).toString()
        } catch (error) { }
    }
    return message
}

export const floatToFixedNumber = (n: string) => {
    if (Math.floor(Number(n)) === Number(n)) return Number(n).toString()
    let index = n.length
    for (let i = n.length - 1; i >= 0; i--) {
        if (n.substring(i, i + 1) !== '0') {
            index = i
            break;
        }
    }
    return n.substring(0, index + 1)
}

export const formatEther_Optimized = (amount: BigNumber, decimals: number = 18, toFixed: number, groupSeparator: boolean) => {
    if (amount.gte(parseUnits('1', decimals))) { // >=1 
        return formatEther(amount, decimals, toFixed, groupSeparator)
    } else { // < 1 
        let num = Number(formatUnits(amount, decimals))
        let strFixedNum = floatToFixedNumber(num.toFixed(getFixedDecimals(num, toFixed)))
        if (groupSeparator) {
            return Number(strFixedNum).toLocaleString(undefined, { maximumFractionDigits: getFixedDecimals(num, toFixed) + 1 })
        } else {
            return strFixedNum
        }
    }
}

export const formatFixedNumber_Optimized = (amount: number, toFixed: number, groupSeparator: boolean) => {
    let strFixedNum = floatToFixedNumber(amount.toFixed(getFixedDecimals(amount, toFixed)))
    if (groupSeparator) {
        return Number(strFixedNum).toLocaleString(undefined, { maximumFractionDigits: getFixedDecimals(amount, toFixed) + 1 })
    } else {
        return strFixedNum
    }
}

export const getBigNumberFromInputString = (val: string, decimals: number) => {
    let amount = BigNumber.from(0)
    if (val.length > 0) {
        if (val.substring(val.indexOf('.') + 1).length <= 0) amount = parseUnits(val.substring(0, val.indexOf('.')), decimals)
        else amount = parseUnits(val, decimals)
    }
    return amount
}

export const reqOptionsAuthorized = (userToken: string, contentType: string = 'application/json', method = 'get', data = {}) => {
    return {
        headers: new Headers({
            'Content-Type': contentType,
            'Authorization': 'Bearer ' + userToken
        }),
        method: method,
        body: method.toLowerCase() === 'get' ? null : JSON.stringify(data)
    }
}

export const getSwapAmountInMax = (amountIn: BigNumber, slip: number) => { //slippage is %    
    const slippage = Math.round(slip * 100)
    return amountIn.add(amountIn.mul(BigNumber.from(slippage)).div(BigNumber.from(10000)))
}

export const getSwapAmountOutMin = (amountOut: BigNumber, slip: number) => { //slippage is %        
    let slippage = Math.round((100 - slip) * 100)
    if (slippage < 0) slippage = 0
    return amountOut.mul(BigNumber.from(slippage)).div(BigNumber.from(10000))
}
