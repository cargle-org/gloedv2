import { useEffect, useRef, useState } from 'react';
import { ReactTyped } from 'react-typed'
import hero_img from '../../../../assets/svgs/hero_img.svg'
import Button from '../../../UI/Button'

/**
 * This function represents the HeroSection component, which includes a section with a heading, text, and buttons.
 *  It uses IntersectionObserver to trigger animations when the section becomes visible in the viewport.
 *
 * @return {JSX.Element} The JSX to render the HeroSection component
 */

const HeroSection = () => {
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
      ref.current?.querySelector('img')
        ?.classList.add(classes[0]);
      ref.current?.querySelector('h1')
        ?.classList.add(classes[1]);
      ref.current?.querySelector('p')
        ?.classList.add(classes[2]);
      ref.current?.querySelectorAll('button')
        ?.forEach((el) => {
          el.classList.add(classes[3])
        });
    }
    else {
      ref.current?.querySelector('img')
        ?.classList.remove(classes[0]);
      ref.current?.querySelector('h1')
        ?.classList.remove(classes[1]);
      ref.current?.querySelector('p')
        ?.classList.remove(classes[2]);
      ref.current?.querySelectorAll('button')
        ?.forEach((el) => {
          el.classList.remove(classes[3])
        });
    }
  }, [isIntersecting]);

  return (
    <section ref={ref} className="font-plus-jakarta-sans mt-24 md:mt-32 lg:mt-44">
      <div className="flex flex-col justify-center items-center container sm:container-sm lg:container-lg xl:max-w-[794px] mx-auto">
        <h1 className="text-center animate-slidein300 opacity-0 max-w-[300px] sm:container relative text-[#212121] font-bold text-3xl sm:text-[43px] md:text-[58px] lg:text-6xl xl:text-[72px] leading-[55px] sm:leading-[64px] md:leading-[93px] lg:leading-[100px] xl:leading-[108px] tracking-[-1.9px] sm:tracking-[-2.16px]">
          Become a data expert, <br />
          <ReactTyped
            className=''
            strings={["Learn SQL & Excel."]}
            typeSpeed={100}
            backSpeed={140}
            loop
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-[90px] sm:w-[100px] md:w-[150px] lg:w-[175px] xl:w-[195px] top-[32px] left-[73%] sm:top-[43px] sm:left-[330px] md:top-[72px] md:left-[475px] lg:top-[75px] lg:left-[535px] xl:top-[88px] xl:left-[595px]"
            width="195"
            height="44"
            viewBox="0 0 195 44"
            fill="none"
          >
            <path
              d="M2.04757 38.4763C26.2336 31.6731 115.007 11.0827 189.653 5.39636C151.569 12.1117 102.078 21.5942 71.4753 34.8655"
              stroke="#FB923C"
              strokeWidth="10"
              strokeLinejoin="round"
            />
          </svg>
        </h1>
        <p className="animate-slidein500 opacity-0 text-[#212121] text-center mx-2 sm:mx-0 mt-2 sm:mt-3.5 font-normal text-[17px] sm:text-[22px] md:text-2xl leading-[36px] tracking-[-0.48px]">
          Gloed is designed to help you learn how to communicate with databases using a standard management language.
        </p>
        <div className="flex justify-center items-center mt-10 gap-3 sm:gap-6">
          <Button type="button" variant="primary" className='animate-slidein700 opacity-0 text-xs sm:text-inherit sm:text-white'>
            Exposure courses
          </Button>
          <Button className="text-[#363636] animate-slidein700 opacity-0 text-xs" variant="white">
            See Pricing
          </Button>
        </div>
      </div>

      <span className="flex justify-center container-2xl mt-20 lg:mt-32 md:mt-24 ml-6 sm:ml-10 md:ml-[65px] xl:ml-[100px] mr-4 md:mr-9 xl:mr-[60px]">
        <img src={hero_img} alt="hero image" className="animate-slideside300 opacity-0 object-cover h-full flex-shrink-0" />
      </span>
    </section>
  )
}

export default HeroSection