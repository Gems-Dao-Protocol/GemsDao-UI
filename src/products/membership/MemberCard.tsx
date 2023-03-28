export interface IMemberCardInfo {
    title: string
    desc: string
    uri: string
    rares: string[]
}

export default function MemberCard({ cardInfo, index }: { cardInfo: IMemberCardInfo, index: number }) {
    return (
        <div className={`w-full flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 items-center md:justify-around py-10 py-12`}>
            <div className="w-full md:w-1/3 max-w-[720px]">
                <img src={cardInfo.uri} width="100%" />
            </div>
            <div className="flex flex-col gap-6">
                <div className="">
                    <div className="text-white text-[36px] sm:text-[48px] font-bold">
                        {cardInfo.title}
                    </div>
                    <div className="text-white text-[36px] sm:text-[48px]">
                        {cardInfo.desc}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    {cardInfo.rares.map((rare: string, index: number) => {
                        return (
                            <div key={index} className="flex gap-6 items-center">
                                <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.60425 11L10.8584 19.2542L27.3959 2.74585" stroke="#2748BD" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="text-white text-[16px] xl:text-[20px]">
                                    {rare}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}