import { useGemsDao } from "@app/contexts"
import Benefits from "@app/products/home/Benefits"
import Faq from "@app/products/home/Faq"
// import Header from "@app/products/home/Header"
import Intro from "@app/products/home/Intro"
import Mint from "@app/products/home/Mint"
import Stats from "@app/products/home/Stats"
import MintModal from "@app/products/home/components/MintModal"
import Header from "@app/products/membership/Header"
import { useState } from "react"

const Home = () => {
    const [isOpenMint, setIsOpenMint] = useState(false)
    const { allNFTInfos, currencyTokenInfo } = useGemsDao()

    const handleMint = () => {
        setIsOpenMint(true)
    }

    return (
        <div className="w-full flex justify-center bg-top bg-no-repeat bg-contain bg-[url('./images/Background.png')] flex-1">
            <div className="w-full bg-app-default flex justify-center">
                <div className='w-full mx-6 sm:mx-10 lg:w-10/12 lg:mx-0'>
                    {allNFTInfos.length > 0 && currencyTokenInfo && <MintModal isOpen={isOpenMint} handleClose={() => setIsOpenMint(false)} />}
                    <Header />
                    <Intro handleMint={handleMint} />
                    <Stats />
                    <Benefits />
                    <Faq />
                    <Mint handleMint={handleMint} />
                </div>
            </div>
        </div>
    );
};

export default Home;