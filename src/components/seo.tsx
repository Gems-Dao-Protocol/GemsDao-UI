import { NextSeo } from "next-seo";

export default function SEO() {
  const title = "Gems DAO";
  const desc = "Experience the Power of Decentralized Finance";
  const url = "https://gemsdao.io/";

  return (
    <NextSeo
      title={title}
      description={desc}
      canonical={url}
      openGraph={{
        url: url,
        title: title,
        description: desc,
        type: "website",
        images: [
          {
            url: "https://gemsdao.io/images/background.jpg",
            width: 1200,
            height: 630,
            alt: "Gems DAO",
            type: "image/png",
          },
        ],
        site_name: title,
      }}
      twitter={{
        handle: "gemsdao",
        site: title,
        cardType: "summary_large_image",
      }}
    />
  );
}
