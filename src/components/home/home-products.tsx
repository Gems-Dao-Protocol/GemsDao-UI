/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { cn } from "~/utils/cn";

const HomeProducts = ({ title, text }: { title: string; text: string }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.25,
    triggerOnce: true,
  });

  return (
    <div
      className={cn(
        inView ? "top-0 opacity-100" : "-top-10 opacity-0",
        "relative space-y-16 transition-all duration-1000 ease-in",
      )}
      ref={ref}
    >
      <div className="space-y-2 text-center">
        <h4 className="inline-block bg-gradient-to-t from-[#2ECC70] to-[#A463BF] bg-clip-text text-4xl font-bold uppercase text-transparent md:text-7xl md:leading-tight">
          {title}
        </h4>
        <p className="text-text-gray md:text-2xl md:leading-9">{text}</p>
      </div>
      <div className="grid max-w-7xl gap-6 md:grid-cols-3">
        <HomeProduct
          number={32}
          title="Trade"
          text="An opensource crosschain RWA focused decentralized exchange built on Solana."
          image="/images/app-logo.png"
          buttonText="Start Trading"
          buttonLink="#"
        />
        <HomeProduct
          number={20}
          title="DAO"
          image="/images/dao-panel.png"
          imageSize={140}
          text="Vote and participate in decentralized governance for the advancement of the Gemsdao ecosystem."
          buttonText="Governance"
          buttonLink="#"
        />
        <HomeProduct
          number={10}
          title="RWA Vaults"
          text="Coming soon"
          buttonText="Coming soon"
          buttonLink="#"
        />
      </div>
    </div>
  );
};

const HomeProduct = ({
  number,
  title,
  text,
  image,
  imageSize,
  buttonText,
  buttonLink,
}: {
  number: number;
  title: string;
  text: string;
  image?: string;
  imageSize?: number;
  buttonText?: string;
  buttonLink?: string;
}) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.9,
    triggerOnce: true,
  });

  return (
    <div
      className={cn(
        inView ? `top-0 opacity-100` : `-top-${number} opacity-0`,
        "relative flex flex-col items-center justify-between space-y-10 overflow-hidden rounded-2xl border-2 border-[#2D2D2D] px-10 pb-8 pt-10 transition-all duration-1000 ease-in",
      )}
      style={{
        background: "rgba(197, 197, 197, 0.08)",
      }}
      ref={ref}
    >
      <div>
        <div
          className="absolute top-0 z-0 h-20 w-56 rounded-xl blur-[50px]"
          style={{
            background: "linear-gradient(360deg, #514EFF 0%, #00C2FF 100%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center space-y-8 text-center">
          {image ? (
            <img
              height={imageSize ?? "100"}
              width={imageSize ?? "100"}
              className={imageSize ? "" : "h-[100px] w-auto"}
              src={image}
              alt="Gems DAO"
            />
          ) : (
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M70.95 0H29.05C10.85 0 0 10.85 0 29.05V70.9C0 89.15 10.85 100 29.05 100H70.9C89.1 100 99.95 89.15 99.95 70.95V29.05C100 10.85 89.15 0 70.95 0ZM44.95 75C44.95 75.5 44.85 75.95 44.65 76.45C44.25 77.35 43.55 78.1 42.6 78.5C42.15 78.7 41.65 78.8 41.15 78.8C40.65 78.8 40.2 78.7 39.7 78.5C39.25 78.3 38.85 78.05 38.5 77.7L23.75 62.95C22.3 61.5 22.3 59.1 23.75 57.65C25.2 56.2 27.6 56.2 29.05 57.65L37.4 66V25C37.4 22.95 39.1 21.25 41.15 21.25C43.2 21.25 44.95 22.95 44.95 25V75ZM76.2 42.4C75.45 43.15 74.5 43.5 73.55 43.5C72.6 43.5 71.65 43.15 70.9 42.4L62.55 34.05V75C62.55 77.05 60.85 78.75 58.8 78.75C56.75 78.75 55.05 77.05 55.05 75V25C55.05 24.5 55.15 24.05 55.35 23.55C55.75 22.65 56.45 21.9 57.4 21.5C58.3 21.1 59.35 21.1 60.25 21.5C60.7 21.7 61.1 21.95 61.45 22.3L76.2 37.05C77.65 38.55 77.65 40.95 76.2 42.4Z"
                fill="white"
              />
            </svg>
          )}
          <div className="space-y-3">
            <h5 className="text-3xl font-bold">{title}</h5>
            <p className="text-2xl text-text-gray">{text}</p>
          </div>
        </div>
      </div>
      {buttonText && (
        <Link
          href={buttonLink ?? "/"}
          aria-disabled={!buttonLink}
          className={cn(
            !buttonLink ? "pointer-events-none opacity-50" : "",
            "flex h-12 w-64 items-center justify-center rounded-xl font-bold",
          )}
          style={{
            background:
              "linear-gradient(360deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)",
          }}
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
};

export { HomeProduct, HomeProducts };
