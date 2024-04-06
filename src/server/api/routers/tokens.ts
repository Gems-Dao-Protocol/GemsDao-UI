import { type CoinT } from "~/utils/types";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { jupiterQuoteApi } from "~/utils/jup";

export const tokensRouter = createTRPCRouter({
  allTokens: publicProcedure.query(async () => {
    const response: Response = await fetch("https://token.jup.ag/all");
    const tokens: CoinT[] = (await response.json()) as CoinT[];

    return tokens.slice(0, 20) ?? [];
  }),
  strictTokens: publicProcedure.query(async () => {
    const response: Response = await fetch("https://token.jup.ag/strict");
    const tokens: CoinT[] = (await response.json()) as CoinT[];

    return tokens.slice(0, 20) ?? [];
  }),
  //
  swapQuote: publicProcedure
    .input(
      z.object({
        fromCoin: z.string(),
        toCoin: z.string(),
        amount: z.number(),
      }),
    )
    .query(async ({ input }) => {
      const { fromCoin, toCoin, amount } = input;

      const quote = await jupiterQuoteApi.quoteGet({
        inputMint: fromCoin,
        amount,
        outputMint: toCoin,
        platformFeeBps: 30, // 0.3%
      });

      const platformFee = quote.routePlan.reduce(
        (acc, route) => acc + Number(route.swapInfo.feeAmount),
        0,
      );

      const priceImpactPct = Number(quote.priceImpactPct).toFixed(2) ?? 0;
      const expectedAmount = Number(quote.outAmount ?? 0);

      return {
        expectedAmount: expectedAmount,
        platformFee: platformFee,
        priceImpactPct: priceImpactPct,
        quoteAmount: quote.outAmount ?? 0,
        routePlan: quote.routePlan,
        quoteResponse: quote,
      };
    }),
});
