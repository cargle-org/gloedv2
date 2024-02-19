import { useEffect, useRef, useState } from "react";
import gloed_statistics from '../../../../assets/svgs/gloed_statistics.svg'
import WhyLearn from './WhyLearn';


/**
 * Renders the WhyLearnSection component, which displays information about learning with Gloed.
 *
 * @return {JSX.Element} The WhyLearnSection component
 */
const WhyLearnSection = () => {
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
      ref.current?.querySelector('img')
        ?.classList.add(classes[0]);
      ref.current?.querySelector('ul')
        ?.classList.add(classes[0]);
    }
    else {
      ref.current?.querySelector('h1')
        ?.classList.remove(classes[1]);
      ref.current?.querySelector('h2')
        ?.classList.remove(classes[2]);
      ref.current?.querySelector('p')
        ?.classList.remove(classes[3]);
      ref.current?.querySelector('img')
        ?.classList.remove(classes[0]);
      ref.current?.querySelector('ul')
        ?.classList.remove(classes[0]);
    }
  }, [isIntersecting]);

  return (
    <section ref={ref} className="flex flex-col font-plus-jakarta-sans bg-black py-20 lg:py-[98px] ">
      <div className="flex flex-col justify-center items-center container md:mx-auto lg:max-w-[717px] max-w-full 3xl:max-w-[1440px]">
        <h1 className="text-center text-xl text-primary font-semibold animate-slidein300 opacity-0 leading-extra-loose tracking-tight">
          WHY LEARN WITHGLOED
        </h1>
        <h2 className="text-center text-[30px] sm:text-[40px] mx-3 text-[#F0F0F0] mt-3 font-bold animate-slidein500 opacity-0 sm:leading-xl-loose tracking-[-1.2px]">
          Affordable, Interactive & Friendly
        </h2>
        <p className="text-lg lg:text-xl mt-6 mx-3 lg:mx-auto text:opacity-60 text-center text-[#F7FAFF] font-normal animate-slidein700 opacity-0 leading-extra-loose tracking-tight">
          Gain career-building skills for a data-driven world. SQL, or Structured Query Language, is an in-demand programming language that allows you to manage data in relational databases.
        </p>
      </div>

      <div className="flex flex-wrap xl:flex-nowrap items-center justify-center mx-auto container">

        <WhyLearn />

        <div className="flex justify-center items-center xl:items-end mx-3 xl:mr-5 xl:ml-auto w-auto xl:max-w-[480px] 2xl:max-w-[605px]">
          <div className='flex lg:grow'>
            <img src={gloed_statistics} className="h-full w-full object-contain object-center" alt=" Gloed company statistics" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyLearnSection

