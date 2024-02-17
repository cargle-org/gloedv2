import Input from "../../UI/Input";
import Forms from "../../UI/Forms";
import { IoClose } from "react-icons/io5";
import { HiOutlineCalendar } from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa6";
import Button from "../../UI/Button";

interface AddScheduledProps {
  onClose: (data: any) => React.MouseEventHandler<HTMLButtonElement> | void;
}

const AddSchedules = (props: AddScheduledProps) => {
  return (
    <Forms onClose={props.onClose} className="gap-10 h-screen">
      <div className="inline-flex justify-between items-center">
        <h1 className=" text-black font-Inter text-2xl md:text-[32px] font-bold leading-normal">
          Add scheduling dates
        </h1>

        {/* Close modal button */}
        <div className="w-auto ml-1">
          <button onClick={props.onClose} type="button" data-modal-toggle="modal">
            <IoClose className="h-6 w-full bg-[#42506666]" />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
      </div>

      {/* Form Inputs*/}
      <form className="flex flex-col gap-8 ">
        <div className="flex flex-col items-start gap-1.5">
          <label htmlFor="level" className="font-Roboto text-xs font-normal text-black leading-normal">
            Select the multiple dates and time for general bookings
          </label>
          <span className="flex flex-col mb-1.5 justify-center items-start self-stretch rounded-[5px] border border-[#42506666] shadow-sm shadow-[#42506666]">
            <select id="category" className="self-stretch h-10 px-1.5  mx-1 font-Roboto text-sm font-normal text-black leading-normal focus:outline-none focus:ring focus:border-primary">
              <option selected={true}>Select options</option>
            </select>
          </span>
          <div className="inline-flex text-[#1E1E1E] font-Inter font-bold text-xs md:text-sm gap-2">
            <div className="flex items-center justify-center gap-2 rounded-[5px] border-2 border-[#B8B8B8] h-[33px] w-[118px] md:w-[128px]">
              <HiOutlineCalendar color="#B8B8B8" className="h-4 w-4" />
              13 Jan, 10 am
            </div>
            <div className="flex items-center justify-center gap-2 rounded-[5px] border-2 border-[#B8B8B8] h-[33px] w-[118px] md:w-[128px]">
              <HiOutlineCalendar color="#B8B8B8" className="h-4 w-4" />
              14 Jan, 11 am
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-1.5">
          <label htmlFor="level" className="font-Roboto text-xs font-normal text-black leading-normal">
            Select the multiple dates and time for 1-1 bookings
          </label>

          <span className="flex flex-col mb-1.5 justify-center items-start self-stretch rounded-[5px] border border-[#42506666] shadow-sm shadow-[#42506666]">
            <select id="category" className="self-stretch h-10 px-1.5 mx-1 font-Roboto text-sm font-normal text-black leading-normal focus:outline-none focus:ring focus:border-primary">
              <option selected={true}>Select options</option>
            </select>
          </span>

          <div className="inline-flex text-[#1E1E1E] font-Inter font-bold text-xs md:text-sm gap-2">
            <div className="flex items-center justify-center gap-2 rounded-[5px] border-2 border-[#B8B8B8] h-[33px] w-[118px] md:w-[128px]">
              <HiOutlineCalendar color="#B8B8B8" className="h-4 w-4" />
              13 Jan, 10 am
            </div>
            <div className="flex items-center justify-center gap-2 rounded-[5px] border-2 border-[#B8B8B8] h-[33px] w-[118px] md:w-[128px]">
              <HiOutlineCalendar color="#B8B8B8" className="h-4 w-4" />
              14 Jan, 11 am
            </div>
          </div>
        </div>

        <Input variant="modal" htmlFor="duration" label="Class duration" className="self-stretch p-3 before:placeholder:opacity-40"
          input={{
            type: "text",
            name: "duration",
            value: "",
            id: "duration",
            placeholder: "e.g 1 hour"
          }} />

        <Input variant="modal" htmlFor="1-1class" label="Prices for 1-1 classes" className="self-stretch p-3 before:placeholder:opacity-40"
          input={{
            type: "text",
            name: "1-1classes",
            value: "",
            id: "1-1classes",
            placeholder: "e.g 1 hour"
          }} />

        <Input variant="modal" htmlFor="generalclasses" label="Prices for general classes" className="self-stretch p-3 before:placeholder:opacity-40"
          input={{
            type: "text",
            name: "generalclasses",
            value: "",
            id: "generalclasses",
            placeholder: "e.g 1 hour"
          }} />

        <div className='flex justify-start items-center'>
          <Button variant="modal" className="bg-primary h-10">
            Update class details
            <FaAngleRight className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </Forms>
  )
}

export default AddSchedules