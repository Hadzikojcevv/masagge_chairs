"use client";

import { montserat } from "@/fonts/Fonts";
import { useState } from "react";

type SingleColorDisplayerPropsType = {
  color: { colorCode: string; colorName: string };
};

const SingleColorDisplayer = ({ color }: SingleColorDisplayerPropsType) => {
  const [hovered, setHovered] = useState(false);

  const colorCircleStyles = {
    backgroundColor: `${color.colorCode}`,
  };

  return (
    <div
      className="color-circle-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="color-circle" style={colorCircleStyles}/>

      <div
        className={`${montserat.className} colorTooltip`}
        style={{
          visibility: hovered ? "visible" : "hidden"
        }}
      >
        {color.colorName}
      </div>
    </div>
  );
};

export default SingleColorDisplayer;
