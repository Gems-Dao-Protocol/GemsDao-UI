import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { cn } from "~/utils/cn";

const HomeFeatureSection = () => {
  return (
    <div className="flex flex-col space-y-20 md:space-y-40">
      <HomeFeature
        title="Decentralization at the core"
        text="Gems DAO stands at the forefront of innovation, intersecting the realms of Memefi, DeFi, and NFTs to forge a new paradigm in hybrid decentralized finance. Initially centered around diamond mining, Gems DAO's vision extends to encompassing various analogous mining operations. By doing so, Gems DAO aims to inject deeper liquidity and yield into the DeFi ecosystem through Real World Assets (RWA).  The first meme powered Defi ecosystem."
        button={
          <Link
            href="#"
            className="mx-auto flex h-12 w-64 items-center justify-center rounded-xl border-2 border-[#2A2A2A] bg-[#131313] text-center md:mx-0"
          >
            Learn More
          </Link>
        }
        svg={
          <svg
            width="283"
            height="283"
            viewBox="0 0 283 283"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[200px] w-[200px] md:h-auto md:w-auto"
          >
            <path
              d="M272.616 60.6173C286.461 46.7736 286.461 24.2448 272.616 10.4011C258.771 -3.44263 236.239 -3.44263 222.394 10.4011C217.549 15.2456 214.405 21.1526 212.952 27.3771H70.048C68.5949 21.1526 65.4512 15.2456 60.6061 10.4011C53.8989 3.69461 44.979 0 35.4969 0C26.0147 0 17.0949 3.69461 10.384 10.4011C-3.46133 24.2448 -3.46133 46.7736 10.384 60.6173C15.2291 65.4619 21.1367 68.6052 27.362 70.0582V212.916C20.9834 214.402 15.1305 217.637 10.384 222.383C-3.46133 236.226 -3.46133 258.755 10.384 272.599C17.0912 279.305 26.0111 283 35.4969 283C44.9826 283 53.8989 279.305 60.6061 272.599C65.4512 267.754 68.5949 261.847 70.048 255.623H212.948C214.401 261.847 217.545 267.754 222.39 272.599C229.313 279.521 238.408 282.982 247.503 282.982C256.598 282.982 265.69 279.521 272.616 272.599C286.461 258.755 286.461 236.226 272.616 222.383C267.771 217.538 261.863 214.395 255.638 212.942V70.0582C261.863 68.6052 267.771 65.4619 272.616 60.6173ZM228.816 217.305L185.528 174.021C192.268 164.92 196.262 153.668 196.262 141.5C196.262 129.332 192.272 118.08 185.528 108.979L228.816 65.6955C232.121 67.74 235.688 69.1966 239.372 70.0582V212.942C235.688 213.803 232.121 215.26 228.816 217.305ZM43.6317 212.916V70.0582C47.3158 69.1966 50.883 67.74 54.1873 65.6955L97.4758 108.979C90.7357 118.08 86.7413 129.332 86.7413 141.5C86.7413 153.668 90.732 164.92 97.4758 174.021L54.1982 217.294C50.9341 215.264 47.3742 213.789 43.6317 212.916ZM217.315 54.1956L174.027 97.4791C164.924 90.7398 153.671 86.7459 141.502 86.7459C129.332 86.7459 118.079 90.7398 108.977 97.4791L65.6885 54.1956C67.7332 50.8917 69.19 47.3249 70.0517 43.6413H212.952C213.814 47.3249 215.27 50.8917 217.315 54.1956ZM103.007 141.5C103.007 120.278 120.277 103.01 141.502 103.01C162.726 103.01 179.996 120.274 179.996 141.5C179.996 162.726 162.73 179.99 141.502 179.99C120.274 179.99 103.007 162.726 103.007 141.5ZM65.6885 228.804L108.977 185.521C118.079 192.26 129.332 196.254 141.502 196.254C153.671 196.254 164.924 192.26 174.027 185.521L217.315 228.804C215.27 232.108 213.814 235.675 212.952 239.359H70.048C69.1864 235.675 67.7296 232.108 65.6849 228.804H65.6885ZM233.895 21.901C237.649 18.148 242.574 16.2715 247.507 16.2715C252.44 16.2715 257.365 18.148 261.118 21.901C268.622 29.4033 268.622 41.6151 261.118 49.1174C253.615 56.6197 241.402 56.6197 233.899 49.1174C226.396 41.6151 226.396 29.4033 233.899 21.901H233.895ZM21.8889 21.901C25.5255 18.2648 30.356 16.2642 35.5005 16.2642C40.645 16.2642 45.4756 18.2648 49.1085 21.901C56.6117 29.4033 56.6117 41.6151 49.1085 49.1174C41.6053 56.6197 29.3921 56.6197 21.8889 49.1174C14.3857 41.6151 14.3857 29.4033 21.8889 21.901ZM49.1085 261.099C45.4719 264.735 40.6414 266.736 35.5005 266.736C30.3596 266.736 25.5255 264.735 21.8889 261.099C14.3857 253.597 14.3857 241.385 21.8889 233.883C25.5255 230.246 30.356 228.246 35.5005 228.246C40.645 228.246 45.4756 230.246 49.1085 233.883C56.6117 241.385 56.6117 253.597 49.1085 261.099ZM261.115 261.099C253.612 268.601 241.398 268.601 233.895 261.099C226.392 253.597 226.392 241.385 233.895 233.883C237.649 230.13 242.574 228.253 247.507 228.253C252.44 228.253 257.365 230.13 261.118 233.883C268.622 241.385 268.622 253.597 261.118 261.099H261.115Z"
              fill="url(#paint0_linear_154_2725)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_154_2725"
                x1="0"
                y1="283"
                x2="0"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.136404" stopColor="#52FF4F" />
                <stop offset="0.76992" stopColor="#6BFFB0" />
              </linearGradient>
            </defs>
          </svg>
        }
      />
      <HomeFeature
        title="On-chain, transparent governance"
        text="In our drive towards decentralized Real World Assets (RWAs), we're employing a hybrid DAO model. Token holders utilize on-chain governance for transparent decision-making, while off-chain coordination handles practicalities such as legal compliance, ensuring efficiency and inclusivity as we democratize access to RWAs."
        button={
          <Link
            href="#"
            className="mx-auto flex h-12 w-64 items-center justify-center rounded-xl border-2 border-[#2A2A2A] bg-[#131313] text-center md:mx-0"
          >
            Learn More
          </Link>
        }
        svg={
          <svg
            width="304"
            height="304"
            viewBox="0 0 304 304"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[200px] w-[200px] md:h-auto md:w-auto"
          >
            <path
              d="M274.884 122.89C261.125 122.89 249.566 132.486 246.543 145.335H196.389C195.282 137.927 192.358 131.106 188.087 125.338L223.572 89.8532C228.247 92.7474 233.569 94.202 238.89 94.202C246.346 94.202 253.798 91.3646 259.476 85.6899C270.826 74.3404 270.826 55.8705 259.476 44.521C248.127 33.1715 229.657 33.1715 218.307 44.521C208.58 54.2483 207.197 69.2014 214.144 80.4252L178.659 115.91C172.891 111.639 166.07 108.715 158.662 107.608V57.4508C171.511 54.4279 181.107 42.8689 181.107 29.11C181.107 13.0585 168.049 0 151.997 0C135.946 0 122.887 13.0585 122.887 29.11C122.887 42.8689 132.483 54.4279 145.332 57.4508V107.608C137.924 108.715 131.103 111.639 125.335 115.91L89.8502 80.4252C96.7969 69.2014 95.4141 54.2483 85.6869 44.521C74.3374 33.1715 55.8675 33.1715 44.518 44.521C33.1685 55.8705 33.1685 74.3404 44.518 85.6899C50.1928 91.3646 57.6483 94.202 65.1039 94.202C70.4285 94.202 75.7471 92.7474 80.4222 89.8532L115.907 125.338C111.636 131.106 108.712 137.927 107.605 145.335H57.4508C54.4279 132.486 42.8689 122.89 29.11 122.89C13.0585 122.89 0 135.949 0 152C0 168.052 13.0585 181.11 29.11 181.11C42.8689 181.11 54.4279 171.514 57.4508 158.665H107.605C108.712 166.073 111.636 172.894 115.907 178.662L80.4222 214.147C69.1984 207.2 54.2453 208.583 44.518 218.31C33.1685 229.66 33.1685 248.129 44.518 259.479C50.1928 265.154 57.6483 267.991 65.1039 267.991C72.5595 267.991 80.0121 265.154 85.6899 259.479C95.4171 249.752 96.7999 234.799 89.8531 223.575L125.338 188.09C131.106 192.361 137.927 195.285 145.335 196.392V246.549C132.486 249.572 122.89 261.131 122.89 274.89C122.89 290.942 135.949 304 152 304C168.052 304 181.11 290.942 181.11 274.89C181.11 261.131 171.514 249.572 158.665 246.549V196.392C166.073 195.285 172.894 192.361 178.662 188.09L214.147 223.575C207.2 234.799 208.583 249.752 218.31 259.479C223.985 265.154 231.44 267.991 238.896 267.991C246.352 267.991 253.804 265.154 259.482 259.479C270.832 248.129 270.832 229.66 259.482 218.31C249.755 208.583 234.802 207.2 223.578 214.147L188.093 178.662C192.364 172.894 195.288 166.073 196.395 158.665H246.549C249.572 171.514 261.131 181.11 274.89 181.11C290.942 181.11 304 168.052 304 152C304 135.949 290.942 122.89 274.89 122.89H274.884ZM29.107 167.779C20.4063 167.779 13.3308 160.701 13.3308 152.003C13.3308 143.305 20.4093 136.224 29.107 136.224C37.8047 136.224 44.8832 143.302 44.8832 152.003C44.8832 160.704 37.8047 167.779 29.107 167.779ZM227.735 53.949C230.812 50.8722 234.85 49.3338 238.893 49.3338C242.937 49.3338 246.974 50.8722 250.051 53.949C256.202 60.0996 256.202 70.1113 250.051 76.2619C243.9 82.4125 233.889 82.4125 227.738 76.2619C221.587 70.1113 221.587 60.0996 227.738 53.949H227.735ZM136.218 29.113C136.218 20.4123 143.296 13.3369 151.994 13.3369C160.692 13.3369 167.77 20.4153 167.77 29.113C167.77 37.8107 160.692 44.8922 151.994 44.8922C143.296 44.8922 136.218 37.8137 136.218 29.113ZM53.943 76.2619C47.7924 70.1113 47.7924 60.0996 53.943 53.949C57.0198 50.8722 61.0604 49.3338 65.1009 49.3338C69.1415 49.3338 73.1821 50.8722 76.2589 53.949C82.4095 60.0996 82.4095 70.1113 76.2589 76.2619C70.1082 82.4125 60.0966 82.4125 53.946 76.2619H53.943ZM76.2559 250.051C70.1053 256.202 60.0937 256.202 53.943 250.051C47.7924 243.9 47.7924 233.889 53.943 227.738C57.0198 224.661 61.0604 223.123 65.1009 223.123C69.1415 223.123 73.1821 224.661 76.2589 227.738C82.4095 233.889 82.4095 243.9 76.2589 250.051H76.2559ZM167.773 274.887C167.773 283.588 160.695 290.666 151.997 290.666C143.299 290.666 136.221 283.588 136.221 274.887C136.221 266.186 143.299 259.108 151.997 259.108C160.695 259.108 167.773 266.186 167.773 274.887ZM151.997 183.555C134.599 183.555 120.442 169.398 120.442 152C120.442 134.602 134.599 120.445 151.997 120.445C169.395 120.445 183.552 134.602 183.552 152C183.552 169.398 169.398 183.555 151.997 183.555ZM250.048 227.738C256.199 233.889 256.199 243.9 250.048 250.051C243.897 256.202 233.886 256.202 227.735 250.051C221.584 243.9 221.584 233.889 227.735 227.738C230.812 224.661 234.853 223.123 238.893 223.123C242.934 223.123 246.974 224.661 250.051 227.738H250.048ZM274.884 167.776C266.183 167.776 259.108 160.698 259.108 152C259.108 143.302 266.186 136.221 274.884 136.221C283.582 136.221 290.66 143.299 290.66 152C290.66 160.701 283.582 167.776 274.884 167.776Z"
              fill="url(#paint0_linear_154_2722)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_154_2722"
                x1="0"
                y1="304"
                x2="0"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#514EFF" />
                <stop offset="1" stopColor="#00C2FF" />
              </linearGradient>
            </defs>
          </svg>
        }
      />
    </div>
  );
};

const HomeFeature = ({
  title,
  text,
  button,
  svg,
  reverse,
}: {
  title: string;
  text: string;
  button: React.ReactNode;
  svg: React.ReactNode;
  reverse?: boolean;
}) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      className={cn(
        inView ? "top-0 opacity-100" : "-top-10 opacity-0",
        reverse ? "" : "md:space-x-16",
        "relative flex flex-col items-center space-y-8 text-center transition-all duration-1000 ease-in md:flex-row md:space-y-0 md:text-left",
      )}
      ref={ref}
    >
      <div
        className={cn(
          reverse ? "md:order-last" : "md:order-none",
          "h-[200px] w-[200px] md:h-auto md:min-h-[300px] md:w-auto md:min-w-[300px]",
        )}
      >
        {svg}
      </div>
      <div className={cn(reverse ? "md:mr-16" : "", "space-y-6")}>
        <h5 className="bg-gradient-to-t from-[#2ECC70] to-[#A463BF] bg-clip-text text-3xl font-bold uppercase text-transparent md:text-5xl">
          {title}
        </h5>
        <p className="text-text-gray md:text-2xl">{text}</p>
        {button}
      </div>
    </div>
  );
};

export { HomeFeature, HomeFeatureSection };