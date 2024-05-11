/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "~/utils/cn";

export function MobileNav({
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
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <MobileLink
        href="/"
        className="flex w-full items-center justify-between"
        onOpenChange={setOpen}
      >
        <h1 className="sr-only">Gems DAO</h1>
        <img
          height="36"
          width="36"
          className="h-12 w-auto"
          src="/images/logo.png"
          alt="Gems DAO"
        />
      </MobileLink>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 rotate-180"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="border-[#2a2a2a] bg-black">
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-2">
            {links.map((item) => (
              <React.Fragment key={item.url}>
                {item.url ? (
                  <MobileLink
                    href={item.url}
                    onOpenChange={setOpen}
                    className="font-sans"
                  >
                    {item.name}
                  </MobileLink>
                ) : (
                  item.name
                )}
              </React.Fragment>
            ))}
            {app ? (
              <Button className="text-black" size="lg" variant="solana">
                Connect Wallet
              </Button>
            ) : (
              <Link
                href="https://xaox.trade/"
                className="flex h-12 items-center justify-center rounded-xl px-6 font-bold text-black"
                style={{
                  background:
                    "linear-gradient(90deg, #7C51AF 0%, #28638E 39%, #F7EC48 68%, #82EF5B 100%)",
                }}
                target="_blank"
              >
                Start Trading
              </Link>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  href: string;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href);
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
