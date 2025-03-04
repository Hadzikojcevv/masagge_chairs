import { montserat } from "@/fonts/Fonts";
import { color } from "framer-motion";
import React from "react";

type ChairAvailabilityDisplayerPropsType = {
  availability: boolean;
  textColor?: string
};

const ChairAvailabilityDisplayer = ({
  availability,
  textColor = '#C2C2C2'
}: ChairAvailabilityDisplayerPropsType) => {
  const style = {
    backgroundColor: availability ? "#0DD25C" : "#ddbc80",
  };

  return (
    <div>
      <p className={`${montserat.className} `} style={{textAlign: 'center', color: textColor, marginBottom: '0.3vh'}}>
        Достапност: 
      </p>
      <p className={`${montserat.className} availability`} style={style}>
        {availability ? "Достапно Веднаш!" : "По Нарачка"}
      </p>
    </div>
  );
};

export default ChairAvailabilityDisplayer;
