import Input from "../../../UI/Input";
import Forms from "../../../UI/Forms";
import Textarea from "../../../UI/Textarea";
import { IoClose } from "react-icons/io5";
import Button from "../../../UI/Button";

interface CreateTestProps {
  onClose: (data: any) => React.MouseEventHandler<HTMLButtonElement> | void;
}

const CreateTest = (props: CreateTestProps) => {
  return (
    <Forms onClose={props.onClose} className="gap-10 h-screen">
      <div className="inline-flex justify-between items-center">
        <h1 className=" text-black font-Inter text-3xl md:text-[42px] font-bold leading-normal">
          Create a Test
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
      <form className="">
        <Input variant="modal" htmlFor="title" label="Test title" className="self-stretch p-3"
          input={{
            type: "text",
            name: "title",
            value: "",
            id: "title",
            placeholder: "e.g introduction to SQL test 1"
          }} />

        <Textarea variant="modal" label="Test instructions" htmlFor="instructions" className="self-stretch p-3 before:placeholder:opacity-40"
          textarea={{
            id: "instructions",
            value: "",
            placeholder: "Be as descriptive as possible"
          }} />

        <Textarea variant="modal" label="Question 1" htmlFor="question" className="self-stretch p-3 before:placeholder:opacity-40"
          textarea={{
            id: "question",
            value: "",
            placeholder: "e.g what does SQL stand for?"
          }} />

        <Input variant="modal" htmlFor="option1" label="Option 1" className="self-stretch p-3 before:placeholder:opacity-40"
          input={{
            type: "text",
            name: "option1",
            value: "",
            id: "option1",
            placeholder: "e.g See Queen Lying"
          }} />

        <Input variant="modal" htmlFor="option2" label="Option 2" className="self-stretch p-3 before:placeholder:opacity-40"
          input={{
            type: "text",
            name: "option2",
            value: "",
            id: "option2",
            placeholder: "e.g See Queen Lying"
          }} />

        <Input variant="modal" htmlFor="option3" label="Option 3" className="self-stretch p-3 before:placeholder:opacity-40"
          input={{
            type: "text",
            name: "option3",
            value: "",
            id: "option3",
            placeholder: "e.g See Queen Lying"
          }} />

        <Input variant="modal" htmlFor="option4" label="Option 4" className="self-stretch p-3 before:placeholder:opacity-40"
          input={{
            type: "text",
            name: "option4",
            value: "",
            id: "option4",
            placeholder: "e.g See Queen Lying"
          }} />

        <div className='flex flex-col justify-start items-center gap-8'>
          <div></div>
          <Button variant="modal" className="bg-black w-full">
            Add another question
          </Button>
          <Button variant="modal" className="bg-primary w-full">
            Create test
          </Button>
        </div>
      </form>
    </Forms >
  )
}

export default CreateTest