import MemberCard, { IMemberCardInfo } from "./MemberCard"

const memberCards: IMemberCardInfo[] = [
    {
        title: "Pink Diamond",
        desc: "Most Rare",
        uri: "/images/Pink_Diamond.png",
        rares: [
            "2,000 NFTs (2,000 x 10) = 20,000 votes",
            "GemsDao alpha club",
            "GemsDao rewards",
            "GemsDao network",
            "Gemsdao Lifetime membership",
            "GemsDao Beta protocols"
        ]
    },
    {
        title: "Yellow Diamond",
        desc: "2ND Most Rare",
        uri: "/images/Yellow_Diamond.png",
        rares: [
            "4,000 NFTs (4,000 x 1) = 4,000 votes",
            "GemsDao alpha club",
            "GemsDao rewards",
            "GemsDao network",
            "Gemsdao Lifetime membership",
            "GemsDao Beta protocols"
        ]
    },
    {
        title: "Blue Diamond",
        desc: "3rd Most Rare",
        uri: "/images/Blue_Diamond.png",
        rares: [
            "4,000 NFTs (4,000 x 1) = 4,000 votes",
            "GemsDao alpha club",
            "GemsDao rewards",
            "GemsDao network",
            "Gemsdao Lifetime membership",
            "GemsDao Beta protocols"
        ]
    },
    {
        title: "Red Diamond",
        desc: "4th Most Rare",
        uri: "/images/Red_Diamond.png",
        rares: [
            "5,000 NFTs (5,000 x 2) = 10,000 votes",
            "GemsDao alpha club",
            "GemsDao rewards",
            "GemsDao network",
            "Gemsdao Lifetime membership",
            "GemsDao Beta protocols"
        ]
    },
    {
        title: "Green Diamond",
        desc: "5th Most Rare",
        uri: "/images/Green_Diamond.png",
        rares: [
            "5,000 NFTs (5,000 x 2) = 10,000 votes",
            "GemsDao alpha club",
            "GemsDao rewards",
            "GemsDao network",
            "Gemsdao Lifetime membership",
            "GemsDao Beta protocols"
        ]
    },
    {
        title: "Purple Diamond",
        desc: "6th Most Rare",
        uri: "/images/Purple_Diamond.png",
        rares: [
            "6,000 NFTs (6,000 x 4) = 24,000 votes",
            "GemsDao alpha club",
            "GemsDao rewards",
            "GemsDao network",
            "Gemsdao Lifetime membership",
            "GemsDao Beta protocols"
        ]
    },
    {
        title: "White Diamond",
        desc: "7th Most Rare",
        uri: "/images/Normal_Diamond.png",
        rares: [
            "8,000 NFTs (8,000 x 3) = 24,000 votes",
            "GemsDao alpha club",
            "GemsDao rewards",
            "GemsDao network",
            "Gemsdao Lifetime membership",
            "GemsDao Beta protocols"
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