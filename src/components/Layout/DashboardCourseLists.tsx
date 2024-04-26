import dashboardcourseimg from '../../assets/images/dashboardcourseimg.png';
import Card from '../UI/Card';
import { Link } from 'react-router-dom';

interface DashboardCourseListsProps {
  img: string;
  alt: string;
  title: string;
  description: string;
  className: string;
  _id: string;
  dateCreated: Date;
}

type Course = DashboardCourseListsProps;

export const StudentDashboardCourseLists = ({ classes }: { classes: Course[] }) => {

  //arrange classes from latest to oldest
  const sortedClasses = classes?.slice().sort((a: Course, b: Course) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());

  return (
    <section>
      {classes ? (
        <ul className="md:grid grid-cols-1 md:grid-cols-2 flex flex-wrap w-auto justify-center md:max-w-auto 2xl:max-w-[650px] gap-3 md:gap-4 xl:gap-4">
          {sortedClasses?.slice(0, 2).map((course, index) => (
            <Card variant="course" key={index} className="flex items-center sm:flex-grow w-[280px] sm:w-auto sm:min-w-[280px] sm:max-w-[324px]">
              <Link to={`/course-details/class/${course._id}`}>
                <img src={dashboardcourseimg} alt={course.className} />
                <h3 className="flex-1 flex-shrink-0 h-14 text-[#101828] text-balance text-lg lg:text-xl font-Inter font-semibold leading-7">
                  {course.className}
                </h3>
                <p className="text-[#667085] text-wrap h-12 mt-2 font-normal leading-6 font-Inter text-sm lg:text-base">
                  {course.description}
                </p>
              </Link>
            </Card>
          ))}
        </ul>
      ) :
        <p className='font-semibold text-lg'>
          Unable to fetch classes yet!
        </p>
      }
    </section>
  )
}

export const AdminDashboardCourseLists = ({ classes }: { classes: Course[] }) => {
  //arrange classes from latest to oldest
  const sortedClasses = classes?.slice().sort((a: Course, b: Course) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());

  return (
    <section className="mb-10 2xl:mr-6">
      {classes ? (
        <ul className=" flex flex-wrap w-auto justify-center xl:grid grid-cols-2 xl:grid-cols-3 md:max-w-auto 2xl:max-w-full gap-5 md:gap-4 md:gap-y-7 lg:gap-8 xl:gap-12 3xl:gap-14">
          {sortedClasses?.slice(0, 3).map((course, index) => (
            <Card variant="course" key={index} className="flex sm:flex-grow w-[280px] sm:w-auto sm:min-w-[280px] sm:max-w-[324px] md:max-w-[290px] lg:max-w-[324px] items-center">
              <Link to={`/admin-course-details/class/${course._id}`}>
                <img src={dashboardcourseimg} alt={course.className} />
                <figcaption className="flex flex-grow flex-shrink h-14 text-[#101828] text-balance text-lg lg:text-xl font-Inter font-semibold leading-7">
                  {course.className}
                </figcaption>
                <p className="text-[#667085] text-wrap h-12 mt-2 font-normal leading-6 font-Inter text-sm lg:text-base">
                  {course.description}
                </p>
              </Link>
            </Card>
          ))}
        </ul>
      ) :
        <p className='font-semibold text-lg'>Unable to fetch classes yet!</p>
      }
    </section >
  )
}

