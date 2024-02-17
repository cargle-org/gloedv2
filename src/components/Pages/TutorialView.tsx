import { FaAngleRight } from "react-icons/fa6"
import Button from "../UI/Button"
import TutorialViewSideBar from "../Layout/TutorialView.tsx/TutorialViewSideBar"
import TutorialViewNavButtons from "../Layout/TutorialView.tsx/TutorialViewNavButtons";

const TutorialView = () => {
  const isAdmin = true;

  return (
    <div className="flex font-Inter mb-32">
      <TutorialViewSideBar />

      <div className="container w-auto px-5 sm:px-6 2xl:px-2 mx-auto max-w-[909px] 3xl:max-w-[1069px]">
        {/* //Student tutorial navigation buttons */}
        {!isAdmin && <TutorialViewNavButtons />}

        <div className="">
          <div className="flex justify-between items-center mb-6 flex-col-reverse gap-5 sm:gap-3 md:flex-row ">
            <h1 className="text-[#1E1E1E] text-[23px] sm:text-[25px] 3xl:text-2xl leading-[26px] sm:leading-6 font-bold lg:mr-3 2xl:mr-0">
              Tutorial 4:  Incident management and Testing in microservices
            </h1>

            {/* //Admin update tutorial button */}
            {isAdmin &&
              <div className='flex justify-end items-center'>
                <Button variant="modal" className="bg-primary">
                  Update class module
                  <FaAngleRight className="h-4 2-4" />
                </Button>
              </div>
            }
          </div>

          <p className="text-base text-wrap leading-[30px] text-[#E1E1EE6] md:text-justify mb-6">
            This tutorial examines the creation and deployment of microservices in Go. This path will be updated each week with new tutorials on
            various Go microservice applications. We'll create several projects and launch them on Kubernetes and other container management platforms.
            This course is intended for specialists who are already familiar with Go and want to learn more about the world of microservices.
          </p>

          <h2 className="text-[#1E1E1E] text-2xl leading-[24px] font-bold mb-3.5">
            Prerequisites
          </h2>

          <p className="text-base leading-[30px] text-[#E1E1EE6] md:text-justify mb-14">
            The following steps in this post require Golang experience. Experience with MongoDB isn’t a requirement, but it’s nice to have.
            We will also be needing the following:
            <ul className="list-disc ml-6">
              <li>A MongoDB account to host database. Signup is completely free.</li>
              <li>Postman or any API testing application of your choice</li>
            </ul>
          </p>

          <h2 className="text-[#1E1E1E] text-2xl leading-[24px] font-bold mb-8">
            Key Takeaways
          </h2>

          <div className="text-base leading-[30px] text-[#E1E1EE6] md:text-justify">
            <ul className="list-disc ml-6 flex flex-col gap-3 md:gap-0">
              <li>
                Role-based and resource-based authorisation entails approving a request in accordance with the roles that have been given to a user or a certain resource.
              </li>
              <li>
                The right to control who can see and access information should belong to the person who created it. Access privileges for each user should be individually customizable by organisations.
              </li>
              <li>
                The best way to explain this resource distribution is as a division of the system's resources among various administrative areas.
              </li>
              <li>
                Helpers can make it easier to develop role-based systems by streamlining the process of granting access depending on the roles associated with each user profile.
              </li>
              <li>
                Roles are given permissions, and maybe granted to people or user groups.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorialView 