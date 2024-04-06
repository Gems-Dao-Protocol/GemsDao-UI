import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-menu";

const links = [
  {
    id: 1,
    name: "Ecosystem",
    url: "/",
  },
  { id: 0, name: "Memefi", url: "/memefi" },
];

function Header() {
  return (
    <nav>
      <div className="mx-auto hidden flex-wrap items-center justify-between px-4 py-5 md:flex">
        <MainNav links={links} />
      </div>
      <div className="flex items-center space-x-4 px-4 py-5 md:hidden">
        <MobileNav links={links} />
      </div>
    </nav>
  );
}

export { Header };
