// import communitytutor from '../../../../assets/communitytutor.png'
import { useEffect, useRef, useState } from "react"
import { BsCheckCircleFill } from 'react-icons/bs'
import communitytutor from '../../../../assets/images/communitytutor.png'
import Button from '../../../UI/Button'

const CompanyBenefitSection = () => {
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
        ?.classList.add(classes[3]);
      ref.current?.querySelector('h1')
        ?.classList.add(classes[1]);
      ref.current?.querySelector('p')
        ?.classList.add(classes[2]);
      ref.current?.querySelectorAll('button')
        .forEach(el => {
          el.classList.add(classes[0]);
        });
      ref.current?.querySelector('img')
        ?.classList.add(classes[0]);
    }
    else {
      ref.current?.querySelector('ul')
        ?.classList.remove(classes[3]);
      ref.current?.querySelector('h1')
        ?.classList.remove(classes[1]);
      ref.current?.querySelector('p')
        ?.classList.remove(classes[2]);
      ref.current?.querySelectorAll('button')
        .forEach(el => {
          el.classList.remove(classes[0]);
        })
      ref.current?.querySelector('img')
        ?.classList.remove(classes[0]);
    }
  }, [isIntersecting]);

  return (
    <section ref={ref} className="flex justify-center items-center bg-white xl:pt-[136px] py-[90px] font-plus-jakarta-sans container mx-auto max-w-full">
      <div className='flex flex-1 justify-between flex-wrap container mx-auto 2xl:mx-5 3xl:mx-auto xl:gap-6 2xl:gap-0 xl:flex-nowrap max-w-full sm:max-w-[400px] md:max-w-5xl 2xl:max-w-7xl 3xl:max-w-[1440px]'>
        <div className='flex items-center w-full xl:w-[500px] mb-2 sm:mb-4 xl:mb-7 max-w-full 2xl:max-w-[660px]'>

          <div className="flex flex-col justify-start items-start mx-3 md:mx-auto xl:mx-5 2xl:mx-6">
            <div className="flex flex-col text-center md:text-left items-center md:items-start">
              <h1 className="animate-slidein300 opacity-0 text-left text-xl text-primary font-semibold mb-3 leading-extra-loose tracking-tight">
                INCREASE PRODUCTIVITY
              </h1>
              <p className="animate-slidein500 opacity-0 md:w-[500px] 2xl:w-[658px] font-bold text-black mb-10 text-[24px] sm:text-[28px] lg:text-[24px] xl:text-[30px] 2xl:text-[35px] leading-10 md:leading-[52.5px] tracking-[-1.05px]">
                We are a team of data professionals. Our courses are designed by subject experts.
              </p>
              <div className="mb-12 lg:mb-10 xl:mb-[61px]">
                <Button variant="primary" className="w-auto animate-slideside300 opacity-0">
                  Join our slack community
                </Button>
              </div>
            </div>

            {/* Benefits list */}
            <ul className="flex justify-start md:w-[480px] lg:w-[490px] 2xl::w-[526px] flex-col mb-9 gap-8 lg:gap-5 xl:gap-8 text-[#0D121F] text-[16px] sm:text-lg lg:text-[17px] 2xl:text-lg font-medium animate-slidein700 opacity-0 leading-[27px] tracking-[-0.36px]">
              <li className="flex items-start gap-3">
                <BsCheckCircleFill className="w-3.5 md:w-6 h-[21px]" />
                <div className='flex w-full 2xl:w-[450px] text'>
                  Benefit from our seasoned instructors, industry experts dedicated to providing top-notch education and personalized support.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <BsCheckCircleFill className="w-3.5 md:w-6 h-[21px]" />
                <div className='flex w-full 2xl:w-[490px] '>
                  Immerse yourself in a dynamic and collaborative learning space, fostering engagement and knowledge retention.
                </div>
              </li>
              <li className="flex w-full items-start gap-3">
                <BsCheckCircleFill className="w-3.5 md:w-6 h-[21px]" />
                <div className='flex w-full 2xl:w-[460px]'>
                  Join a community of achievers. Our track record of student success showcases the effectiveness of our tailored learning approach.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* community tutor image */}
        <div className="flex justify-center xl:justify-start 2xl:justify-end mx-3 md:mx-auto xl:ml-0 2xl:mx-0 3xl:mx-10 sm:mt-9 xl:mt-12 2xl:mt-10 relative lg:max-w-[567px] lg:h-[552px]">
          <button className="flex items-center w-auto sm:h-10 2xl:h-[52px] px-1.5 sm:px-2 sm:py-1 xl:px-4 xl:py-2 absolute z-40 top-20 sm:top-[100px] md:top-[150px] xl:top-[172px] 2xl:top-[150px] left-[2%] sm:left-3.5 md:left-[85px] xl:left-[30px] 2xl:left-6 rounded-tr-[15px] rounded-br-[3px] rounded-s-[15px] gap-2.5 text-center bg-white text-[11px] md:text-sm 2xl:text-lg font-normal text-[#0F172A] leading-[28.8px] font-Roboto text-nowrap animate-slideside300 opacity-0">
            Expert help from tutors
          </button>
          <div className="relative flex justify-center xl:justify-start 2xl:justify-end w-full h-fit xl:w-[480px] xl:h-full 2xl:w-full 2xl:h-[552px] z-10">
            <img className="object-contain rounded-xl animate-slideside300 opacity-0" src={communitytutor} alt="community tutor image" />
          </div>
        </div>
      </div>
    </section >
  )
}

export default CompanyBenefitSection