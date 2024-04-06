import {
  PublicKey,
  type RpcResponseAndContext,
  type TokenAmount,
} from "@solana/web3.js";
import { helius } from "./helius";

const emptyTokenBalance = {
  context: {
    slot: 0,
  },
  value: {
    amount: "0",
    decimals: 0,
    uiAmount: 0,
    uiAmountString: "0",
  },
};

export const getTokenBalance = async (
  pubKey: PublicKey | null,
  tokenAddress: string | undefined,
): Promise<{ tokenBalance: RpcResponseAndContext<TokenAmount> }> => {
  if (!pubKey || !tokenAddress) return { tokenBalance: emptyTokenBalance };

  // console.log(`getTokenBalance called with ${pubKey} and ${tokenAddress}`);

  if (tokenAddress === "So11111111111111111111111111111111111111112") {
    const balance = await helius.connection.getBalance(pubKey);
    console.log(`SOL balance: ${balance}`);
    return {
      tokenBalance: {
        context: {
          slot: 0,
        },
        value: {
          amount: balance.toString(),
          decimals: 9,
          uiAmount: balance / 10 ** 9,
          uiAmountString: (balance / 10 ** 9).toString(),
        },
      },
    };
  }

  const tokenAccount = await helius.connection.getTokenAccountsByOwner(pubKey, {
    mint: new PublicKey(tokenAddress),
  });

  console.log(`Token account: ${JSON.stringify(tokenAccount)}`);

  if (!tokenAccount.value[0]?.pubkey)
    return {
      tokenBalance: emptyTokenBalance,
    };

  const tokenBalance = await helius.connection.getTokenAccountBalance(
    tokenAccount.value[0]?.pubkey,
  );

  console.log(`Token balance: ${JSON.stringify(tokenBalance)}`);

  return { tokenBalance };
};
