interface WhyLearnProps {
  title: string;
  description: string;
  borderStyle: string;
  titleColor: string;
  positionStyle?: string;
}

/**
 * Renders a list of text elements with specific styling and animations.
 *
 * @return {JSX.Element} The rendered list of text elements.
 */

const WhyLearn = () => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:flex flex-col xl:flex-row font-SFPro animate-slideside300 opacity-0 mx-auto gap-7 ">
      {textElements.map((text, id) => (
        <li
          key={id}
          className={`flex mx-auto p-6 items-start gap-6 md:gap-8 border-[1px] md:border-[0.5px] rounded-lg ${text.borderStyle} ${text.positionStyle}`}
        >
          <div className={`flex flex-col gap-3 items-start ${text.titleColor}`}>
            <div className="text-base md:text-xl font-bold leading-[26px]">
              {text.title}
            </div>
            <div className="text-[#212121] text-sm md:text-xl md:text-wrap font-[274] leading-6 md:leading-8">
              {text.description}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WhyLearn;

const textElements: WhyLearnProps[] = [
  {
    title: "Comprehensive Curriculum",
    titleColor: "text-[#4588EC]",
    borderStyle: "border-[#4588EC80]",
    description:
      "Dive deep into a curriculum designed for all skill levels, from beginner to advanced. Learn at your own pace or accelerate your progress through personalized 1:1 sessions.",
  },
  {
    title: "Hands-On Learning",
    borderStyle: "border-[#9747FF80]",
    titleColor: "text-[#9747FF]",
    description:
      "Apply theoretical knowledge directly within SQL and Excel environments. Engage in real-world scenarios that help you develop practical, job-ready skills.",
  },
  {
    title: "Expert-Led Instruction",
    borderStyle: "border-[#1FAF3880]",
    titleColor: "text-[#1FAF38]",
    positionStyle:
      "col-span-full place-self-center xl:col-span-1 xl:place-self-auto",
    description:
      "Learn from industry professionals who offer insights beyond the basics. Whether in group classes or 1:1 sessions, you’ll gain knowledge that truly prepares you for the workforce.",
  },
];
