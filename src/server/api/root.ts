import { createTRPCRouter } from "~/server/api/trpc";
import { tokensRouter } from "./routers/tokens";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  tokens: tokensRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
