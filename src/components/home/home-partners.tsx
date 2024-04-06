/* eslint-disable @next/next/no-img-element */
import { useInView } from "react-intersection-observer";
import { cn } from "~/utils/cn";

const HomePartners = ({ title, text }: { title: string; text: string }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      className={cn(
        inView ? "top-0 opacity-100" : "-top-10 opacity-0",
        "relative space-y-16 transition-all duration-1000 ease-in",
      )}
      ref={ref}
    >
      <div className="space-y-2 text-center">
        <h4 className="inline-block bg-gradient-to-l from-[#8E43AD] via-[#2ECC70] to-[#2980B9] bg-clip-text text-5xl font-bold uppercase text-transparent">
          {title}
        </h4>
        <p className="text-2xl text-text-gray">{text}</p>
      </div>
      <div>
        <ul className="flex flex-col items-center justify-around space-y-8 md:flex-row md:flex-wrap">
          <li>
            <img
              src="/images/partners/pyth.png"
              alt="Pyth"
              className="h-14 w-auto grayscale"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export { HomePartners };
