"use client";
import { ModalOpener } from "@/contexts/ModalOpenerContext";
import { montserat } from "@/fonts/Fonts";
import React, { useContext } from "react";

const ModalOpenerBtn = () => {
  const { openModal } = useContext(ModalOpener);

  const btnStyles = {
    border: "1px solid #898989",
    fontSize: "18px",
    color: "#898989",
  };

  return (
    <button
      className={`btn ${montserat.className}`}
      style={btnStyles}
      onClick={openModal}
    >
      {" "}
      Контакт{" "}
    </button>
  );
};

export default ModalOpenerBtn;
