import { NavLink, useLocation } from "react-router-dom";
import TutorialLists from "../../Layout/TutorialView/TutorialLists";
import { useContext } from "react";
import ModuleContext from "../../../store/module-context";

interface SideBarProps {
  isOpen: boolean;
}

const AdminSideBar: React.FC<SideBarProps> = ({ isOpen }) => {
  const { pathname } = useLocation();
  const moduleCtx = useContext(ModuleContext);

  const isTutorialModulePage = pathname === `/class/${moduleCtx?.classID}/getModule/${moduleCtx?.moduleID}`;

  const activeClass = "bg-primary/10 max-w-[198px] py-3.5 rounded-lg text-primary fill-primary"
  const inactiveClass = "fill-[#646464]";

  return (
    <aside className={`xl:h-screen font-Urbanist col-span-1 ${isOpen && 'border-r'} 2xl:border-none border-[#00000029]`} aria-label="Sidebar">
      <ul role="list" className="hidden 2xl:grid items-center ml-5 3xl:ml-0 pt-4 w-[198px] container text-sm gap-8 text-[#646464] xl:pr-4 pr-10 font-Urbanist font-semibold leading-[19.6px]">
        {navigationPages.map((page, index) => (
          <li key={index}>
            <NavLink to={page.path}
              className={({ isActive }) =>
                `${isActive ? activeClass : inactiveClass} flex items-center pl-4 gap-3` // Add the desired styles to both active and inactive states
              }>
              {page.icon}
              {page.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {
        isOpen && isTutorialModulePage && (
          <div className="2xl:hidden">
            <TutorialLists />
          </div>
        )
      }
      {isOpen && !isTutorialModulePage && (
        <ul role="list" className="grid 2xl:hidden items-center mt-5 xl:pr-4 pr-10 ml-5 3xl:ml-0 w-[198px] text-sm gap-8 text-[#646464] font-Urbanist font-semibold leading-[19.6px]" >
          {
            navigationPages.map((page, index) => (
              <li key={index}>
                <NavLink to={page.path}
                  className={({ isActive }) =>
                    `${isActive ? activeClass : inactiveClass} flex items-center pl-4 gap-3` // Add the desired styles to both active and inactive states
                  }>
                  {page.icon}
                  {page.label}
                </NavLink>
              </li>
            ))
          }
        </ul>
      )}
    </aside >
  )
}

export default AdminSideBar;

const navigationPages = [
  {
    path: "/admin-dashboard",
    label: "Dashboard",
    icon: (
      <svg width="24" height="24" className="fill-inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z" />
        <path d="M18.6699 2H16.7699C14.5899 2 13.4399 3.15 13.4399 5.33V7.23C13.4399 9.41 14.5899 10.56 16.7699 10.56H18.6699C20.8499 10.56 21.9999 9.41 21.9999 7.23V5.33C21.9999 3.15 20.8499 2 18.6699 2Z" />
        <path d="M18.6699 13.4299H16.7699C14.5899 13.4299 13.4399 14.5799 13.4399 16.7599V18.6599C13.4399 20.8399 14.5899 21.9899 16.7699 21.9899H18.6699C20.8499 21.9899 21.9999 20.8399 21.9999 18.6599V16.7599C21.9999 14.5799 20.8499 13.4299 18.6699 13.4299Z" />
        <path d="M7.24 13.4299H5.34C3.15 13.4299 2 14.5799 2 16.7599V18.6599C2 20.8499 3.15 21.9999 5.33 21.9999H7.23C9.41 21.9999 10.56 20.8499 10.56 18.6699V16.7699C10.57 14.5799 9.42 13.4299 7.24 13.4299Z" />
      </svg>
    ),
  },
  {
    path: "*",
    label: "Class & Test",
    icon: (
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M19.7872 6.53905C19.6518 6.67058 19.4681 6.74574 19.2747 6.74574C18.559 6.74574 17.9787 7.30945 17.9787 7.9953C17.9787 8.68585 18.5522 9.24674 19.2611 9.25426C19.6605 9.25802 20 9.5286 20 9.91662V12.3265C20 14.3549 18.3075 16 16.2186 16H13.0658C12.7398 16 12.4758 15.7435 12.4758 15.4269V13.3975C12.4758 13.0029 12.1567 12.6929 11.7505 12.6929C11.354 12.6929 11.0251 13.0029 11.0251 13.3975V15.4269C11.0251 15.7435 10.7611 16 10.4362 16H3.78143C1.70213 16 0 14.3558 0 12.3265V9.91662C0 9.5286 0.339458 9.25802 0.738878 9.25426C1.44874 9.24674 2.02128 8.68585 2.02128 7.9953C2.02128 7.32824 1.46035 6.8209 0.725339 6.8209C0.531915 6.8209 0.348162 6.74574 0.212766 6.61421C0.0773694 6.48268 0 6.30417 0 6.11627V3.68291C0 1.65731 1.706 0 3.7911 0H10.4362C10.7611 0 11.0251 0.256489 11.0251 0.573106V2.97827C11.0251 3.36348 11.354 3.68291 11.7505 3.68291C12.1567 3.68291 12.4758 3.36348 12.4758 2.97827V0.573106C12.4758 0.256489 12.7398 0 13.0658 0H16.2186C18.3075 0 20 1.64416 20 3.67352V6.0411C20 6.22901 19.9226 6.40752 19.7872 6.53905ZM11.7505 10.8702C12.1567 10.8702 12.4758 10.5508 12.4758 10.1656V6.40752C12.4758 6.02231 12.1567 5.70288 11.7505 5.70288C11.354 5.70288 11.0251 6.02231 11.0251 6.40752V10.1656C11.0251 10.5508 11.354 10.8702 11.7505 10.8702Z" fill="#646464" />
      </svg>
    )
  },
  {
    path: "*",
    label: "Update Community",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 10.015C0 4.74712 4.21 0 10.02 0C15.7 0 20 4.65699 20 9.98498C20 16.1642 14.96 20 10 20C8.36 20 6.54 19.5593 5.08 18.698C4.57 18.3876 4.14 18.1572 3.59 18.3375L1.57 18.9384C1.06 19.0986 0.6 18.698 0.75 18.1572L1.42 15.9139C1.53 15.6034 1.51 15.2729 1.35 15.0125C0.49 13.4301 0 11.6975 0 10.015ZM8.7 10.015C8.7 10.7261 9.27 11.2969 9.98 11.307C10.69 11.307 11.26 10.7261 11.26 10.025C11.26 9.31397 10.69 8.74311 9.98 8.74311C9.28 8.7331 8.7 9.31397 8.7 10.015ZM13.31 10.025C13.31 10.7261 13.88 11.307 14.59 11.307C15.3 11.307 15.87 10.7261 15.87 10.025C15.87 9.31397 15.3 8.74311 14.59 8.74311C13.88 8.74311 13.31 9.31397 13.31 10.025ZM5.37 11.307C4.67 11.307 4.09 10.7261 4.09 10.025C4.09 9.31397 4.66 8.74311 5.37 8.74311C6.08 8.74311 6.65 9.31397 6.65 10.025C6.65 10.7261 6.08 11.2969 5.37 11.307Z" fill="#6A6F73" />
      </svg>
    )
  }
];