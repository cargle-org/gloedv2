import Button from "../../../UI/Button"
import DashboardAsideSchedule from "./DashboardAsideSchedule"

const DashboardAside = () => {
  return (
    <aside
      className="flex flex-1 flex-col container mx-auto max-w-full md:max-w-md xl:mr-0 2xl:mx-5 xl:max-w-max 2xl:max-w-2/4 3xl:max-w-[427px] mt-12 xl:mt-8 space-y-12 xl:space-y-14"
      aria-label="upcoming class schedules">
      <div className="flex flex-col rounded-lg text-white bg-[#161E54] pl-6 pr-2.5 pb-4">
        <div className="font-medium text-white font-Inter leading-7 text-lg py-2.5 pr-0 bg-[#1B204A]">
          Join Our Learning Community
        </div>
        <div className="font-normal opacity-80 text-wrap text-white font-Inter leading-5 text-sm w-[280px] sm:w-[350px] xl:w-[300px] 2xl:w-[335px] 3xl:w-[340px] mt-6">
          Ask questions and contribute while helping others grow with you as well!
        </div>
        <Button variant="aside" className="mt-4 mr-5">
          Click here to join
        </Button>
      </div>
      <DashboardAsideSchedule />
    </aside>
  )
}

export default DashboardAside