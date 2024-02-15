
interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  className?: string;
  variant: 'primary' | 'white' | 'options' | 'auth' | 'dotted' | 'details' | 'aside' | 'dark' | 'modal';
  onClick?: (data: any) => React.MouseEventHandler<HTMLButtonElement> | void;
}


const Button: React.FC<ButtonProps> = (props) => {
  const btn = 'flex items-center text-center text-nowrap transform transition hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-0';
  const btnPrimary = 'justify-center font-plus-jakarta-sans px-6 py-3 text-white text-base font-semibold bg-primary rounded-4xl leading-6 tracking-[-0.32px] hover:bg-primary-light focus:ring-primary-dark focus:ring-opacity-50 active:bg-primary-dark ';
  const btnOptions = 'justify-center py-1 px-4 2xl:px-5 lg:px-3.5 font-Inter sm:text-sm md:font-semibold sm:font-medium lg:text-base text-white rounded-full'
  const btnAside = 'justify-center px-4 py-2.5 font-Poppins bg-primary font-medium text-sm text-white rounded-[4px]'
  const btnDark = 'justify-center border border-black py-1.5 sm:py-2.5 px-2 sm:px-4 lg:px-3.5 shadow-sm shadow-[#100e280d] rounded-lg bg-black font-Inter text-base lg:text-sm xl:text-base font-semibold leading-6 text-white focus:ring-black items-center'
  const btnModal = 'justify-center rounded-[5px] py-3 px-4 xl:py-3 xl:px-6 text-white items-center font-Roboto font-bold gap-2 text-sm leading-normal'
  const btnDotted = 'justify-start items-start flex-shrink-0 gap-2.5 py-2 px-4 bg-white rounded-md border border-dashed border-[#1e1e1ee6] text-[#1e1e1ee6] font-Inter text-sm font-medium leading-6 tracking-[-0.2px]';
  const btnCourseDetails = 'rounded-[5px] justify-center items-center py-5 px-24 text-white font-Inter font-medium text-sm leading-auto';
  const btnAuth = ' rounded-lg justify-center items-center py-2.5 px-[18px] text-white font-Inter font-medium text-base leading-6';

  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={`
        ${btn}
        ${props.variant === 'primary' && btnPrimary}
        ${props.variant === 'options' && btnOptions}
        ${props.variant === 'aside' && btnAside}
        ${props.variant === 'dark' && btnDark}
        ${props.variant === 'modal' && btnModal}
        ${props.variant === 'dotted' && btnDotted}
        ${props.variant === 'details' && btnCourseDetails}
        ${props.variant === 'auth' && btnAuth}
        ${props.className}
      `}
    >
      {props.children}
    </button>
  );
};

export default Button;
