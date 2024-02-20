import Input from "../../UI/Input"
import AdminSideBar from "../Layout/AdminSideBar"
import { MdFormatBold } from "react-icons/md";
import { MdOutlineFormatItalic } from "react-icons/md";
import { IoMdLink } from "react-icons/io";
import { FaAngleRight, FaListOl } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import Textarea from "../../UI/Textarea";
import Button from "../../UI/Button";

const CreateCourseModule = () => {
  return (
    <main className="flex container mx-auto mb-20 lg:mt-2 max-w-[300px] sm:max-w-[400px] md:max-w-[610px] lg:max-w-[700px] xl:max-w-full 2xl:max-w-[1440px] ">
      <AdminSideBar />

      <section className='flex flex-col flex-wrap lg:-mt-4 md:flex-nowrap mx-auto max-w-full xl:max-w-[970px] 2xl:max-w-6xl 3xl:max-w-7xl space-y-7 md:space-y-12 ">'>
        <h1 className="text-wrap text-[#1E1E1E] font-Inter text-2xl font-bold leading-normal ">
          Create a course module
        </h1>
        <div className="flex flex-col md:flex-row xl:justify-between gap-3 xl:gap-8">
          <div className="w-[180px] xl:w-[280px] font-medium text-[#1E1E1E] text-left text-sm leading-5">
            Module Title
          </div>
          <Input variant="module" htmlFor="firstname" label="" className=" self-stretch p-3"
            input={{
              type: "text",
              name: "firstname",
              value: "",
              id: "firstname",
              placeholder: "e.g Introduction to SQL and excel"
            }} />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-7 gap-3 xl:gap-8">
          <label htmlFor="prerequisite" className="flex w-[180px] xl:w-[280px] font-medium text-[#1E1E1E] font-Inter text-sm leading-5">
            Course Prerequisites
          </label>
          <div className="w-full md:w-[512px] flex flex-col sm:gap-3">
            <div className="flex flex-col sm:flex-row ">
              <span className="flex w-[240px] flex-col ">
                <select id="prerequesite" className="self-stretch h-11 rounded-lg px-1.5 font-Inter text-base font-normal text-[#1E1E1E] filter drop-shadow-sm border border-[#E0E0E0] leading-6">
                  <option selected={true}>Normal text</option>
                </select>
              </span>
              <div className="flex w-[130px] lg:w-[176px] justify-center items-center gap-1 py-1.5">
                <MdFormatBold className="h-8 w-8" />
                <MdOutlineFormatItalic className="h-8 w-8" />
                <IoMdLink className="h-8 w-8" />
                <FaListUl className="h-7 w-7 mx-0.5" />
                <FaListOl className="h-7 w-7 mx-0.5" />
              </div>
            </div>
            <div>
              <Textarea variant="module" label="" htmlFor="prerequisite" className="self-stretch p-3 mb-0"
                textarea={{
                  id: "prerequisite",
                  value: "",
                  placeholder: "Shelly's Pickup is the go-to service for all your pickup needs. We offer a wide range of services, including"
                }} />
              <div className="text-sm leading-5">3000 characters left</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-7 gap-3 xl:gap-8">
          <label htmlFor="takeaways" className="flex w-[180px] xl:w-[280px] font-medium text-[#1E1E1E] font-Inter text-sm leading-5">
            Key takeaways
          </label>
          <div className="w-full md:w-[512px] flex flex-col sm:gap-3">
            <div className="flex flex-col sm:flex-row ">
              <span className="flex w-[240px] flex-col ">
                <select id="takeaways" className="self-stretch h-11 rounded-lg px-1.5 font-Inter text-base font-normal text-[#1E1E1E] filter drop-shadow-sm border border-[#E0E0E0] leading-6">
                  <option selected={true}>Normal text</option>
                </select>
              </span>
              <div className="flex w-[130px] lg:w-[176px] justify-center items-center gap-1 py-1.5">
                <MdFormatBold className="h-8 w-8" />
                <MdOutlineFormatItalic className="h-8 w-8" />
                <IoMdLink className="h-8 w-8" />
                <FaListUl className="h-7 w-7 mx-0.5" />
                <FaListOl className="h-7 w-7 mx-0.5" />
              </div>
            </div>
            <div>
              <Textarea variant="module" label="" htmlFor="takeaways" className="self-stretch p-3 mb-0"
                textarea={{
                  id: "takeaways",
                  value: "",
                  placeholder: "Shelly's Pickup is the go-to service for all your pickup needs. We offer a wide range of services, including"
                }} />
              <div className="text-sm leading-5">3000 characters left</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-7 gap-3 xl:gap-8">
          <label htmlFor="details" className="flex w-[180px] xl:w-[280px] font-medium text-[#1E1E1E] font-Inter text-sm leading-5">
            Module Details
          </label>
          <div className="w-full md:w-[512px] flex flex-col sm:gap-3">
            <div className="flex flex-col sm:flex-row ">
              <span className="flex w-[240px] flex-col ">
                <select id="details" className="self-stretch h-11 rounded-lg px-1.5 font-Inter text-base font-normal text-[#1E1E1E] filter drop-shadow-sm border border-[#E0E0E0] leading-6">
                  <option selected={true}>Normal text</option>
                </select>
              </span>
              <div className="flex w-[130px] lg:w-[176px] justify-center items-center gap-1 py-1.5">
                <MdFormatBold className="h-8 w-8" />
                <MdOutlineFormatItalic className="h-8 w-8" />
                <IoMdLink className="h-8 w-8" />
                <FaListUl className="h-7 w-7 mx-0.5" />
                <FaListOl className="h-7 w-7 mx-0.5" />
              </div>
            </div>
            <div>
              <Textarea variant="module" label="" htmlFor="details" className="self-stretch p-3 mb-0"
                textarea={{
                  id: "details",
                  value: "",
                  placeholder: "Shelly's Pickup is the go-to service for all your pickup needs. We offer a wide range of services, including"
                }} />
              <div className="text-sm leading-5">3000 characters left</div>
            </div>
          </div>
        </div>



        <div className='flex justify-end items-center'>
          <Button variant="modal" className="bg-primary h-10">
            Update class module
            <FaAngleRight className="h-4 2-4" />
          </Button>
        </div>
      </section>
    </main>
  )
}

export default CreateCourseModule