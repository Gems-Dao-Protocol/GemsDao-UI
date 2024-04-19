/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/utils/cn";

import dynamic from "next/dynamic";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false },
);

export function MainNav({
  app,
  links,
}: {
  app?: boolean;
  links: {
    id: number;
    name: string;
    url: string;
  }[];
}) {
  const pathname = usePathname();

  return (
    <div className="flex w-full items-center justify-between">
      <div
        className={cn(
          app ? "justify-start" : "justify-between",
          "flex w-full items-center gap-x-10",
        )}
      >
        {app ? (
          <Link href="/">
            <h1 className="sr-only">Gems DAO</h1>
            <img
              height="36"
              width="36"
              className="h-8 w-auto"
              src="/images/app-logo.png"
              alt="Gems DAO"
            />
          </Link>
        ) : (
          <Link href="/">
            <h1 className="sr-only">Gems DAO</h1>
            <img
              height="36"
              width="36"
              className="h-20 w-auto"
              src="/images/logo.png"
              alt="Gems DAO"
            />
          </Link>
        )}
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="mt-4 flex flex-col items-center rounded-lg border p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
              {links.map((link) => {
                const isActive = pathname === link.url;
                return (
                  <li key={link.id}>
                    <Link
                      href={link.url}
                      className={cn(
                        isActive
                          ? "font-bold text-white"
                          : "font-normal text-text-gray",
                        "px-3 py-2 hover:text-white md:bg-transparent md:p-0",
                      )}
                      aria-current="page"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              {!app && (
                <Link
                  href="/"
                  className="flex h-12 items-center justify-center rounded-xl px-6 font-bold text-black"
                  style={{
                    background:
                      "linear-gradient(90deg, #7C51AF 0%, #28638E 39%, #F7EC48 68%, #82EF5B 100%)",
                  }}
                >
                  Start Trading
                </Link>
              )}
            </ul>
          </div>
        </nav>
      </div>
      {app && (
        <WalletMultiButtonDynamic
          style={{ background: "rgba(255,255,255,0.05)", width: 152 }}
        />
      )}
    </div>
  );
}
