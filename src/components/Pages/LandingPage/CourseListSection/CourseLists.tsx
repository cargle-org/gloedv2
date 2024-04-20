import { IoIosStar } from "react-icons/io";
import courseimg from '../../../../assets/images/courseimg.png';
import { getAllClassesRequest } from "../../../../utils/class-fetch";
import useHttp from "../../../hooks/use-https";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import LoadingSpinner from "../../../UI/LoadingSpinner";

interface CourseListsProps {
  _id: string;
  dateCreated: Date;
  alt: string,
  className: string,
  learnersLevel: string,
  price: number
}

type Course = CourseListsProps;

const CourseLists = () => {
  const { sendRequest, status, data: courseLists } =
    useHttp(getAllClassesRequest);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const sortedClasses = courseLists?.slice().sort((a: Course, b: Course) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());

  //render loading indicator
  let authState;

  if (status === 'pending') {
    authState = (
      <LoadingSpinner />
    );
  }

  return (
    <ul className="flex flex-wrap justify-center items-center sm:max-w-[425px] md:max-w-full xl:max-w-[950px] 2xl:max-w-full 3xl:max-w-[1337px] gap-6 sm:gap-2.5 md:gap-7 2xl:gap-5 mt-20 mx-auto animate-slideside300 opacity-0">
      {/* ***UI state*** */}
      {authState}

      {
        (sortedClasses as Course[])?.slice(0, 5).map((course, index) => (
          <li key={index} className="flex flex-col flex-shrink-0 h-[260px] w-[245px] sm:w-[200px] md:w-[245px] xl:w-[250px] 2xl:w-[230px] animate-slideside300 opacity-0 hover:scale-105 focus:scale-105 duration-300 cursor-pointer">
            <Link to={`/course-details/class/${course._id}`}>
              <img src={courseimg} alt={course.alt} />
              <figcaption className="flex-shrink-0 h-[38px] text-white text-left text-base sm:text-[15px] md:text-base font-bold leading-tight tracking-tight">
                {course?.className}
              </figcaption>
              <h5 className="text-[#6A6F73] my-2 font-normal leading-tight tracking-tight">
                {course?.learnersLevel}
              </h5>
              <div className="flex flex-wrap mb-1 justify-start items-center gap-1">
                <h5 className="text-[#C5D0E6]/25 text-base font-bold leading-4 tracking-[-0.32px]">
                  {/* {course.ratings} */}
                  4.7
                </h5>
                <span className="flex items-start">
                  <IoIosStar color='#4588EC' />
                  <IoIosStar color='#4588EC' />
                  <IoIosStar color='#4588EC' />
                  <IoIosStar color='#4588EC' />
                  <IoIosStar color='#4588EC' />
                  <IoIosStar color='#4588EC' />
                </span>
                <h5 className="text-[#6A6F73] text-sm font-normal leading-tight tracking-tight">
                  (0 learners)
                  {/* ({course.totalLearner} learners) */}
                </h5>
              </div>
              <div className="py-1 gap-2.5 flex items-start">
                <div className="text-white text-base font-bold leading-none tracking-tight">
                  {/* ₦ {course.price} */}
                </div>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default CourseLists