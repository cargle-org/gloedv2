import { useEffect, useRef, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import gloed_students from "../../../../assets/images/gloed_students.png";

const CompanyBenefitSection = () => {
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
      ref.current?.querySelector("ul")?.classList.add(classes[3]);
      ref.current?.querySelector("h1")?.classList.add(classes[1]);
      ref.current?.querySelector("p")?.classList.add(classes[2]);
      ref.current?.querySelectorAll("button").forEach((el) => {
        el.classList.add(classes[0]);
      });
      ref.current?.querySelector("img")?.classList.add(classes[0]);
    } else {
      ref.current?.querySelector("ul")?.classList.remove(classes[3]);
      ref.current?.querySelector("h1")?.classList.remove(classes[1]);
      ref.current?.querySelector("p")?.classList.remove(classes[2]);
      ref.current?.querySelectorAll("button").forEach((el) => {
        el.classList.remove(classes[0]);
      });
      ref.current?.querySelector("img")?.classList.remove(classes[0]);
    }
  }, [isIntersecting]);

  return (
    <section
      ref={ref}
      className="flex flex-col lg:flex-row justify-between lg:max-w-[1000px] xl:max-w-[1440px] mx-auto gap-[64px] lg:gap-6 2xl:gap-[117px] px-4 md:px-20 lg:px-4 xl:px-8 2xl:px-20 pb-16 pt-10 md:pt-0 2xl:pb-[120px]"
    >
      <div className="flex justify-center md:justify-start">
        <img
          src={gloed_students}
          alt="community students"
          className="md:w-[629px] h-fit animate-slideside300 opacity-0"
        />
      </div>
      <div className="flex flex-col justify-start place-self-center md:place-self-start max-w-[345px] sm:max-w-[534px] gap-10 md:gap-6">
        <div className="flex flex-col justify-start gap-6 xl:gap-10">
          <h1 className="text-[#212121] font-SFPro text-2xl md:text-[40px] lg:text-3xl xl:text-[40px] font-bold leading-[38.4px] xl:leading-[64px] lg:tracking-tighter xl:tracking-normal animate-slidein300 opacity-0">
            Increase Your{" "}
            <span className="text-[#4588EC] font-SFPro text-2xl md:text-[40px] lg:text-3xl xl:text-[40px] font-bold leading-[64px]">
              Productivity{" "}
            </span>
            with Gloed
          </h1>
          <p className="max-w-[486px] text-[#212121] font-SFPro text-sm lg:text-lg xl:text-xl font-normal leading-6 xl:leading-8 animate-slidein500 opacity-0">
            Master essential data skills like Excel and SQL with personalized
            1:1 sessions and group learning circles. Whether you're looking to
            upskill for a promotion, switch careers, or boost productivity,
            Gloed is here to help.
          </p>
        </div>
        <div>
          <ul className="flex justify-start flex-col gap-8 animate-slidein700 opacity-0">
            <li className="flex items-start gap-6 lg:gap-3 xl:gap-6">
              <BsCheckCircleFill className="size-6 fill-[#4588EC]" />
              <div className="flex flex-col gap-2">
                <div className="text-[#4588EC] font-SFPro text-base md:text-xl font-[510] leading-6 md:leading-8">
                  Industry-Experienced Tutors
                </div>
                <div className="self-stretch max-w-[297px] sm:max-w-[534px] text-[#212121] font-SFPro text-sm lg:text-lg xl:text-xl font-[274] leading-6 xl:leading-8">
                  Learn from seasoned data professionals with real-world
                  experience. Our instructors are dedicated to helping you
                  succeed with expert guidance and personalized support.
                </div>
              </div>
            </li>
            <li className="flex items-start gap-6 lg:gap-3 xl:gap-6">
              <BsCheckCircleFill className="size-6 fill-[#4588EC]" />
              <div className="flex flex-col gap-2">
                <div className="text-[#4588EC] font-SFPro text-base md:text-xl font-[510] leading-6 md:leading-8">
                  Dynamic Community Support
                </div>
                <div className="self-stretch max-w-[297px] sm:max-w-[534px] text-[#212121] font-SFPro text-sm lg:text-lg xl:text-xl font-[274] leading-6 xl:leading-8">
                  Join a vibrant Slack community of learners and achievers. Ask
                  questions, share tips, and collaborate with your peers to
                  enhance your learning experience.
                </div>
              </div>
            </li>
            <li className="flex w-full items-start gap-6 lg:gap-3 xl:gap-6">
              <BsCheckCircleFill className="size-6 fill-[#4588EC]" />
              <div className="flex flex-col gap-2">
                <div className="text-[#4588EC] font-SFPro text-base md:text-xl font-[510] leading-6 md:leading-8">
                  Tailored Learning Paths
                </div>
                <div className="self-stretch max-w-[297px] sm:max-w-[534px] text-[#212121] font-SFPro text-sm lg:text-lg xl:text-xl font-[274] leading-6 xl:leading-8">
                  Join a community of achievers. Our track record of student
                  success showcases the effectiveness of our tailored learning
                  approach.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CompanyBenefitSection;
