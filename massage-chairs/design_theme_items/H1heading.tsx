import { montserat } from "@/fonts/Fonts";
import React from "react";

type PropsType = {
  color: string;
  text: string;
};

const H1heading = ({ color = "white", text }: PropsType) => {
  const style = {
    color: color,
    fontWeight: 800,
  };

  return (
    <h2 className={`${montserat.className}`} style={style}>
      {text}
    </h2>
  );
};

export default H1heading;
