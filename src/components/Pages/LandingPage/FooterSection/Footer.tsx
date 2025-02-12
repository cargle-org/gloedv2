import { useEffect, useRef, useState } from "react";
import Button from "../../../UI/Button";
import ReusableModal from "../../../UI/ReusableModal";
import Logo from "../../../../assets/svgs/Logo";

import { BsLinkedin, BsSlack, BsTwitterX } from "react-icons/bs";
import { PiWhatsappLogoFill } from "react-icons/pi";

import { LuInstagram } from "react-icons/lu";
import { Link } from "react-router-dom";

/**
 * Footer component for the website.
 *
 * @return {JSX.Element} The footer component
 */
const Footer = () => {
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
  const ref = useRef<HTMLDivElement>(null);

  const openModal = (title: string, content: JSX.Element) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

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
    console.log(isIntersecting);

    if (isIntersecting) {
      // ref.current?.querySelector("h1")?.classList.add(classes[0]);
      ref.current?.querySelectorAll("h1")?.forEach((el) => {
        el.classList.add(classes[0]);
      });
      ref.current?.querySelectorAll("h2")?.forEach((el) => {
        el.classList.add(classes[3]);
      });
      // ref.current?.querySelector("p")?.classList.add(classes[3]);
      ref.current?.querySelectorAll("p")?.forEach((el) => {
        el.classList.add(classes[0]);
      });
      ref.current?.querySelector("button")?.classList.add(classes[0]);
    } else {
      // ref.current?.querySelector("h1")?.classList.remove(classes[0]);
      ref.current?.querySelectorAll("h1")?.forEach((el) => {
        el.classList.remove(classes[0]);
      });
      ref.current?.querySelectorAll("h2")?.forEach((el) => {
        el.classList.add(classes[3]);
      });
      // ref.current?.querySelector("p")?.classList.remove(classes[3]);
      ref.current?.querySelectorAll("p")?.forEach((el) => {
        el.classList.remove(classes[0]);
      });
      ref.current?.querySelector("button")?.classList.remove(classes[0]);
    }
  }, [isIntersecting]);

  return (
    <footer>
      <section
        ref={ref}
        className=" px-4 py-10 md:p-20 lg:p-10 2xl:p-20 bg-[#4588EC]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[120px] lg:gap-20 2xl:gap-[156px] 2xl:max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-10">
            <h1 className="self-stretch text-[#FFF] font-SFPro text-2xl md:text-[32px] lg:text-2xl 2xl:text-[32px] font-bold leading-8 lg:leading-[43px] animate-slidein300 opacity-0">
              Join Our Community
            </h1>
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="self-stretch text-[#FFF] font-SFPro text-xl md:text-[32px] lg:text-2xl 2xl:text-[32px] font-[274] leading-8 2xl:leading-[43px] animate-slidein500 opacity-0">
                  Collaborative Learning Space
                </h2>
                <p className="self-stretch text-[#FFF] font-SFPro text-sm md:text-xl lg:text-lg 2xl:text-xl leading-6 2xl:leading-[43px] animate-slidein700 opacity-0">
                  Immerse yourself in a community where engagement, motivation,
                  and shared learning thrive.
                </p>
              </div>
              <div>
                <h2 className="self-stretch text-[#FFF] font-SFPro text-xl md:text-[32px] lg:text-2xl 2xl:text-[32px] font-[274] leading-8 2xl:leading-[43px] animate-slidein500 opacity-0">
                  Expert Help at Your Fingertips
                </h2>
                <p className="self-stretch text-[#FFF] font-SFPro text-sm md:text-xl lg:text-lg 2xl:text-xl leading-6 2xl:leading-[43px] animate-slidein700 opacity-0">
                  Get direct access to instructors and fellow learners who can
                  guide you, solve your problems, and keep you on track to
                  success.
                </p>
              </div>
            </div>

            <Button
                    variant="landingPage"
                    className="flex place-self-center sm:place-self-start rounded-lg text-sm text-[#4588EC] bg-white hover:bg-white focus:bg-white w-full sm:w-1/2 lg:w-full 2xl:sm:w-1/2 px-8" 
                    onClick={() => openModal("Sign Up for Classes", (
                      <iframe
                        src="https://gloed.kit.com/e8e33e0f0d"
                        className="w-full h-[500px] rounded-lg"
                        
                        title="Registration Form"
                      ></iframe>
                    ))}
                  >
                    Sign Up for Classes Now
            </Button>
          </div>
          <div className="flex flex-col gap-12 lg:gap-6 2xl:gap-12">
            <div className="flex flex-col gap-6">
              <h1 className="self-stretch text-[#FFF] font-SFPro text-2xl md:text-[32px] lg:text-2xl 2xl:text-[32px] font-bold leading-8 xl:leading-[43px] tracking-tight animate-slidein300 opacity-0">
                Unlock Your Full Potential with Gloed!
              </h1>
              <p className="self-stretch text-[#FFF] font-SFPro text-sm md:text-xl lg:text-lg 2xl:text-xl leading-6 2xl:leading-[43px] tracking-wide animate-slidein500 opacity-0">
                Master Excel, SQL, and other data-driven tools with personalized
                1:1 lessons and dynamic group sessions. Join a community that
                inspires excellence and helps you achieve your career goals.
              </p>
            </div>
            <div className="flex flex-col gap-8 lg:gap-5 2xl:gap-8">
              <div className="self-stretch text-[#FFF] font-SFPro text-2xl md:text-[32px] lg:text-2xl 2xl:text-[32px] font-[510] leading-8 xl:leading-[43px]">
                Get Started
              </div>
              <div className="flex flex-col gap-3 lg:gap-2 2xl:gap-3">
                
                  <Button
                    variant="landingPage"
                    className="flex place-self-center sm:place-self-start rounded-lg text-sm text-[#4588EC] bg-white hover:bg-white focus:bg-white w-full sm:w-1/2 lg:w-full 2xl:sm:w-1/2 px-8" 
                    onClick={() => openModal("Sign Up for Classes", (
                      <iframe
                        src="https://gloed.kit.com/e8e33e0f0d"
                        className="w-full h-[500px] rounded-lg"
                        
                        title="Registration Form"
                      ></iframe>
                    ))}
                  >
                    Sign Up for Classes Now
                  </Button>

                <Button
                  variant="landingPage"
                  className="flex place-self-center sm:place-self-start rounded-lg text-sm bg-[#5E00D8] text-white w-full sm:w-1/2 lg:w-full 2xl:sm:w-1/2 px-8"
                  onClick={() => openModal("Become A Tutor", (
                    <iframe
                      src="https://gloed.kit.com/827f161c19"
                      className="w-full h-[500px] rounded-lg"
                      
                      title="Registration Form"
                    ></iframe>
                  ))}
                >
                  Become A Tutor
                </Button>
                <Button
                  variant="landingPage"
                  className="flex place-self-center sm:place-self-start rounded-lg text-sm bg-[#1FAF38] text-white w-full sm:w-1/2 lg:w-full 2xl:sm:w-1/2 px-8"
                  onClick={() => openModal("Contact Us", (
                    <iframe
                      src="https://gloed.kit.com/69cb0ee471"
                      className="w-full h-[500px] rounded-lg"
                      
                      title="Registration Form"
                    ></iframe>
                  ))}
                >
                  Contact Us For More Info
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-wrap md:flex-row h-full py-10 2xl:py-[56px] mx-auto max-w-[1440px] md:items-end justify-between px-6 md:px-20 lg:px-10 2xl:px-20 3xl:px-0">
        <div className="">
          <div className="flex flex-col lg:flex-wrap lg:flex-row w-auto justify-start gap-10 md:gap-20 ">
            <div className="flex flex-col gap-5 sm:gap-4">
              <div className="flex-shrink-0">
                <Logo />
              </div>
              <div className="flex gap-2 items-center">
                <Link target="_blank" to="https://gloedworkspace.slack.com">
                  <BsSlack className="size-5" />
                </Link>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/company/gloed-co"
                >
                  <BsLinkedin className="size-5" />
                </Link>
                <Link target="_blank" to="https://www.x.com/gloed_co">
                  <BsTwitterX className="size-5" />
                </Link>
                <Link target="_blank" to="https://www.instagram.com/gloed_co">
                  <LuInstagram className="size-5" />
                </Link>
                <Link target="_blank" to="https://bit.ly/3lue6tB">
                  <PiWhatsappLogoFill className="size-6 cursor-pointer" />
                </Link>
              </div>
            </div>
            <div className="flex items-end text-SFPro text-sm xl:text-base mb-4 md:mb-0 text-[#212121] leading-6 tracking-[-0.32px]">
              @ 2023 Gloed, Inc. All rights reserved.
            </div>
          </div>
        </div>

        <nav className="flex w-fit gap-1 text-xs sm:text-base text-[#212121] leading-6 tracking-[-0.32px]">
          <div className="">Terms</div> |<div className="">Privacy</div> |
          <div className="">Support</div>
        </nav>
      </section>

      <ReusableModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        content={modalContent}
      />
    </footer>
  );
};

export default Footer;
