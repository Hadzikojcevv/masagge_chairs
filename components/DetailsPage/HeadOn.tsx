import H1heading from "@/design_theme_items/H1heading";
import H2heading from "@/design_theme_items/H2heading";
import { MassageChairType } from "@/types/Types";
import Image from "next/image";

type HeadOnPropsType = {
  chair: MassageChairType;
};

const HeadOn = ({ chair }: HeadOnPropsType) => {
  return (
    <section className="headOnSection">
      <div className="headOnTop">
        <div className="headOnTopDesc">
          <H2heading color={"#808080"} text={chair.headOnSubTitle} />
          <h4 className="sideTitle">{chair.headOnTitle}</h4>
          <p className="headOnTopDescriptionParagraph">{chair.headOnDesc}</p>
        </div>
        <Image
          src={chair.gallery.headOn}
          alt={chair.name}
          width={500}
          height={700}
          className="headOnImage"
        />
      </div>
      <div className="headOnBottom">
        <h5 className="headOnBottomTitle"> {chair.headOnTitle2} </h5>
        <p className="headOnBottomParagraph headOnTopDescriptionParagraph">
          {chair.headOnDesc2}
        </p>
        <H2heading color={"#808080"} text={chair.headOnSubtitleBottom} />
      </div>
    </section>
  );
};

export default HeadOn;
