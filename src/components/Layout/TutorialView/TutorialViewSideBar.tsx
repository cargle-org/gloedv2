
const TutorialViewSideBar: React.FC = () => {
  return (
    <div className="flex-col ml-6 container max-w-[220px] xl:max-w-[285px] hidden xl:block mt-10">
      <div className="font-Inter font-bold text-base xl:text-xl 2xl:text-[21px] leading-[37px] gap-[13px] w-[236px] xl:w-[256px] 3xl:w-[266px]">
        Learn SQL Basics for Data Science Specialization.
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start p-1.5 xl:p-3 gap-4">
          <div className="text-sm font-medium line-through leading-[24px] tracking-[-0.2px] text-[#1E1E1EE6] w-[200px] xl:w-[220px] 2xl:w-[225px]">
            Tutorial 1:  Introduction to microservices - A simple microservice system
          </div>
          <div className="bg-[#048345] rounded-full flex items-center justify-center text-xs leading-[16px] text-white px-1.5 py-0.5">
            C
          </div>
        </div>

        <div className="flex justify-between items-start p-1.5 xl:p-3 gap-4">
          <div className="text-sm  font-medium line-through leading-[24px] tracking-[-0.2px] text-[#1E1E1EE6] w-[225px]">
            Tutorial 2 :  Orchestrating communication in microservices with Orkes
          </div>
          <div className="bg-[#048345] rounded-full flex items-center justify-center text-xs leading-[16px] text-white px-1.5 py-0.5">
            C
          </div>
        </div>

        <div className="flex justify-between items-start p-1.5 xl:p-3 gap-4">
          <div className="text-sm font-medium line-through leading-[24px] tracking-[-0.2px] text-[#1E1E1EE6] w-[224px]">
            Tutorial 3:  Deploying microservices as a DevOps Engineer
          </div>
          <div className="bg-[#048345] rounded-full flex items-center justify-center text-xs leading-[16px] text-white px-1.5 py-0.5">
            C
          </div>
        </div>

        <div className="flex justify-between items-start p-1.5 xl:p-3 gap-4">
          <div className="text-sm font-medium leading-[24px] tracking-[-0.2px] text-[#1E1E1EE6] w-[256px]">
            Tutorial 4:  Incident management and Testing in microservices
          </div>
          <div className="bg-[#FF323E] rounded-full flex items-center justify-center text-xs leading-[16px] text-white px-1.5 py-0.5">
            P
          </div>
        </div>

        <div className="flex justify-between items-start p-1.5 xl:p-3 gap-4">
          <div className="text-sm font-medium leading-[24px] tracking-[-0.2px] text-[#1E1E1EE6] w-[225x]">
            Tutorial 5:  Combining multiple microservices and designing their API communication
          </div>
          <div className="bg-[#FF323E] rounded-full flex items-center justify-center text-xs leading-[16px] text-white px-1.5 py-0.5">
            P
          </div>
        </div>

        <div className="flex justify-between items-start p-1.5 xl:p-3 gap-4">
          <div className="text-sm font-semibold leading-[24px] tracking-[-0.2px] text-[#1E1E1EE6] w-[225px]">
            Tutorial 6: Final Test (Can only be taken after course completion)
          </div>
          <div className="bg-[#FF323E] rounded-full flex items-center justify-center text-xs leading-[16px] text-white px-1.5 py-0.5">
            P
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorialViewSideBar