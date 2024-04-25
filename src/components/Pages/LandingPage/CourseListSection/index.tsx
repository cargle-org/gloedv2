import { useEffect, useRef, useState } from 'react'
import Button from '../../../UI/Button'
import CourseLists from './CourseLists'
import { useNavigate } from 'react-router-dom'

const HowItWorksSection = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  const classes = ["animate-slideside300", "animate-slidein300", "animate-slidein500", "animate-slidein700"];
  const [isIntersecting, setIsIntersecting] = useState(false);

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
    console.log(isIntersecting);

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
    <section className="font-plus-jakarta-sans bg-black py-24">
      <div className="container mx-auto lg:max-w-[717px]">
        <h1 className="text-center text-[19px] sm:text-xl text-primary animate-slidein300 opacity-0 font-semibold leading-extra-loose tracking-tight">
          PREFER GROUP BASED LEARNING?
        </h1>
        <h2 className="text-center text-[31px] md:text-[40px] text-[#F0F0F0] animate-slidein500 opacity-0 font-bold leading-xl-loose tracking-[-1.2px] mt-3 mb-6">
          Checkout our general classes
        </h2>
        <p className="text-lg sm:text-xl text-center text-[#F7FAFF]/60 font-normal animate-slidein700 opacity-0 leading-extra-loose tracking-tight mb-10">
          Elevate your skills together! Join our dynamic group classes—collaborate, learn, and succeed with peers. Sign up now for growth!
        </p>
      </div>
      <div className='flex items-center justify-center mb-20'>
        <Button className="" variant='primary' onClick={() => navigate("/mydashboard")}>
          Explore courses
        </Button>
      </div>

      <CourseLists />
    </section >
  )
}

export default HowItWorksSection

