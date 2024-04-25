import React, { createContext, useEffect, useState } from "react";
import { LoginPayload, SignupPayload, adminLoginRequest, loginRequest, signupRequest } from "../utils/auth-fetch/index";

// Define an interface for AuthContext data
interface AuthContextData {
  isLoggedIn: boolean;
  loading: boolean;
  user: {
    email?: string | null,
    otp?: string | null,
    firstName?: string | undefined,
    fullName?: string | null,
    isVerified?: boolean | null,
  } | null,
  token: string | null;
  isAdmin: boolean | string;
  adminLogin: (user: LoginPayload) => void;
  login: (user: LoginPayload) => void;
  logout: () => void;
  signup: (user: SignupPayload) => void;
}

// Create AuthContext with the typed interface
const AuthContext = createContext<AuthContextData>({
  isLoggedIn: false,
  loading: true,
  user: null,
  token: null,
  isAdmin: false,
  adminLogin: (_user) => { },
  login: (_user) => { },
  logout: () => { },
  signup: (_user) => { },
});

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getToken = localStorage.getItem('token');
  const getisAdmin = JSON.parse(localStorage.getItem('isAdmin') || "false");
  const [user, setUser] = useState<object | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(getisAdmin);
  const [token, setToken] = useState<string | null>(getToken);
  const [loading, setLoading] = useState<boolean>(true);
  const userIsLoggedIn = !!token;

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", getToken as string);
      localStorage.setItem("isAdmin", isAdmin as unknown as string);
      setToken(token);
      setUser(user);
    }
  }, [token])


  const login: (user: LoginPayload) => void = async (userArg) => {
    const responseData = await loginRequest(userArg);
    const data = responseData.data;
    const token = data?.token;

    localStorage.setItem("token", token);
    localStorage.setItem("fName", data?.firstName);
    setToken(token);
    setUser({
      otp: data.otp,
      email: data.email,
      firstName: data.firstName,
      isVerified: data?.isVerified
    });
    setLoading(false);
    setIsAdmin(false);
  };

  const adminLogin: (user: LoginPayload) => void = async (userArg) => {
    const responseData = await adminLoginRequest(userArg);
    const data = responseData.data;
    const token = data.token;

    localStorage.setItem("token", token);
    localStorage.setItem("isAdmin", JSON.stringify(isAdmin));

    //check for token to update states
    if (token) {
      localStorage.setItem("fName", data.fullName);
      setToken(token);
      setUser({
        otp: data.otp,
        email: data.email,
        fullName: data.fullName,
        isVerified: data?.isVerified
      });
      setLoading(false);
      setIsAdmin(true);
    }
  };

  const signup: (user: SignupPayload) => void = async (userArg) => {
    const responseData = await signupRequest(userArg);
    const data = responseData.data;

    if (data) {
      setUser({
        ...data,
        email: data.email,
        otp: data.otp
      });
      setLoading(false);
    }
  };

  const logout: () => void = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('fName');
    setUser(null);
    setToken(null);
  };

  const value: AuthContextData = {
    loading,
    isLoggedIn: userIsLoggedIn,
    user,
    token,
    isAdmin,
    adminLogin,
    login,
    logout,
    signup,

  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
