import { useEffect, useRef, useState } from 'react';
import Reviews from './Reviews'


const ReviewSection = () => {
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
      ref.current?.querySelector('p')
        ?.classList.add(classes[2]);
    }
    else {
      ref.current?.querySelector('ul')
        ?.classList.remove(classes[0]);
      ref.current?.querySelector('h1')
        ?.classList.remove(classes[1]);
      ref.current?.querySelector('p')
        ?.classList.remove(classes[2]);
    }
  }, [isIntersecting]);

  return (
    <section ref={ref} className="font-plus-jakarta-sans bg-black py-16 md:pt-24 md:pb-[119px] xl:pt-[130px]">
      <div className='container lg:max-w-[712px] mx-auto'>
        <h1 className="animate-slidein300 opacity-0 text-center pb-4 text-[34px] md:text-[40px] text-[#F0F0F0] font-bold leading-xl-loose tracking-[-1.2px]">
          People love our classes!
        </h1>
        <p className="animate-slidein500 opacity-0 text-center text-lg md:text-xl pb-16 text-opacity-60 text-[#F7FAFF] font-normal leading-extra-loose">
          Don’t just take our word for it. See what other learners think!
        </p>
      </div>

      <Reviews />
    </section>
  )
}

export default ReviewSection

