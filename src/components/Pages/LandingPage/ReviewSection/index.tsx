import { useEffect, useRef, useState } from "react";
import Reviews from "./Reviews";

const ReviewSection = () => {
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
      // ref.current?.querySelector("ul")?.classList.add(classes[0]);
      ref.current?.querySelector("h1")?.classList.add(classes[1]);
      ref.current?.querySelector("p")?.classList.add(classes[2]);
    } else {
      // ref.current?.querySelector("ul")?.classList.remove(classes[0]);
      ref.current?.querySelector("h1")?.classList.remove(classes[1]);
      ref.current?.querySelector("p")?.classList.remove(classes[2]);
    }
  }, [isIntersecting]);

  return (
    <section
      ref={ref}
      className="font-SFPro flex flex-col justify-center px-4 xl:px-0 py-10 2xl:py-[120px] 3xl:max-w-[1440px] 3xl:mx-auto"
    >
      <div className="">
        <div className="flex flex-col gap-2 sm:gap-4">
          <h1 className="text-[#212121] text-center font-SFPro text-2xl md:text-[40px] font-[590] leading-normal animate-slidein300 opacity-0">
            People Love Our Classes!
          </h1>
          <p className="text-[#212121] text-center font-SFPro font-[274] text-sm sm:text-xl leading-5 sm:leading-normal animate-slidein500 opacity-0">
            Don’t just take our word for it. Hear from some of our successful
            learners:
          </p>
        </div>
        <div className="mt-[56px] sm:mt-[79.55px]">
          <Reviews />
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
