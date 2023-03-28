import Accordion from "./components/accordion/Accordion";

export const faqInfos = [
    {
        heading: "Is buying this pass worth it?",
        content:
            "Non odit magnam dolorum. Et odio et maxime consequuntur provident. Error eaque est dolor et qui. Ex odit doloremque consequatur quis. Eaque et pariatur dolores. Magni in quasi dolor repudiandae explicabo.",
    },
    {
        heading: "Is there a Discord?",
        content:
            "Quos quam ipsam consequatur consequatur et distinctio. Facere vel ut dolorem. Quam quo neque quos voluptates cupiditate sit quae.",
    },
    {
        heading: "What are the funds being used for?",
        content:
            "Vel et quam reprehenderit velit. Possimus accusamus eos esse vero quo modi voluptas hic. Quia illo quisquam vel quis qui. Autem labore aut incidunt. Eius non voluptatem et laboriosam in.",
    },
    {
        heading: "Will this pass get me on all the allow lists?",
        content:
            "Non odit magnam dolorum. Et odio et maxime consequuntur provident. Error eaque est dolor et qui. Ex odit doloremque consequatur quis. Eaque et pariatur dolores. Magni in quasi dolor repudiandae explicabo.",
    },
    {
        heading: "How long is this pass valid?",
        content:
            "Quos quam ipsam consequatur consequatur et distinctio. Facere vel ut dolorem. Quam quo neque quos voluptates cupiditate sit quae.",
    },
    {
        heading: "What are the maximum mints per wallet?",
        content:
            "Vel et quam reprehenderit velit. Possimus accusamus eos esse vero quo modi voluptas hic. Quia illo quisquam vel quis qui. Autem labore aut incidunt. Eius non voluptatem et laboriosam in.",
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