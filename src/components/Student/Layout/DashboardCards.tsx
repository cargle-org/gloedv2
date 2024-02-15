import Card from "../../UI/Card"

const DashboardCards = () => {
  return (
    <section>
      <h3 className="flex py-2.5 justify-start text-xl md:text-2xl font-Poppins font-medium leading-[42px] ">
        Welcome back, CodedLibra
      </h3>
      <div className="grid container mx-auto gap-4 items-start sm:max-w-full sm:grid-cols-2 2xl:max-w-[630px] md:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 2xl:mx-0">
        <Card variant="dashboard" className="bg-[#FFEFE7] sm:col-span-2 md:col-span-1 xl:col-span-2 items-center md:items-start xl:items-center 2xl:items-start 2xl:col-span-1 2xl:w-[204px]">
          <div className="font-medium text-[#161E54] font-Inter leading-7 text-lg">
            Total Upcoming
          </div>
          <div className="font-medium text-[#161E54] font-Poppins text-4xl leading-7">
            10
          </div>
          <div className="items-stretch font-normal underline text-base text-[#FF5151] font-Inter leading-6">
            View all
          </div>
        </Card>
        <Card variant="dashboard" className="bg-[#E8F0FB] items-center sm:items-start 2xl:items-start 2xl:w-[204px]">
          <div className="font-medium text-[#161E54] font-Inter leading-7 text-lg ">
            Total Ongoing
          </div>
          <div className="font-medium text-[#161E54] font-Poppins text-4xl leading-7">
            10
          </div>
          <div className="items-stretch font-normal underline text-base text-[#3786F1] font-Inter leading-6">
            View all
          </div>
        </Card>
        <Card variant="dashboard" className="bg-[#FDEBF9] items-center sm:items-start 2xl:items-start 2xl:w-[204px]">
          <div className="font-medium text-[#161E54] font-Inter leading-7 text-lg ">
            Total Completed
          </div>
          <div className="font-medium text-[#161E54] font-Poppins text-4xl leading-7">
            24
          </div>
          <div className="items-stretch font-normal underline text-base text-[#EE61CF] font-Inter leading-6">
            View all
          </div>
        </Card>
      </div>
    </section>
  )
}

export default DashboardCards
