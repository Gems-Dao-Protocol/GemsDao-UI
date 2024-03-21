import '@app/styles/globals.css'
import "@app/styles/accordion.css"
import { AppProps } from "next/app"
import {
  BSC,
  BSCTestnet,
  Config,
  DAppProvider,
  Mainnet,
  Goerli,
  Avalanche,
  Cronos,
  Harmony,
  OasisEmerald,
  Andromeda,
  Optimism,
  Arbitrum,
  Aurora,
  Velas,
  Fantom,
  ChainId,
  Polygon
} from "@usedapp/core"
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react"
import createCache from "@emotion/cache"
import theme from "@app/theme/theme"
import Layout from '@app/common/layout/Layout'
import { CssBaseline } from '@mui/material'
import { Rpc_URLS } from '@app/constants/AppConstants'
import { RefreshContextProvider, GemsDaoProvider } from "@app/contexts"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

interface WolfAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: any;
}

const clientSideEmotionCache = createEmotionCache();
// mainet
const config: Config = {
  // readOnlyChainId: BSC.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: Rpc_URLS[ChainId.Mainnet] ?? '',
    [Goerli.chainId]: Rpc_URLS[ChainId.Goerli] ?? '',
    [BSC.chainId]: Rpc_URLS[ChainId.BSC] ?? '',
    [BSCTestnet.chainId]: Rpc_URLS[ChainId.BSCTestnet] ?? '',
    [Polygon.chainId]: Rpc_URLS[ChainId.Polygon] ?? '',
    [Avalanche.chainId]: Rpc_URLS[ChainId.Avalanche] ?? '',
    [Cronos.chainId]: Rpc_URLS[ChainId.Cronos] ?? '',
    [Harmony.chainId]: Rpc_URLS[ChainId.Harmony] ?? '',
    [OasisEmerald.chainId]: Rpc_URLS[ChainId.OasisEmerald] ?? '',
    [Andromeda.chainId]: Rpc_URLS[ChainId.Andromeda] ?? '',
    [Optimism.chainId]: Rpc_URLS[ChainId.Optimism] ?? '',
    [Arbitrum.chainId]: Rpc_URLS[ChainId.Arbitrum] ?? '',
    [Aurora.chainId]: Rpc_URLS[ChainId.Aurora] ?? '',
    [Velas.chainId]: Rpc_URLS[ChainId.Velas] ?? '',
    [Fantom.chainId]: Rpc_URLS[ChainId.Fantom] ?? ''
  },
  // networks: [BSC, Mainnet, BSCTestnet],
  autoConnect: false
};

function createEmotionCache() {
  return createCache({ key: "css" });
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: WolfAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <DAppProvider config={config}>
        <ThemeProvider theme={theme}>
          <RefreshContextProvider>
            <GemsDaoProvider>
              <CssBaseline />
              <Layout variant={Component.variant}>
                <Component {...pageProps} />
              </Layout>
              <ToastContainer />
            </GemsDaoProvider>
          </RefreshContextProvider>
        </ThemeProvider>
      </DAppProvider>
    </CacheProvider>
  )
}

export default MyApp

