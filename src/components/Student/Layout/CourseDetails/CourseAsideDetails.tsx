import { Link } from 'react-router-dom'
import { TbCube } from 'react-icons/tb'
import coursedetailsimg from '../../assets/images/dashboardcourseimg.png'
import avatar from '../../../assets/tutoravatar.svg'
import Button from '../../../UI/Button'

const CourseAsideDetails = ({ hasPaid }: any) => {
  return (
    <aside className="flex items-center justify-center flex-col mb-16 xl:mb-0 mt-14 xl:-mt-4 mx-auto xl:mr-5 2xl:mr-auto xl:justify-normal w-[290px] xl:w-[332px]">
      <div className='md:inline-flex flex-row-reverse sm:flex-col md:flex-row xl:flex-col md:gap-6 lg:gap-8 xl:gap-0 '>
        <div className='flex flex-col gap-10 xl:gap-2.5'>
          <div className={`flex container mx-auto justify-center items-center ${!hasPaid ? " xl:mb-6" : "xl:mb-20"} md:w-[250px] lg:w-[276px]`}>
            <img src={coursedetailsimg} alt='course details image' />
          </div>
          <div className='flex flex-col justify-center items-center gap-5'>
            <Button variant='details' className='bg-black h-11 w-[290px] sm:w-[280px] lg:w-[325px]'>
              {!hasPaid ? 'Continue learning' : 'Get started (₦10,000)'}
            </Button>
            <Button variant='details' className='bg-primary h-10 w-[290px] sm:w-[280px] lg:w-[325px]'>
              {!hasPaid ? 'View course project' : 'Save for later'}
            </Button>
          </div>
        </div>

        <div className='flex justify-center items-center flex-col'>
          <div className="flex flex-col h-full px-5 pb-7 mt-12 md:mt-0 xl:mt-12 w-[290px] lg:w-[325px] border border-[#1e1e1e59] bg-white rounded-[10px] shadow-2xl shadow-[#1e1e1e59]">
            <div className='text-[#000000e8] font-Inter font-semibold text-sm leading-normal pt-8'>
              Course Creator
            </div>
            <div className='font-Inter font-medium text-[10px] text-[#000000a8]'>
              This course his been taken by
            </div>
            <div className='flex my-5'>
              <span className='mr-2.5'>
                <img src={avatar} alt='Course Tutor image' />
              </span>
              <div className='flex flex-col gap-1.5'>
                <span className='flex font-Inter font-bold text-sm text-black leading-normal'>
                  Chioma Adeleye
                </span>
                <span className='inline-flex font-Inter font-medium text-[11px] text-[#2b2b2bde] leading-4'>
                  Senior Data analyst at Twitter
                </span>
              </div>
            </div>
            <Button variant='details' className='bg-primary h-11 md:w-[245px] lg:w-[285px]'>
              Check author profile
            </Button>
          </div>

          {!hasPaid && (
            <div className='flex justify-start flex-col h-full gap-3.5 p-5 pb-7 mt-5 w-[290px] lg:w-[332px] text-base font-Inter font-bold bg-white drop-shadow-xl rounded-md leading-[18px]'>
              <Link to="" className='flex items-center gap-3.5 h-[38px] w-[245px] transform transition hover:underline hover:underline-offset-4 hover:text-primary hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-0 '>
                <TbCube className="h-4 w-4" />
                View course requirements
              </Link>
              <Link to="" className='flex items-center gap-3.5 h-[38px] w-[245px] transform transition hover:underline hover:underline-offset-4 hover:text-primary hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-0'>
                <TbCube className="h-4 w-4" />
                View author’s note to you
              </Link>
              <Link to="" className='flex items-center gap-3.5 h-[38px] w-[245px] transform transition hover:underline hover:underline-offset-4 hover:text-primary hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-0'>
                <TbCube className="h-4 w-4" />
                Join the course community
              </Link>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}

export default CourseAsideDetails