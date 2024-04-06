import { Helius } from "helius-sdk";
import { env } from "~/env";

export const helius = new Helius(env.NEXT_PUBLIC_HELIUS_API);
