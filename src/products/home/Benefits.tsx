export default function Benefits() {
    return (
        <div className="w-full flex flex-col items-center gap-20 py-20 lg:py-[120px]">
            <div className="text-center w-full max-w-[700px]">
                <div className="text-white text-[36px] sm:text-[48px]">
                    <span className="font-bold">Get exclusive</span>{` access to our holder benefits`}
                </div>
                <div className="text-white text-[16px] xl:text-[20px] leading-[2] mt-4">
                    As a PREMINT Collector Pass holder, you will get access to an evolving collector dashboard and features to keep you on top of the hottest mints.
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
                                    Hottest projects
                                </div>
                                <div className="text-white text-[16px] xl:text-[20px] leading-[2]">
                                    Learn about all of the ongoing public projects on GemsDao as well as the alpha lists that are expanding the quickest.
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
                                    Newsletter
                                </div>
                                <div className="text-white text-[16px] xl:text-[20px] leading-[2]">
                                    Subscribe to a token-gated newsletter to stay informed about upcoming mint dates and trending projects.
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
                                    Get early access to upcoming GemsDao public collector features before anyone else has access to them.
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
                                    Private calendar
                                </div>
                                <div className="text-white text-[16px] xl:text-[20px] leading-[2]">
                                    Access your personalized calendar feed showing registration times and mint dates for all projects on the platform.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}