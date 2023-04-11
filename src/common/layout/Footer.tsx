
const socials = [
    { src: "/images/socials/discord.png", link: "" },
    { src: "/images/socials/instagram.png", link: "" },
    { src: "/images/socials/tiktok.png", link: "" },
    { src: "/images/socials/twiter.png", link: "" },
    { src: "/images/socials/youtube.png", link: "" }
]

export default function Footer() {
    return (
        <div className='w-full bg-app-footer flex justify-center py-12 xl:py-20'>
            <div className='w-full mx-6 sm:mx-10 lg:w-10/12 lg:mx-0'>
                <div className="w-full flex flex-col-reverse xl:flex-row xl:justify-between items-center gap-6" style={{ fontFamily: 'Play' }}>
                    <div className="flex flex-col items-center xl:items-start gap-8 xl:gap-2">
                        {/* <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white text-[20px] sm:text-[24px]">
                            {
                                menu_items.map((each, index) => {
                                    return (
                                        <a key={index} href={each.link} target="_blank" rel="noreferrer">
                                            {each.label}
                                        </a>
                                    )
                                })
                            }
                        </div> */}
                        <div className="text-center text-[20px] sm:text-[24px] text-[#00CEFF]">
                            <span className='font-bold'>Copyright 2023 GemsDao</span>{` | By Defi Branding LLC`}
                        </div>
                    </div>
                    <div className="flex gap-4 sm:gap-6">
                        {
                            socials.map((each, index) => {
                                return (
                                    <a key={index} href={each.link} target="_blank" rel="noreferrer">
                                        <div className="w-[36px] sm:w-[48px]">
                                            <img src={each.src} width="100%" />
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}