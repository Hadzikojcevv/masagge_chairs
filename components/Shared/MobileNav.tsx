"use client";
import { ModalOpener } from "@/contexts/ModalOpenerContext";
import { massageChairs } from "@/data/Data";
import { montserat } from "@/fonts/Fonts";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const MobileNav = () => {
  const { openModal } = useContext(ModalOpener);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [areChairsVisible, seAreChairsVisible] = useState(false);
  const path = usePathname()

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden"; // Lock background
    } else {
      document.body.style.overflow = "auto"; // Unlock background
    }

    // Clean up to avoid side effects when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isNavOpen]);

  useEffect(() => {
    
    setIsNavOpen(false)

  }, [path])

  return (
    <div className="mobileNav">
      <button onClick={toggleMenu}>
        <Image src={"/barsDark.png"} alt="Btn" width={30} height={30} />
      </button>

      {isNavOpen && (
        <div className={`mobile-menu ${isNavOpen ? "open" : ""}`}>
          <div className="close-icon" onClick={toggleMenu}>
            &times;
          </div>
          <ul className="menu-items">
            <li>
              <a href="/" className={`${montserat.className}`}>
                Почетна
              </a>
            </li>
            <li>
              <button onClick={openModal}>Контакт</button>
            </li>
            <li >
              <button onClick={() => {
                seAreChairsVisible(!areChairsVisible)
              }} style={{display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '5px'}}>
                <span>Масажери</span>
              <Image src={areChairsVisible ? '/chevronUp.png' : "/chevronDown.png"} alt="Chevron" width={20} height={ 20} /></button>
            </li>
            {areChairsVisible &&
              massageChairs.map((chair) => (
                <li key={chair.id}>
                  <Link href={`/${chair.name}`} className={`${montserat.className}`} style={{fontSize: '14px'}}> {chair.name} </Link>
                </li>
              ))}
          </ul>
          <Image src={"/logoWhite.png"} alt="Btn" width={170} height={170} />
        </div>
      )}
    </div>
  );
};

export default MobileNav;
