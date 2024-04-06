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
  PhantomWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { Toaster } from "react-hot-toast";

import { env } from "~/env.js";
import SEO from "./seo";
import { AppHeader } from "./app-header";
import { cn } from "~/utils/cn";

export const AppLayout = ({
  children,
  removePadding,
}: {
  children: React.ReactNode;
  removePadding?: boolean;
}) => {
  const network = WalletAdapterNetwork.Mainnet;

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
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
      <ConnectionProvider endpoint={env.NEXT_PUBLIC_QUICKNODE_API_URL}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <div className="min-h-screen">
              <AppHeader />
              <main
                className={cn(
                  removePadding ? "p-0" : "mx-auto max-w-7xl px-4",
                  "relative",
                )}
              >
                {children}
              </main>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};
