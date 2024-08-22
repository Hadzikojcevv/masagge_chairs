import { montserat } from "@/fonts/Fonts";
import React from "react";

type PropsType = {
  color: string;
  text: string;
};

const H1heading = ({ color, text }: PropsType) => {
  const style = {
    fontWeight: 800,
    color: color,
    letterSpacing: -7
  };

  return (
    <h1
      className={`${montserat.className}`}
      style={style}
    >
      {text}
    </h1>
  );
};

export default H1heading;
