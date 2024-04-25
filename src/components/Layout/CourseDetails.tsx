import { TbCube } from "react-icons/tb"
import Button from "../UI/Button"

interface CourseDetailsProps {
  classDetails: {
    description: string;
    className: string;
    learnersLevel: string
  }
}

const CourseDetails = ({ classDetails }: CourseDetailsProps) => {

  return (
    <div className='flex flex-col mx-1 min-w-[300px] sm:max-w-full lg:max-w-[637px]'>
      <div className="flex justify-start text-[#1e1e1ee6] font-bold font-Inter leading-6 text-[23px] sm:text-[26px] md:text-2xl mb-8">
        {classDetails?.className}
      </div>

      <div className="inline-flex flex-wrap gap-2 justify-center md:justify-start">
        <Button variant="dotted">
          <TbCube className="h-4 w-4" />
          0 Tutorials
        </Button>

        <Button variant="dotted">
          <TbCube className="h-4 w-4" />
          0 Q&A Tests
        </Button>

        <Button variant="dotted">
          <TbCube className="h-4 w-4" />
          0 Learners
        </Button>

        <Button variant="dotted">
          <TbCube className="h-4 w-4" />
          For {classDetails?.learnersLevel}
        </Button>
      </div>

      <h2 className="flex justify-start text-[#1e1e1e] font-bold font-Inter leading-6 text-[23px] sm:text-2xl mt-10">
        What is this course about?
      </h2>
      <p className="text-[#1e1e1ee6] font-Inter text-justify text-base font-normal leading-extra-loose mt-5">
        {classDetails?.description}
      </p>
      <h2 className="flex justify-left text-[#1e1e1e] font-bold font-Inter leading-6 text-2xl mt-11">
        Course Tutorial
      </h2>
    </div>
  )
}

export default CourseDetails;