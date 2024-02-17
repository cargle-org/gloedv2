import { StudentDashboardCourseLists } from '../../Layout/DashboardCourseLists'
import CourseOptionsButton from '../Layout/Dashboard/CourseOptionsButton'
import DashboardAside from '../Layout/Dashboard/DashboardAside'
import DashboardCards from '../Layout/Dashboard/DashboardCards'
import SideBar from '../Layout/SideBar'

const StudentDashboard = () => {
  return (
    <main className="flex container mx-auto max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-full 2xl:max-w-[1440px] mb-20">
      <SideBar />
      <div className='flex flex-wrap gap-4 2xl:gap-0 xl:flex-nowrap mx-auto max-w-full xl:max-w-[970px] 2xl:max-w-6xl 3xl:max-w-7xl'>
        <div className='flex flex-col mx-auto min-w-[300px] xl:max-w-auto 2xl:max-w-[658px]'>
          <DashboardCards />
          <CourseOptionsButton />
          <StudentDashboardCourseLists />
        </div>
        <DashboardAside />
      </div>
    </main >
  )
}

export default StudentDashboard
