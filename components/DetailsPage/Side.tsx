import H2heading from "@/design_theme_items/H2heading";
import { MassageChairType } from "@/types/Types";
import Image from "next/image";
import SocialIconsLister from "./SocialIconsLister";

type SidePropsType = {
  chair: MassageChairType;
};

const Side = ({ chair }: SidePropsType) => {
  return (
    <section className="sideSection">
      <div className="sideTop">
        <H2heading color={"#808080"} text={chair.sideSubTitle} />
        <h4 className="sideTitle">{chair.sideTitle}</h4>

        <div className="sideTopDescWrapper">
          <Image
            src={chair.gallery.side}
            alt={chair.name}
            width={400}
            height={400}
            className="productImageOpaciteRadialGradient"
          />
          <div className="sideTopDescWrapperRightSide">
            <p className="headOnTopDescriptionParagraph sideDescriptionTop">{chair.sideDesc}</p>
            <SocialIconsLister icons={chair.sideIcons} />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Side;
