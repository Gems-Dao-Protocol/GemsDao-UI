import { useState } from "react";
import { AppLayout } from "~/components/app-layout";
import { BackgroundRings } from "~/components/home-background-rings";
import { type CoinT, type BridgeT } from "~/utils/types";
import {
  BridgeCoinsWrapper,
  BridgeCoinsHeader,
  BridgeCoinsBody,
} from "~/components/bridge/bridge-coin";
import { tempCoinData, tempTetherData } from "~/utils/helpers";
import dynamic from "next/dynamic";
import { WormholeConnectConfig } from "@wormhole-foundation/wormhole-connect";

const config: WormholeConnectConfig = {
  networks: ["base", "solana", "bsc", "ethereum"],
  env: "mainnet",
  rpcs: {
    solana:
      "https://white-dimensional-mountain.solana-mainnet.quiknode.pro/ca3ff3a02631270bd5167a8f4a161e93392cfb34/",
    base: "https://damp-restless-wildflower.base-mainnet.quiknode.pro/42c10524b2c2f7076717998b34ab04735324b83b/",
    bsc: "https://wispy-distinguished-forest.bsc.quiknode.pro/619e9df6153622ffcfbf065a64c5ba17fc77cc67/",
    ethereum:
      "https://warmhearted-flashy-dew.quiknode.pro/c2e32dffcb415fbfa04073ffca306b2374458d2b/",
  },
};

const theme = {
  background: {
    default: "#212b4a",
  },
};

const WormholeConnect = dynamic(
  () => import("@wormhole-foundation/wormhole-connect"),
  { ssr: false },
);

export default function Bridge() {
  const [coin, setCoin] = useState<CoinT | undefined>(tempCoinData[0] as CoinT);
  const [bridgeFrom, setBridgeFrom] = useState<BridgeT | undefined>(
    tempTetherData[0],
  );
  const [bridgeTo, setBridgeTo] = useState<BridgeT | undefined>(
    tempTetherData[1],
  );

  return (
    <AppLayout>
      <BackgroundRings className="top-9" />
      <div className="relative z-10 space-y-6 py-4 md:py-[120px]">
        <WormholeConnect config={config} theme={theme} />
      </div>
    </AppLayout>
  );
}
