import { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";

import { Link } from "react-router-dom";

import Button from "../../../UI/Button";
import ReusableModal from "../../../UI/ReusableModal";
import Logo from "../../../../assets/svgs/Logo";

import whatsapp_icon from "../../../../assets/svgs/whatsapp_icon.svg";
import slack from "../../../../assets/svgs/slack.svg";

/**
 * This function represents the HeroSection component, which includes a section with a heading, text, and buttons.
 *  It uses IntersectionObserver to trigger animations when the section becomes visible in the viewport.
 *
 * @return {JSX.Element} The JSX to render the HeroSection component
 */

const HeroSection = () => {
  const classes = [
    "animate-slideside300",
    "animate-slidein300",
    "animate-slidein500",
    "animate-slidein700",
  ];
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element>(<></>);
  const [modalTitle, setModalTitle] = useState("");
  

  const openModal = (title: string, content: JSX.Element) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

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
      ref.current?.querySelector("img")?.classList.add(classes[0]);
      ref.current?.querySelector("h2")?.classList.add(classes[1]);
      ref.current?.querySelector("p")?.classList.add(classes[2]);
      ref.current?.querySelectorAll("button")?.forEach((el) => {
        el.classList.add(classes[3]);
      });
    } else {
      ref.current?.querySelector("img")?.classList.remove(classes[0]);
      ref.current?.querySelector("h2")?.classList.remove(classes[1]);
      ref.current?.querySelector("p")?.classList.remove(classes[2]);
      ref.current?.querySelectorAll("button")?.forEach((el) => {
        el.classList.remove(classes[3]);
      });
    }
  }, [isIntersecting]);

  return (
    <section
      ref={ref}
      className={`px-3 lg:px-0 font-SFPro lg:bg-center bg-cover bg-no-repeat 3xl:bg-repeat bg-img`}
      style={{
        backgroundColor: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))`,
      }}
    >
      <div className="flex flex-col items-center justify-center max-w-[297px] sm:max-w-full mx-auto mt-[63px] mb-[39px] lg:my-10">
        <div className="flex flex-shrink-0 mb-[39px] md:mb-[86px] rounded-lg py-2 sm:py-3.5 px-4 sm:px-6 items-center gap-6 sm:gap-10 bg-[#fff]/30">
          <div>
            <Logo className="w-[46.312px] sm:w-[66.159px] h-3.5 sm:h-5 blur-0" />
          </div>

            <Button
              variant="landingPage"
              className="rounded-lg text-[10px] sm:text-xs bg-primary text-white leading-normal font-normal"
              onClick={() => openModal("Join Community", (
                <iframe
                  src="https://gloed.kit.com/8838211532"
                  className="w-full h-[500px] rounded-lg"
                  
                  title="Join Community"
                ></iframe>
              ))}
            >
              Join Community
            </Button>

        </div>
        <div className="w-full h-[80px] sm:h-36 lg:h-48 md:max-w-[726px] mb-4 md:mb-2 text-center font-SFPro text-[30px] sm:text-[43px] md:text-[57px] lg:text-[75px] leading-tight lg:leading-[95px] tracking-tight">
          <span className="text-[#FFF] font-[590]">
            <ReactTyped
              className=""
              strings={["Unlock Your Data Potentials with"]}
              typeSpeed={100}
              backSpeed={140}
              loop
            />
          </span>
          <span className="font-bold text-[#61A0FF]">Gloed</span>
        </div>
        <div className="flex flex-col text-[#FFF] text-center font-SFPro text-sm sm:text-2xl font-[274] leading-normal sm:space-y-1 animate-slidein500 opacity-0 ">
          <span>Master SQL, Excel, and More</span>
          <span>Learn from Experts, Build Real Skills</span>
        </div>

        <div className="mt-[56px] md:mt-[90px] text-center font-SFPro leading-normal space-y-3.5 sm:space-y-4">
          <h2 className="text-[#FFF] text-center text-base sm:text-2xl md:text-[32px] font-[590]">
            Start Your Learning Journey Today
          </h2>
          <div className="flex justify-center items-center text-[#FFF] text-center text-xs sm:text-lg md:text-xl font-[274] gap-3.5 sm:gap-6">
            <span>Join a Group Learning Circle </span>

              <Button
                variant="landingPage"
                className="sm:px-8 text-center text-xs sm:text-sm bg-primary gap-2 leading-normal font-[590]"
                onClick={() => openModal("Sign Up", (
                  <iframe
                    src="https://gloed.kit.com/e8e33e0f0d"
                    className="w-full h-[500px] rounded-lg"
                    
                    title="Registration Form"
                  ></iframe>
                ))}
              >
                Sign Up
              </Button>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-4 md:gap-6 mt-6 sm:mt-[50px]">
          <div className="flex gap-4 md:gap-8">
            <Link target="_blank" to="https://gloedworkspac.slack.com">
              <img src={slack} alt="slack icon" className="size-5" />
            </Link>
            <Link target="_blank" to="https://bit.ly/3lue6tB">
              <img src={whatsapp_icon} alt="whasapp icon" className="size-5" />
            </Link>
          </div>
          <span className="text-[#FFF] text-center text-xs sm:text-base font-[590]">
            5,000+ Students
          </span>
        </div>
      </div>

      <ReusableModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        content={modalContent}
      />
    </section>
  );
};

export default HeroSection;
