import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { tempCoinData } from "~/utils/helpers";
import { useEffect, useRef, useState } from "react";
import { type CoinT } from "~/utils/types";

const TradeMiddlePanel = () => {
  const [coin, setCoin] = useState<CoinT | undefined>(tempCoinData[0] as CoinT);

  return (
    <div className="border-b border-[#2a2a2a] md:border-r">
      <TradeMiddlePanelHeader />
      <TradeMiddlePanelSubHeader coin={coin} setCoin={setCoin} />
      <TradeMiddlePanelBody />
    </div>
  );
};

const TradeMiddlePanelHeader = () => {
  return (
    <div className="flex h-12 items-center divide-x divide-[#2a2a2a] border-b border-[#2a2a2a]">
      <div className="flex items-center space-x-4 px-4">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.10215 2.6056C5.94658 1.09076 6.36877 0.333344 7.00004 0.333344C7.63131 0.333344 8.05351 1.09076 8.89791 2.60559L9.11637 2.9975C9.35637 3.42796 9.47631 3.6432 9.66344 3.78522C9.85051 3.92723 10.0834 3.97994 10.5494 4.08538L10.9737 4.18136C12.6134 4.55238 13.4334 4.73789 13.6284 5.36516C13.8235 5.99241 13.2646 6.64608 12.1466 7.95328L11.8574 8.29148C11.5398 8.66294 11.3809 8.84868 11.3094 9.07848C11.238 9.30828 11.262 9.55608 11.31 10.0517L11.3538 10.5029C11.5228 12.2471 11.6073 13.1191 11.0966 13.5068C10.5859 13.8945 9.81824 13.541 8.28291 12.8341L7.88571 12.6512C7.44944 12.4503 7.23131 12.3499 7.00004 12.3499C6.76877 12.3499 6.55064 12.4503 6.11438 12.6512L5.71718 12.8341C4.18183 13.541 3.41416 13.8945 2.90348 13.5068C2.39279 13.1191 2.4773 12.2471 2.64631 10.5029L2.69003 10.0517C2.73806 9.55608 2.76208 9.30828 2.69062 9.07848C2.61916 8.84868 2.46033 8.66294 2.14266 8.29148L1.85344 7.95328C0.735542 6.64608 0.176589 5.99241 0.371655 5.36516C0.566722 4.73789 1.38662 4.55238 3.0264 4.18136L3.45064 4.08538C3.91661 3.97994 4.1496 3.92723 4.33667 3.78522C4.52374 3.6432 4.64373 3.42797 4.88369 2.9975L5.10215 2.6056Z"
            fill="white"
          />
        </svg>
        <p className="flex items-center gap-x-1 font-bold">
          <Image
            src="/images/coins/btc.svg"
            alt={"BTC"}
            height={16}
            width={16}
          />
          BTC/USD
        </p>
        <p className="text-sm text-[#3CD963]">4.7%</p>
      </div>
      <div className="flex items-center space-x-4 px-4">
        <p className="flex items-center gap-x-1 font-bold">
          <Image
            src="/images/coins/eth.svg"
            alt={"BTC"}
            height={16}
            width={16}
          />
          ETH / USDT
        </p>
        <p className="text-sm text-[#F24545]">-2.6%</p>
      </div>
      <div className="flex items-center space-x-4 px-4">
        <p className="flex items-center gap-x-1 font-bold">
          <Image
            src="/images/coins/ada.svg"
            alt={"BTC"}
            height={16}
            width={16}
          />
          ADA / USDT
        </p>
        <p className="text-sm text-[#F24545]">CLOSED</p>
      </div>
    </div>
  );
};

const TradeMiddlePanelSubHeader = ({
  coin,
  setCoin,
}: {
  coin: CoinT | undefined;
  setCoin: (coin: CoinT | undefined) => void;
}) => {
  return (
    <div className="flex h-16 items-center divide-x divide-[#2a2a2a] border-b border-[#2a2a2a]">
      <div className="min-w-48 px-4">
        <Select
        // onValueChange={(e) =>
        // setCoin(tempCoinData.find((coin) => coin.symbol === e))
        // }
        >
          <SelectTrigger className="gap-x-4 border-0 p-0 focus:ring-0">
            {coin ? (
              <div className="flex items-center space-x-3">
                <Image
                  src={coin.logoURI}
                  alt={coin.symbol}
                  className="h-8 w-8"
                  height="32"
                  width="32"
                />
                <p className="text-base font-bold">{coin.symbol}/USD</p>
              </div>
            ) : (
              <SelectValue placeholder="Select a fruit" />
            )}
          </SelectTrigger>
          <SelectContent className="border-0 bg-black">
            <SelectGroup>
              {tempCoinData.map((coin) => (
                <SelectItem value={coin.symbol} key={coin.symbol}>
                  {coin.symbol}/USD
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="px-4 text-right">
        <p className="text-xl font-bold">43517.16</p>
        <p className="text-sm font-bold text-[#3CD963]">4.7%</p>
      </div>
      <div className="space-y-1 px-4 text-[11px]">
        <p className="text-text-gray">Open Interest (L)</p>
        <p className="font-bold">843.14k / 13.8M DAI</p>
      </div>
      <div className="space-y-1 px-4 text-[11px]">
        <p className="text-text-gray">Open Interest (S)</p>
        <p className="font-bold">2.9M / 13.8M DAI</p>
      </div>
      <div className="space-y-1 px-4 text-[11px]">
        <p className="text-text-gray">Borrowing (L)</p>
        <p className="font-bold text-[#F24545]">0.0000%</p>
      </div>
      <div className="space-y-1 px-4 text-[11px]">
        <p className="text-text-gray">Borrowing (S)</p>
        <p className="font-bold text-[#F24545]">0.0015%</p>
      </div>
    </div>
  );
};

const TradeMiddlePanelBody = () => {
  const container = useRef<HTMLDivElement>();

  const [isloaded, setLoaded] = useState(false);

  useEffect(() => {
    const getData = () => {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BINANCE:BTCUSDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;

      container.current?.appendChild(script);
    };

    if (!isloaded) {
      getData();
      setLoaded(true);
    }
  }, [isloaded]);

  return (
    <div
      className="tradingview-widget-container"
      // @ts-expect-error - fix this
      ref={container}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export { TradeMiddlePanel };
