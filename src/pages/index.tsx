import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <div className="w-screen flex flex-col">
        <div className="w-screen aspect-[1/1.05] relative">
            <Image src="/images/splash-image-1.png" alt="Splash image" layout="fill" objectFit="cover" useMap="#image_map" className="z-10" />

        <Link href="/#" target="_blank">
            <div className="z-20 w-[3rem] lg:w-[10rem] aspect-square rounded-full absolute top-[62%] left-[17%] cursor-pointer" />
        </Link>
        </div>
        <div className="w-screen aspect-[1/1.05] relative">
            <Image src="/images/splash-image-2.png" alt="Splash image" layout="fill" objectFit="cover" />
        </div>
        <div className="w-screen aspect-[1/1.1] relative">
            <Image src="/images/splash-image-3.png" alt="Splash image" layout="fill" objectFit="cover" />
        </div>
        <div className="w-screen aspect-[1/1.1] relative">
            <Image src="/images/splash-image-4.png" alt="Splash image" layout="fill" objectFit="cover" className="z-10" />

            <Link href="/#" target="_blank">
                <div className="z-20 w-[10rem] lg:w-[34rem] h-[3rem] lg:h-[8rem] rounded-[10px] absolute bottom-[7.2%] left-[50%] -translate-x-[50%] cursor-pointer" />
            </Link>
        </div>
    </div>
    );
};

Home.variant = 'splash'

