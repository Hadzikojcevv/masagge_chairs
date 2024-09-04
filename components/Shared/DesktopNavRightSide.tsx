"use client";
import Image from "next/image";
import Link from "next/link";
import MassageChairDropdown from "./MassageChairDropdown";
import { useContext } from "react";
import { ModalOpener } from "@/contexts/ModalOpenerContext";
import { montserat } from "@/fonts/Fonts";
import { usePathname } from "next/navigation";

const DesktopNavRightSide = () => {
  const { openModal } = useContext(ModalOpener);
  const pathname = usePathname()

  return (
    <div className={`navigationDesktop ${montserat.className}`}>
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="Logo" width={80} height={40} />
      </Link>

      {pathname !== '/' && <Link href={"/"}>Почетна</Link>}
      
      <MassageChairDropdown />

      <button onClick={openModal}>Контакт</button>
    </div>
  );
};

export default DesktopNavRightSide;
