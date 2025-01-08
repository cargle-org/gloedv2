import arrow_one from "../../../../assets/svgs/arrow_one.svg";
import arrow_two from "../../../../assets/svgs/arrow_two.svg";
import arrow_three from "../../../../assets/svgs/arrow_three.svg";

interface HowItWorksProps {
  step: number;
  title: string;
  indexBg: string;
  titleColor: string;
  details: string;
  space: string;
  stepIcon?: string;
  stepMobileIcon?: string;
  iconStyle?: string;
}

const HowItWorks = () => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 xl:flex 2xl:grid justify-start lg:gap-9 2xl:gap-[90px] font-SFPro animate-slideside300 opacity-0 ">
      {howItWorks.map((step, index) => (
        <li
          key={index}
          className={`relative flex max-w-[345px] w-auto md:max-w-[380px] h-auto flex-col items-center place-self-center lg:place-self-start lg:items-start gap-4 pb-4 ${step.space}`}
        >
          <span className={`${step.stepMobileIcon} lg:hidden`}>
            <img
              src={step.stepMobileIcon}
              alt="arrow icon"
              className={`relative ${step.stepMobileIcon ?? "hidden"}`}
            />
          </span>
          <span className={`absolute ${step.iconStyle}`}>
            <img
              src={step.stepIcon}
              alt="arrow icon"
              className={`relative ${step.stepIcon ?? "hidden"}`}
            />
          </span>
          <div className="flex flex-col gap-6">
            <span
              className={`flex font-bold place-self-center lg:place-self-start items-center justify-center text-${step.titleColor} font-Inter leading-7 text-[28px] w-[56px] h-[56px] py-3.5 px-[19.189px] md:px-[19.293px] flex-shrink-0 rounded-full ${step.indexBg}`}
            >
              {index + 1}
            </span>

            <h4
              className={`w-[300px] text-center lg:text-start font-bold text-xl md:text-2xl leading-8 ${step.titleColor}`}
            >
              {step.title}
            </h4>
          </div>
          <p className="text-wrap text-center lg:text-start text-[#212121] font-[510] font-SFPro text-sm md:text-base leading-6 md:leading-8">
            {step.details}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default HowItWorks;

export const howItWorks: HowItWorksProps[] = [
  {
    step: 1,
    space: "mt-0",
    indexBg: "bg-[#D9E9FF]",
    stepIcon: arrow_one,
    iconStyle: "hidden 2xl:flex sm:-right-24 sm:bottom-14",
    title: "Create Your Account",
    titleColor: "text-[#4588EC]",
    details: `Sign up to become a Gloed learner and start your educational journey.`,
  },
  {
    step: 2,
    space: "lg:mt-32 xl:mt-[74px]",
    indexBg: "bg-[#F0E5FF]",
    stepIcon: arrow_two,
    stepMobileIcon: arrow_three,
    iconStyle: "hidden 2xl:flex sm:-right-8 sm:bottom-[145px]",
    title: "Select Your Course & Learning Style",
    titleColor: "text-[#5E00D8]",
    details:
      "Choose from our courses (SQL, Excel) or suggest other topics like Product Design, DevOps, etc. Select whether you want to join a group learning circle or schedule 1:1 personalized classes.",
  },
  {
    step: 3,
    space: "lg:-mt-32 xl:mt-48",
    indexBg: "bg-[#F5FFF7]",
    stepMobileIcon: arrow_three,
    title: "Attend Your Classes",
    titleColor: "text-[#00B820]",
    details:
      "Whether in a group or 1:1 setting, start learning immediately and make progress toward mastering your chosen topic.",
  },
];
