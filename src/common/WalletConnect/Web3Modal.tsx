import React, { useEffect, useState } from 'react'
import { useEthers, shortenAddress, useLookupAddress, ChainId } from '@usedapp/core'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { BlockExplorer_URLS, CHAIN_ID_NAME_MAP, Rpc_URLS, Native_Currencies } from '@app/constants/AppConstants'
import { useGemsDao } from '@app/contexts'

const providerOptions = {
  injected: {
    display: {
      name: 'Metamask',
      description: 'Connect with the provider in your Browser',
    },
    package: null,
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        [ChainId.Mainnet]: Rpc_URLS[ChainId.Mainnet],
        [ChainId.BSC]: Rpc_URLS[ChainId.BSC],
        [ChainId.Polygon]: Rpc_URLS[ChainId.Polygon],
        [ChainId.Avalanche]: Rpc_URLS[ChainId.Avalanche],
        [ChainId.Cronos]: Rpc_URLS[ChainId.Cronos],
        [ChainId.Moonbeam]: Rpc_URLS[ChainId.Moonbeam],
        [ChainId.Harmony]: Rpc_URLS[ChainId.Harmony],
        [ChainId.OasisEmerald]: Rpc_URLS[ChainId.OasisEmerald],
        [ChainId.Andromeda]: Rpc_URLS[ChainId.Andromeda],
        [ChainId.Optimism]: Rpc_URLS[ChainId.Optimism],
        [ChainId.Arbitrum]: Rpc_URLS[ChainId.Arbitrum],
        [ChainId.Aurora]: Rpc_URLS[ChainId.Aurora],
        [ChainId.Velas]: Rpc_URLS[ChainId.Velas],
        [ChainId.Fantom]: Rpc_URLS[ChainId.Fantom]
      },
      bridge: 'https://bridge.walletconnect.org',
    },
  },
}

export const Web3ModalButton = () => {
  const { account, chainId, connector, activate, deactivate } = useEthers()
  const [activateError, setActivateError] = useState('')
  const { currentChainId } = useGemsDao()
  const { error } = useEthers()
  const [provider, setProvider] = useState(null)

  useEffect(() => {
    if (error) {
      setActivateError(error.message)
    }
  }, [error])

  useEffect(() => {
    if (account) {
      if (currentChainId !== chainId) {
        switchNetwork()
      }
    }
  }, [chainId, provider, account, currentChainId])

  const switchNetwork = async () => {
    if (provider) {
      const hexChainId = '0x' + currentChainId.toString(16)
      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: hexChainId }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await provider.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: hexChainId,
                  chainName: CHAIN_ID_NAME_MAP[currentChainId ?? 25],
                  nativeCurrency: Native_Currencies[currentChainId ?? 25],
                  rpcUrls: [Rpc_URLS[currentChainId ?? 25]],
                  blockExplorerUrls: [BlockExplorer_URLS[currentChainId ?? 25]],
                },
              ],
            });
            return
          } catch (addError) {

          }
        }

        deactivate()
        if (connector) {
          (connector as any)?.deactivate()
        }
      }
    }
  }

  const activateProvider = async () => {
    const web3Modal = new Web3Modal({
      providerOptions,
      theme: "dark"
    })
    try {
      const provider = await web3Modal.connect()
      setProvider(provider)
      await activate(provider)
      setActivateError('')
    } catch (error: any) {
      setActivateError(error.message)
    }
  }

  return activateProvider;
}