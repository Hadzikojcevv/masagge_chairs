"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MassageChairDropdown from "./MassageChairDropdown";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
        
      if (window.scrollY > 100) {
        setIsVisible(false);
      }else {
        setIsVisible(true)
      }
    });

  }, [window.scrollY]);

  if (isVisible) {
    return (
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
        style={{
            zIndex: 888
        }}
      >
        <Link href={"#contact"}>Контакт</Link>
        <Image src={"/logoWhite.png"} alt="Logo" width={100} height={100} />
        <MassageChairDropdown />
      </motion.nav>
    );
  }

  return "";
};

export default Nav;
