import dashboardcourseimg from '../../assets/images/dashboardcourseimg.png'
import Card from '../UI/Card';

interface DashboardCourseListsProps {
  img: string;
  alt: string;
  title: string;
  description: string;
}

export const DashboardCourseLists = () => { }

export const StudentDashboardCourseLists = () => {
  return (
    <section className="">
      <ul className="md:grid grid-cols-1 md:grid-cols-2 flex flex-wrap w-auto justify-center md:max-w-auto 2xl:max-w-[650px] gap-3 md:gap-4 xl:gap-4">
        {dashboardCourseLists.slice(0, 2).map((course, index) => (
          <Card variant="course" key={index} className="flex sm:flex-grow w-[280px] sm:w-auto sm:min-w-[280px] sm:max-w-[324px] items-center">
            <figure className="">
              <img src={course.img} alt={course.alt} />
              <figcaption className="flex-1 flex-shrink-0 text-[#101828] text-balance text-lg lg:text-xl font-Inter font-semibold leading-7">
                {course.title}
              </figcaption>
              <p className="text-[#667085] text-wrap mt-2 font-normal leading-6 font-Inter text-sm lg:text-base">
                {course.description}
              </p>
            </figure>
          </Card>
        ))}
      </ul>
    </section>

  )
}



export const dashboardCourseLists: DashboardCourseListsProps[] = [
  {
    img: dashboardcourseimg,
    alt: "Dashboard courselist image",
    title: "Learn SQL Basics for Data Science Specialization.",
    description: "Clean & Hexagonal architectures, DDD, SAGA, Outbox, CQRS,",
  },
  {
    img: dashboardcourseimg,
    alt: "Dashboard courselist image",
    title: "Learn SQL Basics for Data Science Specialization.",
    description: "Clean & Hexagonal architectures, DDD, SAGA, Outbox, CQRS,",
  },
  {
    img: dashboardcourseimg,
    alt: "Dashboard courselist image",
    title: "Learn SQL Basics for Data Science Specialization.",
    description: "Clean & Hexagonal architectures, DDD, SAGA, Outbox, CQRS,",
  },
]