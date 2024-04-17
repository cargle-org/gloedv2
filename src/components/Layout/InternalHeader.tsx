import Logo from "../../assets/svgs/Logo"
import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import SideBar from "../Student/Layout/SideBar";
import AdminSideBar from "../Admin/Layout/AdminSideBar";
import ModuleContext from "../../store/module-context";

const InternalHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { classID, moduleID } = useParams();

  const sidebarRef = useRef<HTMLDivElement | null>(null);// Create a ref to track the sidebar element
  const [isOpen, setIsOpen] = useState(false);

  const isAdmin = localStorage.getItem("isAdmin");
  const userFname = localStorage.getItem("fName");
  const imgPlaceholder = userFname?.slice(0, 1).toUpperCase();

  const authCtx = useContext(AuthContext);
  const { updateModuleContextID } = useContext(ModuleContext);
  const moduleCtx = useContext(ModuleContext);

  const isTutorialModulePage = pathname === `/class/${moduleCtx?.classID}/${isAdmin ? "getModule" : "getTutorial"}/${moduleCtx?.moduleID}`;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    updateModuleContextID(classID, moduleID);
  }, [classID, moduleID]);

  // Handle clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  //LOGOUT handler
  const logoutHandler = () => {
    authCtx.logout();
    navigate("/admin-login");
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white flex justify-between items-center h-20 sm:h-20 px-3 sm:px-5 lg:px-8 2xl:px-[60px] border-none border-[#00000029] filter drop-shadow-md">
      <div className="flex-shrink-0 sm:w-20">
        <>
          <Logo />
        </>
      </div>

      <nav className="hidden 2xl:flex items-center justify-end md:gap-3.5">
        <div className="flex w-12 sm:w-14 xl:w-20">
          <button
            onClick={logoutHandler}
            className="text-red-400 text-sm md:text-base font-Inter font-semibold leading-6"
          >
            Logout
          </button>

        </div>
        <div className="flex items-end justify-end rounded-lg sm:w-[52px] w-8">
          <div
            className={`px-2.5 py-1.5 md:px-4 md:py-3 bg-[#048345] rounded-full flex items-center justify-center text-sm leading-[16px] text-white `}
          >
            {imgPlaceholder}
          </div>
        </div>
      </nav>

      {/* {**Hamburger button**} */}
      <button className={`inline-flex items-center justify-center ${isTutorialModulePage && "xl:hidden"} p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 2xl:hidden`}
        onClick={toggleMenu}>
        {!isOpen ? <RiMenu3Fill className='w-5 h-5' /> : <IoClose className='w-5 h-5' />}
      </button>

      {/* Navigation Menu */}
      <div ref={sidebarRef} className=
        {`${isOpen
          ? 'block fixed h-screen left-0 top-[80px] w-2/3 md:w-1/3 lg:w-2/5 bg-white z-40'
          : 'hidden'} overflow-hidden transition-all duration-200 ease-in-out`
        }
      >
        {!isAdmin ?
          <SideBar isOpen={isOpen} /> :
          <AdminSideBar isOpen={isOpen} />
        }
      </div>
    </header>
  )
}

export default InternalHeader;