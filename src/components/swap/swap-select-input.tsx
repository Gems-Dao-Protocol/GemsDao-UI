import Image from "next/image";
import { type CoinT } from "~/utils/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "~/utils/cn";

const SwapSelectInput = ({
  balance,
  coin,
  setCoin,
  title,
  tokens,
  value,
  setValue,
  full,
}: {
  balance?: string;
  coin: CoinT | undefined;
  setCoin: (coin: CoinT | undefined) => void;
  title: string;
  tokens: CoinT[];
  value?: number;
  setValue?: (value: number) => void;
  full?: boolean;
}) => {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between px-4">
        <p className="text-text-gray">{title}</p>
        {balance && (
          <p className="text-xs text-text-gray">Balance: {balance}</p>
        )}
      </div>
      <div className="flex h-14 items-center justify-between rounded-lg border border-[#2A2A2A] bg-[#101010] px-4">
        <Select
          onValueChange={(e) =>
            setCoin(tokens.find((coin) => coin.symbol === e))
          }
        >
          <SelectTrigger
            className={cn(
              full ? "w-full" : "w-auto",
              "gap-x-4 border-0 p-0 focus:ring-0",
            )}
          >
            {coin ? (
              <div className="flex items-center space-x-2">
                <Image
                  src={coin.logoURI}
                  alt={coin.symbol}
                  className="h-6 w-6"
                  height={24}
                  width={24}
                />
                <p className="font-bold">{coin.symbol}</p>
              </div>
            ) : (
              <SelectValue placeholder="Select a coin" />
            )}
          </SelectTrigger>
          <SelectContent className="border-0 bg-black">
            <SelectGroup>
              {tokens.map((coin, i) => (
                <SelectItem value={coin.symbol} key={i}>
                  {coin.symbol}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {setValue ? (
          <input
            className="w-1/2 bg-transparent text-right text-2xl font-bold outline-none"
            defaultValue={value ?? 0}
            placeholder="0.00"
            type="number"
            onChange={(e) => setValue(Number(e.target.value))}
            min={0}
          />
        ) : value ? (
          <p className="w-1/2 text-right text-2xl font-bold">{value}</p>
        ) : null}
      </div>
    </div>
  );
};

export { SwapSelectInput };
