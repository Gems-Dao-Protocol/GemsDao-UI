import MemberCard, { IMemberCardInfo } from "./MemberCard"

const memberCards: IMemberCardInfo[] = [
    {
        title: "Pink Diamond",
        desc: "Most Rare",
        uri: "/images/Pink_Diamond.png",
        rares: [
            "25x weekly + 5x monthly",
            "GemsDao alpha club",
            "GemsDao rewards",
            "GemsDao network",
            "GemsDao meta pass",
            "GemsDao API portal"
        ]
    },
    {
        title: "Yellow Diamond",
        desc: "2ND Most Rare",
        uri: "/images/Yellow_Diamond.png",
        rares: [
            "25x weekly + 5x monthly",
            "GemsDao alpha club",
            "GemsDao rewards",
            "GemsDao network",
            "GemsDao meta pass",
            "GemsDao API portal"
        ]
    },
    {
        title: "Blue Diamond",
        desc: "3rd Most Rare",
        uri: "/images/Blue_Diamond.png",
        rares: [
            "25x weekly + 5x monthly",
            "GemsDao alpha club",
            "GemsDao rewards",
            "GemsDao network",
            "GemsDao meta pass",
            "GemsDao API portal"
        ]
    },
    {
        title: "Red Diamond",
        desc: "4th Most Rare",
        uri: "/images/Red_Diamond.png",
        rares: [
            "25x weekly + 5x monthly",
            "GemsDao alpha club",
            "GemsDao rewards",
            "GemsDao network",
            "GemsDao meta pass",
            "GemsDao API portal"
        ]
    },
    {
        title: "Green Diamond",
        desc: "5th Most Rare",
        uri: "/images/Green_Diamond.png",
        rares: [
            "25x weekly + 5x monthly",
            "GemsDao alpha club",
            "GemsDao rewards",
            "GemsDao network",
            "GemsDao meta pass",
            "GemsDao API portal"
        ]
    },
    ,
    {
        title: "Purple Diamond",
        desc: "6th Most Rare",
        uri: "/images/Purple_Diamond.png",
        rares: [
            "25x weekly + 5x monthly",
            "GemsDao alpha club",
            "GemsDao rewards",
            "GemsDao network",
            "GemsDao meta pass",
            "GemsDao API portal"
        ]
    }
]

export default function MemberCards() {
    return (
        <div className="w-full flex flex-col gap-20 my-16">
            {memberCards.map((each: IMemberCardInfo, index: number) => {
                return (
                    <MemberCard key={index} cardInfo={each} index={index} />
                )
            })}
        </div>
    )
}