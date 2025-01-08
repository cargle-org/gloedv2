import { useState, useRef, useEffect } from "react";
import HowItWorks from "./HowItWorks";
import Button from "../../../UI/Button";
import { Link } from "react-router-dom";

const HowItWorksSection = () => {
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
      ref.current?.querySelector("ul")?.classList.add(classes[0]);
      ref.current?.querySelector("h1")?.classList.add(classes[1]);
      ref.current?.querySelector("h2")?.classList.add(classes[2]);
      ref.current?.querySelector("p")?.classList.add(classes[3]);
    } else {
      ref.current?.querySelector("ul")?.classList.remove(classes[0]);
      ref.current?.querySelector("h1")?.classList.remove(classes[1]);
      ref.current?.querySelector("h2")?.classList.remove(classes[2]);
      ref.current?.querySelector("p")?.classList.remove(classes[3]);
    }
  }, [isIntersecting]);

  return (
    <section
      ref={ref}
      className="font-SFPro flex flex-col bg-[#EFF5FF] sm:py-16 pt-[86px] pb-[60px] px-3 sm:mx-auto md:mx-0 md:px-20 xl:px-5 2xl:px-20"
    >
      <div className="xl:max-w-[1100px] 2xl:max-w-full 3xl:max-w-[1440px] mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h1
            style={{
              background: `linear-gradient(97deg, #4588EC 6.28%, #003E9B 99.52%)`,
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
            className="flex w-[177px] h-7 flex-col justify-center flex-shrink-0 text-center font-SFPro text-sm sm:text-xl font-bold leading-7 mb-[7.5px] capitalize animate-slidein300 opacity-0"
          >
            Want To Join?
          </h1>
          <h2 className="flex w-[208px] sm:w-[381.16px] flex-col justify-center flex-shrink-0 text-center text-[#212121] font-[590] font-SFPro text-[24.5px] sm:text-[40px] mb-[11.5px] sm:mb-[14.5px] leading-8 sm:leading-[48px] animate-slidein500 opacity-0">
            Get started in three easy steps
          </h2>
          <p className="flex w-full md:max-w-[516px] flex-col justify-center flex-shrink-0 text-center text-[#212121] font-normal font-SFPro text-sm sm:text-base leading-6 animate-slidein700 opacity-0">
            Choose your learning path — either group-based learning circles or
            personalized 1:1 tutoring with an expert instructor.
          </p>
        </div>
        <div className="mt-[35px] sm:mt-[73px]">
          <HowItWorks />
        </div>
        <div className="flex items-center justify-center mt-[56px] md:mt-[102px]">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://forms.gle/Fe4jx7xPibPoPg82A"
          >
            <Button
              variant="primary"
              className="bg-[#4588EC] font-bold text-base rounded-lg font-Inter px-11 sm:px-[59px] py-[14px] leading-5"
            >
              Sign Up Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
