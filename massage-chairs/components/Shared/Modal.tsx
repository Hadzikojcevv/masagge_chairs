import { ModalOpener } from "@/contexts/ModalOpenerContext";
import { montserat } from "@/fonts/Fonts";
import Image from "next/image";
import { useContext, useEffect } from "react";

type ModalPropsType = {
  children: any;
  isOpen: boolean,
  onClose: () => void
};

const Modal = ({ children, isOpen, onClose }: ModalPropsType) => {

    const {isOpened, openModal, closeModal} = useContext(ModalOpener)

    useEffect(() => {
        if (isOpened) {
          document.body.style.overflow = 'hidden'; // Lock background scroll
        } else {
          document.body.style.overflow = 'auto'; // Unlock background scroll
        }
    
        return () => {
          document.body.style.overflow = 'auto'; // Cleanup on component unmount
        };
      }, [isOpened]);
    
      if (!isOpened) return null;

  return (
    <div className="modal" onClick={(e) => {
        closeModal()

    }} >
      <div className="innerModal" onClick={(e) => {
        e.stopPropagation()

    }} >
        <button className="modalBtn" onClick={closeModal}>
          <Image src={"/crossWhite.png"} alt="closeBtn" width={30} height={30} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
