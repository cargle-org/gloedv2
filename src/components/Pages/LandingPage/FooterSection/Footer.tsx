import { useEffect, useRef, useState } from "react";
import footerimgone from "../../../../assets/images/footerimgone.jpg";
import footerimgtwo from "../../../../assets/images/footerimgtwo.jpg";
import Button from "../../../UI/Button";
import Logo from "../../../../assets/svgs/Logo";

/**
 * Footer component for the website.
 *
 * @return {JSX.Element} The footer component
 */
const Footer = () => {
  const classes = ["animate-slideside300", "animate-slidein300", "animate-slidein500", "animate-slidein700"];
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { rootMargin: '-150px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref.current]); // Only re-create observer if ref changes

  useEffect(() => {

    if (isIntersecting) {
      ref.current?.querySelector('h1')
        ?.classList.add(classes[1]);
      ref.current?.querySelector('h2')
        ?.classList.add(classes[2]);
      ref.current?.querySelector('p')
        ?.classList.add(classes[3]);
      ref.current?.querySelectorAll('img')
        ?.forEach((el, i) => {
          i === 0 && el.classList.add(classes[2])
          i === 1 && el.classList.add(classes[3])
        });
      ref.current?.querySelector('button')
        ?.classList.add(classes[0]);
    }
    else {
      ref.current?.querySelector('h1')
        ?.classList.remove(classes[1]);
      ref.current?.querySelector('h2')
        ?.classList.remove(classes[2]);
      ref.current?.querySelector('p')
        ?.classList.remove(classes[3]);
      ref.current?.querySelectorAll('img')
        ?.forEach((el, i) => {
          i === 0 && el.classList.remove(classes[2])
          i === 1 && el.classList.remove(classes[3])
        });
      ref.current?.querySelector('button')
        ?.classList.remove(classes[0]);
    }
  }, [isIntersecting]);

  return (
    <footer>
      <section ref={ref} className="flex justify-center items-center container mx-auto bg-black py-[100px] xl:pt-[123px] sm:pb-32 md:pb-[176px] xl:pb-5 2xl:pb-[100px] font-plus-jakarta-sans  max-w-full">
        <div className='flex flex-1 flex-wrap gap-0 2xl:gap-0 xl:flex-nowrap mx-auto sm:max-w-[400px] md:max-w-5xl 2xl:max-w-[1200px] 3xl:max-w-[1440px]'>

          {/* footer actions */}
          <div className='flex flex-col justify-center items-center w-full mx-auto xl:mx-0 max-w-fit 2xl:max-w-[693px] mb-2 sm:mb-4 xl:mb-7'>
            <div className="flex flex-col justify-center xl:items-start items-center mx-3 md:mx-auto xl:ml-5 2xl:mx-0 text-center xl:text-left">
              <h1 className="text-xl text-primary font-semibold leading-extra-loose tracking-tight mb-3 animate-slidein300 opacity-0">
                SIGN UP FOR CLASSES NOW
              </h1>
              <h2 className="md:w-[580px] 2xl:w-[693px] mb-[13px] text-[26px] sm:text-3xl lg:text-[35px] 2xl:text-[40px] text-white font-bold animate-slidein500 opacity-0 leading-10 lg:leading-xl-loose tracking-[-1.2px]">
                Unlock Your Full Potential with Gloed: Master Excel and SQL for Success!
              </h2>
              <p className="md:w-[580px] 2xl:w-[629px] mb-14 xl:mb-9 text-[17.5px] sm:text-base lg:text-[19px] xl:text-lg 2xl:text-xl text-[#f3f5f7bf] font-normal animate-slidein700 opacity-0 leading-extra-loose tracking-tight">
                Empower your career journey through personalized 1-1 classes and vibrant group sessions. Join a community that inspires excellence."
              </p>
              <div className="mb-16 xl:mb-10 ">
                <Button variant="primary" className="animate-slideside300 opacity-0">
                  Get Started
                </Button>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center xl:justify-start 2xl:justify-end xl:w-[450px] 2xl:w-[480px] mx-3 md:mx-auto relative">
            <img src={footerimgone} className="animate-slidein500 opacity-0 absolute -mt-6 2xl:-mt-8 z-10 w-[260px] sm:w-[320px] md:w-[450px] xl:w-[370px] xl:h-[380px] 2xl:w-[486px] 2xl:h-[434px] rounded-xl overscroll-visible" alt="footer image one" />
            <img src={footerimgtwo} className="animate-slidein700 opacity-0 object cover w-[150px] sm:w-[180px] md:w-[250px] xl:w-[210px] xl:h-[230px] 2xl:h-fit 2xl:w-[265px] relative z-40 left-[74px] top-[76px] sm:left-[95px] sm:top-[105px] md:top-[155px] md:left-[132px] xl:left-[190px] xl:top-[148px] 2xl:top-[155px] 2xl:left-[38px] rounded-xl" alt="footer image two" />
          </div>
        </div>
      </section>

      <section className="flex flex-wrap h-[120px] sm:h-[90px] xl:h-24 my-2 lg:my-0 items-center justify-around">
        <div className="flex flex-wrap gap-8 w-full sm:w-auto lg:gap-6 xl:gap-10 justify-center">
          <div className="flex-shrink-0">
            <Logo />
          </div>
        </div>
        <div className="flex text-Roboto text-sm xl:text-base justify-center w-full md:justify-normal md:w-auto">
          @ 2023 Gloed, Inc. All rights reserved.
        </div>

        <nav className="flex xl:w-2/4 justify-end items-center gap-3 sm:gap-3.5 xl:gap-6 text-base">
          <div className="">
            Terms
          </div>
          <div className="">
            Privacy
          </div>
          <div className="">
            Support
          </div>
        </nav>
      </section>
    </footer >
  )
}

export default Footer