import Image from "next/image";
import { type BridgeT } from "~/utils/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { tempTetherData } from "~/utils/helpers";

const BridgeSelectInput = ({
  bridge,
  setBridge,
  title,
}: {
  bridge: BridgeT | undefined;
  setBridge: (coin: BridgeT) => void;
  title: string;
}) => {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between px-4">
        <p className="text-text-gray">{title}</p>
      </div>
      <div className="flex h-14 items-center justify-between rounded-lg border border-[#2A2A2A] bg-[#101010] px-4">
        <Select
          onValueChange={(e) =>
            setBridge(tempTetherData.find((coin) => coin.symbol === e)!)
          }
        >
          <SelectTrigger className="w-full gap-x-4 border-0 p-0 focus:ring-0">
            {bridge ? (
              <div className="flex items-center space-x-2">
                <Image
                  src={bridge.logo}
                  alt={bridge.symbol}
                  className="h-6 w-6"
                  height={24}
                  width={24}
                />
                <p className="font-bold">{bridge.symbol}</p>
              </div>
            ) : (
              <SelectValue placeholder="Select a fruit" />
            )}
          </SelectTrigger>
          <SelectContent className="border-0 bg-black">
            <SelectGroup>
              {tempTetherData.map((coin) => (
                <SelectItem value={coin.symbol} key={coin.symbol}>
                  {coin.symbol}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export { BridgeSelectInput };
