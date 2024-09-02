"use client";
import { ModalOpener } from "@/contexts/ModalOpenerContext";
import { massageChairs } from "@/data/Data";
import { montserat } from "@/fonts/Fonts";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const MassageChairDropdown = () => {
  const pathname = usePathname();
  const [isOpen, setisOpen] = useState(false);
  const [areChairsVisible, setAreChairsVisible] = useState(false);
  const { openModal } = useContext(ModalOpener);
  const isHomePage = Boolean(pathname === "/");

  const lightStyles = {
    border: "1px solid rgba(65, 65, 65, 0.477)",
    color: "#e4e4e4",
    backgroundColor: "#a9a7a73a",
  };

  const darkStyles = {
    border: "1px solid rgba(193, 192, 192, 0.279)",
    color: "#323232",
    backgroundColor: "#eae6e639",
  };

  useEffect(() => {
    setisOpen(false);
    setAreChairsVisible(false);
  }, [pathname]);

  return (
    <div className="dropdownBtnWrapper">
      <button
        className="navButton"
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        Масажери
      </button>

      {isOpen && (
        <motion.ul
          style={isHomePage ? lightStyles : darkStyles}
          className="dropdownContentCont"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >

          {
            massageChairs.map((chair) => (
              <li key={chair.id}>
                <Link
                  href={`/${chair.name}`}
                  className={`${montserat.className}`}
                >
                  {chair.name}
                </Link>
              </li>
            ))}

          <li>
            <Link
              href={`/`}
              className={`${montserat.className}`}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Image
                src={isHomePage ? "/logoWhite.png" : "/logo.png"}
                alt="logo"
                width={100}
                height={70}
              />
            </Link>
          </li>
        </motion.ul>
      )}
    </div>
  );
};

export default MassageChairDropdown;
