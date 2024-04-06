import { type PublicKey } from "@solana/web3.js";

export const getUserTokens = async (pubKey: PublicKey | null) => {
  if (!pubKey)
    return {
      userTokens: [],
    };

  return { userTokens: [] };
};
