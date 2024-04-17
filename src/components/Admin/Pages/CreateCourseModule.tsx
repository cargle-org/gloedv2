import Input from "../../UI/Input"
import AdminSideBar from "../Layout/AdminSideBar";
import { FaAngleRight } from "react-icons/fa";
import Textarea from "../../UI/Textarea";
import Button from "../../UI/Button";
import useInput from "../../hooks/use-input";
import useHttp from "../../hooks/use-https";
import { createClassModulesRequest } from "../../../utils/module-fetch";
import LoadingSpinner from "../../UI/LoadingSpinner";
import { useNavigate, useParams } from "react-router-dom";

const CreateCourseModule = () => {
  const navigate = useNavigate();
  const { classID } = useParams();
  const { sendRequest, status, error, data } =
    useHttp(createClassModulesRequest);

  const {
    value: enteredTitle,
    hasError: inputTitleError,
    valueChangeHandler: titleInputChangeHandler,
    isValid: enteredTitleIsValid,
    blurInputHandler: titleBlurInputHandler
  } = useInput(value => value !== '');

  const {
    value: enteredPrerequisite,
    hasError: inputPrerequisiteError,
    valueChangeHandler: prerequisiteInputChangeHandler,
    isValid: enteredPrerequisiteIsValid,
    blurInputHandler: prerequisiteBlurInputHandler
  } = useInput(value => value !== '');

  const {
    value: enteredKeyTakeaways,
    hasError: inputKeyTakeawaysError,
    valueChangeHandler: keyTakeawaysInputChangeHandler,
    isValid: enteredKeyTakeawaysIsValid,
    blurInputHandler: keyTakeawaysBlurInputHandler
  } = useInput(value => value !== '');

  const {
    value: enteredModuleDetails,
    hasError: inputModuleDetailsError,
    valueChangeHandler: moduleDetailsInputChangeHandler,
    isValid: enteredModuleDetailsIsValid,
    blurInputHandler: moduleDetailsBlurInputHandler
  } = useInput(value => value !== '');

  //render loading indicator
  let authState;

  if (status === 'pending') {
    authState = (
      <LoadingSpinner />
    );
  }

  if (status === "completed" && !error) {
    setTimeout(() => {
      navigate(`/class/${classID}/getModule/${data?._id}`);
    }, 3000)
  }

  const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!enteredTitleIsValid ||
      !enteredKeyTakeawaysIsValid ||
      !enteredModuleDetailsIsValid ||
      !enteredPrerequisiteIsValid) {
      return
    }

    const modulesData = {
      title: enteredTitle,
      prerequisite: enteredPrerequisite,
      keyTakeaways: enteredKeyTakeaways,
      details: enteredModuleDetails
    };

    sendRequest(modulesData, classID);
  }

  return (
    <div className="flex container mx-auto mb-20 lg:mt-2 xl:max-w-full max-w-[300px] sm:max-w-[400px] md:max-w-[610px] lg:max-w-[700px] 2xl:max-w-[1440px] ">
      <AdminSideBar isOpen={false} />

      <main>
        <section className='flex flex-col flex-wrap lg:-mt-4 md:flex-nowrap mx-auto max-w-[300px] sm:max-w-[400px] md:max-w-[610px] lg:max-w-[700px] xl:max-w-[970px] 2xl:max-w-6xl 3xl:max-w-7xl space-y-7 md:space-y-12 ">'>
          <h1 className="text-wrap text-[#1E1E1E] font-Inter text-2xl font-bold leading-normal ">
            Create a course module
          </h1>

          {/* ***UI state*** */}
          {authState}
          <div>
            {/* **Incorrect Class** */}
            {error && (
              <div className="bg-red-200 p-0.5 mb-1 text-center">
                "{error}"
              </div>
            )}

            {/* **Successfully created Class module** */}
            {data && (
              <div className="bg-green-200 p-0.5 mb-1 text-center">
                "Class module Successfully created!"
              </div>
            )}
          </div>

          <form className="" onSubmit={formSubmitHandler}>
            <div className="flex flex-col md:flex-row lg:justify-between mb-3 gap-3 xl:gap-8">
              <div className="w-[180px] xl:w-[280px] font-medium text-[#1E1E1E] text-left text-sm leading-5">
                Module Title
              </div>
              <div>
                <Input variant="module" htmlFor="title" label="" className=" self-stretch p-3"
                  input={{
                    type: "text",
                    name: "title",
                    value: enteredTitle,
                    id: "title",
                    onChange: titleInputChangeHandler,
                    onBlur: titleBlurInputHandler,
                    placeholder: "e.g Introduction to SQL and excel"
                  }} />
                {inputTitleError &&
                  <p className="bg-red-200 text-sm mb-2">
                    Module Title must not be empty.
                  </p>
                }
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between gap-3 xl:gap-8">
                <label htmlFor="prerequisite" className="flex w-[176px] xl:w-[280px] font-medium text-[#1E1E1E]  font-Inter text-left text-sm leading-5">
                  Course prerequisite
                </label>
                <div className="w-full md:w-[512px] flex flex-col sm:gap-3">
                  <div>
                    <Textarea variant="module" label="" htmlFor="prerequisite" className="self-stretch p-3 mb-0"
                      textarea={{
                        id: "prerequisite",
                        value: enteredPrerequisite,
                        onChange: prerequisiteInputChangeHandler,
                        onBlur: prerequisiteBlurInputHandler,
                        placeholder: "Enter Course Prerequisite."
                      }} />
                    <div className="text-sm leading-5">3000 characters left</div>
                    {inputPrerequisiteError &&
                      <p className="bg-red-200 text-sm mb-2">Course prerequisite must not be empty.</p>
                    }
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-3 xl:gap-8">
                <label htmlFor="takeaways" className="flex w-[176px] xl:w-[280px] font-medium text-[#1E1E1E]  font-Inter text-left text-sm leading-5">
                  Key takeaways
                </label>
                <div className="w-full md:w-[512px] flex flex-col sm:gap-3">
                  <div>
                    <Textarea variant="module" label="" htmlFor="takeaways" className="self-stretch p-3 mb-0"
                      textarea={{
                        id: "takeaways",
                        value: enteredKeyTakeaways,
                        onChange: keyTakeawaysInputChangeHandler,
                        onBlur: keyTakeawaysBlurInputHandler,
                        placeholder: "Enter the Key takeaways."
                      }} />
                    <div className="text-sm leading-5">3000 characters left</div>
                    {inputKeyTakeawaysError &&
                      <p className="bg-red-200 text-sm mb-2">Key Takeaways must not be empty.</p>
                    }
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-3 xl:gap-8">
                <label htmlFor="details" className="flex w-[176px] xl:w-[280px] font-medium text-[#1E1E1E]  font-Inter text-left text-sm leading-5">
                  Module details
                </label>
                <div className="w-full md:w-[512px] flex flex-col sm:gap-3">
                  <div>
                    <Textarea variant="module" label="" htmlFor="details" className="self-stretch p-3 mb-0"
                      textarea={{
                        id: "details",
                        value: enteredModuleDetails,
                        onChange: moduleDetailsInputChangeHandler,
                        onBlur: moduleDetailsBlurInputHandler,
                        placeholder: "Enter Module details."
                      }} />
                    <div className="text-sm leading-5">3000 characters left</div>
                    {inputModuleDetailsError &&
                      <p className="bg-red-200 text-sm mb-2">Module Details must not be empty.</p>
                    }
                  </div>
                </div>
              </div>

              <div className='flex justify-end items-center'>
                <Button variant="modal" type="submit" className="bg-primary h-10">
                  Create class module
                  <FaAngleRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

export default CreateCourseModule;