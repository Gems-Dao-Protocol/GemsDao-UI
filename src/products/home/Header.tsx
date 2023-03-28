import { menu_items } from "@app/common/layout/Footer"

export default function Header() {
    return (
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center pt-12 sm:pt-16 gap-4">
            <div className="w-[180px] sm:w-[240px] xl:w-[320px]">
                <img src="/logo.png" width="100%" />
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white text-[18px] sm:text-[22px]">
                {
                    menu_items.map((each, index) => {
                        return (
                            <a key={index} href={each.link} target="_blank" rel="noreferrer">
                                {each.label}
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}