import {
  TransactionMessage,
  VersionedTransaction,
  type Connection,
  type PublicKey,
  type TransactionInstruction,
} from "@solana/web3.js";

export const buildTransaction = async (
  connection: Connection,
  payer: PublicKey,
  instructions: TransactionInstruction[],
): Promise<
  [VersionedTransaction, { blockhash: string; lastValidBlockHeight: number }]
> => {
  const blockhash = await connection.getLatestBlockhash();

  const messageV0 = new TransactionMessage({
    payerKey: payer,
    recentBlockhash: blockhash.blockhash,
    instructions,
  }).compileToV0Message();

  return [new VersionedTransaction(messageV0), blockhash];
};
