import { FC, useContext } from "react";
import LoadingSpinner from "../../UI/LoadingSpinner";
import { Link, useNavigate } from "react-router-dom";
import ModuleContext from "../../../store/module-context";

const TutorialLists: FC = () => {
  const navigate = useNavigate();

  const moduleCtx = useContext(ModuleContext);
  const { oneModuleStatus, allModuleStatus, classID } = useContext(ModuleContext);

  const isAdmin = localStorage.getItem("isAdmin");

  const isModuleCompleted = (moduleId: string) => {
    return moduleCtx.completedModules?.includes(moduleId);
  };

  let authState;

  if (oneModuleStatus && allModuleStatus === 'pending') {
    authState = (
      <LoadingSpinner />
    );
  }

  return (
    <>
      {/* //LoadingSpinner */}
      {authState}

      {moduleCtx?.allModuleDetails && (
        <ul className="mt-4 xl:mt-0 mx-4 xl:mx-auto flex flex-col gap-3">
          <button onClick={() => navigate(`${!isAdmin ? "/mydashboard" : "/admin-dashboard"}`)}
            className="max-w-[198px] xl:hidden mb-5 px-2 xl:p-4 rounded-lg bg-primary/10 text-primary fill-primary font-Inter font-normal text-sm xl:text-lg 2xl:text-xl leading-[37px]">
            Go to Dashoard
          </button>

          {moduleCtx?.allModuleDetails?.map((module, index) => (
            <li key={index} className="flex justify-between items-start p-1.5 xl:p-3 gap-4">
              <div className={`text-sm font-medium leading-[24px] tracking-[-0.2px] text-[#1E1E1EE6] w-[225px] `}>
                <Link
                  to={`/class/${classID}/${isAdmin === "false" ? "getTutorial" : "getModule"}/${module?._id}`}
                  className={`text-left ${isModuleCompleted(module?._id) && "line-through"}`}
                  onClick={(event) => {
                    moduleCtx.handleModuleCompletion(module._id)
                    event.stopPropagation();
                  }}
                >
                  Tutorial {index + 1}: <span className="hidden xl:flex xl:flex-col">{module?.title}</span>
                </Link>
              </div>
              <div
                className={`bg-[${isModuleCompleted(module?._id) ? "#048345" : "#FF323E"}] rounded-full flex items-center justify-center text-xs leading-[16px] text-white px-1.5 py-0.5`}
              >
                {moduleCtx.completedModules?.includes(module?._id) ? 'C' : 'P'}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default TutorialLists;