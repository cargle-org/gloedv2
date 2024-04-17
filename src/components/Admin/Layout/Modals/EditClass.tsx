import { useRef } from "react";
import { useParams } from "react-router-dom";
import Input from "../../../UI/Input";
import Forms from "../../../UI/Forms";
import Textarea from "../../../UI/Textarea";
import { IoClose } from "react-icons/io5";
import useInput from "../../../hooks/use-input"
import { FaAngleRight } from "react-icons/fa6";
import Button from "../../../UI/Button";
import { editOneClassRequest } from "../../../../utils/class-fetch";
import useHttp from "../../../hooks/use-https";
import LoadingSpinner from "../../../UI/LoadingSpinner";

interface CreateClassProps {
  onClose: (data: any) => React.MouseEventHandler<HTMLButtonElement> | void;
}

const EditClass = (props: CreateClassProps) => {
  const { classID } = useParams();
  const selectRef = useRef<HTMLSelectElement>(null);
  const selectValue = selectRef.current?.value;

  const { sendRequest: editClassRequest, status: editStatus, error: editError, data: editClassDetails } =
    useHttp(editOneClassRequest);

  const {
    value: enteredClassname,
    hasError: inputClassnameError,
    valueChangeHandler: classnameInputChangeHandler,
    isValid: enteredClassnameIsValid,
    blurInputHandler: classnameBlurInputHandler
  } = useInput(value => value !== '');

  const {
    value: enteredClassDescription,
    hasError: inputClassDescriptionError,
    valueChangeHandler: classDescriptionInputChangeHandler,
    isValid: enteredClassDescriptionIsValid,
    blurInputHandler: classDescriptionBlurInputHandler

  } = useInput(value => value !== '');

  const {
    value: enteredFullname,
    hasError: inputFullnameError,
    // reset: resetFullnameInput,
    valueChangeHandler: fullnameInputChangeHandler,
    isValid: enteredFullnameIsValid,
    blurInputHandler: fullnameBlurInputHandler
  } = useInput(value => value !== '');

  const {
    value: enteredRole,
    hasError: inputRoleError,
    valueChangeHandler: roleInputChangeHandler,
    isValid: enteredRoleIsValid,
    blurInputHandler: roleBlurInputHandler
  } = useInput(value => value !== '');

  const {
    value: enteredGrouplink,
    hasError: inputGrouplinkError,
    valueChangeHandler: grouplinkInputChangeHandler,
    isValid: enteredGrouplinkIsValid,
    blurInputHandler: grouplinkBlurInputHandler
  } = useInput(value => value !== '');

  const {
    value: enteredAboutAuthor,
    hasError: inputAboutAuthorError,
    valueChangeHandler: aboutAuthorInputChangeHandler,
    isValid: enteredAboutAuthorIsValid,
    blurInputHandler: aboutAuthorBlurInputHandler
  } = useInput(value => value !== '');

  const {
    value: enteredCourseRequirements,
    hasError: inputCourseRequirementsError,
    valueChangeHandler: courseRequirementsInputChangeHandler,
    isValid: enteredCourseRequirementsIsValid,
    blurInputHandler: courseRequirementsBlurInputHandler
  } = useInput(value => value !== '');


  //render loading indicator
  let authState;

  if (editStatus === 'pending') {
    authState = (
      <LoadingSpinner />
    );
  }

  // navigate back to coursedetails on successful login
  if (editStatus === 'completed' && !editError) {
    setTimeout(() => {
      props.onClose;
      window.location.reload();
    }, 1500);
    console.log("done")
  }

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!enteredClassnameIsValid && !enteredClassDescriptionIsValid
      && !enteredFullnameIsValid && !enteredRoleIsValid
      && !enteredGrouplinkIsValid && !enteredAboutAuthorIsValid
      && !enteredCourseRequirementsIsValid) {
      return
    }

    const classData = {
      className: enteredClassname,
      description: enteredClassDescription,
      learnersLevel: selectValue,
      authorFullName: enteredFullname,
      authorCurrentJob: enteredRole,
      aboutAuthor: enteredAboutAuthor,
      courseRequirements: enteredCourseRequirements,
      slackChannelLink: enteredGrouplink,
    };

    editClassRequest(classData, classID);

    //scroll to the top on submit
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  return (
    <Forms onClose={props.onClose} className="gap-10 h-screen">
      <div className="inline-flex justify-between items-center">
        <h1 className=" text-black font-Inter text-3xl md:text-[42px] font-bold leading-normal">
          Edit class
        </h1>

        {/* Close modal button */}
        <div className="w-auto ml-2">
          <button onClick={props.onClose} type="button" data-modal-toggle="modal">
            <IoClose className="h-6 w-full bg-[#d4d5d666]" />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
      </div>

      {/* ***UI state*** */}
      {authState}
      <div>
        {/* **Incorrect Class** */}
        {editError && (
          <div className="bg-red-200 p-0.5 mb-1 text-center">
            "Error Updating Class!"
          </div>
        )}

        {/* **Successfully created Class** */}
        {editClassDetails && (
          <div className="bg-green-200 p-0.5 mb-1 text-center">
            "Successfully updated the class!"
          </div>
        )}

        {/* Modal Form */}
        <form className="" onSubmit={formSubmitHandler}>
          <div>
            <Input variant="modal" htmlFor="name" label="Class name" className="self-stretch p-3 placeholder:text-[#000000]"
              input={{
                type: "text",
                name: "name",
                value: enteredClassname,
                id: "name",
                onBlur: classnameBlurInputHandler,
                onChange: classnameInputChangeHandler,
                placeholder: "e.g introduction to SQL",
              }} />
            {inputClassnameError &&
              <p className="bg-red-200 text-sm mb-2">Class Name must not be empty.</p>
            }
          </div>

          <div>
            <Textarea variant="modal" label="Describe this class" htmlFor="description" className="self-stretch p-3 before:placeholder:opacity-40"
              textarea={{
                id: "description",
                value: enteredClassDescription,
                placeholder: "Be as descriptive as possible",
                onChange: classDescriptionInputChangeHandler,
                onBlur: classDescriptionBlurInputHandler
              }} />
            {inputClassDescriptionError &&
              <p className="bg-red-200 text-sm mb-2">Class description must not be empty.</p>
            }
          </div>

          <div className="flex flex-col items-start gap-1.5 mb-2.5">
            <label htmlFor="level" className="font-Roboto text-sm font-normal text-black leading-normal">
              Learners level
            </label>
            <span className="flex flex-col justify-center items-start self-stretch rounded-[5px] bg-white border border-[#425066] shadow-sm shadow-[#42506666]">
              <select ref={selectRef} id="category" className="self-stretch h-10 px-1.5 mx-1 font-Roboto text-xs font-normal text-black leading-normal focus:outline-none focus:ring focus:border-primary">
                <option defaultValue={"beginner"}>Beginner</option>
                <option value={"intermediate"}>Intermediate</option>
                <option value={"advanced"}>Advanced</option>
                <option value={"experienced"}>Experienced</option>
              </select>
            </span>
          </div>

          <div className="flex flex-col gap-8">
            {/* <div className="grid md:flex md:gap-2.5 mb-2.5 "> */}
            <div>
              <Input variant="modal" htmlFor="fullname" label="Course author full name" className="self-stretch p-3 "
                input={{
                  type: "text",
                  name: "fullname",
                  value: enteredFullname,
                  id: "fullname",
                  placeholder: "John Doe",
                  onBlur: fullnameBlurInputHandler,
                  onChange: fullnameInputChangeHandler
                }} />
            </div>
            {inputFullnameError &&
              <p className="bg-red-200 text-sm mb-2">Author's name must not be empty.</p>
            }
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <Input variant="modal" htmlFor="role" label="Current role" className="self-stretch p-3 before:placeholder:opacity-40"
                input={{
                  type: "text",
                  name: "role",
                  value: enteredRole,
                  id: "role",
                  onBlur: roleBlurInputHandler,
                  onChange: roleInputChangeHandler,
                  placeholder: "Company name",
                }} />
              {inputRoleError &&
                <p className="bg-red-200 text-sm mb-2">Authors role must not be empty.</p>
              }
            </div>

            <div>
              <Textarea variant="modal" label="About the course author" htmlFor="about" className="self-stretch p-3 before:placeholder:opacity-40"
                textarea={{
                  id: "about",
                  value: enteredAboutAuthor,
                  onChange: aboutAuthorInputChangeHandler,
                  onBlur: aboutAuthorBlurInputHandler,
                  placeholder: "Be as descriptive as possible"
                }} />
              {inputAboutAuthorError &&
                <p className="bg-red-200 text-sm mb-2">About Author must not be empty.</p>
              }
            </div>

            <div>
              <Textarea variant="modal" label="Course Requirements" htmlFor="requirements" className="self-stretch p-3 before:placeholder:opacity-40"
                textarea={{
                  id: "requirements",
                  value: enteredCourseRequirements,
                  onChange: courseRequirementsInputChangeHandler,
                  onBlur: courseRequirementsBlurInputHandler,
                  placeholder: "Place each requirements on a fresh line"
                }} />
              {inputCourseRequirementsError &&
                <p className="bg-red-200 text-sm mb-2">Class Requirements must not be empty.</p>
              }
            </div>

            <div>
              <Input variant="modal" htmlFor="grouplink" label="Link to course slack channel" className="self-stretch p-3 before:placeholder:opacity-40"
                input={{
                  type: "text",
                  name: "grouplink",
                  value: enteredGrouplink,
                  id: "grouplink",
                  onBlur: grouplinkBlurInputHandler,
                  onChange: grouplinkInputChangeHandler,
                  placeholder: "Group link"
                }} />
              {inputGrouplinkError &&
                <p className="bg-red-200 text-sm mb-2">Group link must not be empty.</p>
              }
            </div>
          </div>

          <div className='flex justify-start items-center mt-6'>
            <Button variant="modal" type="submit" className="bg-primary">
              Edit class
              <FaAngleRight className="h-4 2-4" />
            </Button>
          </div>
        </form>
      </div>
    </Forms>
  )
}

export default EditClass;