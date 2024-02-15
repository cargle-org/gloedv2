import { HiOutlineInformationCircle } from "react-icons/hi";

interface TextareaProps {
  textarea: {
    value: string;
    id?: string;
    required?: boolean;
    placeholder?: string;
  }
  label: string;
  htmlFor: string;
  variant: "module" | "modal"
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  disabled?: boolean;
  className?: string;
  autoFocus?: boolean;
  defaultValue?: string;
}

const Textarea = (props: TextareaProps) => {
  const textareaModule = "flex w-[300px] sm:w-[400px] lg:w-[512px] h-[128px] px-3.5 py-2.5 rounded-lg text-[#1E1E1E] text-base border border-[#42506666] leading-6 placeholder:text-[#1E1E1E] focus:outline-none focus:ring focus:border-primary";
  const textareaModal = "flex w-full md:w-[352px] h-[104px] rounded-[5px] border border-[#42506666] shadow-sm shadow-[#42506666] focus:outline-none focus:ring focus:border-primary";

  return (
    <div className="flex flex-col items-start gap-1.5 mb-2.5">
      <span className="inline-flex gap-1">
        {props.variant === "modal" && <HiOutlineInformationCircle />}
        <label htmlFor={props.htmlFor} className="font-Roboto text-xs font-normal text-black leading-normal">
          {props.label}
        </label>
      </span>
      <textarea
        className={`
        resize-none
        ${props.variant === "module" && textareaModule}
        ${props.variant === "modal" && textareaModal}
        ${props.className}
        `} {...props.textarea}>
      </textarea>
    </div>
  )
}

export default Textarea