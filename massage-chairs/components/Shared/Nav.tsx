"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MassageChairDropdown from "./MassageChairDropdown";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  if (isVisible) {
    return (
      <div className="navigation">
        {/* <Image src={"/logoWhite.png"} alt="Logo" width={100} height={100} /> */}
        <MassageChairDropdown />
      </div>
    );
  }

  return "";
};

export default Nav;
