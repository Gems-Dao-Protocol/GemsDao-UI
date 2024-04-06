import {
  Connection,
  // SystemProgram,
  type Transaction,
  // ComputeBudgetProgram,
  type VersionedTransaction,
  // type BlockheightBasedTransactionConfirmationStrategy,
  type PublicKey,
  // SystemProgram,
} from "@solana/web3.js";
// import bs58 from "bs58";

async function sendTransactionWithPriorityFee(
  connection: Connection,
  priorityLevel: string,
  publicKey: PublicKey,
  signTransaction: <T extends VersionedTransaction | Transaction>(
    transaction: T,
  ) => Promise<T>,
  transaction: Transaction,
  // errorMessage = "Error confirming transaction",
) {
  const signedTx = await signTransaction(transaction);

  // Execute the transaction
  let tryAgain = true;
  let objSignatureStatusResult;
  let maxTriesCounter = 0;
  const maxTries = 10;
  let txid = "";

  while (tryAgain) {
    maxTriesCounter++;
    const rawTransaction = signedTx.serialize();
    txid = await connection.sendRawTransaction(rawTransaction, {
      skipPreflight: true,
      maxRetries: 2,
    });

    console.log(
      `Transaction sent with signature: ${txid} ... waiting for confirmation`,
    );
    await new Promise((r) => setTimeout(r, 1500));

    const result = await connection.getSignatureStatus(txid, {
      searchTransactionHistory: true,
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // objSignatureStatusResult = JSON.parse(JSON.stringify(result));
    objSignatureStatusResult = result;
    if (objSignatureStatusResult.value !== null) {
      // tryAgain = false;
      console.log(
        `Transaction sent successfully: https://solscan.io/tx/${txid}`,
      );

      return txid;
    }
    if (maxTriesCounter > maxTries) tryAgain = false;
  }

  console.log(
    `Transaction ${txid} failed to confirm or after ${maxTries} tries`,
  );
  return null;
}

export { sendTransactionWithPriorityFee };
