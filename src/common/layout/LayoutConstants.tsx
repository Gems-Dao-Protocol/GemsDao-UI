import { ChainId } from "@usedapp/core"

export enum SidebarItem {
  HOME,
  Benefits,
  Marketplace,
  DAO
}

export const SIDEBAR_ROUTES: { [key: string]: { type: string, link: string } } = {
  [SidebarItem.HOME]: { type: "internal", link: "/" },
  [SidebarItem.Benefits]: { type: "internal", link: "/benefits" },
  [SidebarItem.Marketplace]: { type: "internal", link: "/Marketplace" },
  [SidebarItem.DAO]: { type: "internal", link: "/dao" }
}

export const SIDEBAR_ITEMS: { [key: string]: string } = {
  [SidebarItem.HOME]: "Home",
  [SidebarItem.Benefits]: "Benefits",
  [SidebarItem.Marketplace]: "Marketplace",
  [SidebarItem.DAO]: "DAO"
}

export enum SocialItem {
  TWITTER,
  TELEGRAM,
  DISCORD
}

export const SOCIAL_ROUTES: { [key: string]: { icon: string, link: string } } = {
  [SocialItem.TWITTER]: { icon: "/images/social_icons/twitter.png", link: "https://twitter.com/senshi_labs" },
  [SocialItem.TELEGRAM]: { icon: "/images/social_icons/telegram.png", link: "https://t.me/senshichat" },
  [SocialItem.DISCORD]: { icon: "/images/social_icons/discord.png", link: "https://discord.gg/6fdm5Duh8M" }
}

