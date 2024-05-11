import Head from "next/head";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import SEO from "~/components/seo";

export default function Index() {
  return (
    <>
      <Head>
        <title>Gems Dao</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SEO />
      <Toaster />
      <div className="relative h-screen w-screen overflow-hidden bg-black">
        <div className="relative z-10 h-screen w-screen overflow-hidden">
          <div className="absolute z-30 flex h-full w-full items-center justify-center">
            {/* <h1 className="font-bold md:text-7xl">Coming Soon</h1> */}
            <Image
              src="/images/loading-gems.webp"
              alt="Loading..."
              className="h-9 w-auto md:h-20"
              width={512}
              height={99}
            />
          </div>
          <div className="absolute left-1/2 z-20 h-full w-[180%] -translate-x-1/2 lg:w-full">
            <video
              className="h-full w-full object-contain"
              autoPlay={true}
              playsInline
              loop
              muted
            >
              <source src="/images/loading-gems.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}
