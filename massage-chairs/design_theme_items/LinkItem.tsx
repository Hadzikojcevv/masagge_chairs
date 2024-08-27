import { montserat } from "@/fonts/Fonts";
import Link from "next/link";
import React from "react";

type Propstype = {
  path: string;
  text: string;
  variant: "dark" | "light";
};

const LinkItem = ({ path, text, variant = "light" }: Propstype) => {
  const style = {
    color: variant === "light" ? "#898989" : "#666666",
    borderColor: variant === "light" ? "#666666" : "#666666",
  };

  return (
    <Link href={path} className={`btn ${montserat.className}`} style={style}>
      {" "}
      {text}
    </Link>
  );
};

export default LinkItem;
