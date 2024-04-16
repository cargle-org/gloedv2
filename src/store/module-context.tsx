import React, { createContext, useEffect, useState } from "react";
import { getAllClassModulesRequest, getOneClassModulesRequest } from "../utils/module-fetch/index";
import useHttp from "../components/hooks/use-https";

interface Module {
  title: string;
  _id: string; // Optional ID for the module
}

interface ModuleDatas {
  title: string;
  _id: string;
  details: string;
  keyTakeaways: string;
  prerequisite: string
}

// Define an interface for ModuleContext data
interface ModuleContextData {
  classID: string | undefined;
  moduleID: string | undefined;
  allModuleDetails: Module[] | null;
  oneModuleDetails: ModuleDatas | undefined;
  oneModuleStatus: string | null;
  allModuleStatus: string | null;
  completedModules: string[] | null;
  handleModuleCompletion: (moduleId: string) => void
  updateModuleContextID: (classId: string | undefined, moduleId: string | undefined) => void
}

// Create ModuleContext with the typed interface
const ModuleContext = createContext<ModuleContextData>({
  classID: undefined,
  moduleID: undefined,
  allModuleDetails: null,
  oneModuleDetails: undefined,
  oneModuleStatus: null,
  allModuleStatus: null,
  completedModules: null,
  // updateClassSchedule: () => { },
  handleModuleCompletion: () => { },
  updateModuleContextID: () => { }
});

export const ModuleContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [classID, setClassID] = useState<string | undefined>("");
  const [moduleID, setModuleID] = useState<string | undefined>("");

  const [completedModules, setCompletedModules] = useState<string[]>([]);

  //GET module IDs
  const moduleIDs = {
    classID,
    moduleID
  }

  const { sendRequest: oneModuleRequest, status: oneModuleStatus, data: oneModuleDetails } =
    useHttp(getOneClassModulesRequest);

  const { sendRequest: allModuleRequest, status: allModuleStatus, data: allModuleDetails } =
    useHttp(getAllClassModulesRequest);

  // Fetch data based on classID and moduleID
  useEffect(() => {
    const fetchData = async () => {
      await allModuleRequest(classID);
      await oneModuleRequest(moduleIDs); // Only fetch one module if needed
    };

    fetchData();
  }, [classID, moduleID, allModuleRequest, oneModuleRequest]);


  useEffect(() => {
    const storedModules = localStorage.getItem("completedModules");
    if (storedModules) {
      setCompletedModules(JSON.parse(storedModules));
    }
  }, []);


  const updateModuleContextID = (classID: string | undefined, moduleID: string | undefined) => {
    setClassID(classID);
    setModuleID(moduleID);
  };

  const handleModuleCompletion = (moduleId: string) => {
    setCompletedModules((prevModules) => [...prevModules, moduleId]);
    localStorage.setItem("completedModules", JSON.stringify(completedModules));
  };

  const value: ModuleContextData = {
    classID,
    moduleID,
    completedModules,
    oneModuleDetails,
    allModuleDetails,
    oneModuleStatus,
    allModuleStatus,
    handleModuleCompletion,
    updateModuleContextID
  };

  return (
    <ModuleContext.Provider value={value}>
      {children}
    </ModuleContext.Provider>
  );
};

export default ModuleContext;
