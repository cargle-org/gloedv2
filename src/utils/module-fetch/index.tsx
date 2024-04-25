import {
  BASE_URL,
  CREATE_CLASS,
} from "../../helpers/apis-route";

//**Add types */
export type createClassModulesPayLoad = {
  title: string;
  prerequisite: string;
  keyTakeaways: string;
  details: string;
};

export type getOneClassModulesPayLoad = {
  classID: string | undefined;
  moduleID: string | undefined;
};

const bearer = localStorage.getItem("token");

export async function createClassModulesRequest(
  classModulesArgs: createClassModulesPayLoad | undefined,
  classID: string | undefined
) {
  const CLASS_ID = classID;

  try {
    const response = await fetch(
      `${BASE_URL}${CREATE_CLASS}/${CLASS_ID}/modules`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearer}`,
        },
        body: JSON.stringify(classModulesArgs),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Could not create a new module.");
    }

    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getOneClassModulesRequest(
  classModulesID: getOneClassModulesPayLoad | undefined
) {
  const MODULE_ID = classModulesID?.moduleID;
  const CLASS_ID = classModulesID?.classID;

  const response = await fetch(
    `${BASE_URL}${CREATE_CLASS}/${CLASS_ID}/modules/${MODULE_ID}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearer}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get a class module.");
  }

  return data.data;
}

export async function getAllClassModulesRequest(classID: string | undefined) {
  const CLASS_ID = classID;

  const response = await fetch(
    `${BASE_URL}${CREATE_CLASS}/${CLASS_ID}/modules`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearer}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get all class modules.");
  }

  console.log(data.data);
  return data.data;
}
