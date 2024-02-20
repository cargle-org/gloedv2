import { Link } from "react-router-dom"
import Button from "../../UI/Button"

const CourseRequirements = () => {
  return (
    <div className="flex flex-col container mx-auto h-screen max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[700px] mb-24">
      <div className="w-full lg:w-[637px] mx-auto">
        <h1 className="font-Inter font-bold text-2xl mb-10 leading-6 text-[#1E1E1E]">
          Course requirements
        </h1>
        <p className="font-Inter text-base text-justify font-medium leading-[30px] text-[#1E1E1EE6]">
          This course has been made for industry experts who understand the basics and intermediate levels of how cloud computing and Golang works. Below are some of the important course requirements.
        </p>

        <ul className="flex flex-col gap-5 mt-7">
          {requirementLists.map((requirement, index) => (
            <Button key={index} variant="dotted" className="flex justify-center items-center flex-wrap h-10">
              <div className="text-[#1E1E1EE6] text-[13px] md:text-sm font-medium leading-6 tracking-[-0.2px]">
                {requirement.title}
              </div>
            </Button>
          ))}
        </ul>

        <Link to="/course-details" className="flex justify-center items-center mt-72 mb-20">
          <div className="flex items-center justify-center w-[620px] h-[46px] text-white text-[13px] md:text-sm bg-[#000] font-medium rounded-[5px] leading-6 tracking-[-0.2px]">
            Ok great i get this. Close this!
          </div>
        </Link>
      </div>
    </div>
  )
}

export default CourseRequirements

export const requirementLists = [
  {
    title: "A knowledge of the basics of Go"
  },
  {
    title: "Basic knowledge of microservices"
  },
  {
    title: "Basic knowledge of cloud computing"
  },
  {
    title: "Golang installed on your PC"
  },
]