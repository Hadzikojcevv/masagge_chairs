import { montserat } from "@/fonts/Fonts";
import { color } from "framer-motion";
import React from "react";

type ChairAvailabilityDisplayerPropsType = {
  availability: boolean;
};

const ChairAvailabilityDisplayer = ({
  availability,
}: ChairAvailabilityDisplayerPropsType) => {
  const style = {
    backgroundColor: availability ? "#0DD25C" : "#ddbc80",
  };

  return (
    <p className={`${montserat.className} availability`} style={style}>
      {availability ? "Достапно Веднаш!" : "По Нарачка"}
    </p>
  );
};

export default ChairAvailabilityDisplayer;
