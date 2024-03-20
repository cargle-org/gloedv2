import Input from "../../../UI/Input";
import Forms from "../../../UI/Forms";
import Textarea from "../../../UI/Textarea";
import { IoClose } from "react-icons/io5";
import useInput from "../../../hooks/use-input"
import { FaAngleRight } from "react-icons/fa6";
import Button from "../../../UI/Button";

interface CreateClassProps {
  onClose: (data: any) => React.MouseEventHandler<HTMLButtonElement> | void;
}

const CreateClass = (props: CreateClassProps) => {
  const {
    value: enteredName,
    hasError: inputNameError,
    reset: resetNameInput,
    valueChangeHandler: nameInputChangeHandler,
    isValid: enteredNameIsValid,
    blurInputHandler: nameBlurInputHandler
  } = useInput(value => value !== '')

  // let formIsValid = false;

  // if (enteredNameIsValid) {
  //   formIsValid = true
  // }

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(enteredName);

    if (!enteredNameIsValid) {
      return
    }

    resetNameInput()
  }


  return (
    <Forms onClose={props.onClose} className="gap-10 h-screen">
      <div className="inline-flex justify-between items-center">
        <h1 className=" text-black font-Inter text-3xl md:text-[42px] font-bold leading-normal">
          Create a class
        </h1>

        {/* Close modal button */}
        <div className="w-auto ml-2">
          <button onClick={props.onClose} type="button" data-modal-toggle="modal">
            <IoClose className="h-6 w-full bg-[#42506666]" />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
      </div>

      {/* Modal Form */}
      <form className="" onSubmit={formSubmitHandler}>
        <Input variant="modal" htmlFor="name" label="Class name" className="self-stretch p-3 "
          onBlur={nameBlurInputHandler} onChange={nameInputChangeHandler}
          input={{
            type: "text",
            name: "name",
            value: `${enteredName}`,
            id: "name",
            placeholder: "e.g introduction to SQL",
          }} />
        {inputNameError &&
          <p className="text-red text-sm">Course Name must not be empty.</p>
        }

        <Textarea variant="modal" label="Describe this class" htmlFor="description" className="self-stretch p-3 before:placeholder:opacity-40"
          textarea={{
            id: "description",
            value: "",
            placeholder: "Be as descriptive as possible"
          }} />

        <div className="flex flex-col items-start gap-1.5 mb-2.5">
          <label htmlFor="level" className="font-Roboto text-sm font-normal text-black leading-normal">
            Learners level
          </label>
          <span className="flex flex-col justify-center items-start self-stretch rounded-[5px] bg-white border border-[#425066] shadow-sm shadow-[#42506666]">
            <select id="category" className="self-stretch h-10 px-1.5 mx-1 font-Roboto text-xs font-normal text-black leading-normal">
              <option selected={true}>Beginner</option>
              <option value="int">Intermediate</option>
              <option value="adv">Advanced</option>
              <option value="exp">Experienced</option>
            </select>
          </span>
        </div>
        <div className="grid md:flex md:gap-2.5 mb-2.5 ">
          <Input variant="modal" htmlFor="firstname" label="Course author full name" className="self-stretch p-3 "
            input={{
              type: "text",
              name: "firstname",
              value: "",
              id: "firstname",
              placeholder: "John",
            }} />

          <Input variant="modal" htmlFor="lastname" label="" className="self-stretch p-3 flex mt-4 "
            input={{
              type: "text",
              name: "lastname",
              value: "",
              id: "lastname",
              placeholder: "Doe",
            }} />
        </div>

        <div className="flex flex-col gap-8">
          <Input variant="modal" htmlFor="role" label="Current role" className="self-stretch p-3 before:placeholder:opacity-40"
            input={{
              type: "text",
              name: "role",
              value: "",
              id: "role",
              placeholder: "Company",
            }} />

          <Textarea variant="modal" label="About the course author" htmlFor="about" className="self-stretch p-3 before:placeholder:opacity-40"
            textarea={{
              id: "about",
              value: "",
              placeholder: "Be as descriptive as possible"
            }} />

          <Textarea variant="modal" label="Course Requirements" htmlFor="requirements" className="self-stretch p-3 before:placeholder:opacity-40"
            textarea={{
              id: "requirements",
              value: "",
              placeholder: "Place each requirements on a fresh line"
            }} />

          <Input variant="modal" htmlFor="grouplink" label="Link to course slack channel" className="self-stretch p-3 before:placeholder:opacity-40"
            input={{
              type: "text",
              name: "grouplink",
              value: "",
              id: "grouplink",
              placeholder: "Group link"
            }} />
        </div>

        <div className='flex justify-start items-center mt-6'>
          <Button variant="modal" className="bg-primary">
            Create class
            <FaAngleRight className="h-4 2-4" />
          </Button>
        </div>
      </form>
    </Forms >
  )
}

export default CreateClass