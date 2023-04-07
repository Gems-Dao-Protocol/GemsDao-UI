import Accordion from "./components/accordion/Accordion";

export const faqInfos = [
    {
        heading: "Is buying this pass worth it?",
        content:
            "GEMSDAO membership holders will encase a community of likeminded individuals looking to learn and participate in the world of decentralized earth protocols. If that sounds like you welcome aboard.",
    },
    {
        heading: "Is there a Discord?",
        content:
            "Yes GEMSDAOXYZ is the discord.(will update final discord)",
    },
    {
        heading: "What are the funds being used for?",
        content:
            "Funds will be used to manage and advance the GEMSDAO protocal and technologies. Mint price per membership is 0.267.",
    },
    {
        heading: "Will this pass get me on all the allow lists?",
        content:
            "Yes this membership gives access to all future technologies including the GEMSDAO marketplace and DAO’s.",
    },
    {
        heading: "How long is this pass valid?",
        content:
            "This pass is valid for a lifetime and beyond.",
    },
    {
        heading: "What are the maximum mints per wallet?",
        content:
            "Maximum mints per wallet will be limited to 10 per wallet.",
    }
];

export default function Faq() {

    const faqComps = () => {
        let faqs = [];
        for (let i = 0; i < faqInfos.length; i += 2) {
            faqs.push(
                <div key={i} className="w-full flex flex-col lg:flex-row gap-[80px] lg:gap-10">
                    <div className="w-full lg:basis-1/2">
                        <Accordion heading={faqInfos[i].heading} content={faqInfos[i].content} />
                    </div>
                    {(i + 1) < faqInfos.length && <div className="w-full lg:basis-1/2">
                        <Accordion heading={faqInfos[i + 1].heading} content={faqInfos[i + 1].content} />
                    </div>}
                </div>
            )
        }
        return faqs
    }

    return (
        <div className="w-full flex flex-col items-center gap-20 py-20 lg:py-[120px]">
            <div className="w-full xl:w-11/12 flex flex-col gap-16">
                <div className="text-center text-white text-[36px] sm:text-[48px] uppercase font-bold">
                    Faq
                </div>
                <div className="w-full flex flex-col gap-[80px]">
                    {faqComps()}
                </div>
            </div>
        </div >
    )
}