import ClassHistoryCourseLists from '../Layout/ClassHistory/ClassHistoryCourseLists';
import ClassHistoryOptionButton from '../Layout/ClassHistory/ClassHistoryOptionsButton';
import SideBar from '../Layout/SideBar';

const ClassHistory = () => {
  const userFname = localStorage.getItem("fName");

  return (
    <div className="flex container mx-auto mb-20 mt-10 xl:mt-14 max-w-[300px] sm:max-w-[400px] md:max-w-[610px] lg:max-w-[700px] xl:max-w-full 2xl:max-w-[1440px]">
      <SideBar isOpen={false} />
      <main>
        <section className='flex -mt-1 flex-col flex-wrap 2xl:gap-0 xl:flex-nowrap mx-auto max-w-full xl:max-w-[970px] 2xl:max-w-6xl 3xl:max-w-7xl'>
          <h2 className="text-[#262626] sm:text-lg text-2xl font-Poppins font-semibold leading-8">
            Good evening, {userFname}🥳
          </h2>
          <p className='mb-1.5 text-[#666] font-Inter text-base font-normal leading-6 py-2'>
            What do you want to learn or work on today! I’m here to help!
          </p>

          <ClassHistoryOptionButton />
          <ClassHistoryCourseLists />
        </section>
      </main>
    </div>
  )
}

export default ClassHistory