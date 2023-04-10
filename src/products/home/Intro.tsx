import { Button } from "@app/common/components/Buttons"
import MintButton from "./components/MintButton"

export default function Intro({ handleMint }: { handleMint: () => void }) {
    return (
        <div className="w-full flex flex-col-reverse justify-center lg:justify-start lg:flex-row lg:items-center gap-4 py-12">
            <div className="w-full sm:basis-5/12 flex flex-col gap-6 sm:gap-10">
                <div className="hidden xl:block text-white text-[36px] sm:text-[48px] font-bold">
                    GemsDao<br />
                    Collector
                </div>
                <div className="xl:hidden text-white text-[36px] sm:text-[48px] font-bold text-center sm:text-left">
                    GemsDao Collector
                </div>
                <div className="text-[16px] sm:text-[20px] text-white leading-[2] text-center sm:text-left">
                    Gems Dao - decentralization of rare earth gems and minerals . This pass accesses all future projects and opportunities created by the DAO .
                </div>
                <div className="w-full flex justify-center sm:justify-start">
                    <div className="w-[200px] sm:w-[320px]">
                        <MintButton onClick={handleMint} />
                    </div>
                </div>
            </div>
            <div className="w-full sm:basis-7/12 flex justify-center">
                <div className="w-full max-w-[700px] xl:max-w-[1000px]">
                    <img src="/images/Card.png" width="100%" />
                </div>
            </div>
        </div>
    )
}