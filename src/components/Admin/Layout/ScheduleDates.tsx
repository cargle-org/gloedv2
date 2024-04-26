
import { FaAngleLeft } from "react-icons/fa";
import Forms from "../../UI/Forms";
import DatePicker from "react-datepicker";
import { FaAngleRight } from "react-icons/fa";
import Button from "../../UI/Button";

interface ScheduleDatesProps {
  onClose: (data: any) => React.MouseEventHandler<HTMLButtonElement> | void;
  startDate: Date | null;
  handleDateChange: (date: Date | null) => void
}

const ScheduleDates = (props: ScheduleDatesProps) => {
  const dates = <DatePicker
    className="mx-1 pr-1"
    selected={props.startDate}
    dateFormat="MMMM d, yy"
    onChange={props.handleDateChange}
    readOnly
  />

  const time = <DatePicker
    className="px-1.5"
    selected={props.startDate}
    showTimeSelect
    showTimeSelectOnly
    timeIntervals={15}
    dateFormat="h:mm aa"
    onChange={props.handleDateChange}
    readOnly
  />

  return (
    <Forms onClose={props.onClose} className="gap-6 overflow-y-auto max-h-screen font-Inter">
      <>
        <div className="grid items-center justify-center px-[72px] gap-6 font-Inter">
          <div className="text-[#1E1E1E] text-base font-normal leading-6">
            Please select any of the available dates
          </div>
          <div className="w-[343px] inline-flex font-semibold text-[#1E1E1E]/90 text-base leading-7">
            Date selected {dates} - by {time}
          </div>
          <div className="custom-datepicker-wrapper max-w-[560px]">
            <DatePicker
              className="font-Inter px-3 py-2"
              selected={props.startDate}
              showTimeInput
              previousMonthButtonLabel={<FaAngleLeft className="w-2 h-2" />}
              nextMonthButtonLabel={<FaAngleRight className="w-2 h-2" />}
              inline
              onChange={props.handleDateChange}
              dateFormat="MMMM d, yyyy"
            />
          </div>
          <Button onClick={props.onClose} variant="details" className="bg-primary">
            Proceed
          </Button>
        </div>
      </>
    </Forms >
  )
}

export default ScheduleDates
