import React from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  onClose?: (data: any) => React.MouseEventHandler<HTMLButtonElement> | void;
  children?: React.ReactNode;
}

const Backdrop = (props: ModalProps) => {
  return (
    <div className="fixed h-[100vh] top-0 left-0 z-20 w-full bg-black/95" onClick={props.onClose}></div>
  )
}

const ModalOverlay = (props: ModalProps) => {
  return (
    <div className="flex flex-col relative items-center h-[2vh] z-30">
      {props.children}
    </div>
  )
}


const portalElement = document.getElementById("overlays") as HTMLDivElement

const Modal = (props: ModalProps) => {
  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}

    </>
  )
}

export default Modal