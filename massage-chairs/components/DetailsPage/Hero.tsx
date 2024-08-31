import ListDescription from "@/design_theme_items/ListDescription";
import { MassageChairType } from "@/types/Types";
import Image from "next/image";
import React from "react";
import SocialIconsLister from "./SocialIconsLister";

type HeroPropsType = {
  chair: MassageChairType;
};

const Hero = ({ chair }: HeroPropsType) => {
  return (
    <section className="detailsHero">
      <h1 className="detailsHeroTitle">{chair.name}</h1>
      <div className="contentWrapper">
        <Image
          src={chair.gallery.detailsHero}
          alt={chair.name}
          width={600}
          height={700}
          className="detailsHeroImage"
        />

        <div className="contentRight">
          <h3>{chair.subTitle}</h3>
          <ListDescription items={chair.listItemDesc} color={"dark"} />
          <button className="btn">Контакт</button>
          <SocialIconsLister icons={chair.headOnIcons} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
