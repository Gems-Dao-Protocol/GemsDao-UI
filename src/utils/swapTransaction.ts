import {
  PublicKey as SolanaPublicKey,
  Transaction,
  type VersionedTransaction,
  type PublicKey,
  type Connection,
} from "@solana/web3.js";
import { type QuoteResponse } from "@jup-ag/api";

import { jupiterQuoteApi } from "./jup";
import { sendTransactionWithPriorityFee } from "./sendTransactionWithPriorityFee";

export async function swapTransaction(
  connection: Connection,
  publicKey: PublicKey | null,
  quoteResponse: QuoteResponse,
  signTransaction: <T extends VersionedTransaction | Transaction>(
    transaction: T,
  ) => Promise<T>,
) {
  if (!connection || !publicKey || !quoteResponse) return null;

  // Referral account public key
  const referralAccountPubkey = new SolanaPublicKey(
    "26CDs9tJXymGk9mpWTJoPsFfA1w5Hbnfd4qprhUTWJv2",
  );

  // Fee token account, same as the output token for ExactIn and as the input token for ExactOut
  let mint: PublicKey;
  if (quoteResponse.swapMode === "ExactIn") {
    mint = new SolanaPublicKey(quoteResponse.outputMint);
  } else {
    mint = new SolanaPublicKey(quoteResponse.inputMint);
  }

  const [feeAccount] = SolanaPublicKey.findProgramAddressSync(
    [
      Buffer.from("referral_ata"),
      referralAccountPubkey.toBuffer(), // your referral account public key
      mint.toBuffer(), // the token mint
    ],
    new SolanaPublicKey("REFER4ZgmyYx9c6He5XfaTMiGfdLwRnkV4RPp9t9iF3"), // the Referral Program
  );

  const swapResult = await jupiterQuoteApi.swapPost({
    swapRequest: {
      quoteResponse,
      userPublicKey: publicKey.toBase58(),
      dynamicComputeUnitLimit: true,
      prioritizationFeeLamports: "auto",
      feeAccount: feeAccount.toBase58(),
      asLegacyTransaction: true,
      wrapAndUnwrapSol: true,
    },
  });

  const swapTransactionBuf = Buffer.from(swapResult.swapTransaction, "base64");
  const swapTransaction = Transaction.from(swapTransactionBuf);
  // const swapTransaction = VersionedTransaction.deserialize(swapTransactionBuf);
  console.log("swapTransaction", JSON.stringify(swapTransaction));

  const res = await sendTransactionWithPriorityFee(
    connection,
    "Medium",
    publicKey,
    signTransaction,
    swapTransaction,
  );

  return res;
}
