import React from "react";
import SingleColorDisplayer from "./SingleColorDisplayer";
import { montserat } from "@/fonts/Fonts";

type ColorVariantsPropsType = {
  colors: { colorCode: string; colorName: string }[];
};

const ColorVariants = ({ colors }: ColorVariantsPropsType) => {
  return (
    <div className="colorVariantsWrapper">
      <p className={`${montserat.className} small-desc`}>Варијанти/Бои:</p>
      <div style={{display: 'flex', gap: 5}}>
        {colors.map((color) => (
          <SingleColorDisplayer key={color.colorName} color={color} />
        ))}
      </div>
    </div>
  );
};

export default ColorVariants;
