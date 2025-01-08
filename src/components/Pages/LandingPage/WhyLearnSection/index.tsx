import { useEffect, useRef, useState } from "react";

import WhyLearn from "./WhyLearn";
import line_icon from "../../../../assets/svgs/line_icon.svg";

/**
 * Renders the WhyLearnSection component, which displays information about learning with Gloed.
 *
 * @return {JSX.Element} The WhyLearnSection component
 */
const WhyLearnSection = () => {
  const classes = [
    "animate-slideside300",
    "animate-slidein300",
    "animate-slidein500",
    "animate-slidein700",
  ];
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { rootMargin: "-150px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref.current]); // Only re-create observer if ref changes

  useEffect(() => {
    if (isIntersecting) {
      ref.current?.querySelector("h1")?.classList.add(classes[1]);
      ref.current?.querySelector("h2")?.classList.add(classes[2]);
      ref.current?.querySelector("p")?.classList.add(classes[3]);
      ref.current?.querySelector("img")?.classList.add(classes[0]);
      ref.current?.querySelector("ul")?.classList.add(classes[0]);
    } else {
      ref.current?.querySelector("h1")?.classList.remove(classes[1]);
      ref.current?.querySelector("h2")?.classList.remove(classes[2]);
      ref.current?.querySelector("p")?.classList.remove(classes[3]);
      ref.current?.querySelector("img")?.classList.remove(classes[0]);
      ref.current?.querySelector("ul")?.classList.remove(classes[0]);
    }
  }, [isIntersecting]);

  return (
    <section
      ref={ref}
      className="flex flex-col px-3 xl:px-4 2xl:px-20 py-16 2xl:py-[120px] max-w-[500px] lg:max-w-[700px] xl:max-w-[1100px] 2xl:max-w-full 3xl:max-w-[1440px] mx-auto"
    >
      <div className="flex flex-col gap-[33px] md:gap-6 mb-[56px] sm:mb-5 lg:mb-0">
        <h1 className="text-[#212121] text-center font-SFPro text-2xl md:text-[32px] font-[590] leading-normal animate-slidein300 opacity-0">
          Why Learn with Gloed?
        </h1>
        <span className="flex items-center justify-center relative">
          <img src={line_icon} alt="line icon" className="ml-6" />
          <img
            src={line_icon}
            alt="line icon"
            className="relative w-fit -left-6"
          />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center md:my-10 2xl:my-20 gap-6">
        <h2 className="text-[#212121] text-center font-SFPro text-base md:text-2xl font-[510] leading-normal animate-slidein500 opacity-0">
          Affordable, Interactive & Friendly.
        </h2>
        <p className="max-w-[900px] text-[#212121] text-center font-SFPro text-sm md:text-xl font-[274] leading-6 xl:leading-8 animate-slidein700 opacity-0">
          Gain in-demand, career-building skills with SQL (Structured Query
          Language), Excel, and other data-driven tools. Gloed offers an
          affordable, interactive, and supportive learning environment.
        </p>
      </div>
      <div className="flex py-6 items-center gap-7 self-stretch mt-10 animate-slidein700 opacity-0">
        <WhyLearn />
      </div>
    </section>
  );
};

export default WhyLearnSection;
