import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import SEO from "~/components/seo";
import { Toaster } from "react-hot-toast";
import { cn } from "~/utils/cn";
import { useState } from "react";

export default function Home() {
  const [inverse, setInverse] = useState(true);

  const copyToClipboard = async (
    text: string,
    successMessage: string,
  ): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      alert(successMessage);
      return true;
    } catch (error) {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);

        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        alert(successMessage);
        return true;
      } catch (err) {
        alert("Copying to clipboard failed!");
        return false;
      }
    }
  };

  return (
    <>
      <Head>
        <title>Gems Dao</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SEO />
      <Toaster />
      <div className="flex w-screen flex-col">
        <div className="relative aspect-[1/1.05] w-screen">
          <div className="absolute right-10 top-10 z-20">
            <div className="toggle toggle--like">
              <input
                type="checkbox"
                id="toggle--like"
                className="toggle--checkbox"
                onChange={() => setInverse(!inverse)}
                // onClick={() => setInverse(!inverse)}
              />
              <label
                className="toggle--btn"
                htmlFor="toggle--like"
                // onClick={() => setInverse(!inverse)}
              >
                <span className="toggle--feature"></span>
              </label>
            </div>
          </div>
          <Image
            src="/images/splash-image-1.png"
            alt="Splash image"
            layout="fill"
            objectFit="cover"
            useMap="#image_map"
            className={cn(inverse ? "invert" : "", "z-10")}
            quality={100}
          />
          <Link href="/#" target="_blank">
            <div className="absolute left-[17%] top-[62%] z-20 aspect-square w-[3rem] cursor-pointer rounded-full lg:w-[10rem]" />
          </Link>
        </div>
        <div className="relative aspect-[1/1.05] w-screen">
          <Image
            src="/images/splash-image-2.png"
            alt="Splash image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className={cn(inverse ? "invert" : "", "z-10")}
          />
        </div>
        <div className="relative aspect-[1/1.1] w-screen">
          <Image
            src="/images/splash-image-3.png"
            alt="Splash image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className={cn(inverse ? "invert" : "", "z-10")}
          />
        </div>
        <div className="relative aspect-[1/1.1] w-screen">
          <Image
            src="/images/splash-image-4.png"
            alt="Splash image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className={cn(inverse ? "invert" : "", "z-10")}
          />
          {/* <div className="absolute bottom-[11%] left-[50%] z-20 -translate-x-[50%] md:bottom-[7%] md:text-2xl">
            <Image
              src="/images/pre-sale-below.png"
              alt="Coming soon"
              className="mx-auto h-[42px] w-[200px] md:h-[216px] md:w-[1024px]"
              quality={100}
              width={200}
              height={42}
            />
          </div> */}
          {/* <div className="absolute bottom-[3%] left-[50%] z-20 w-10/12 -translate-x-[50%] md:bottom-[2%] ">
            <Image
              src="/images/pre-sale-wallet.png"
              alt="Coming soon"
              className="mx-auto h-[48px] w-[390px] md:w-full"
              quality={100}
              width={390}
              height={48}
            />
          </div> */}
          <div
            className="absolute bottom-[14%] left-[47%] z-20 flex w-10/12 -translate-x-[50%] cursor-pointer flex-col items-center"
            onClick={async () => {
              await copyToClipboard(
                "43HTu8rWAoCjXq9hafbHHgqwsQuiJCJRu8mRRFvxP6yW",
                "Address successfully copied",
              );
            }}
          >
            <span className="text-xs font-[800] text-[#11F121] lg:text-2xl">
              Pre Sale Wallet
            </span>
            <span className="text-[.4rem] font-[800] text-[#11F121] lg:text-2xl">
              43HTu8rWAoCjXq9hafbHHgqwsQuiJCJRu8mRRFvxP6yW
            </span>
          </div>
        </div>
        <div className="relative aspect-[1/1.1] w-screen">
          <Image
            src="/images/splash-image-5.png"
            alt="Splash image"
            layout="fill"
            objectFit="cover"
            className={cn(inverse ? "invert" : "", "z-10")}
            quality={100}
          />
          <Link href="/" target="_blank">
            <div className="absolute bottom-[7.2%] left-[50%] z-20 h-[3rem] w-[10rem] -translate-x-[50%] cursor-pointer rounded-[10px] lg:h-[8rem] lg:w-[34rem]" />
          </Link>
        </div>
      </div>
    </>
  );
}
