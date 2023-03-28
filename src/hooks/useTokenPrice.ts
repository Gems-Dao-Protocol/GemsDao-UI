import { BigNumber } from "@ethersproject/bignumber"
import { Contract } from "@ethersproject/contracts"
import { formatUnits, parseUnits } from "@ethersproject/units"
import RouterAbi from "@app/constants/contracts/abis/uniswapRouterV2.json"
import FactoryAbi from "@app/constants/contracts/abis/uniswapFactory.json"
import {
  UniswapRouterV2_Addresses,
  RpcProviders,
  Wrapped_Ethers,
  UniswapFactory_Addresses,
} from "@app/constants/AppConstants"
import { useEthers } from "@usedapp/core"
import { getContract, isWrappedEther } from "@app/utils/utils"
import PairTokens from '@app/constants/PairTokens'
import { AddressZero } from '@ethersproject/constants'

interface GetPriceOptions {
  chainId: number
  tokenAddress: string
  decimals: number
}

interface GetPriceResult {
  updatedAt: Date,
  price: string
}

export function useTokenPrice(): {
  getTokenPrice: ({
    chainId,
    tokenAddress,
    decimals
  }: GetPriceOptions) => Promise<GetPriceResult>
} {
  const { account } = useEthers()

  const getTokenPrice = async ({
    chainId,
    tokenAddress,
    decimals
  }: GetPriceOptions) => {
    const stableTokens = PairTokens.filter((item: any) => item.chainId === chainId)

    const index = stableTokens.findIndex((item: any) => item.address.toLowerCase() === tokenAddress.toLowerCase())

    if (index >= 0) {
      return {
        updatedAt: new Date(),
        price: "1"
      }
    } else {
      try {
        const routerV2Contract: Contract = getContract(UniswapRouterV2_Addresses[chainId], RouterAbi, RpcProviders[chainId], account ? account : undefined)

        if (isWrappedEther(chainId, tokenAddress)) {
          const amountOut = await routerV2Contract.getAmountsOut(parseUnits("1", decimals ?? 18), [
            tokenAddress,
            stableTokens[0].address
          ])

          return {
            updatedAt: new Date(),
            price: formatUnits(BigNumber.from(amountOut[1]), stableTokens[0].decimals),
          }
        } else {
          const factoryContract: Contract = getContract(UniswapFactory_Addresses[chainId], FactoryAbi, RpcProviders[chainId], account ? account : undefined)

          try {
            const pairAddress = await factoryContract.getPair(Wrapped_Ethers[chainId].address, tokenAddress)
            if (pairAddress != AddressZero) { //has eth pair
              const amountOut = await routerV2Contract.getAmountsOut(parseUnits("1", decimals ?? 18), [
                tokenAddress,
                Wrapped_Ethers[chainId].address,
              ])

              var precision = 1
              if (BigNumber.from(amountOut[1]).lt(parseUnits("1", decimals ?? 14))) precision = 10000
              const usdtAmountOut = await routerV2Contract.getAmountsOut(
                BigNumber.from(amountOut[1]).mul(10000).div(9975).mul(BigNumber.from(precision)),
                [Wrapped_Ethers[chainId].address, stableTokens[0].address]
              )

              return {
                updatedAt: new Date(),
                price: (Number(formatUnits(BigNumber.from(usdtAmountOut[1]).mul(10000).div(9975), stableTokens[0].decimals)) / precision).toString(),
              }
            } else {
              for (let i = 0; i < stableTokens.length; i++) {
                const pairAddress = await factoryContract.getPair(stableTokens[i].address, tokenAddress)
                if (pairAddress != AddressZero) { //has this coin pair
                  let amountOut = await routerV2Contract.getAmountsOut(parseUnits("1", decimals ?? 18), [
                    tokenAddress,
                    stableTokens[i].address,
                  ])

                  var precision = 1

                  if (BigNumber.from(amountOut[1]).eq(0)) precision = 10000

                  amountOut = await routerV2Contract.getAmountsOut(parseUnits(precision.toString(), decimals ?? 18), [
                    tokenAddress,
                    stableTokens[i].address,
                  ])

                  return {
                    updatedAt: new Date(),
                    price: (Number(formatUnits(BigNumber.from(amountOut[1]), stableTokens[i].decimals)) / precision).toString(),
                  }
                }
              }
            }
          } catch (e) {
            console.log(e)
          }
        }
        return {
          updatedAt: new Date(),
          price: "0"
        }
      } catch (error) {
        console.log(error)
        return {
          updatedAt: new Date(),
          price: "0"
        }
      }
    }
  }
  return { getTokenPrice }
}

