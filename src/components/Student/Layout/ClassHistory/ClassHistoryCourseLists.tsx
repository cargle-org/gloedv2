import coursedetailsimg from '../../../../assets/images/dashboardcourseimg.png'
import Card from '../../../UI/Card';

interface ClassHistoryCourseListsProps {
  img: string;
  alt: string;
  title: string;
  description: string;
}

const ClassHistoryCourseLists = () => {
  return (
    <section className='mb-10 2xl:mr-6'>
      <ul className=" flex flex-wrap w-auto justify-center xl:grid grid-cols-2 xl:grid-cols-3 md:max-w-auto 2xl:max-w-full gap-5 md:gap-4 md:gap-y-7 lg:gap-8 xl:gap-12 3xl:gap-14">
        {dashboardCourseLists.map((course, index) => (
          <Card variant="course" key={index} className="flex sm:flex-grow w-[280px] sm:w-auto sm:min-w-[280px] sm:max-w-[324px] md:max-w-[290px] lg:max-w-[324px] items-center">
            <figure>
              <img src={course.img} alt={course.alt} />
              <figcaption className="flex flex-grow flex-shrink text-[#101828] text-balance text-lg lg:text-xl font-Inter font-semibold leading-7">
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

export default ClassHistoryCourseLists


export const dashboardCourseLists: ClassHistoryCourseListsProps[] = [
  {
    img: coursedetailsimg,
    alt: "Dashboard courselist image",
    title: "Learn SQL Basics for Data Science Specialization.",
    description: "Clean & Hexagonal architectures, DDD, SAGA, Outbox, CQRS,",
  },
  {
    img: coursedetailsimg,
    alt: "Dashboard courselist image",
    title: "Learn SQL Basics for Data Science Specialization.",
    description: "Clean & Hexagonal architectures, DDD, SAGA, Outbox, CQRS,",
  },
  {
    img: coursedetailsimg,
    alt: "Dashboard courselist image",
    title: "Learn SQL Basics for Data Science Specialization.",
    description: "Clean & Hexagonal architectures, DDD, SAGA, Outbox, CQRS,",
  },
]