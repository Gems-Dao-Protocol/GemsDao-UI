import Link from "next/link";
import { type PropsWithChildren } from "react";
import { type CoinT, type BridgeT } from "~/utils/types";
import { AmountInput } from "../amount-input";
import { AppDateRow } from "../app-data-row";
import { SwapSelectInput } from "../swap/swap-select-input";
import { BridgeSelectInput } from "./bridge-select-input";
import { SwapCoinArrow } from "../swap/swap-coin-inputs";
import { Button } from "../ui/button";

const BridgeCoinsWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div
      className="mx-auto  max-w-[480px] rounded-2xl border-2 border-solid border-[#2A2A2A]"
      style={{
        background: "linear-gradient(180deg, #111111 0%, #1C1C1C 100%)",
      }}
    >
      {children}
    </div>
  );
};

const BridgeCoinsHeader = () => {
  return (
    <div className="flex h-20 items-center justify-between border-b-2 border-[#2A2A2A] px-6">
      <div>
        <h2 className="text-2xl font-bold">Bridge</h2>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.36363 8.52548V5.36363C5.36363 4.71094 4.83451 4.18182 4.18182 4.18182C3.52912 4.18182 3 4.71094 3 5.36363V10.0909C3 11.3963 4.05823 12.4545 5.36363 12.4545H10.0909C10.7436 12.4545 11.2727 11.9254 11.2727 11.2727C11.2727 10.62 10.7436 10.0909 10.0909 10.0909H7.16219C7.18621 10.0614 7.20912 10.0308 7.23084 9.99906C8.46117 8.2011 10.221 6.81622 12.2795 6.04676C14.7087 5.13871 17.3862 5.15043 19.8074 6.0797C22.2286 7.00896 24.2264 8.79162 25.4244 11.0918C26.6223 13.3919 26.9376 16.0508 26.311 18.5674C25.6844 21.0839 24.1591 23.2845 22.0224 24.7543C19.8858 26.2242 17.2853 26.8619 14.7111 26.5473C12.1368 26.2329 9.7665 24.9877 8.04669 23.0466C6.58933 21.4016 5.68437 19.3533 5.44077 17.1883C5.36779 16.5396 4.83978 16.0093 4.18709 16.0099C3.53438 16.0104 2.99488 16.5411 3.05467 17.191C3.3072 19.9365 4.42787 22.542 6.26968 24.6209C8.37375 26.9957 11.2737 28.5191 14.4231 28.904C17.5725 29.2888 20.754 28.5086 23.368 26.7103C25.9821 24.9121 27.8482 22.2199 28.6148 19.141C29.3814 16.0621 28.9956 12.8092 27.53 9.99514C26.0644 7.18105 23.6203 5.00009 20.6581 3.86321C17.696 2.72631 14.4202 2.71198 11.4482 3.82291C8.98072 4.74526 6.86398 6.39041 5.36363 8.52548Z"
              fill="#9C9C9C"
            />
            <path
              d="M16.0546 8C15.4722 8 15 8.52265 15 9.16738V16.7165C15 16.7165 15 17.0208 15.1336 17.2498C15.2231 17.4439 15.3625 17.6127 15.5457 17.7297L20.4179 20.8434C20.9223 21.1658 21.5674 20.9744 21.8585 20.4161C22.1497 19.8577 21.977 19.1439 21.4725 18.8214L17.1093 16.033V9.16738C17.1093 8.52266 16.6371 8 16.0546 8Z"
              fill="#9C9C9C"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const BridgeCoinsBody = ({
  coin,
  setCoin,
  bridgeFrom,
  setBridgeFrom,
  bridgeTo,
  setBridgeTo,
}: {
  coin: CoinT | undefined;
  setCoin: (coin: CoinT | undefined) => void;
  bridgeFrom: BridgeT | undefined;
  setBridgeFrom: (bridgeFrom: BridgeT) => void;
  bridgeTo: BridgeT | undefined;
  setBridgeTo: (bridgeTo: BridgeT) => void;
}) => {
  const swapCoinFunction = () => {
    if (!bridgeFrom || !bridgeTo) return;

    const coinOne = bridgeFrom;
    const coinTwo = bridgeTo;

    setBridgeFrom(coinTwo);
    setBridgeTo(coinOne);
  };

  return (
    <div className="space-y-10 px-6 py-10">
      <div className="space-y-8">
        <SwapSelectInput
          title="Select Coin"
          coin={coin}
          setCoin={setCoin}
          full={true}
          tokens={[]}
        />
        <div className="relative space-y-10">
          <BridgeSelectInput
            title="From"
            bridge={bridgeFrom}
            setBridge={setBridgeFrom}
          />
          <button
            className="absolute left-1/2 top-1/2 !mt-3.5 -translate-x-1/2 -translate-y-1/2 transform"
            onClick={() => swapCoinFunction()}
          >
            <SwapCoinArrow />
          </button>
          <BridgeSelectInput
            title="To"
            bridge={bridgeTo}
            setBridge={setBridgeTo}
          />
        </div>
      </div>
      <AmountInput value={1256} />
      <div className="space-y-8">
        <div className="space-y-3">
          <AppDateRow title="Fee" value="0.05%" />
          <AppDateRow title="Time" value="10 Min" />
        </div>
        <div>
          <Button className="w-full text-black" size="lg" variant="green">
            Bridge
          </Button>
        </div>
      </div>
    </div>
  );
};

export { BridgeCoinsWrapper, BridgeCoinsHeader, BridgeCoinsBody };
