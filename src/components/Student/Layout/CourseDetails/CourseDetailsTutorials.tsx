import { TbCube } from "react-icons/tb"
import Button from "../../../UI/Button"

const CourseDetailsTutorials = () => {
  return (
    <ul className="flex flex-col gap-6 mt-7">
      {tutorialLists.map((tutorial, index) => (
        <Button key={index} variant="dotted" className="flex flex-wrap h-full md:h-[52px] text-[12.8px] md:text-sm">
          <TbCube className="h-4 w-4" />
          <span className="font-bold ">{tutorial.index} </span>
          <div className="font-medium hidden sm:block">
            {tutorial.title}
          </div>
        </Button>
      ))}
    </ul>
  )
}

export default CourseDetailsTutorials

export const tutorialLists = [
  {
    index: "Tutorial 1:",
    title: "Introduction to microservices - A simple microservice system"
  },
  {
    index: "Tutorial 2:",
    title: "Orchestrating communication in microservices with Orkes"
  },
  {
    index: "Tutorial 3:",
    title: "Deploying microservices as a DevOps Engineer"
  },
  {
    index: "Tutorial 4:",
    title: "Complete this course by answering some related questions!"
  }
]