import { SlOptions } from "react-icons/sl";

interface DashboardCourseListsProps {
  img: string;
  alt: string;
  title: string;
  description: string;
  className?: string;
  _id?: string;
}

const DashboardAsideSchedule = ({ classes }: { classes: DashboardCourseListsProps[] }) => {

  return (
    <div className='flex flex-col border border-[#E0E0E0] border-b-white w-auto rounded-xl px-4 sm:px-3 xl:px-2.5'>
      <div className='flex items-center justify-center pt-3 md:pt-5 text-black font-Poppins text-lg font-semibold text-center leading-7'>
        Upcoming Class Schedule
      </div>
      <div className='flex flex-col'>
        <span className='flex h-[23px] justify-left my-2 font-Poppins text-[#686868] text-xs font-semibold text-left leading-7'>
          Priority
        </span>
        <ul>
          {classes?.slice(0, 1).map((course, index) => (
            <li key={index} className='flex justify-between items-center py-2.5 px-4 sm:px-3.5 rounded-md border-[0.5px] border-[#E0E0E0] bg-[#FAFAFA] gap-7'>
              <div>
                <span className='flex text-[#303030] font-Poppins text-sm sm:text-base font-normal leading-6 tracking-tighter'>
                  {course.title}
                </span>
                <span className='self-stretch text-[10px] text-[#686868] font-Roboto font-normal leading-[14px]'>
                </span>
              </div>
              <span className=''>
                <SlOptions fill="#B2B2B2" className="h-auto w-5" />
              </span>
            </li>
          ))}
        </ul>
        <span className='flex h-[23px] justify-left my-2 text-[#686868] text-xs font-semibold text-left leading-7 '>
          Other
        </span>

        <ul>
          {classes?.slice(0, 2).map((course, index) => (
            <li key={index} className='flex justify-between items-center py-2.5 px-4 sm:px-3.5 rounded-md border-[0.5px] border-[#E0E0E0] bg-[#FAFAFA] gap-7'>
              <div>
                <span className='flex text-[#303030] font-Poppins text-sm sm:text-base font-normal leading-6 tracking-tighter'>
                  {course.title}
                </span>
                <span className='self-stretch text-[10px] text-[#686868] font-Roboto font-normal leading-[14px]'>
                </span>
              </div>
              <span>
                <SlOptions fill="#B2B2B2" className="h-auto w-5" />
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col justify-center mt-3 gap-2.5 border border-white items-center rounded-b-[10px] p-2.5'>
        <span className='text-[#DB2719] text-center font-Poppins text-sm font-semibold leading-5'>
          Create a New Schedule
        </span>
      </div>
    </div>
  )
}

export default DashboardAsideSchedule