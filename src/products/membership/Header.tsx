import { menu_items } from "@app/common/layout/Footer"
import Wallet from "@app/common/Wallet"

export default function Header() {
    return (
        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center pt-12 sm:pt-16 gap-4">
            <div className="w-[180px] sm:w-[240px] xl:w-[320px]">
                <img src="/logo.png" width="100%" />
            </div>
            <Wallet />
        </div>
    )
}