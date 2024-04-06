import { useState } from "react";
import { AppLayout } from "~/components/app-layout";
import { BackgroundRings } from "~/components/home-background-rings";
import { type BridgeT, type CoinT } from "~/utils/types";
import {
  BridgeCoinsWrapper,
  BridgeCoinsHeader,
  BridgeCoinsBody,
} from "~/components/bridge/bridge-coin";
import { tempCoinData, tempTetherData } from "~/utils/helpers";

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
        <BridgeCoinsWrapper>
          <BridgeCoinsHeader />
          <BridgeCoinsBody
            coin={coin}
            setCoin={setCoin}
            bridgeFrom={bridgeFrom}
            setBridgeFrom={setBridgeFrom}
            bridgeTo={bridgeTo}
            setBridgeTo={setBridgeTo}
          />
        </BridgeCoinsWrapper>
      </div>
    </AppLayout>
  );
}
