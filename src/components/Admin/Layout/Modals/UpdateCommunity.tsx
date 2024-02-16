import Input from "../../../UI/Input";
import Forms from "../../..//UI/Forms";
import Button from "../../../UI/Button";
import { IoClose } from "react-icons/io5";

interface UpdateCommunityProps {
  onClose: (data: any) => React.MouseEventHandler<HTMLButtonElement> | void;
}

const UpdateCommunity = (props: UpdateCommunityProps) => {
  return (
    <Forms onClose={props.onClose} className="gap-[27px] h-max-screen">
      <div className="inline-flex justify-between items-center">
        <h1 className=" text-black font-Inter text-xl sm:text-2xl font-bold leading-normal">
          Update community link
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
        <Input variant="modal" htmlFor="addlink" label="Add link to general slack community" className="self-stretch p-3"
          input={{
            type: "text",
            name: "addlink",
            value: "",
            id: "title",
          }} />

        <div className='flex flex-col justify-start items-center gap-8'>
          <div></div>
          <Button variant="modal" className="bg-black w-full">
            Update
          </Button>
        </div>
      </form>
    </Forms >
  )
}

export default UpdateCommunity