'use client'
import { ModalOpener } from "@/contexts/ModalOpenerContext";
import { montserat } from "@/fonts/Fonts";
import { useContext } from "react";
import Form from "./Form";
import Modal from "./Modal";
import ModalOpenerBtn from "./ModalOpenerBtn";

const ContactSection = () => {

  const {isOpened, closeModal} = useContext(ModalOpener)

  return (
    <>
    <section className="contactSection" id="contact">
      <div>
        <h3>
          Дали ви е потребна експертска препорака  за вашата идеална масажна
          фотелја?
        </h3>
        <p className={`${montserat.className} aboutDesc`}>
          {" "}
          Оставете го тоа на тимот на Масажери.мк
        </p>
      </div>
      <ModalOpenerBtn />
    </section>

    {isOpened && <Modal isOpen={isOpened} onClose={closeModal}><Form /></Modal>}
    
    </>
  );
};

export default ContactSection;
