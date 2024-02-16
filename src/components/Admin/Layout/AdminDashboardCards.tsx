import Card from "../../UI/Card"

const AdminDashboardCards = () => {
  return (
    <section className="">

      <div className="grid gap-3 items-start xl:flex lg:gap-2.5 md:grid-cols-2 xl:grid-cols-full">
        <Card variant="dashboard" className="bg-[#E8F0FB] items-center xl:items-start xl:w-[184px] 2xl:w-[204px]">
          <div className="font-medium text-[#161E54] font-Inter leading-7 text-lg">
            Total Classes
          </div>
          <div className="font-medium text-[#161E54] font-Poppins text-4xl leading-7">
            10
          </div>
        </Card>
        <Card variant="dashboard" className="bg-[#FDEBF9] items-center xl:items-start xl:w-[252px]">
          <div className="font-medium text-[#161E54] font-Inter leading-7 text-lg">
            Total Upcoming Classes
          </div>
          <div className="font-medium text-[#161E54] font-Poppins text-4xl leading-7">
            24
          </div>
        </Card>

        <Card variant="dashboard" className="bg-[#91d3b838] items-center xl:items-start xl:w-[204px]">
          <div className="font-medium text-[#161E54] font-Inter leading-7 text-lg">
            Total Past Classes
          </div>
          <div className="font-medium text-[#161E54] font-Poppins text-4xl leading-7">
            24
          </div>
        </Card>
        <Card variant="dashboard" className="bg-[#FFEFE7] items-center xl:items-start xl:w-[184px] 2xl:w-[204px]">
          <div className="font-medium text-[#161E54] font-Inter leading-7 text-lg">
            Total Tests
          </div>
          <div className="font-medium text-[#161E54] font-Poppins text-4xl leading-7">
            10
          </div>
        </Card>
      </div>
    </section>
  )
}

export default AdminDashboardCards

