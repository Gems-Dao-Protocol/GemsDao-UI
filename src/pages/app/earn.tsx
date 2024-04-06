import { AppLayout } from "~/components/app-layout";
import { EarnAllAssets } from "~/components/earn/earn-all-assets";
import { EarnStats } from "~/components/earn/earn-stats";
import { EarnYourDeposits } from "~/components/earn/earn-your-deposits";
import { PageHeader } from "~/components/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { tempCoinData } from "~/utils/helpers";

export default function Earn() {
  return (
    <AppLayout>
      <div className="mx-auto max-w-7xl space-y-16 py-6 md:py-12">
        <PageHeader
          title="Lend / Borrow"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Phasellus egestas tellus rutrum tellus pellentesque eu. Enim neque volutpat ac tincidunt vitae semper."
        />
        <EarnStats stats={stats} />
        <Tabs defaultValue="deposits" className="w-full space-y-6">
          <TabsList className="flex w-full justify-start space-x-12 rounded-none border-b border-[#2A2A2A] p-0">
            <TabsTrigger
              value="deposits"
              className="mb-2 rounded-none border-b-4 border-b-transparent px-0 pb-4 font-bold text-text-gray data-[state=active]:border-b-white data-[state=active]:text-white"
            >
              Deposits (Lend)
            </TabsTrigger>
            <TabsTrigger
              value="borrow"
              className="mb-2 rounded-none border-b-4 border-b-transparent px-0 pb-4 font-bold text-text-gray data-[state=active]:border-b-white data-[state=active]:text-white"
            >
              Borrow
            </TabsTrigger>
          </TabsList>
          <TabsContent value="deposits">
            <p>Deposited assets automatically earn yield through lending.</p>
          </TabsContent>
          <TabsContent value="borrow">
            <p>Borrowed assets automatically earn yield through lending.</p>
          </TabsContent>
        </Tabs>
        <EarnYourDeposits />
        <EarnAllAssets
          // @ts-expect-error TODO fix this
          assets={assets}
        />
      </div>
    </AppLayout>
  );
}

const stats = [
  {
    id: 0,
    title: "Total Value Locked",
    stat: "$133,630,220.21",
  },
  {
    id: 1,
    title: "Deposits",
    stat: "$148,212,471.65",
  },
  {
    id: 2,
    title: "Borrows",
    stat: "$28,958,209.29",
  },
  {
    id: 3,
    title: "Insurance Fund Staked",
    stat: "$14,530,174.03",
  },
  {
    id: 4,
    title: "Users",
    stat: "111696",
  },
];

const assets = [
  {
    id: 0,
    coin: tempCoinData[0],
    globalDesposits: "39.1M / 75.0M USDT",
    maxDeposits: "$39,118,851.41",
    depositApr: "1.9256%",
    initialAssetWeight: "100%",
    yourDeposits: "0",
    liqPrice: "0.00",
  },
  {
    id: 1,
    coin: tempCoinData[0],
    globalDesposits: "39.1M / 75.0M USDT",
    maxDeposits: "$39,118,851.41",
    depositApr: "1.9256%",
    initialAssetWeight: "100%",
    yourDeposits: "0",
    liqPrice: "0.00",
  },
  {
    id: 2,
    coin: tempCoinData[0],
    globalDesposits: "39.1M / 75.0M USDT",
    maxDeposits: "$39,118,851.41",
    depositApr: "1.9256%",
    initialAssetWeight: "100%",
    yourDeposits: "0",
    liqPrice: "0.00",
  },
  {
    id: 3,
    coin: tempCoinData[0],
    globalDesposits: "39.1M / 75.0M USDT",
    maxDeposits: "$39,118,851.41",
    depositApr: "1.9256%",
    initialAssetWeight: "100%",
    yourDeposits: "0",
    liqPrice: "0.00",
  },
  {
    id: 4,
    coin: tempCoinData[0],
    globalDesposits: "39.1M / 75.0M USDT",
    maxDeposits: "$39,118,851.41",
    depositApr: "1.9256%",
    initialAssetWeight: "100%",
    yourDeposits: "0",
    liqPrice: "0.00",
  },
  {
    id: 5,
    coin: tempCoinData[0],
    globalDesposits: "39.1M / 75.0M USDT",
    maxDeposits: "$39,118,851.41",
    depositApr: "1.9256%",
    initialAssetWeight: "100%",
    yourDeposits: "0",
    liqPrice: "0.00",
  },
  {
    id: 6,
    coin: tempCoinData[0],
    globalDesposits: "39.1M / 75.0M USDT",
    maxDeposits: "$39,118,851.41",
    depositApr: "1.9256%",
    initialAssetWeight: "100%",
    yourDeposits: "0",
    liqPrice: "0.00",
  },
  {
    id: 7,
    coin: tempCoinData[0],
    globalDesposits: "39.1M / 75.0M USDT",
    maxDeposits: "$39,118,851.41",
    depositApr: "1.9256%",
    initialAssetWeight: "100%",
    yourDeposits: "0",
    liqPrice: "0.00",
  },
  {
    id: 8,
    coin: tempCoinData[0],
    globalDesposits: "39.1M / 75.0M USDT",
    maxDeposits: "$39,118,851.41",
    depositApr: "1.9256%",
    initialAssetWeight: "100%",
    yourDeposits: "0",
    liqPrice: "0.00",
  },
  {
    id: 9,
    coin: tempCoinData[0],
    globalDesposits: "39.1M / 75.0M USDT",
    maxDeposits: "$39,118,851.41",
    depositApr: "1.9256%",
    initialAssetWeight: "100%",
    yourDeposits: "0",
    liqPrice: "0.00",
  },
];
