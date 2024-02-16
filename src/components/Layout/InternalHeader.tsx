import Logo from "../../assets/svgs/Logo"
import avatar from '../../assets/Avatar.png';
import { CiSettings } from "react-icons/ci";
import { LuBell } from "react-icons/lu";

const InternalHeader = () => {
  return (
    <header className="flex justify-between items-center h-[100px] sm:h-30 pt-5 pb-12 sm:pb-8 px-3 sm:px-5 lg:px-8 2xl:px-[60px]">
      <div className="flex-shrink-0 sm:w-20">
        <Logo />
      </div>

      {/* //nav icons */}
      <nav className="flex items-center justify-end sm:gap-3.5">
        <div className="flex gap-1 w-12 sm:w-14 xl:w-20">
          <CiSettings className="w-10 h-5" />
          <LuBell className="w-10 h-5" stroke="#667085" />
        </div>
        <div className="flex items-end justify-end rounded-lg w-[52px] sm:w-10">
          <img src={avatar} alt="user picture" />
        </div>
      </nav>
    </header>
  )
}

export default InternalHeader