"use client";
import { inter, montserat } from "@/fonts/Fonts";
import { MassageChairType } from "@/types/Types";
import { useState } from "react";
import SpecsTableContent from "./SpecsTableContent";
import SpecsFunctionsContent from "./SpecsFunctionsContent";

type SpecsPropsType = {
  chair: MassageChairType;
};

const Specs = ({ chair }: SpecsPropsType) => {
  const [specsType, setSpecsType] = useState<"info" | "functions" | "techSpecs">(
    "info"
  );

  return (
    <section className="specsSection">
      <h3>Спецификации</h3>

      <div className="specsTable">
        <div className="btnWrapper">
          <div
          style={{
            color: specsType === 'info' ? "#BABABA" : "",
            backgroundColor: specsType === 'info' ? "#2B2A2A" : ""
          }}
            className={`${inter.className} tableBtn`}
            onClick={() => {
              setSpecsType("info");
            }}
          >
            <h6>Инфо</h6>
          </div>
          <div
          style={{
            color: specsType === 'functions' ? "#BABABA" : "",
            backgroundColor: specsType === 'functions' ? "#2B2A2A" : ""
          }}
            className={`${inter.className} tableBtn`}
            onClick={() => {
              setSpecsType("functions");
            }}
          >
            <h6>Функции</h6>
          </div>
          <div
          style={{
            color: specsType === 'techSpecs' ? "#BABABA" : "",
            backgroundColor: specsType === 'techSpecs' ? "#2B2A2A" : ""
          }}
            className={`${inter.className} tableBtn`}
            onClick={() => {
              setSpecsType("techSpecs");
            }}
          >
            <h6>
              Технички <br /> Спецификации
            </h6>
          </div>
        </div>
        
        {specsType === 'info' && <SpecsTableContent content={chair.specs.info}/>}
        {specsType === 'functions' && <SpecsFunctionsContent content={chair.specs.functions}/>}
        {specsType === 'techSpecs' && <SpecsFunctionsContent content={chair.specs.techSpecs}/>}


      </div>
    </section>
  );
};

export default Specs;
