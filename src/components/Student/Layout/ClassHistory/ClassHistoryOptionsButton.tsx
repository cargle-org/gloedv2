import { LuListFilter } from "react-icons/lu";
import { MdOutlineSort } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import Button from "../../../UI/Button"

const ClassHistoryOptionButton = () => {
  return (
    <section className="flex flex-col justify-center md:justify-start mb-6">
      {/* //Buttons */}
      <div className="inline-flex  justify-center md:justify-start items-center flex-wrap gap-2 md:gap-4 lg:gap-5 2xl:gap-4 mt-6 mb-6">
        <Button variant="options" className="bg-black hover:bg-[#101828]">
          Upcoming
        </Button>
        <Button variant="options" className="bg-primary hover:bg-primary-light">
          Ongoing
        </Button>
        <Button variant="options" className="bg-black">
          Completed
        </Button>
      </div>

      {/* //Filter, Search & Sort Classes */}
      <div className="flex gap-3 sm:gap-0 md:justify-between justify-center sm:justify-start flex-wrap">
        <div className="flex justify-center sm:justify-start items-center flex-wrap flex-col md:flex-row w-[250px] md:w-[479px] font-Inter gap-3">
          <div className="flex gap-2 justify-start items-start">
            <Button variant="class">
              <div>Filter by</div>
              <LuListFilter className="fill fill-[#A8B0B9]" />
            </Button>
            <Button variant="class">
              <div>Sort by</div>
              <MdOutlineSort className="fill fill-[#A8B0B9]" />
            </Button>
          </div>
          <div className="flex w-[239px] justify-between items-center h-10 py-3 pl-5 pr-3 gap-2 text-sm text-[#0C1116] rounded-[32px] border border-[#EAECEE]">
            <input type="search" className="w-[143px] placeholder:text-[#D6DADE] focus:outline-none focus:ring focus:border-primary" placeholder="Search for a pathway" />
            <IoSearch className="fill fill-[#4F5B67] h-4 w-4" />
          </div>
        </div>

        <Button variant="class" className="xl:mr-0 2xl:mr-6">
          <div>Customize</div>
          <CiSettings className="fill fill-[#A8B0B9] h-4 w-4" />
        </Button>
      </div>
    </section >
  )
}

export default ClassHistoryOptionButton