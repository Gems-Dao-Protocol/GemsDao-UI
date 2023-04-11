export default function Stats() {
    return (
        <div className="w-full flex flex-col items-center gap-20 py-20 lg:py-[120px]">
            <div className="text-center text-white text-[36px] sm:text-[48px]">
                <span className="font-bold">GemsDao</span>{` is massive`}
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-2 lg:items-stretch">
                <div className="w-full lg:basis-1/3 fit-full-h">
                    <div className="flex items-stretch flex-1">
                        <div className="bg-app-blue-gradient w-[6px] min-w-[6px]"></div>
                        <div className="px-6 xl:px-8 flex flex-col gap-4 xl:gap-6">
                            <div className="text-app-blue-gradient text-[36px] sm:text-[48px]">
                                2,370
                            </div>
                            <div className="text-white text-[26px] xl:text-[30px] font-bold uppercase">
                                Assets
                            </div>
                            <div className="text-white text-[16px] xl:text-[20px] leading-[2]">
                                GemsDao has over 7Billion+ in assets pledged to the Protocol . Verification of these assets can be found in the GemsDao vault.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:basis-1/3 fit-full-h">
                    <div className="flex items-stretch flex-1">
                        <div className="bg-app-blue-gradient w-[6px] min-w-[6px]"></div>
                        <div className="px-6 xl:px-8 flex flex-col gap-4 xl:gap-6">
                            <div className="text-app-blue-gradient text-[36px] sm:text-[48px]">
                                10,000
                            </div>
                            <div className="text-white text-[26px] xl:text-[30px] font-bold uppercase">
                                Memberships
                            </div>
                            <div className="text-white text-[16px] xl:text-[20px] leading-[2]">
                                Join a community of 10 thousand like minded individuals working with rare earth Gems and metals.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:basis-1/3 fit-full-h">
                    <div className="flex items-stretch flex-1">
                        <div className="bg-app-blue-gradient w-[6px] min-w-[6px]"></div>
                        <div className="px-6 xl:px-8 flex flex-col gap-4 xl:gap-6">
                            <div className="text-app-blue-gradient text-[36px] sm:text-[48px]">
                                500,107
                            </div>
                            <div className="text-white text-[26px] xl:text-[30px] font-bold uppercase">
                                Market overview 
                            </div>
                            <div className="text-white text-[16px] xl:text-[20px] leading-[2]">
                                With a current market cap of 100 million+ the decentralization of all Diamond industries will allow for global onboarding and diversification of multiple asset classes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}