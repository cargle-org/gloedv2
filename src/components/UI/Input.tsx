
interface InputProps {
  input: {
    type: string;
    value: string | number;
    name: string;
    id?: string;
    required?: boolean;
    placeholder?: string;
    defaultValue?: string | number;
  }
  label: string;
  htmlFor: string;
  variant: "module" | "modal" | "auth";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  className?: string;
  autoFocus?: boolean;
}

const Input = (props: InputProps) => {
  const inputModule = "flex w-[300px] sm:w-[400px] lg:w-[512px] h-11 px-3.5 py-2.5 text-[#1E1E1E] text-base filter drop-shadow-sm rounded-lg border border-[#E0E0E0] leading-6 placeholder:text-[#1E1E1E] font-Inter focus:outline-none focus:ring focus:border-primary";
  const inputModal = "flex w-full md:max-w-[352px] h-10 px-3.5 py-2.5 filter drop-shadow-md border border-[#1E1E1E59] placeholder:text-sm focus:outline-none focus:ring focus:border-primary rounded-[5px]";
  const inputAuth = "flex w-full md:max-w-[360px] h-11 px-3.5 py-2.5 placeholder:font-normal filter drop-shadow-sm rounded-lg border border-[#7474748C] placeholder:text-[#121212] focus:outline-none focus:ring focus:border-primary";

  return (
    <div className="flex flex-col items-start gap-1.5 mb-2.5">
      <label htmlFor={props.htmlFor}
        className={`
          ${props.variant === "auth" ?
            "font-Inter text-sm text-[#121212] font-medium leading-5" :
            "font-Roboto text-xs font-normal text-black leading-normal"}
      `}>
        {props.label}
      </label>

      <input className={`
        ${props.variant === "module" && inputModule}
        ${props.variant === "modal" && inputModal}
        ${props.variant === "auth" && inputAuth}
        ${props.className}`}
        {...props.input} />
    </div>
  )
}

export default Input