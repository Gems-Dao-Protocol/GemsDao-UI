import Image from "next/image";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

const TradeLeftPanel = () => {
  return (
    <div className="border-b border-[#2a2a2a] md:border-r">
      <Tabs defaultValue="long" className="w-full">
        {/* <TabsContent value="deposits">
          <p>Deposited assets automatically earn yield through lending.</p>
        </TabsContent>
        <TabsContent value="borrow">
          <p>Borrowed assets automatically earn yield through lending.</p>
        </TabsContent> */}
        <TradeLeftPanelHeader />
        <TradeLeftPanelFilters />
      </Tabs>
    </div>
  );
};

const TradeLeftPanelHeader = () => {
  return (
    <TabsList className="grid h-12 grid-cols-2 rounded-none border-b border-[#2a2a2a] p-0">
      <TabsTrigger
        value="long"
        className="flex h-full items-center justify-center rounded-none border-b-4 border-b-transparent data-[state=active]:border-[#3CD963] data-[state=active]:font-bold"
        style={{
          background: "rgba(60, 217, 99, 0.1)",
        }}
      >
        <p className="uppercase text-[#3CD963]">Long</p>
      </TabsTrigger>
      <TabsTrigger
        value="short"
        className="flex h-full items-center justify-center rounded-none border-b-4 border-b-transparent data-[state=active]:border-[#F24545] data-[state=active]:font-bold"
      >
        <p className="uppercase text-[#F24545]">Short</p>
      </TabsTrigger>
    </TabsList>
  );
};

const TradeLeftPanelFilters = () => {
  return (
    <div className="h-[calc(100vh-178px)] space-y-16 overflow-y-auto px-4 py-8">
      <div className="space-y-10">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-x-2 gap-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between px-2">
                <p className="text-xs text-text-gray">Order Type</p>
              </div>
              <div className="flex h-10 items-center justify-between rounded-lg border border-[#2A2A2A] bg-[#101010] px-3">
                <Select>
                  <SelectTrigger className="gap-x-4 border-0 p-0 focus:ring-0">
                    <SelectValue placeholder="Limit" />
                  </SelectTrigger>
                  <SelectContent className="border-0 bg-black">
                    <SelectGroup>
                      <SelectItem value={"limit"}>Limit</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <TradeLeftPanelFiltersInput
              value="43517.16"
              title="Limit Price"
              coinName="USDT"
              input
            />
            <TradeLeftPanelFiltersInput
              coinLogo="/images/coins/btc.svg"
              value="0.025"
              input
              title="Size"
            />
            <TradeLeftPanelFiltersInput
              coinLogo="/images/coins/usdt.svg"
              value="0.025"
              input
              title="Max: 0.00 USDT"
            />
          </div>
          <div>Leverage</div>
        </div>
        <Button
          className="w-full text-black disabled:opacity-10"
          size="lg"
          variant="green"
          disabled
        >
          Market Long
        </Button>
        <div className="space-y-3">
          <div className="flex justify-between">
            <p className="text-xs font-bold">BTC / USDT</p>
            <p className="text-xs font-bold text-[#F24545]">
              WALLET NOT CONNECTED
            </p>
          </div>
          <TradeLeftPanelFiltersData
            title="Est. Execution Price"
            value="43515"
          />
          <TradeLeftPanelFiltersData title="Slippage" value="0.5%" />
          <TradeLeftPanelFiltersData title="Average Spread" value="0.013%" />
          <TradeLeftPanelFiltersData title="Position Size" value="2500 USDT" />
          <TradeLeftPanelFiltersData title="Fees" value="1.75 USDT (0.070%)" />
          <TradeLeftPanelFiltersData title="Liquidation Price" value="405012" />
          <TradeLeftPanelFiltersData
            title="Est. Borrowing Fee / H"
            value="0 USDT(<0.0001%)"
          />
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-center text-sm text-text-gray">
          Please connect your wallet to get started
        </p>
        <Button className="w-full text-black" size="lg" variant="solana">
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};

const TradeLeftPanelFiltersInput = ({
  coinLogo,
  coinName,
  input,
  title,
  value,
}: {
  coinLogo?: string;
  coinName?: string;
  input?: boolean;
  title: string;
  value: string;
}) => {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between px-2">
        <p className="text-xs text-text-gray">{title}</p>
      </div>
      <div className="flex h-10 items-center justify-between rounded-lg border border-[#2A2A2A] bg-[#101010] px-3">
        {input ? (
          <input
            className="w-1/2 bg-transparent text-left text-sm font-bold outline-none"
            defaultValue={value ?? 0}
            placeholder="0.00"
            type="number"
          />
        ) : (
          value && <p className="text-sm font-bold">{value}</p>
        )}
        {coinLogo ? (
          <Image
            src={coinLogo}
            alt={value}
            className="h-4 w-4"
            height={16}
            width={16}
          />
        ) : (
          coinName && <p className="text-xs">{coinName}</p>
        )}
      </div>
    </div>
  );
};

const TradeLeftPanelFiltersData = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <div className="flex justify-between">
      <p className="text-xs text-text-gray">{title}</p>
      <p className="text-xs">{value}</p>
    </div>
  );
};

export { TradeLeftPanel };
