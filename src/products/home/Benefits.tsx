export default function Benefits() {
    return (
        <div className="w-full flex flex-col items-center gap-20 py-20 lg:py-[120px]">
            <div className="text-center w-full max-w-[700px]">
                <div className="text-white text-[36px] sm:text-[48px]">
                    <span className="font-bold">Get exclusive</span>{` access to our holder benefits`}
                </div>
                <div className="text-white text-[16px] xl:text-[20px] leading-[2] mt-4">
                    As a GEMSDAO membership holder , you will get access to a complete world of decentralized rare earth gems , metals and useful protocols.
                </div>
            </div>
            <div className="w-full xl:w-11/12 flex flex-col gap-16">
                <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-6 lg:justify-around lg:items-stretch">
                    <div className="w-full lg:basis-1/2">
                        <div className="flex items-stretch">
                            <div className="pt-4 max-w-[50px] min-w-[50px] lg:max-w-[70px] lg:min-w-[70px]">
                                <img src="/images/benefits_svg/fire.svg" />
                            </div>
                            <div className="px-6 xl:px-8 flex flex-col gap-2 xl:gap-6">
                                <div className="text-white text-[26px] xl:text-[30px] font-bold uppercase">
                                    Future Projects
                                </div>
                                <div className="text-white text-[16px] xl:text-[20px] leading-[2]">
                                    Get early Access to all of the Future  projects in the GemsDao ecosystem.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:basis-1/2">
                        <div className="flex items-stretch">
                            <div className="pt-4 max-w-[50px] min-w-[50px] lg:max-w-[70px] lg:min-w-[70px]">
                                <img src="/images/benefits_svg/clipboard.svg" />
                            </div>
                            <div className="px-6 xl:px-8 flex flex-col gap-2 xl:gap-6">
                                <div className="text-white text-[26px] xl:text-[30px] font-bold uppercase">
                                    DAO
                                </div>
                                <div className="text-white text-[16px] xl:text-[20px] leading-[2]">
                                    This Organization exists for <b>GEMS DAO</b> participants to allocate and delegate  resources for the long-term growth and prosperity of the GEMS project.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-6 lg:justify-around lg:items-stretch">
                    <div className="w-full lg:basis-1/2">
                        <div className="flex items-stretch">
                            <div className="pt-4 max-w-[50px] min-w-[50px] lg:max-w-[70px] lg:min-w-[70px]">
                                <img src="/images/benefits_svg/key.svg" />
                            </div>
                            <div className="px-6 xl:px-8 flex flex-col gap-2 xl:gap-6">
                                <div className="text-white text-[26px] xl:text-[30px] font-bold uppercase">
                                    Beta Access
                                </div>
                                <div className="text-white text-[16px] xl:text-[20px] leading-[2]">
                                    Membership holders will receive beta access to the Gemsdao decentralized protocols and technologies released within the ecosystem.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:basis-1/2">
                        <div className="flex items-stretch">
                            <div className="pt-4 max-w-[50px] min-w-[50px] lg:max-w-[70px] lg:min-w-[70px]">
                                <img src="/images/benefits_svg/calendar.svg" />
                            </div>
                            <div className="px-6 xl:px-8 flex flex-col gap-2 xl:gap-6">
                                <div className="text-white text-[26px] xl:text-[30px] font-bold uppercase">
                                    GEMS DAO VAULT
                                </div>
                                <div className="text-white text-[16px] xl:text-[20px] leading-[2]">
                                    Geology reports and asset verification for each class presented by the Gems Dao Protocol.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}