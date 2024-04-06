import Link from "next/link";

const HomeHeader = ({ title, text }: { title: string; text?: string }) => {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center space-y-10 overflow-hidden text-center">
      <h2 className="inline-block bg-gradient-to-t from-[#8E43AD] to-[#19e668] bg-clip-text text-3xl font-bold uppercase text-transparent md:text-6xl md:leading-tight">
        {title}
      </h2>
      {text && <p className="md:text-2xl md:leading-9">{text}</p>}
      <Link
        href="/app"
        className="relative z-10 flex h-12 w-48 items-center justify-center rounded-xl px-6 font-bold text-black md:h-20 md:w-80 md:text-2xl"
        style={{
          background:
            "linear-gradient(90deg, #875CFF 0%, #FF5995 39%, #FFD911 68%, #45FF9C 100%)",
        }}
      >
        Launch App
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.33366 21.6667H28.1087L22.0537 28.9333C21.4637 29.64 21.5603 30.6917 22.267 31.28C22.9753 31.87 24.0253 31.7733 24.6153 31.0667L32.9487 21.0667C33.0137 20.9883 33.0453 20.8967 33.0937 20.81C33.1337 20.74 33.182 20.68 33.212 20.6033C33.287 20.4117 33.332 20.21 33.332 20.0067C33.332 20.005 33.3337 20.0017 33.3337 20C33.3337 19.9983 33.332 19.995 33.332 19.9933C33.332 19.79 33.287 19.5883 33.212 19.3967C33.182 19.32 33.1337 19.26 33.0937 19.19C33.0453 19.1033 33.0137 19.0117 32.9487 18.9333L24.6153 8.93334C24.2837 8.53834 23.8103 8.33334 23.3337 8.33334C22.957 8.33334 22.5787 8.46 22.267 8.72C21.5603 9.30834 21.4637 10.36 22.0537 11.0667L28.1087 18.3333H8.33366C7.41366 18.3333 6.66699 19.08 6.66699 20C6.66699 20.92 7.41366 21.6667 8.33366 21.6667Z"
            fill="black"
          />
        </svg>
      </Link>
    </div>
  );
};

export { HomeHeader };
