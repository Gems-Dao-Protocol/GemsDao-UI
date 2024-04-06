export type CoinT = {
  address: string;
  chainId: number;
  decimals: number;
  name: string;
  symbol: string;
  logoURI: string;
  tags: string[];
  extensions: {
    coingeckoId: string;
  };
};

export type BridgeT = {
  name: string;
  symbol: string;
  logo: string;
};

export type AssetT = {
  id: number;
  coin: CoinT | undefined;
  globalDesposits: string;
  maxDeposits: string;
  depositApr: string;
  initialAssetWeight: string;
  yourDeposits: string;
  liqPrice: string;
};

// export type SwapResponseT = {
//   inputMint: string;
//   inAmount: string;
//   outputMint: string;
//   outAmount: string;
//   otherAmountThreshold: string;
//   swapMode: "ExactIn" | "ExactOut";
//   slippageBps: number;
//   platformFee: {
//     amount?: string;
//     feeBps?: number;
//   };
//   priceImpactPct: string;
//   routePlan: {
//     swapInfo: {
//       ammKey: string;
//       label?: string;
//       inputMint: string;
//       outputMint: string;
//       inAmount: string;
//       outAmount: string;
//       feeAmount: string;
//       feeMint: string;
//     };
//     percent: number;
//   }[];
//   contextSlot?: number;
//   timeTaken?: number;
// };

export enum ProposalStatus {
  ACTIVE = "Active",
  PENDING = "Pending",
  DETECTED = "Detected",
  EXECUTED = "Executed",
  CANCELLED = "Cancelled",
}

export type ProposalT = {
  id: number;
  proposal: string;
  startDate: string;
  status: ProposalStatus;
};
