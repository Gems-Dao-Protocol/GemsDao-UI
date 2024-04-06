import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import relativeTimePlugin from "dayjs/plugin/relativeTime";

import dayjs from "dayjs";
import { api } from "~/utils/api";

import "@solana/wallet-adapter-react-ui/styles.css";
import "~/styles/globals.css";

dayjs.extend(relativeTimePlugin);

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className="font-sans">
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
