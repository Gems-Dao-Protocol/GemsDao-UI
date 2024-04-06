import { createJupiterApiClient } from "@jup-ag/api";

const config = {
  basePath: "https://quote-api.jup.ag/v6",
};

export const jupiterQuoteApi = createJupiterApiClient();
