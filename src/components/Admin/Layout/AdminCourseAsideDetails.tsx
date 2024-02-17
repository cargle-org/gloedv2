import coursedetailsimg from '../../assets/images/dashboardcourseimg.png'
import Button from '../../UI/Button'

const AdminCourseAsideDetails = (props: any) => {
  return (
    <aside className="flex items-center justify-center flex-col mt-32 mb-16 xl:mb-0 xl:-mt-3 mx-auto xl:mr-5 2xl:mr-auto xl:justify-normal w-[290px] xl:w-[332px]">
      <div className='md:inline-flex md:gap-6 lg:gap-8 xl:gap-0 flex-row-reverse xl:flex-col'>
        <div className='flex flex-col gap-10 xl:gap-2.5'>
          <div className='flex container mx-auto justify-center items-center xl:mb-8 md:w-[250px] lg:w-[276px]'>
            <img src={coursedetailsimg} alt='course details image' />
          </div>
          <div className='grid gap-5'>
            <Button variant='details' className='bg-black h-11 w-[290px] sm:w-[280px] lg:w-[325px]'>
              Edit course details
            </Button>
            <Button variant='details' onClick={props.onSchedule} className='bg-primary h-10 w-[290px] sm:w-[280px] lg:w-[325px] hover:bg-primary-light'>
              Add scheduling dates
            </Button>
            <Button variant='details' className='bg-[#A91D22] h-10 w-[290px] sm:w-[280px] lg:w-[325px]'>
              Archive this course
            </Button>
            <Button variant='details' className='bg-[#7F6C35] h-10 w-[290px] sm:w-[280px] lg:w-[325px]'>
              View and manage class bookings
            </Button>
            <Button variant='details' onClick={props.onAddTest} className='bg-[#0E3617] h-10 w-[290px] sm:w-[280px] lg:w-[325px]'>
              Add a test to this course
            </Button>
          </div>
        </div>

      </div>
    </aside>
  )
}

export default AdminCourseAsideDetails