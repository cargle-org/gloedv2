import { useEffect, useState } from "react";
import AdminCourseAsideDetails from "../Layout/AdminCourseAsideDetails"
import AdminSideBar from "../Layout/AdminSideBar";
import AddSchedules from "../Layout/Modals/AddSchedules";
import CreateTest from "../Layout/Modals/CreateTest";
import { Link, useParams } from "react-router-dom";
import CourseDetails from "../../Layout/CourseDetails";
import { getAllClassModulesRequest } from "../../../utils/module-fetch";
import { getOneClassRequest } from "../../../utils/class-fetch";
import useHttp from "../../hooks/use-https";
import LoadingSpinner from "../../UI/LoadingSpinner";
import CourseDetailsTutorials from "../../Student/Layout/CourseDetails/CourseDetailsTutorials";
import EditClass from "../Layout/Modals/EditClass";

const AdminCourseDetails: React.FC = () => {
  const { classID } = useParams();
  const [isSchedule, setIsSchedule] = useState<boolean>(false);
  const [isAddTest, setIsAddTest] = useState<boolean>(false);
  const [isEditClass, setIsEditClass] = useState<boolean>(false);

  const { sendRequest: classRequest, status: classStatus, error: classError, data: classDetails } =
    useHttp(getOneClassRequest);

  const { sendRequest: moduleRequest, error: moduleError, data: moduleDetails } =
    useHttp(getAllClassModulesRequest);

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

  const showEditClass = () => {
    setIsEditClass(true)
  }

  const hideEditClass = () => {
    setIsEditClass(false)
  }

  useEffect(() => {
    classRequest(classID);
  }, [classRequest]);

  useEffect(() => {
    moduleRequest(classID);
  }, [moduleRequest]);

  //render loading indicator
  let authState;

  if (classStatus === 'pending') {
    authState = (
      <LoadingSpinner />
    );
  }

  return (
    <div className="flex flex-col xl:flex-row container mx-auto mb-20 xl:mb-0 mt-1 max-w-[300px] sm:max-w-[400px] md:max-w-[630px] lg:max-w-[750px] xl:max-w-[1100px] 2xl:max-w-[1440px]">
      <AdminSideBar isOpen={false} />

      <main>
        <section className='flex -mt-4 md:mx-4 lg:mx-5 mb-10 flex-col xl:flex-nowrap 2xl:mx-auto max-w-full flex-wrap font-Inter gap-4 2xl:gap-0 xl:max-w-[900px] 2xl:max-w-6xl 3xl:max-w-7xl'>
          {/* ***UI state*** */}
          {authState}
          <div>
            {/* **Incorrect Class** */}
            {classError && (
              <div className="bg-red-200 p-0.5 mb-1 text-center">
                "Unable to get Classes!"
              </div>
            )}
          </div>
          <CourseDetails classDetails={classDetails} />
          <CourseDetailsTutorials moduleError={moduleError as string | null} moduleDetails={moduleDetails} />

          <div className="flex justify-center items-center w-full mt-32">
            <Link to={`/add-modules/class/${classID}/modules`} className='flex justify-center items-center text-white font-Inter font-medium bg-black h-11 w-[290px] sm:w-[280px] lg:w-[325px] rounded-[5px] leading-auto transform transition hover:ring hover:underline-offset-4 hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-0'>
              Add {moduleDetails?.length > 1 && 'More'} learning modules
            </Link>
          </div>
        </section>

        {isSchedule && <AddSchedules onClose={hideSchedule} />}
        {isAddTest && <CreateTest onClose={hideAddTest} />}
        {isEditClass && <EditClass onClose={hideEditClass} />}
        <AdminCourseAsideDetails onSchedule={showSchedule} onAddTest={showAddTest} onEdit={showEditClass} />
      </main>
    </div>
  )
}

export default AdminCourseDetails;