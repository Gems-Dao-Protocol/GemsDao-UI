import { useEffect, useState } from "react";
import { AppLayout } from "~/components/app-layout";
import { BackgroundRings } from "~/components/home-background-rings";
// import { SwapCoinHeader } from "~/components/swap/swap-coin-header";
import {
  SwapCoinInputsWrapper,
  SwapCoinInputsBody,
  SwapCoinInputsHeader,
} from "~/components/swap/swap-coin-inputs";
import { api } from "~/utils/api";
import { type CoinT } from "~/utils/types";
import { Oval } from "react-loader-spinner";

export default function Swap() {
  const [firstLoad, setFirstLoad] = useState(true);
  const [fromCoin, setFromCoin] = useState<CoinT | undefined>();
  const [toCoin, setToCoin] = useState<CoinT | undefined>();

  const { data, error, isLoading } = api.tokens.allTokens.useQuery();

  useEffect(() => {
    if (data && firstLoad) {
      setFromCoin(data[0]);
      setToCoin(data[1]);
      setFirstLoad(false);
    }
  }, [data, firstLoad]);

  return (
    <AppLayout>
      <BackgroundRings className="top-9 rotate-180" />
      <div className="relative z-10 space-y-6 py-4 md:py-[120px]">
        {/* {data && (
          <SwapCoinHeader
            fromCoin={fromCoin}
            toCoin={toCoin}
            swapValue={0}
            swapPercentage={"0"}
          />
        )} */}
        <SwapCoinInputsWrapper>
          <SwapCoinInputsHeader />
          {isLoading ? (
            <div className="flex h-[548px] w-full items-center justify-center">
              <Oval
                visible={true}
                height="80"
                width="80"
                color="#ffffff"
                secondaryColor="#111111"
                ariaLabel="oval-loading"
              />
            </div>
          ) : error ? (
            <p>{error.message}</p>
          ) : (
            <SwapCoinInputsBody
              fromCoin={fromCoin}
              setFromCoin={setFromCoin}
              toCoin={toCoin}
              setToCoin={setToCoin}
              tokens={data ?? []}
            />
          )}
        </SwapCoinInputsWrapper>
      </div>
    </AppLayout>
  );
}
