import { useEthers } from "@usedapp/core"
import localforage from "localforage"
import { Web3ModalButton } from "./WalletConnect/Web3Modal"
import { shortenAddress } from '@app/utils/utils'
import { Button } from "./components/Buttons"

const WalletIcon = () => {
    return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.5833 28.2291C36.7083 29.0833 36.2083 30.3124 36.3333 31.6249C36.5208 33.8749 38.5833 35.5207 40.8333 35.5207H44.7916V37.9999C44.7916 42.3124 41.2707 45.8333 36.9583 45.8333H13.0416C8.72909 45.8333 5.20825 42.3124 5.20825 37.9999V23.9791C5.20825 19.6666 8.72909 16.1458 13.0416 16.1458H36.9583C41.2707 16.1458 44.7916 19.6666 44.7916 23.9791V26.9791H40.5832C39.4166 26.9791 38.3541 27.4374 37.5833 28.2291Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.20825 25.8542V16.3334C5.20825 13.8542 6.72909 11.6459 9.04159 10.7709L25.5833 4.52088C26.1826 4.29502 26.8278 4.21797 27.4635 4.29635C28.0992 4.37473 28.7063 4.6062 29.2329 4.97088C29.7594 5.33556 30.1896 5.82257 30.4865 6.3901C30.7834 6.95762 30.9381 7.58872 30.9374 8.22921V16.1459M14.5833 25H29.1666M46.9978 29.1042V33.3959C46.9978 34.5417 46.0812 35.4792 44.9145 35.5209H40.8312C38.5812 35.5209 36.5187 33.875 36.3312 31.625C36.2062 30.3125 36.7062 29.0834 37.5812 28.2292C38.352 27.4375 39.4145 26.9792 40.5812 26.9792H44.9145C46.0812 27.0209 46.9978 27.9584 46.9978 29.1042Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function BalanceAndDisconnect() {
    const { deactivate, account, connector } = useEthers()

    const handleDisconnect = async () => {
        await localforage.setItem("connectionStatus", false)
        deactivate()
        if (connector) {
            (connector as any)?.deactivate()
        }
    }

    return (
        <div className="mt-6 w-[280px]">
            <Button
                type="primary"
                onClick={handleDisconnect}
                style={{ width: '100%', padding: '20px', fontSize: '30px', fontWeight: 700 }}
            >
                <div className='w-full flex gap-4 justify-center items-center'>
                    <WalletIcon />
                    <span>{shortenAddress(account, 3)}</span>
                </div>
            </Button>
        </div>
    )
}

export default function Wallet() {
    const { account } = useEthers()
    const activateProvider = Web3ModalButton()
    const isConnected = !!account

    return (
        <div className="flex justify-center">
            {!isConnected && (
                <div className="mt-6 w-[260px] sm:w-[280px]">
                    <Button
                        type="primary"
                        onClick={activateProvider}
                        style={{ width: '100%', padding: '20px', fontSize: '30px', fontWeight: 700 }}
                    >
                        <div className="flex justify-center items-center gap-4">
                            <WalletIcon />
                            <span>Connect</span>
                        </div>
                    </Button>
                </div>
            )}
            {isConnected && <BalanceAndDisconnect />}
        </div>
    )
}