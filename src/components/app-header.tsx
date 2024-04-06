import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-menu";

const links = [
  {
    id: 0,
    name: "Trade",
    url: "/app/trade",
  },
  {
    id: 1,
    name: "Swap",
    url: "/app/swap",
  },
  {
    id: 2,
    name: "Bridge",
    url: "/app/bridge",
  },
  {
    id: 3,
    name: "Earn",
    url: "/app/earn",
  },
  {
    id: 4,
    name: "Vote",
    url: "/app/vote",
  },
];

function AppHeader() {
  return (
    <nav>
      <div className="hidden items-center justify-between border-b border-b-[#2A2A2A] px-4 py-5 md:flex">
        <MainNav links={links} app />
      </div>
      <div className="flex items-center space-x-4 border-b border-b-[#2A2A2A] px-4 py-5 md:hidden">
        <MobileNav links={links} app />
      </div>
    </nav>
  );
}

export { AppHeader };
