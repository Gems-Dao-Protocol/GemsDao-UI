import { Button } from "@app/common/components/Buttons"

export default function Mint() {
    return (
        <div className="w-full flex flex-col items-center gap-20 py-20 lg:py-[120px]">
            <div className="w-full xl:w-11/12 flex flex-col gap-16 gradient-box-border p-10 xl:p-[100px] justify-center items-center">
                <div className="w-full flex flex-col items-center max-w-[700px]">
                    <div className="text-center text-white text-[36px] sm:text-[48px] font-bold">
                        Mint sold out!
                    </div>
                    <div className="text-white text-[16px] xl:text-[20px] leading-[2] mt-4">
                        Thanks to everyone for becoming a PREMINT Collector Pass holder! Looking for a pass? Check out secondary listings on OpenSea!
                    </div>
                </div>
                <div className="w-[200px] sm:w-[320px]">
                    <Button
                        type="primary"
                        href={""}
                        style={{ width: '100%', padding: '20px', fontSize: '30px', fontWeight: 700 }}
                    >
                        Buy now
                    </Button>
                </div>
            </div>
        </div>
    )
}