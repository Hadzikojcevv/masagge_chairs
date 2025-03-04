"use client";
import { MassageChairType } from "@/types/Types";
import React from "react";
import H1heading from "./H1heading";
import H2heading from "./H2heading";
import Image from "next/image";
import ListDescription from "./ListDescription";
import LinkItem from "./LinkItem";
import { motion } from "framer-motion";
import ChairAvailabilityDisplayer from "./ChairAvailabilityDisplayer";

type DarkChairSectionPropsType = {
  chair: MassageChairType;
};

const DarkChairSection = ({ chair }: DarkChairSectionPropsType) => {
  return (
    <section className="darkSection">
      <motion.div className="darkSectionDesc">
        <H1heading color={"#F8F8F8"} text={chair.name} />
        <H2heading color={"#C2C2C2"} text={chair.subTitle} />
        <ListDescription color="light" items={chair.listItemDesc} />
        <ChairAvailabilityDisplayer availability={chair.availability} />

        <LinkItem
          path={`/${chair.name.toLowerCase()}`}
          text={"Детали"}
          variant={"light"}
        />
      </motion.div>

      <Image
        src={chair.gallery.product}
        alt={chair.name}
        width={650}
        height={670}
        className="productImage productImageOpaciteRadialGradient"
      />
    </section>
  );
};

export default DarkChairSection;
