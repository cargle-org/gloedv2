import { Link } from "react-router-dom";
import { TbCube } from "react-icons/tb"
import Button from "../../UI/Button"
import AdminCourseAsideDetails from "../Layout/AdminCourseAsideDetails"
import AdminSideBar from "../Layout/AdminSideBar"
import { useState } from "react";
import AddSchedules from "../Layout/Modals/AddSchedules";
import CreateTest from "../Layout/Modals/CreateTest";

const AdminCourseDetails = () => {
  const [isSchedule, setIsSchedule] = useState(false)
  const [isAddTest, setIsAddTest] = useState(false)

  const showSchedule = () => {
    setIsSchedule(true)
  }

  const hideSchedule = () => {
    setIsSchedule(false)
  }
  const showAddTest = () => {
    setIsAddTest(true)
  }

  const hideAddTest = () => {
    setIsAddTest(false)
  }

  return (
    <main className="flex flex-col xl:flex-row container mx-auto mb-20 xl:mb-44 mt-1 max-w-[300px] sm:max-w-[400px] md:max-w-[630px] lg:max-w-[750px] xl:max-w-[1100px] 2xl:max-w-[1440px]">
      <AdminSideBar />
      <section className='flex -mt-4 md:mx-4 lg:mx-5 flex-col xl:flex-nowrap 2xl:mx-auto max-w-full flex-wrap font-Inter gap-4 2xl:gap-0 xl:max-w-[900px] 2xl:max-w-6xl 3xl:max-w-7xl'>
        <div className='flex flex-col mx-auto min-w-[300px] sm:max-w-full lg:max-w-[637px]'>
          <div className="flex justify-start text-[#1e1e1ee6] font-bold font-Inter leading-6 text-[23px] sm:text-[26px] md:text-2xl mb-8">
            Learn SQL Basics for Data Science Specialization.
          </div>

          {isSchedule && <AddSchedules onClose={hideSchedule} />}
          {isAddTest && <CreateTest onClose={hideAddTest} />}

          <div className="inline-flex flex-wrap gap-2 justify-center md:justify-start">
            <Button variant="dotted">
              <TbCube className="h-4 w-4" />
              5 Tutorials
            </Button>

            <Button variant="dotted">
              <TbCube className="h-4 w-4" />
              13 Q&A Tests
            </Button>

            <Button variant="dotted">
              <TbCube className="h-4 w-4" />
              49,650 Learners
            </Button>

            <Button variant="dotted">
              <TbCube className="h-4 w-4" />
              For intermidiates
            </Button>
          </div>

          <h2 className="flex justify-start text-[#1e1e1e] font-bold font-Inter leading-6 text-[23px] sm:text-2xl mt-10">
            What is this course about?
          </h2>
          <p className="text-[#1e1e1ee6] font-Inter text-justify text-base font-normal leading-extra-loose mt-5">
            This course examines the creation and deployment of microservices in Go. This path will be updated each week with new tutorials on various Go microservice applications. We'll create several projects and launch them on Kubernetes and other container management platforms. This course is intended for specialists who are already familiar with Go and want to learn more about the world of microservices.
          </p>
          <h2 className="flex justify-left text-[#1e1e1e] font-bold font-Inter leading-6 text-2xl mt-11">
            Course Tutorial
          </h2>

          <div className="flex justify-center items-center w-full mt-32">
            <Link to="/add-modules" className='flex justify-center items-center text-white font-Inter font-medium bg-black h-11 w-[290px] sm:w-[280px] lg:w-[325px] rounded-[5px] leading-auto transform transition hover:ring hover:underline-offset-4 hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-0'>
              Add learning modules
            </Link>
          </div>
        </div>
      </section>

      <AdminCourseAsideDetails onSchedule={showSchedule} onAddTest={showAddTest} />
    </main>
  )
}

export default AdminCourseDetails