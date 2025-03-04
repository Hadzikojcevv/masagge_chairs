'use client'
import { MassageChairType } from "@/types/Types";
import React from "react";
import H1heading from "./H1heading";
import H2heading from "./H2heading";
import Image from "next/image";
import ListDescription from "./ListDescription";
import LinkItem from "./LinkItem";
import { motion } from "framer-motion";
import ChairAvailabilityDisplayer from "./ChairAvailabilityDisplayer";

type LightChairSectionPropsType = {
  chair: MassageChairType;
};

const LightChairSection = ({ chair }: LightChairSectionPropsType) => {

  
  return (
    <section className="lightSection">
      <Image
        src={chair.gallery.product}
        alt={chair.name}
        width={750}
        height={670}
        className="productImage productImageOpaciteRadialGradient"
      />
      <motion.div className="lightSectionDesc">
        <H1heading color={"#2B2B2B"} text={chair.name} />
        <H2heading color={"#808080"} text={chair.subTitle} />
        <ListDescription color={'dark'} items={chair.listItemDesc} />
        <ChairAvailabilityDisplayer availability={chair.availability} textColor="#808080"/>

        <LinkItem
        
          path={`/${chair.name.toLowerCase()}`}
          text={"Детали"}
          variant={"dark"}
        />
      </motion.div>
    </section>
  );
};

export default LightChairSection;
