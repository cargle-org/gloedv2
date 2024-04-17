import { useEffect } from 'react';
import { StudentDashboardCourseLists } from '../../Layout/DashboardCourseLists'
import CourseOptionsButton from '../Layout/Dashboard/CourseOptionsButton';
import DashboardAside from '../Layout/CourseDetails/CourseAsideDetails';
import DashboardCards from '../Layout/Dashboard/DashboardCards';
import SideBar from '../Layout/SideBar';
import useHttp from '../../hooks/use-https';
import { getAllClassesRequest } from '../../../utils/class-fetch';
import LoadingSpinner from '../../UI/LoadingSpinner';

interface DashboardCourseListsProps {
  img: string;
  alt: string;
  title: string;
  description: string;
  className: string;
  _id: string;
  dateCreated: Date;
}

const StudentDashboard = () => {
  const userFname = localStorage.getItem("fName");

  const { sendRequest, status, error, data: courseLists } =
    useHttp(getAllClassesRequest);

  console.log(error);

  useEffect(() => {
    sendRequest();

  }, [sendRequest]);

  // Handle "Unauthorized" server error
  if (status === "completed" && error?.toString().includes("Unauthorized")) {
    window.location.reload(); // Reload the page on unauthorized error
  }

  //render loading indicator
  let authState;

  if (status === 'pending') {
    authState = (
      <LoadingSpinner />
    );
  }

  return (
    <div className="flex container mx-auto max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-full 2xl:max-w-[1440px] mb-20">
      <SideBar isOpen={false} />
      <div className='flex flex-wrap gap-4 2xl:gap-0 xl:flex-nowrap mx-auto max-w-full xl:max-w-[970px] 2xl:max-w-6xl 3xl:max-w-7xl'>
        <main className='flex flex-col mx-auto min-w-[300px] xl:max-w-auto 2xl:max-w-[658px]'>

          {/* ***UI state*** */}
          {authState}

          <DashboardCards firstName={userFname as string} />
          <CourseOptionsButton />
          <StudentDashboardCourseLists classes={courseLists as DashboardCourseListsProps[]} />
        </main>
        <DashboardAside classes={courseLists as DashboardCourseListsProps[]} />
      </div>
    </div>
  )
}

export default StudentDashboard;
