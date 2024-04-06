import { type AssetT } from "~/utils/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { cn } from "~/utils/cn";
import Image from "next/image";

const headerRowClasses = "text-text-gray font-normal";
const tableRowClasses = "h-[70px] px-8 text-base";

const EarnAllAssets = ({ assets }: { assets: AssetT[] }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold">All Assets</h3>
      <div className="rounded-2xl border border-[#2A2A2A]">
        <Table>
          <TableHeader>
            <TableRow className="border-b-[#2A2A2A]">
              <TableHead
                className={cn(tableRowClasses, headerRowClasses, "w-[100px]")}
              >
                Asset
              </TableHead>
              <TableHead className={cn(tableRowClasses, headerRowClasses, "")}>
                Global Deposits/Max
              </TableHead>
              <TableHead className={cn(tableRowClasses, headerRowClasses, "")}>
                Deposit APR
              </TableHead>
              <TableHead className={cn(tableRowClasses, headerRowClasses, "")}>
                Initial Asset Weight
              </TableHead>
              <TableHead className={cn(tableRowClasses, headerRowClasses, "")}>
                Your Deposits
              </TableHead>
              <TableHead className={cn(tableRowClasses, headerRowClasses, "")}>
                Liq. Price
              </TableHead>
              <TableHead
                className={cn(tableRowClasses, headerRowClasses, "text-center")}
              >
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assets.map((asset) => (
              <TableRow key={asset.id} className="border-[#2A2A2A]">
                <TableCell className={cn(tableRowClasses)}>
                  {asset.coin && (
                    <div className="flex items-center">
                      <Image
                        src={asset.coin.logoURI}
                        alt={asset.coin.name}
                        className="mr-2 h-6 w-6"
                        height={24}
                        width={24}
                      />
                      {asset.coin.name}
                    </div>
                  )}
                </TableCell>
                <TableCell className={cn(tableRowClasses, "space-y-0.5")}>
                  <p>{asset.globalDesposits}</p>
                  <p className="text-xs text-text-gray">{asset.maxDeposits}</p>
                </TableCell>
                <TableCell className={cn(tableRowClasses)}>
                  {asset.depositApr}
                </TableCell>
                <TableCell className={cn(tableRowClasses)}>
                  {asset.initialAssetWeight}
                </TableCell>
                <TableCell className={cn(tableRowClasses, "space-y-0.5")}>
                  <p>
                    {asset.yourDeposits} {asset?.coin?.symbol}
                  </p>
                  <p className="text-xs text-text-gray">$0.00</p>
                </TableCell>
                <TableCell className={cn(tableRowClasses)}>
                  {asset.liqPrice}
                </TableCell>
                <TableCell className={cn(tableRowClasses, "text-center")}>
                  <div className="mx-auto flex rounded-lg bg-gradient-to-r from-[#875CFF] via-[#FF5995] to-[#FFD911] p-[1px] shadow-lg">
                    <button className="flex-1 rounded-lg bg-[#131313] px-2 py-2 text-xs">
                      Connect Wallet
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export { EarnAllAssets };
