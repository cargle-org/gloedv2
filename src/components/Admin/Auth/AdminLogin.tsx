import { Link } from "react-router-dom"
import Button from "../../UI/Button"
import Input from "../../UI/Input"

const AdminLogin = () => {
  return (
    <div className="flex container mx-auto flex-col items-center justify-center max-w-[300px] sm:max-w-[360px] 2xl:pt-[10vh] font-Inter gap-8 my-10">
      <div className="flex flex-col text-[#121212] text-center font-semibold text-[25px] sm:text-[30px] leading-[38px]">
        Welcome back, admin
        <span className="text-center gap-1 font-normal leading-6 text-base">
          Please enter your correct details
        </span>
      </div>

      <form className="flex flex-col w-[300px] sm:w-[360px] h-max-screen text-[#121212] ">
        <Input variant="auth" htmlFor="email" label="Email" className="self-stretch mb-5 before:placeholder:text-base"
          input={{
            type: "email",
            name: "email",
            value: "",
            id: "email",
            placeholder: "Enter your email"
          }} />

        <Input variant="auth" htmlFor="password" label="Password" className="self-stretch before:placeholder:text-base"
          input={{
            type: "password",
            name: "password",
            value: "",
            id: "password",
            placeholder: "••••••••"
          }} />

        <div className="flex justify-between items-center my-6">
          <div className="font-medium font-inter gap-1 text-sm leading-6 ">
            <input className="mr-1" type="checkbox" />
            Show Password
          </div>
          <Link to="/admin-forgot-password" className="font-medium font-Inter text-sm leading-6">
            Forgot Password?
          </Link>
        </div>

        <Button variant="auth" type="submit" className="bg-black">
          Sign In
        </Button>
      </form>

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

export default AdminLogin