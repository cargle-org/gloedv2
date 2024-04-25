import Input from "../../../UI/Input";
import Forms from "../../../UI/Forms";
import { IoClose } from "react-icons/io5";
import { HiOutlineCalendar } from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa6";
import Button from "../../../UI/Button";
import { useRef, useState } from "react";
import ScheduleDates from "../ScheduleDates";
import useInput from "../../../hooks/use-input";
import { editOneClassRequest } from "../../../../utils/class-fetch";
import useHttp from "../../../hooks/use-https";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../../UI/LoadingSpinner";

interface AddScheduleAdProps {
  onClose: (data: any) => React.MouseEventHandler<HTMLButtonElement> | void;
}

const AddSchedules = (props: AddScheduleAdProps) => {
  const { classID } = useParams();

  const { sendRequest, status, error, data: editClassSchedule } =
    useHttp(editOneClassRequest);

  const [generalStartDate, setGeneralStartDate] = useState<Date | null>(new Date());
  const [oneStartDate, setOneStartDate] = useState<Date | null>(new Date());
  const [isGeneralClassOpen, setIsGeneralClassOpen] = useState(false);
  const [isOneClassOpen, setIsOneClassOpen] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);
  // const selectValue = selectRef.current?.value;

  //General class schedule
  const generalClassesDate = generalStartDate?.toUTCString().slice(5, 11);
  const generalClassesTime = generalStartDate?.toLocaleTimeString().slice(0, 2);
  const Tz = generalStartDate?.toLocaleTimeString().slice(-2);
  const timeFormat = `${generalClassesTime} ${Tz}`;
  const fullClassSchedule = `${generalClassesDate}, ${timeFormat.toLowerCase()}`;
  const fullClassScheduleArray = fullClassSchedule.split(",").map(item => item.trim());
  // console.log(classesDate);
  // console.log(fullClassSchedule)

  const oneOnOneClassesDate = oneStartDate?.toUTCString().slice(5, 11);
  const oneOnOneClassesTime = oneStartDate?.toLocaleTimeString().slice(0, 2);
  const oneOnOneTz = oneStartDate?.toLocaleTimeString().slice(-2);
  const oneOnOneFullClassSchedule = `${oneOnOneClassesDate}, ${oneOnOneClassesTime} ${oneOnOneTz}`;
  const oneOnOneFullClassScheduleArray = oneOnOneFullClassSchedule.split(",").map(item => item.trim());


  const handleGeneralOpenModal = () => {
    setIsGeneralClassOpen(true);
  };

  const handleOneOpenModal = () => {
    setIsOneClassOpen(true);
  };

  const handleGeneralCloseModal = () => {
    setIsGeneralClassOpen(false);
  };

  const handleOneCloseModal = () => {
    setIsOneClassOpen(false);
  };

  const handleGeneralDateChange = (newValue: Date | null) => {
    setGeneralStartDate(newValue);
  };

  const handleOneDateChange = (newValue: Date | null) => {
    setOneStartDate(newValue);
  };

  //render loading indicator
  let authState;

  if (status === 'pending') {
    authState = (
      <LoadingSpinner />
    );
  }

  const {
    value: enteredDuration,
    hasError: inputDurationError,
    // reset: resetRoleInput,
    valueChangeHandler: durationInputChangeHandler,
    isValid: enteredDurationIsValid,
    blurInputHandler: durationBlurInputHandler
  } = useInput(value => value !== " ");

  const {
    value: enteredGeneralPrice,
    hasError: inputGeneralPriceError,
    // reset: resetRoleInput,
    valueChangeHandler: generalPriceInputChangeHandler,
    isValid: enteredGeneralPriceIsValid,
    blurInputHandler: generalPriceBlurInputHandler
  } = useInput(value => value !== " ");

  const {
    value: enteredOnePrice,
    hasError: inputOnePriceError,
    // reset: resetRoleInput,
    valueChangeHandler: onePriceInputChangeHandler,
    isValid: enteredOnePriceIsValid,
    blurInputHandler: onePriceBlurInputHandler
  } = useInput(value => value !== " ");


  const scheduleSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!enteredDuration && !enteredDurationIsValid
      && !enteredGeneralPrice && !enteredGeneralPriceIsValid
      && !enteredOnePrice && !enteredOnePriceIsValid
    ) {
      return
    }

    const schedulesData = {
      possibleDatesTimesGeneral: fullClassScheduleArray,
      possibleDatesTimesPersonal: oneOnOneFullClassScheduleArray,
      classDuration: enteredDuration,
      pricePersonalClass: enteredOnePrice,
      priceGeneralClass: enteredGeneralPrice,
    };

    sendRequest(schedulesData, classID);
    // resetNameInput()
    console.log(editClassSchedule);

    window.scrollTo(0, 0); // Scroll to top
    console.log(enteredDuration, enteredGeneralPrice, enteredOnePrice, fullClassSchedule, oneOnOneFullClassSchedule)
  }

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

      {/* ***UI state*** */}
      {authState}
      <div>
        {/* **Incorrect Class** */}
        {error && (
          <div className="bg-red-200 p-0.5 mb-1 text-center">
            "Error adding schedules, Please try again!""
          </div>
        )}

        {/* **Successfully created Class** */}
        {editClassSchedule && (
          <div className="bg-green-200 p-0.5 mb-1 text-center">
            "Successfully created a class!"
          </div>
        )}
      </div>

      {/* Form Inputs*/}
      <form onSubmit={scheduleSubmitHandler} className="flex flex-col gap-8 ">
        <div className="flex flex-col items-start gap-1.5">
          <label htmlFor="generalDate" className="font-Roboto text-xs font-normal text-black leading-normal">
            Select the multiple dates and time for general bookings
          </label>
          <span className="flex flex-col mb-1.5 justify-center items-start self-stretch rounded-[5px] border border-[#42506666] shadow-sm shadow-[#42506666]">
            <select ref={selectRef} onClick={handleGeneralOpenModal} id="generalDate" className="self-stretch h-10 px-1.5  mx-1 font-Roboto text-sm font-normal text-black leading-normal focus:outline-none focus:ring focus:border-primary">
              <option hidden>
                Select Date
              </option>
            </select>
          </span>
          {/* id={selectRef.current?.id} */}
          <div className="inline-flex text-[#1E1E1E] font-Inter font-bold text-xs md:text-sm gap-2">
            <div className="flex items-center justify-center gap-2 rounded-[5px] border-2 border-[#B8B8B8] h-[33px] w-[118px] md:w-[128px]">
              <HiOutlineCalendar color="#B8B8B8" className="h-4 w-4" />
              {/* 13 Jan, 10 am */}
              {fullClassSchedule}
            </div>
            {/* <div className="flex items-center justify-center gap-2 rounded-[5px] border-2 border-[#B8B8B8] h-[33px] w-[118px] md:w-[128px]">
              <HiOutlineCalendar color="#B8B8B8" className="h-4 w-4" />
              14 Jan, 11 am
            </div> */}
          </div>
        </div>

        <div className="flex flex-col items-start gap-1.5">
          <label htmlFor="oneDate" className="font-Roboto text-xs font-normal text-black leading-normal">
            Select the multiple dates and time for 1-1 bookings
          </label>

          <span className="flex flex-col mb-1.5 justify-center items-start self-stretch rounded-[5px] border border-[#42506666] shadow-sm shadow-[#42506666]">
            <select ref={selectRef} id="oneDate" onClick={handleOneOpenModal} className="self-stretch h-10 px-1.5 mx-1 font-Roboto text-sm font-normal text-black leading-normal focus:outline-none focus:ring focus:border-primary">
              <option hidden >
                Select Date
              </option>
            </select>
          </span>

          <div className="inline-flex text-[#1E1E1E] font-Inter font-bold text-xs md:text-sm gap-2">
            <div className="flex items-center justify-center gap-2 rounded-[5px] border-2 border-[#B8B8B8] h-[33px] w-[118px] md:w-[128px]">
              <HiOutlineCalendar color="#B8B8B8" className="h-4 w-4" />
              {oneOnOneFullClassSchedule}
            </div>
          </div>
        </div>

        <div>
          <Input variant="modal" htmlFor="duration" label="Class duration" className="self-stretch p-3 before:placeholder:opacity-40"
            input={{
              type: "text",
              name: "duration",
              value: enteredDuration,
              id: "duration",
              onChange: durationInputChangeHandler,
              onBlur: durationBlurInputHandler,
              placeholder: "e.g 1 hour"
            }} />
          {inputDurationError &&
            <p className="bg-red-200 text-sm mb-2">Class duration must not be empty.</p>
          }
        </div>

        <div>
          <Input variant="modal" htmlFor="1-1classes" label="Prices for 1-1 classes" className="self-stretch p-3 before:placeholder:opacity-40"
            input={{
              type: "text",
              name: "1-1classes",
              value: enteredOnePrice,
              id: "1-1classes",
              onChange: onePriceInputChangeHandler,
              onBlur: onePriceBlurInputHandler,
              placeholder: "e.g 1 hour"
            }} />
          {inputOnePriceError &&
            <p className="bg-red-200 text-sm mb-2">One-on-One price must not be empty.</p>
          }
        </div>

        <div>
          <Input variant="modal" htmlFor="generalclasses" label="Prices for general classes" className="self-stretch p-3 before:placeholder:opacity-40"
            input={{
              type: "text",
              name: "generalclasses",
              value: enteredGeneralPrice,
              id: "generalclasses",
              onChange: generalPriceInputChangeHandler,
              onBlur: generalPriceBlurInputHandler,
              placeholder: "e.g 1 hour"
            }} />
          {inputGeneralPriceError &&
            <p className="bg-red-200 text-sm mb-2">General price must not be empty.</p>
          }
        </div>

        <div className='flex justify-start items-center'>
          <Button type="submit" variant="modal" className="bg-primary h-10">
            Update class details
            <FaAngleRight className="h-4 w-4" />
          </Button>
        </div>
      </form>

      {isGeneralClassOpen && <ScheduleDates handleDateChange={handleGeneralDateChange} startDate={generalStartDate} onClose={handleGeneralCloseModal} />}
      {isOneClassOpen && <ScheduleDates handleDateChange={handleOneDateChange} startDate={oneStartDate} onClose={handleOneCloseModal} />}
    </Forms>
  )
}

export default AddSchedules;