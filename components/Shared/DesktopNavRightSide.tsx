"use client";
import Image from "next/image";
import Link from "next/link";
import MassageChairDropdown from "./MassageChairDropdown";
import { useContext } from "react";
import { ModalOpener } from "@/contexts/ModalOpenerContext";

const DesktopNavRightSide = () => {
  const { openModal } = useContext(ModalOpener);

  return (
    <div className="navigationDesktop">
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="Logo" width={80} height={40} />
      </Link>
      <Link href={"/"}>
        Почетна
      </Link>
      <button onClick={openModal}>Контакт</button>
      <MassageChairDropdown />
    </div>
  );
};

export default DesktopNavRightSide;
