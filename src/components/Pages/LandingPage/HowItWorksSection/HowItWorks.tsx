import Card from "../../../UI/Card"
import howitworksone from '../../../../assets/svgs/how_it_works_one.svg'
import howitworkstwo from '../../../../assets/svgs/how_it_works_two.svg'
import howitworksthree from '../../../../assets/svgs/how_it_works_three.svg'

interface HowItWorksProps {
  step: number,
  figImg: string,
  figCaption: string
}

const HowItWorks = () => {
  return (
    <ul className=" flex flex-wrap md:flex-nowrap justify-between font-plus-jakarta-sans space-y-10 md:space-y-0 gap-6 lg:gap-12 xl:gap-6 animate-slideside300 opacity-1 md:w-[600px] lg:w-[710px] xl:w-[900px]">
      {howItWorks.map((step, index) => (
        <li key={index} className='flex w-full flex-col items-center gap-1 md:gap-6 space-y-2'>
          <Card variant='primary' className='w-[200px] h-[200px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[170px] xl:w-[200px] xl:h-[200px]'>
            <span className="flex relative bottom-[30px] left-[25px] font-semibold place-self-start items-center justify-center text-white tracking-[-0.72px] leading-[36px] text-2xl w-[50px] h-[50px] flex-shrink-0 bg-primary rounded-full">
              {index + 1}
            </span>
            <figure className="w-full flex-shrink-0 rounded-2xl ">
              <img src={step.figImg} className="w-full h-full object-cover " alt="How it works guide one" />
            </figure>
          </Card>
          <div className="w-[181px] text-wrap text-center text-xl font-semibold text-black leading-extra-loose tracking-tight">
            {step.figCaption}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default HowItWorks;

export const howItWorks: HowItWorksProps[] = [
  {
    "step": 1,
    "figImg": howitworksone,
    "figCaption": `Create your Gloed learner’s account.`
  },
  {
    "step": 2,
    "figImg": howitworkstwo,
    "figCaption": "Select your course type and topic."
  },
  {
    "step": 3,
    "figImg": howitworksthree,
    "figCaption": "Attend your Classes!"
  },
]

