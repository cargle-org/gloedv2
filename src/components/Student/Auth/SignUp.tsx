import Button from "../../UI/Button"
import Input from "../../UI/Input";
import useInput from "../../hooks/use-input";
import { useContext, useState } from "react";
import AuthContext from "../../../store/auth-context.js";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstNameIsValid, setFirstNameIsValid] = useState(true);
  const [lastnameIsValid, setLastnameIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    value: enteredEmail,
    hasError: inputEmailError,
    valueChangeHandler: emailInputChangeHandler,
    isValid: enteredEmailIsValid,
    blurInputHandler: emailBlurInputHandler
  } = useInput(value => value.includes('@'))

  const {
    value: enteredPassword,
    hasError: inputPasswordError,
    valueChangeHandler: passwordInputChangeHandler,
    isValid: enteredPasswordIsValid,
    blurInputHandler: passwordBlurInputHandler
  } = useInput(value => value !== '' && value.length >= 6)

  const {
    value: enteredFirstname,
    hasError: inputFirstnameError,
    valueChangeHandler: firstnameInputChangeHandler,
    isValid: enteredFirstnameIsValid,
    blurInputHandler: firstnameBlurInputHandler
  } = useInput(value => value !== '' && value.length >= 2)

  const {
    value: enteredLastname,
    hasError: inputLastnameError,
    valueChangeHandler: lastnameInputChangeHandler,
    isValid: enteredLastnameIsValid,
    blurInputHandler: lastnameBlurInputHandler
  } = useInput(value => value !== '' && value.length >= 2)



  //render loading indicator
  let authState;


  const signupHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!enteredEmailIsValid ||
      !enteredPasswordIsValid ||
      !enteredFirstnameIsValid ||
      !enteredLastnameIsValid) {
      if (!enteredEmail) {
        setEmailIsValid(false);
      }
      if (!enteredPassword) {
        setPasswordIsValid(false);
      }
      if (!enteredFirstname) {
        setFirstNameIsValid(false);
      }
      if (!enteredLastname) {
        setLastnameIsValid(false);
      }
      return
    }

    const user = {
      email: enteredEmail,
      password: enteredPassword,
      firstName: enteredFirstname,
      lastName: enteredLastname,
    }

    authCtx.signup(user);

    setTimeout(() => {
      navigate("/verify-email");
    }, 500);

    localStorage.setItem('email', enteredEmail);

  }

  return (
    <div className="flex container mx-auto flex-col items-center justify-center max-w-[300px] sm:max-w-[360px] 2xl:pt-[10vh] font-Inter gap-6 my-10">

      <div className="flex flex-col lg:mt-5 text-[#121212] text-center font-semibold text-[30px] leading-[38px] ">
        {/* ***UI state*** */}
        {authState}

        {/* **Incorrect login** */}
        {/* <div>
          {error && (
            <div className="bg-red-200 p-0.5 mb-4 text-center">
              "{error}"
            </div>
          )}
        </div> */}
        Create your account
        <span className="text-center gap-1 font-normal leading-6 text-base">
          Excel or SQL, what are you learning?
        </span>
      </div>
      <div>

        {/* **Hnadle Empty inputs** */}
        {((!emailIsValid && !passwordIsValid &&
          !firstNameIsValid && !lastnameIsValid) ||
          (!passwordIsValid || !emailIsValid ||
            !firstNameIsValid || !lastnameIsValid)) && (
            <div className="bg-red-200 p-0.5 mb-2 text-center">
              "All Input fields are required!"
            </div>
          )}

        <form onSubmit={signupHandler} className="flex flex-col w-[300px] sm:w-[360px] h-max-screen text-[#121212] gap-5">
          <div>
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

          <div>
            <Input variant="auth" htmlFor="firstname" label="First name" className="self-stretch before:placeholder:text-base"
              input={{
                type: "text",
                name: "firstname",
                value: enteredFirstname,
                id: "firstname",
                onBlur: firstnameBlurInputHandler,
                onChange: firstnameInputChangeHandler,
                placeholder: "Enter your firstname"
              }} />
            {inputFirstnameError &&
              !enteredFirstnameIsValid && (
                <p className="bg-red-100">Firstname should be more than 6 characters!</p>
              )}
          </div>

          <div>
            <Input variant="auth" htmlFor="lastname" label="Last name" className="self-stretch before:placeholder:text-base"
              input={{
                type: "text",
                name: "lastname",
                value: enteredLastname,
                id: "lastname",
                onBlur: lastnameBlurInputHandler,
                onChange: lastnameInputChangeHandler,
                placeholder: "Enter your lastname"
              }} />
            {inputLastnameError &&
              !enteredLastnameIsValid && (
                <p className="bg-red-100">Lastname should be more than 2 characters!</p>
              )}
          </div>

          <div>
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
          </div>

          <Button variant="auth" type="submit" className="bg-primary">
            Sign up
          </Button>
        </form>
      </div>

      <div className="inline-flex items-center gap-1 font-Inter text-sm ">
        <div className="flex gap-1 font-normal leading-5">
          Already have an account?
        </div>
        <div className="inline-flex items-start text-primary font-mediumnleading-6">
          Sign In
        </div>
      </div>
    </div >
  )
}

export default SignUp;