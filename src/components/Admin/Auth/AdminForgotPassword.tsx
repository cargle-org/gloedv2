import Button from "../../UI/Button"
import Input from "../../UI/Input"

const AdminForgotPassword = () => {
  return (
    <div className="flex container mx-auto flex-col items-center justify-center max-w-[300px] sm:max-w-[360px] 2xl:pt-[5vh] font-Inter gap-8 my-10">
      <div className="flex flex-col text-[#121212] text-center font-semibold text-[25px] sm:text-[30px] leading-[38px]">
        Forgot Password
        <span className="text-center gap-1 font-normal leading-6 text-base">
          Please enter your gloed email
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

        <Button variant="auth" type="submit" className="bg-blackAdmin">
          Send reset link
        </Button>
      </form>

    </div>
  )
}

export default AdminForgotPassword