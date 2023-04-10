import Wallet from "@app/common/Wallet"
import { SIDEBAR_ITEMS, SIDEBAR_ROUTES } from "./LayoutConstants"
import { useRouter } from "next/router"
import Tooltip from "@mui/material/Tooltip"

export default function Header() {
    const router = useRouter()

    const routeMatch = (path: string) => {
        return router.pathname === path
    }

    const onClickMenu = (path: string, isActive: boolean) => {
        if (isActive) return
        router.push({
            pathname: path
        })
    }

    return (
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center px-6 xl:px-12 pt-12 sm:pt-16 gap-4">
            <div className="w-[180px] min-w-[180px] sm:w-[240px] xl:w-[320px]">
                <img src="/logo.png" width="100%" />
            </div>
            <div className="flex flex-wrap justify-center gap-6 xl:gap-12 text-white text-[18px] sm:text-[22px]">
                {
                    Object.keys(SIDEBAR_ITEMS).map((key, index) => {
                        const isActive = routeMatch(SIDEBAR_ROUTES[key].link)
                        const isComingSoon = SIDEBAR_ROUTES[key].link === "/coming-soon"
                        return (
                            <div key={key}>
                                <Tooltip
                                    title={
                                        isComingSoon
                                            ? `${SIDEBAR_ITEMS[key]} (Coming Soon)`
                                            : SIDEBAR_ITEMS[key]
                                    }
                                    placement="bottom"
                                >
                                    {!isActive ?
                                        <>
                                            {SIDEBAR_ROUTES[key].type === "external" ?
                                                <a href={SIDEBAR_ROUTES[key].link} target="_blank" rel="noreferrer">
                                                    <span className='text-[20px] text-white font-medium'>{SIDEBAR_ITEMS[key]}</span>
                                                    <div className={`bg-[#00CEFF] h-0.5 w-full ${isActive ? 'block' : 'hidden'}`}></div>
                                                </a> :
                                                <div className={`${isActive ? '' : 'cursor-pointer'}`} onClick={() => onClickMenu(SIDEBAR_ROUTES[key].link, isActive)}>
                                                    <span className='text-[20px] text-white font-medium'>{SIDEBAR_ITEMS[key]}</span>
                                                    <div className={`bg-[#00CEFF] h-0.5 w-full ${isActive ? 'block' : 'hidden'}`}></div>
                                                </div>}
                                        </> :
                                        <div>
                                            <span className='text-[20px] text-white font-medium'>{SIDEBAR_ITEMS[key]}</span>
                                            <div className={`bg-[#00CEFF] h-0.5 w-full 'block'`}></div>
                                        </div>
                                    }
                                </Tooltip>
                            </div>
                        )
                    })
                }
            </div>
            <Wallet />
        </div>
    )
}