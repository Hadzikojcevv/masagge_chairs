import ListDescription from "@/design_theme_items/ListDescription";
import { MassageChairType } from "@/types/Types";
import Image from "next/image";
import ModalOpenerBtn from "../Shared/ModalOpenerBtn";
import SocialIconsLister from "./SocialIconsLister";
import ShareBtns from "./ShareBtns";

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
          <ShareBtns />
          <ListDescription items={chair.listItemDesc} color={"dark"} />
          <ModalOpenerBtn />
          <SocialIconsLister icons={chair.headOnIcons} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
