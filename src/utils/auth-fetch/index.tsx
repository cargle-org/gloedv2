import {
  BASE_URL,
  LOGIN_URL,
  ADMIN_LOGIN_URL,
  SIGNUP_URL,
  VERIFY_EMAIL
} from "../../helpers/apis-route";

export type LoginPayload = {
  email: string;
  password: string;
};

export type SignupPayload = object & {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
};

export type verifyEmailPayload = {
  email: string | null;
  otp: string;
};

export async function loginRequest(loginData: LoginPayload | undefined) {
  const response = await fetch(`${BASE_URL}${LOGIN_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not sign user in.");
  }

  return data;
}

export async function adminLoginRequest(loginData: LoginPayload | undefined) {
  const response = await fetch(`${BASE_URL}${ADMIN_LOGIN_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not sign user in.");
  }

  return data;
}

export async function signupRequest(signupData: SignupPayload | undefined) {
  const response = await fetch(`${BASE_URL}${SIGNUP_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to register user.");
  }

  return data;
}

export async function verifyEmailRequest(
  verifyEmailData: verifyEmailPayload | undefined
) {
  const response = await fetch(`${BASE_URL}${VERIFY_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(verifyEmailData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not verify email.");
  }

  return data;
}