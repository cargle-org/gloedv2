import { IoDocumentText } from "react-icons/io5"

interface WhyLearnProps {
  title: string,
  description: string,
}

/**
 * Renders a list of text elements with specific styling and animations.
 *
 * @return {JSX.Element} The rendered list of text elements.
 */

const WhyLearn = () => {
  return (
    <ul className="flex flex-col lg:h-[374px] sm:w-[400px] md:w-[430px] lg:w-[567px] animate-slideside300 opacity-0 mx-3 md:mx-auto gap-8 sm:gap-9 2xl:gap-11 my-16 lg:my-25">
      {textElements.map((text, id) => (
        <li key={id} className="flex mx-auto 2xl:mx-0 items-start gap-3 md:gap-8 lg:gap-4 xl:gap-6 2xl:gap-8 2xl-max-w-[415px]">
          <span className="flex w-8 sm:w-10 xl:w-[50px] h-8 sm:h-10 xl:h-[50px] px-2 sm:px-3 bg-primary items-center justify-center rounded-md md:rounded-xl">
            <IoDocumentText color='white' className='h-6 w-6' />
          </span>
          <div className="flex flex-col gap-3 items-start xl:w-[400px] 2xl:w-[412px]">
            <div className="text-xl xl:text-2xl font-semibold text-white leading-[30px] sm:leading-[36px] tracking-[-0.72px]">
              {text.title}
            </div>
            <div className="text-[#F7FAFF] text-sm xl:text-base md:text-wrap xl:w-auto font-normal leading-6">
              {text.description}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default WhyLearn

const textElements: WhyLearnProps[] = [
  {
    title: "Comprehensive Curriculum",
    description: "Dive into an extensive curriculum designed for all skill levels, from beginners to advanced users.",
  },
  {
    title: "Hands-On Learning",
    description: "Apply theoretical concepts directly in Excel and SQL environments, ensuring practical skill development.",
  },
  {
    title: "Expert-Led Instruction",
    description: "Benefit from engaging instruction, gaining insights that go beyond the basics for a deeper understanding.",
  },
];