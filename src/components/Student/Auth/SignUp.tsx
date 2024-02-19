import { Link } from "react-router-dom"
import Button from "../../UI/Button"
import Input from "../../UI/Input"

const SignUp = () => {
  return (
    <div className="flex container mx-auto flex-col items-center justify-center max-w-[300px] sm:max-w-[360px] 2xl:pt-[10vh] font-Inter gap-6 my-10">
      <div className="flex flex-col text-[#121212] text-center font-semibold text-[30px] leading-[38px]">
        Create your account
        <span className="text-center gap-1 font-normal leading-6 text-base">
          Excel or SQL, what are you learning?
        </span>
      </div>

      <form className="flex flex-col w-[300px] sm:w-[360px] h-max-screen text-[#121212] gap-5">
        <Input variant="auth" htmlFor="fullname" label="Full name" className="self-stretch before:placeholder:text-base"
          input={{
            type: "text",
            name: "fullname",
            value: "",
            id: "fullname",
            placeholder: "Enter your fullname"
          }} />

        <Input variant="auth" htmlFor="email" label="Email" className="self-stretch before:placeholder:text-base"
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

        <Button variant="auth" type="submit" className="bg-primary">
          Sign up
        </Button>
      </form>

      <div className="inline-flex items-center gap-1 font-Inter text-sm ">
        <div className="flex gap-1 font-normal leading-5">
          Already have an account?
        </div>
        <Link to="/login" className="inline-flex items-start text-primary font-mediumnleading-6">
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default SignUp