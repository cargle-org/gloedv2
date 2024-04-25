import { useEffect } from "react";
import { TbCube } from "react-icons/tb";
import Button from "../../UI/Button";
import SideBar from "../Layout/SideBar";
import CourseDetailsTutorials from "../Layout/CourseDetails/CourseDetailsTutorials";
import CourseAsideDetails from "../Layout/CourseDetails/CourseAsideDetails";
import CourseDetails from "../../Layout/CourseDetails";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-https";
import { getAllClassModulesRequest } from "../../../utils/module-fetch";
import { getOneClassRequest } from "../../../utils/class-fetch";
import LoadingSpinner from "../../UI/LoadingSpinner";

interface CourseDetailsProps {
  description: string;
  className: string;
  learnersLevel: string
}

/**
 * Renders the details of a course, including the course title, description, tutorials, and related buttons.
 *
 * @return {JSX.Element} The JSX element representing the course details.
 */

const StudentCourseDetails = () => {
  const { classID } = useParams();

  const { sendRequest: classRequest, status: classStatus, error: classError, data: classDetails } =
    useHttp(getOneClassRequest);

  const { sendRequest: moduleRequest, status: moduleStatus, error: moduleError, data: moduleDetails } =
    useHttp(getAllClassModulesRequest);

  useEffect(() => {
    console.log(moduleDetails?._id);
    moduleRequest(classID);
    console.log(moduleDetails);
  }, [moduleRequest]);

  useEffect(() => {
    console.log(classDetails?._id);
    classRequest(classID);
  }, [classRequest]);
  console.log(classDetails);

  //render loading indicator
  let authState;

  if (classStatus && moduleStatus === 'pending') {
    authState = (
      <LoadingSpinner />
    );
  }

  const hasPaid = (true);

  return (
    <>
      <div className="flex flex-col xl:flex-row container mx-auto mb-20 mt-1 max-w-[300px] sm:max-w-[400px] md:max-w-[630px] lg:max-w-[750px] xl:max-w-[1100px] 2xl:max-w-[1440px]">
        <SideBar isOpen={false} />
        <main>
          <section className='flex -mt-4 md:mx-4 lg:mx-5 flex-col xl:flex-nowrap 2xl:mx-auto max-w-full flex-wrap font-Inter gap-4 2xl:gap-0 xl:max-w-[900px] 2xl:max-w-6xl 3xl:max-w-7xl'>
            {/* ***UI state*** */}
            {authState}
            <div>
              {/* **Handle Incorrect Class** */}
              {classError && moduleError?.includes("Failed to fetch") && (
                <div className="bg-red-200 p-0.5 mb-1 text-center">
                  "Something went wrong! Please check your internet connection."
                </div>
              )}
            </div>
            <CourseDetails classDetails={classDetails as CourseDetailsProps} />
            <CourseDetailsTutorials moduleError={moduleError} moduleDetails={moduleDetails} />

            <Button variant="dotted" className="flex w-auto md:w-[637px] flex-wrap h-full md:h-[52px] text-[12.8px] md:text-sm text-primary mt-5">
              <TbCube className="h-4 w-4" />
              <span className="font-bold">
                Earn your badge:
              </span>
              <div className="font-medium hidden sm:block">
                Complete this course by answering some related questions!
              </div>
            </Button>
          </section>
        </main>
        <CourseAsideDetails hasPaid={hasPaid} />
      </div>
    </>
  )
}

export default StudentCourseDetails;