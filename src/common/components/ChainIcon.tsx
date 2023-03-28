import { ChainId } from "@usedapp/core"

export default function ChainIcon({ chainId, width, height }: { chainId: number, width: string, height: string }) {

    if (chainId === ChainId.Mainnet || chainId === ChainId.Goerli) {
        return (
            <div className={`bg-center bg-no-repeat bg-contain bg-[url('./chain_icons/ethereum.png')]`} style={{ borderRadius: '50%', width: width, height: height }} />
        )
    }

    if (chainId === ChainId.Andromeda) {
        return (
            <div className={`bg-white flex justify-center items-center`} style={{ borderRadius: '50%' }}>
                <div className={`bg-center bg-no-repeat bg-contain bg-[url('./chain_icons/andromeda.png')]`} style={{ borderRadius: '50%', width: width, height: height }} />
            </div>
        )
    }

    if (chainId === ChainId.Aurora) {
        return (
            <div className={`bg-center bg-no-repeat bg-contain bg-[url('./chain_icons/aurora.svg')]`} style={{ borderRadius: '50%', width: width, height: height }} />
        )
    }

    if (chainId === ChainId.Avalanche) {
        return (
            <div className={`bg-center bg-no-repeat bg-contain bg-[url('./chain_icons/avalanche.svg')]`} style={{ borderRadius: '50%', width: width, height: height }} />
        )
    }

    if (chainId === ChainId.Arbitrum) {
        return (
            <div className={`bg-white flex justify-center items-center`} style={{ borderRadius: '50%' }}>
                <div className={`bg-center bg-no-repeat bg-contain bg-[url('./chain_icons/arbitrum.svg')]`} style={{ borderRadius: '50%', width: width, height: height }} />
            </div>
        )
    }

    if (chainId === ChainId.BSC || chainId === ChainId.BSCTestnet) {
        return (
            <div className={`bg-center bg-no-repeat bg-contain bg-[url('./chain_icons/bsc.svg')]`} style={{ borderRadius: '50%', width: width, height: height }} />

        )
    }

    if (chainId === ChainId.Cronos) {
        return (
            <div className={`bg-white flex justify-center items-center`} style={{ borderRadius: '50%', width: width, height: height }}>
                <div className={`w-[28px] h-[28px] bg-center bg-no-repeat bg-contain bg-[url('./chain_icons/cronos.svg')]`} style={{ borderRadius: '50%', width: width, height: height }} />
            </div>


        )
    }

    if (chainId === ChainId.Fantom) {
        return (
            <div className={`bg-center bg-no-repeat bg-contain bg-[url('./chain_icons/fantom.svg')]`} style={{ borderRadius: '50%', width: width, height: height }} />

        )
    }

    if (chainId === ChainId.Harmony) {
        return (
            <div className={`bg-white flex justify-center items-center`} style={{ borderRadius: '50%', width: width, height: height }}>
                <div className={`w-[22px] h-[22px] bg-center bg-no-repeat bg-contain bg-[url('./chain_icons/harmony.svg')]`} />
            </div>
        )
    }

    if (chainId === ChainId.Moonbeam) {
        return (
            <div className={`bg-white flex justify-center items-center`} style={{ borderRadius: '50%', width: width, height: height }}>
                <div className={`bg-center bg-no-repeat bg-contain bg-[url('./chain_icons/moonbeam.svg')]`} style={{ borderRadius: '50%', width: width, height: height }} />
            </div>

        )
    }

    if (chainId === ChainId.OasisEmerald) {
        return (
            <div className={`bg-center bg-no-repeat bg-contain bg-[url('./chain_icons/oasis.svg')]`} style={{ borderRadius: '50%', width: width, height: height }} />
        )
    }

    if (chainId === ChainId.Optimism) {
        return (
            <div className={`bg-center bg-no-repeat bg-contain bg-[url('./chain_icons/optimism.svg')]`} style={{ borderRadius: '50%', width: width, height: height }} />
        )
    }

    if (chainId === ChainId.Polygon) {
        return (
            <div className={`bg-white flex justify-center items-center`} style={{ borderRadius: '50%', width: width, height: height }}>
                <div className={`w-[24px] h-[24px] bg-center bg-no-repeat bg-contain bg-[url('./chain_icons/polygon.svg')]`} style={{ borderRadius: '50%', width: width, height: height }} />
            </div>

        )
    }

    if (chainId === ChainId.Velas) {
        return (
            <div className={`bg-white flex justify-center items-center`} style={{ borderRadius: '50%', width: width, height: height }}>
                <div className={`w-[28px] h-[28px] bg-center bg-no-repeat bg-contain bg-[url('./chain_icons/velas.svg')]`} style={{ borderRadius: '50%', width: width, height: height }} />
            </div>
        )
    }

    return (
        <>
        </>
    )
}
