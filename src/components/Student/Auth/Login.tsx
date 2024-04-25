import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/use-input";
import Button from "../../UI/Button"
import Input from "../../UI/Input";
import useHttp from "../../hooks/use-https.js";
import { loginRequest } from "../../../utils/auth-fetch";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../store/auth-context.js";
import LoadingSpinner from "../../UI/LoadingSpinner.js";

const Login: React.FC = () => {
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const isVerified = authCtx.user?.isVerified;

  const { sendRequest, status, error, data } =
    useHttp(loginRequest);

  const {
    value: enteredEmail,
    hasError: inputEmailError,
    reset: resetEmailInput,
    valueChangeHandler: emailInputChangeHandler,
    isValid: enteredEmailIsValid,
    blurInputHandler: emailBlurInputHandler
  } = useInput(value => value.includes('@'))

  const {
    value: enteredPassword,
    hasError: inputPasswordError,
    reset: resetPasswordInput,
    valueChangeHandler: passwordInputChangeHandler,
    isValid: enteredPasswordIsValid,
    blurInputHandler: passwordBlurInputHandler
  } = useInput(value => value !== '' && value.length >= 6)

  //render loading indicator
  let authState;

  if (status === 'pending') {
    authState = (
      <LoadingSpinner />
    );
  }

  //navigate to dashboard on successful login
  if (status === 'completed' && !error && isVerified && isLoggedIn) {
    localStorage.setItem("fName", data?.data?.firstName);

    setTimeout(() => {
      navigate("/mydashboard");
    }, 1500);
  }

  if (status === 'completed' && !isVerified && !isLoggedIn) {
    setTimeout(() => {
      navigate("/verify-email");
    }, 1500);
  }

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("fname");
    localStorage.removeItem("email");
    localStorage.removeItem("isAdmin");
  }, [!isLoggedIn]);

  useEffect(() => {
    if (enteredEmail || enteredPassword) {
      setEmailIsValid(true);
      setPasswordIsValid(true);
    }
  }, [enteredEmail, enteredPassword]);

  const loginSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    //store email for verification
    localStorage.setItem("email", enteredEmail);

    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      if (!enteredEmail) {
        setEmailIsValid(false);
      }
      if (!enteredPassword) {
        setPasswordIsValid(false);
      }
      return
    }

    //Reset Login Input
    resetEmailInput();
    resetPasswordInput();

    //Login args object
    const user = {
      email: enteredEmail,
      password: enteredPassword
    }

    authCtx.login(user);
    sendRequest(user);

    console.log(data);
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto h-full gap-8 my-24 2xl:mt-0 max-w-[300px] sm:max-w-[360px] 2xl:pt-[10vh] font-Inter">
      <div className="flex flex-col text-[#121212] text-center font-semibold text-[25px] sm:text-[30px] leading-[38px]">
        Login into your account
        <span className="text-center gap-1 font-normal leading-6 text-base">
          What are you learning today?
        </span>
      </div>

      {/* ***UI state*** */}
      {authState}
      <div>
        {/* **Incorrect login** */}
        {error && (
          <div className="bg-red-200 p-0.5 mb-1 text-center">
            "Incorrect Email or Password combination!"
          </div>
        )}

        {/* **Handle Empty inputs** */}
        {((!emailIsValid && !passwordIsValid) ||
          (!passwordIsValid || !emailIsValid)) && (
            <div className="bg-red-200 p-0.5 mb-1 text-center">
              "Email and Password required!"
            </div>
          )}

        <form onSubmit={loginSubmitHandler} className="flex flex-col w-[300px] sm:w-[360px] h-max-screen text-[#121212] ">
          <div className="mb-5">
            <Input variant="auth" htmlFor="email" label="Email" className="self-stretch before:placeholder:text-base"
              input={{
                type: "email",
                name: "email",
                value: enteredEmail,
                id: "email",
                onBlur: emailBlurInputHandler,
                onChange: emailInputChangeHandler,
                placeholder: "Enter your email"
              }} />
            {inputEmailError &&
              !enteredEmailIsValid && (
                <p className="bg-red-100">Please enter a valid Email address!</p>
              )}
          </div>

          <Input variant="auth" htmlFor="password" label="Password" className="self-stretch before:placeholder:text-base"
            input={{
              type: "password",
              name: "password",
              value: enteredPassword,
              id: "password",
              onBlur: passwordBlurInputHandler,
              onChange: passwordInputChangeHandler,
              placeholder: "••••••••"
            }} />
          {inputPasswordError &&
            !enteredPasswordIsValid && (
              <p className="bg-red-100">Password should be more than 6 characters!</p>
            )}

          <div className="flex justify-between items-center my-6">
            <div className="font-medium font-inter gap-1 text-sm leading-6 ">
              <input className="mr-1" type="checkbox" />
              Show Password
            </div>
            <Link to="/" className="font-medium font-Inter text-sm leading-6">
              Forgot Password?
            </Link>
          </div>

          <Button variant="auth" type="submit" className="bg-primary">
            Sign In
          </Button>
        </form>
      </div>

      <div className="inline-flex items-center gap-1 font-Inter text-sm ">
        <div className="flex font-normal leading-5">
          Don't have an account?
        </div>
        <Link to="/signup" className="inline-flex items-start text-primary font-medium leading-6">
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Login;