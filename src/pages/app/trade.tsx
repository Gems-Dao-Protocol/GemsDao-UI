import { useState } from "react";
import { AppLayout } from "~/components/app-layout";
import { TradeBottomPanel } from "~/components/trade/trade-bottom-panel";
import { TradeFooter } from "~/components/trade/trade-footer";
import { TradeLeftPanel } from "~/components/trade/trade-left-panel";
import { TradeMiddlePanel } from "~/components/trade/trade-middle-panel";
import { TradeRightPanel } from "~/components/trade/trade-right-panel";

export default function Trade() {
  const [coins] = useState({
    id: 0,
    name: "BTC/USD",
    logo: "/images/coins/btc.svg",
  });

  return (
    <AppLayout removePadding>
      <div className="grid-cols-[360px_1fr] md:grid">
        <TradeLeftPanel />
        <div className="grid-cols-[1fr_300px] grid-rows-[1fr_270px] md:grid md:h-[calc(100vh-89px-40px)]">
          <TradeMiddlePanel />
          <TradeRightPanel />
          <TradeBottomPanel />
        </div>
      </div>
      <TradeFooter />
    </AppLayout>
  );
}

const coinStats = [{}];
