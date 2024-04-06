import Link from "next/link";
import { useEffect, useState, type PropsWithChildren } from "react";
import { type CoinT } from "~/utils/types";

import { AppDateRow } from "../app-data-row";
import { SwapSelectInput } from "./swap-select-input";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import { getTokenBalance } from "~/utils/getTokenBalance";
import { api } from "~/utils/api";
import { swapTransaction } from "~/utils/swapTransaction";
import toast from "react-hot-toast";
import { jupiterQuoteApi } from "~/utils/jup";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false },
);

const SwapCoinInputsWrapper = ({ children }: PropsWithChildren) => {
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

const SwapCoinInputsHeader = () => {
  return (
    <div className="flex h-20 items-center justify-between border-b-2 border-[#2A2A2A] px-6">
      <div>
        <h2 className="text-2xl font-bold">Swap</h2>
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
        <Link href="">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.166 26.6667H16.834V25.644C16.834 24.3973 17.6007 23.2773 18.786 22.788C20.0127 22.2773 21.3527 22.528 22.2353 23.416L22.954 24.1373L24.138 22.9533L23.4114 22.228C22.5273 21.3453 22.278 20.0067 22.7753 18.8187C22.7753 18.8187 22.7767 18.8173 22.7767 18.816L22.7913 18.7787C23.2767 17.6013 24.398 16.8333 25.6447 16.8333H26.666V15.1667H25.6447C24.398 15.1667 23.2767 14.4 22.7887 13.2147C22.2753 11.988 22.5273 10.648 23.4153 9.764L24.1367 9.04534L22.954 7.86267L22.2273 8.58934C21.3447 9.472 20.0073 9.72134 18.8193 9.22534C17.602 8.72267 16.834 7.60267 16.834 6.35601V5.33334H15.166V6.35601C15.166 7.60267 14.3993 8.72267 13.214 9.212C11.9887 9.72534 10.6487 9.47334 9.76468 8.584L9.04602 7.86267L7.86202 9.04667L8.58868 9.77201C9.47135 10.6547 9.72202 11.9933 9.22468 13.1813C8.72335 14.3987 7.60202 15.1667 6.35535 15.1667H5.33268V16.8333H6.35535C7.60202 16.8333 8.72335 17.6 9.21135 18.7853C9.72468 20.012 9.47268 21.352 8.58468 22.236L7.86335 22.9547L9.04602 24.1373L9.77268 23.4107C10.6553 22.528 11.9927 22.2787 13.1807 22.7747C14.398 23.2773 15.166 24.3973 15.166 25.644V26.6667ZM17.2567 29.3333H14.734C13.502 29.3333 12.4993 28.3307 12.4993 27.0987V25.644C12.4993 25.448 12.3433 25.3133 12.1967 25.2533C12.0047 25.1747 11.7993 25.1587 11.658 25.296L10.6313 26.324C9.75668 27.196 8.33535 27.1987 7.46202 26.324L5.67535 24.5373C5.25135 24.1133 5.01935 23.5507 5.01935 22.9507C5.02068 22.352 5.25402 21.7893 5.67935 21.3653L6.70335 20.3453C6.84335 20.2053 6.82868 20 6.76602 19.852C6.68602 19.656 6.55268 19.5 6.35535 19.5H4.91002C3.67268 19.5 2.66602 18.4947 2.66602 17.2573V14.7347C2.66602 13.5013 3.66868 12.5 4.90202 12.5H6.35535C6.55135 12.5 6.68602 12.3427 6.74602 12.196C6.82602 12.004 6.84202 11.7973 6.70335 11.6587L5.67535 10.632C4.80335 9.75601 4.80335 8.33467 5.67535 7.46267L7.46202 5.67601C7.88601 5.25201 8.44735 5.02001 9.04602 5.02001H9.04868C9.64735 5.02001 10.2113 5.25334 10.634 5.67867L11.654 6.70401C11.794 6.84534 12.0007 6.82934 12.1487 6.76667C12.3433 6.68534 12.4993 6.55201 12.4993 6.35601V4.91067C12.4993 3.67334 13.506 2.66667 14.7433 2.66667H17.266C18.498 2.66667 19.5007 3.66934 19.5007 4.90134V6.35601C19.5007 6.55201 19.6567 6.68667 19.8033 6.74667C19.9967 6.82667 20.202 6.84401 20.342 6.70401L21.3687 5.67601C22.2433 4.80401 23.6647 4.80134 24.538 5.67601L26.326 7.46401C26.75 7.88667 26.982 8.44934 26.9807 9.04934C26.9807 9.64667 26.7473 10.2107 26.322 10.6333L25.2967 11.6547C25.1567 11.7947 25.1713 12 25.234 12.148C25.314 12.344 25.4473 12.5 25.6447 12.5H27.09C28.3273 12.5 29.3327 13.5053 29.3327 14.7427V17.2653C29.3327 18.4987 28.3313 19.5 27.098 19.5H25.6447C25.4487 19.5 25.314 19.6573 25.254 19.804C25.2527 19.8053 25.2367 19.8453 25.2353 19.848C25.174 19.996 25.158 20.2027 25.2967 20.3413L26.3247 21.368C27.1967 22.244 27.1967 23.6653 26.3247 24.5373L24.538 26.324C24.114 26.748 23.5527 26.98 22.954 26.98H22.9513C22.3527 26.98 21.7887 26.7467 21.366 26.3213L20.346 25.296C20.206 25.156 19.998 25.172 19.8513 25.2333C19.6567 25.3147 19.5007 25.448 19.5007 25.644V27.0893C19.5007 28.3267 18.494 29.3333 17.2567 29.3333ZM16 14C14.8973 14 14 14.8973 14 16C14 17.1027 14.8973 18 16 18C17.1027 18 18 17.1027 18 16C18 14.8973 17.1027 14 16 14ZM16 20.6667C13.4267 20.6667 11.3333 18.5733 11.3333 16C11.3333 13.4267 13.4267 11.3333 16 11.3333C18.5733 11.3333 20.6667 13.4267 20.6667 16C20.6667 18.5733 18.5733 20.6667 16 20.6667Z"
              fill="#9C9C9C"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const SwapCoinInputsBody = ({
  fromCoin,
  setFromCoin,
  toCoin,
  setToCoin,
  tokens,
}: {
  fromCoin: CoinT | undefined;
  setFromCoin: (coin: CoinT | undefined) => void;
  toCoin: CoinT | undefined;
  setToCoin: (coin: CoinT | undefined) => void;
  tokens: CoinT[];
}) => {
  const { connected, publicKey, signTransaction } = useWallet();
  const { connection } = useConnection();

  const [actionLoading, setActionLoading] = useState<boolean>(false);

  const [fromCoinBalance, setFromCoinBalance] = useState<number>(0);
  const [toCoinBalance, setToCoinBalance] = useState<number>(0);

  const [fromValue, setFromValue] = useState<number>(0);
  const [toValue, setToValue] = useState<number>(0);

  const [conversion, setConversion] = useState<number>(0);

  const { data: quote, isLoading: quoteIsLoading } =
    api.tokens.swapQuote.useQuery(
      {
        fromCoin: fromCoin?.address ?? "",
        toCoin: toCoin?.address ?? "",
        amount: fromValue * 10 ** (fromCoin?.decimals ?? 0) ?? 0,
      },
      {
        enabled: !!fromCoin && !!toCoin && !!fromValue,
      },
    );

  const swapCoinFunction = () => {
    if (!fromCoin || !toCoin) return;

    const coinOne = fromCoin;
    const coinTwo = toCoin;
    const valueOne = fromValue ?? 0;
    const valueTwo = toValue ?? 0;

    setFromCoin(coinTwo);
    setToCoin(coinOne);
    setFromValue(valueTwo);
    setToValue(valueOne);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        if (!publicKey || !fromCoin?.address || !toCoin?.address) return;

        const { tokenBalance: fromCoinBalance } = await getTokenBalance(
          publicKey,
          fromCoin.address,
        );

        const { tokenBalance: toCoinBalance } = await getTokenBalance(
          publicKey,
          toCoin.address,
        );

        console.log(
          "setting setFromCoinBalance",
          fromCoinBalance.value.uiAmount,
        );

        setFromCoinBalance(fromCoinBalance.value.uiAmount ?? 420);
        console.log("setting setToCoinBalance", toCoinBalance.value.uiAmount);

        setToCoinBalance(toCoinBalance.value.uiAmount ?? 0);
      } catch (e) {
        console.error(e);
      }
    }
    void fetchData();
  }, [fromCoin, publicKey, toCoin]);

  useEffect(() => {
    if (!quote) return;
    setConversion(
      ((Number(quote?.quoteAmount) ?? 0) / 10 ** (toCoin?.decimals ?? 0) ?? 0) /
        fromValue,
    );
  }, [quote, fromValue, toCoin]);

  const swapAction = async () => {
    if (!publicKey || !signTransaction || !quote) return toast.error("Error");

    const id = toast.loading("Swapping...");
    setActionLoading(true);

    try {
      const quote = await jupiterQuoteApi.quoteGet({
        inputMint: fromCoin?.address ?? "",
        outputMint: toCoin?.address ?? "",
        amount: fromValue * 10 ** (fromCoin?.decimals ?? 0) ?? 0,
        platformFeeBps: 30, // 0.3%
        asLegacyTransaction: true,
        slippageBps: 1000, // 10%
      });

      console.log(`quote`, JSON.stringify(quote));

      const signature = await swapTransaction(
        connection,
        publicKey,
        quote,
        signTransaction,
      );

      console.log({ signature });

      if (!signature) return toast.error("Error: No response", { id });

      toast.success(
        <>
          Swapped{": "}
          <a
            href={`https://solscan.io/tx/${signature}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            View Transaction
          </a>
        </>,
        { id },
      );

      // toast.success("Swapped", { id });
    } catch (error) {
      console.error(error);
      toast.error(error as string, { id });
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="space-y-10 px-6 py-10">
      <div className="space-y-4">
        <div className="relative space-y-10">
          <SwapSelectInput
            balance={connected ? fromCoinBalance.toString() : undefined}
            coin={fromCoin}
            setCoin={setFromCoin}
            tokens={tokens}
            title="From"
            value={fromValue ?? 0}
            setValue={setFromValue}
            full={false}
          />
          <button
            className="absolute left-1/2 top-1/2 !mt-3.5 -translate-x-1/2 -translate-y-1/2 transform"
            onClick={() => swapCoinFunction()}
          >
            <SwapCoinArrow />
          </button>
          <SwapSelectInput
            balance={connected ? toCoinBalance.toString() : undefined}
            coin={toCoin}
            setCoin={setToCoin}
            tokens={tokens}
            title="To"
            value={Number(
              (
                Number(quote?.quoteAmount ?? 0) /
                10 ** (toCoin?.decimals ?? 0)
              ).toFixed(2),
            )}
            full={false}
          />
        </div>
        <p className="text-center text-sm text-text-gray">
          1 {fromCoin?.symbol} = {conversion.toFixed(2)} {toCoin?.symbol}
        </p>
        <div className="space-y-3">
          <AppDateRow
            title="Network Fee"
            value={`${Number(
              (
                Number(quote?.platformFee ?? 0) /
                10 ** (toCoin?.decimals ?? 0)
              ).toFixed(2),
            )} ${toCoin?.symbol}`}
          />
          <AppDateRow
            title="Price Impact"
            value={`${quote?.priceImpactPct ?? 0}%`}
          />
          <AppDateRow
            title="Expected Output"
            value={`${Number(
              (
                Number(quote?.expectedAmount ?? 0) /
                10 ** (toCoin?.decimals ?? 0)
              ).toFixed(2),
            )} ${toCoin?.symbol}`}
          />
          <AppDateRow
            title="Order Routing"
            value={
              quote?.routePlan
                ? quote?.routePlan
                    .map((route) => route.swapInfo.label)
                    .join(" > ")
                : "N/A"
            }
          />
        </div>
      </div>
      {!connected ? (
        <div className="flex w-full justify-center">
          <WalletMultiButtonDynamic className="swap-wallet-button" />
        </div>
      ) : (
        <Button
          className="w-full text-black"
          size="lg"
          variant="green"
          disabled={!quote || actionLoading || quoteIsLoading}
          onClick={() => swapAction()}
        >
          Swap
        </Button>
      )}
    </div>
  );
};

export { SwapCoinInputsWrapper, SwapCoinInputsHeader, SwapCoinInputsBody };

export const SwapCoinArrow = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.25 2.74241C22.5705 1.40267 25.4295 1.40267 27.75 2.74241L40.5346 10.1236C42.8551 11.4634 44.2846 13.9393 44.2846 16.6188V31.3812C44.2846 34.0607 42.8551 36.5366 40.5346 37.8764L27.75 45.2576C25.4295 46.5973 22.5705 46.5973 20.25 45.2576L7.46539 37.8764C5.14488 36.5366 3.71539 34.0607 3.71539 31.3812V16.6188C3.71539 13.9393 5.14488 11.4634 7.46539 10.1236L20.25 2.74241Z"
      fill="white"
      stroke="black"
    />
    <path
      d="M17.7393 25.2174L21.9132 31.3044V16.6957"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30.2607 22.7826L26.0868 16.6957L26.0868 31.3043"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
