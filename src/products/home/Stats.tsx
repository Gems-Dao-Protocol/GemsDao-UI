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
                                Projects
                            </div>
                            <div className="text-white text-[16px] xl:text-[20px] leading-[2]">
                                Over 2,300 projects have managed their access lists with PREMINT.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:basis-1/3 fit-full-h">
                    <div className="flex items-stretch flex-1">
                        <div className="bg-app-blue-gradient w-[6px] min-w-[6px]"></div>
                        <div className="px-6 xl:px-8 flex flex-col gap-4 xl:gap-6">
                            <div className="text-app-blue-gradient text-[36px] sm:text-[48px]">
                                1,881,644
                            </div>
                            <div className="text-white text-[26px] xl:text-[30px] font-bold uppercase">
                                Registrations
                            </div>
                            <div className="text-white text-[16px] xl:text-[20px] leading-[2]">
                                Projects have registered over 1.8 million entries to their access lists.
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
                                Collectors
                            </div>
                            <div className="text-white text-[16px] xl:text-[20px] leading-[2]">
                                Half a million wallets have connected to PREMINT to register for lists.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}