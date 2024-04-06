import { useMemo } from "react";
import Head from "next/head";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  CoinbaseWalletAdapter,
  LedgerWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { Toaster } from "react-hot-toast";

import { env } from "~/env.js";
import SEO from "./seo";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const network = WalletAdapterNetwork.Mainnet;

  const wallets = useMemo(
    () => [
      new CoinbaseWalletAdapter(),
      new LedgerWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network],
  );

  return (
    <>
      <Head>
        <title>Gems Dao</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SEO />
      <Toaster />
      <ConnectionProvider endpoint={env.NEXT_PUBLIC_RPC_ID}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <div className="relative min-h-screen bg-black">
              <Header />
              <main className="mx-auto max-w-7xl px-4">{children}</main>
              <Footer />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};
