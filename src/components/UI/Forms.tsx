import Modal from "./Modal";

interface FormProps {
  onClose: (data: any) => React.MouseEventHandler<HTMLButtonElement> | void;
  children: React.ReactNode;
  className: string
}

const Forms = (props: FormProps) => {
  return (
    <Modal onClose={props.onClose}>
      <section className={`flex flex-col fixed w-full overflow-y-scroll overflow-x-hidden px-4 py-6 sm:p-14 md:p-[60px] max-w-[300px] sm:max-w-[400px] md:max-w-[472px] my-5 rounded-2xl bg-white border border-[grey]/30 shadow-2xl shadow-[#000000d]
      ${props.className}
      `}>
        {props.children}
      </section>
    </Modal>
  )
}

export default Forms