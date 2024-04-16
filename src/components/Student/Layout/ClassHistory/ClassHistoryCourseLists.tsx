import { useEffect } from 'react';
import dashboardcourseimg from '../../../assets/dashboardcourseimg.png'
import Card from '../../..//UI/Card';
import useHttp from '../../../hooks/use-https';
import LoadingSpinner from '../../../UI/LoadingSpinner';
import { Link } from 'react-router-dom';
import { getAllClassesRequest } from '../../../../utils/class-fetch';

interface ClassHistoryCourseListsProps {
  img: string;
  alt: string;
  title: string;
  description: string;
  className?: string;
  _id?: string;
}

const ClassHistoryCourseLists = () => {
  const { sendRequest, status, error, data: courseLists } =
    useHttp(getAllClassesRequest);

  useEffect(() => {
    sendRequest();
    console.log(courseLists);
  }, []);

  //render loading indicator
  let authState;

  if (status === 'pending') {
    authState = (
      <LoadingSpinner />
    );
  }

  return (
    <section className='mb-10 2xl:mr-6'>
      {/* ***UI state*** */}
      {authState}
      <div>
        {/* **Incorrect login** */}
        {error && (
          <div className="bg-red-200 p-0.5 mb-2 text-center">
            "Error Loading Classes, Please try again!"
          </div>
        )}
      </div>

      <ul className=" flex flex-wrap w-auto justify-center xl:grid grid-cols-2 xl:grid-cols-3 md:max-w-auto 2xl:max-w-full gap-5 md:gap-4 md:gap-y-7 lg:gap-8 xl:gap-12 3xl:gap-14">
        {(courseLists as ClassHistoryCourseListsProps[])?.slice(0, 3).map((course, index) => (
          <Card variant="course" key={index} className="flex sm:flex-grow w-[280px] sm:w-auto sm:min-w-[280px] sm:max-w-[324px] md:max-w-[290px] lg:max-w-[324px] items-center">
            <Link to={`/course-details/class/${course._id}`}>
              <img src={dashboardcourseimg} alt={course.className} />
              <h3 className="flex flex-grow flex-shrink h-14 text-[#101828] text-balance text-lg lg:text-xl font-Inter font-semibold leading-7">
                {course.className}
              </h3>
              <p className="text-[#667085] text-wrap mt-2 h-12 font-normal leading-6 font-Inter text-sm lg:text-base">
                {course.description}
              </p>
            </Link>
          </Card>
        ))}
      </ul>
    </section>
  )
}

export default ClassHistoryCourseLists

