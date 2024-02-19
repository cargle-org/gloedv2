import { useState, useRef, useEffect } from 'react';
import HowItWorks from './HowItWorks'

const HowItWorksSection = () => {
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
      ref.current?.querySelector('ul')
        ?.classList.add(classes[0]);
      ref.current?.querySelector('h1')
        ?.classList.add(classes[1]);
      ref.current?.querySelector('h2')
        ?.classList.add(classes[2]);
      ref.current?.querySelector('p')
        ?.classList.add(classes[3]);
    }
    else {
      ref.current?.querySelector('ul')
        ?.classList.remove(classes[0]);
      ref.current?.querySelector('h1')
        ?.classList.remove(classes[1]);
      ref.current?.querySelector('h2')
        ?.classList.remove(classes[2]);
      ref.current?.querySelector('p')
        ?.classList.remove(classes[3]);
    }
  }, [isIntersecting]);

  return (
    <section ref={ref} className="font-plus-jakarta-sans bg-white py-[80px] sm:py-[74px] md:py-[120px] space-y-14 md:space-y-20">
      <div className="container lg:max-w-[712px] mx-auto space-y-3">
        <h1 className="text-center text-xl font-semibold text-[#757575] animate-slidein300 opacity-0 leading-extra-loose tracking-tight">
          HOW TO GET STARTED
        </h1>
        <h2 className="text-center mx-1 text-[27px] sm:text-[30px] md:text-[40px] text-[#0D121F] font-bold animate-slidein500 opacity-0 md:tracking-[-1.2px] md:leading-xl-loose">
          Getting Started is so simple!
        </h2>
        <p className="text-center mx-1.5 font-normal text-xl sm:text-[21px] text-[#3636363] animate-slidein700 opacity-0 leading-extra-loose tracking-tight">
          With Gloed, you can decide to sign up for a 1:1 class and have a time scheduled with an instructor or you can sign up for general group classes!
        </p>
      </div>

      <div className=" flex items-center justify-center mx-auto container ">
        <HowItWorks />
      </div>
    </section>
  )
};

export default HowItWorksSection

