import { useState } from 'react';
import AdminSideBar from '../Layout/AdminSideBar'
import AdminCourseOptionsButton from '../Layout/AdminCourseOptionsButton';
import { AdminDashboardCourseLists } from '../../Layout/DashboardCourseLists';
import AdminDashboardCards from '../Layout/AdminDashboardCards';
import Button from '../../UI/Button';
import CreateClass from '../Layout/Modals/CreateClass';
import CreateTest from '../Layout/Modals/CreateTest';

const AdminDashboard = () => {
  const [isAddClass, setIsAddClass] = useState(false)
  const [isAddTest, setIsAddTest] = useState(false)

  //Create class
  const showAddClass = () => {
    setIsAddClass(true)
  }

  const hideAddClass = () => {
    setIsAddClass(false)
  }

  //Create test
  const showAddTest = () => {
    setIsAddTest(true)
  }

  const hideAddTest = () => {
    setIsAddTest(false)
  }

  return (
    <main className="flex container mx-auto max-w-[300px] sm:max-w-[400px] md:max-w-[610px] lg:max-w-[700px] xl:max-w-full 2xl:max-w-[1440px] mb-20 lg:mt-2">
      <AdminSideBar />
      <div className='flex flex-col flex-wrap gap-4  mx-auto 2xl:gap-0 xl:flex-nowrap max-w-full xl:max-w-[970px] 2xl:max-w-6xl 3xl:max-w-7xl'>
        <section className='flex justify-between items-center mb-2 sm:mb-4 xl:mb-7 flex-col-reverse md:flex-row max-w-[850px] 2xl:max-w-4xl '>
          <h3 className="flex py-2.5 items-start text-xl xl:text-2xl font-Poppins font-medium leading-[42px]">
            Welcome back, Super Admin
          </h3>
          <div className='flex gap-3 items-center'>
            <Button onClick={showAddClass} variant='dark'>
              Create class
            </Button>
            <Button onClick={showAddTest} variant='dark'>
              Create test
            </Button>
          </div>
        </section>

        {isAddClass && <CreateClass onClose={hideAddClass} />}
        {isAddTest && <CreateTest onClose={hideAddTest} />}

        <AdminDashboardCards />
        <AdminCourseOptionsButton />
        <AdminDashboardCourseLists />
      </div>
    </main >
  )
}

export default AdminDashboard
