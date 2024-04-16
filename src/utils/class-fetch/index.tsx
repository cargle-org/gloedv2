import {
  BASE_URL,
  CREATE_CLASS,
} from "../../helpers/apis-route";

// /Type annotation******
export type createClassPayload = {
  className: string | null;
  description: string;
  learnersLevel: string | undefined;
  authorFullName: string;
  authorCurrentJob: string;
  aboutAuthor: string;
  courseRequirements: string;
  slackChannelLink: string;
};

export type editClassPayload = {
  className?: string | null;
  description?: string;
  learnersLevel?: string | undefined;
  authorFullName?: string;
  authorCurrentJob?: string;
  aboutAuthor?: string;
  courseRequirements?: string;
  slackChannelLink?: string;
  possibleDatesTimesGeneral?: string[];
  possibleDatesTimesPersonal?: string[];
  classDuration?: string | number;
  pricePersonalClass?: string | number;
  priceGeneralClass?: string | number;
};

//GET bearer token from localStorage
const bearer = localStorage.getItem("token");

export async function createClassRequest(
  classArgs: createClassPayload | undefined
) {
  const response = await fetch(`${BASE_URL}${CREATE_CLASS}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearer}`,
    },
    body: JSON.stringify(classArgs),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to create class.");
  }

  return data;
}

export async function editOneClassRequest(
  classArgs: editClassPayload | undefined,
  ClassID: string | undefined
) {
  const CLASS_ID = ClassID;

  const response = await fetch(`${BASE_URL}${CREATE_CLASS}/${CLASS_ID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearer}`,
    },
    body: JSON.stringify(classArgs),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not edit class.");
  }

  return data;
}

export async function getAllClassesRequest() {
  const response = await fetch(`${BASE_URL}${CREATE_CLASS}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearer}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get all classes.");
  }

  return data.data;
}

export async function getOneClassRequest(classID: string | undefined) {
  const CLASS_ID = classID;

  const response = await fetch(`${BASE_URL}${CREATE_CLASS}/${CLASS_ID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearer}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get a class.");
  }

  return data.data;
}