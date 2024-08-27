import { massageChairs } from "@/data/Data";
import { montserat } from "@/fonts/Fonts";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const MassageChairDropdown = () => {
  const [isOpen, setisOpen] = useState(false);

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
          className="dropdownContentCont"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          {massageChairs.map((chair) => (
            <li key={chair.id}>
              <Link
                href={`/${chair.name}`}
                className={`${montserat.className}`}
              >
                {chair.name}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default MassageChairDropdown;
