import H2heading from "@/design_theme_items/H2heading";
import { MassageChairType } from "@/types/Types";
import Image from "next/image";

type ZeroGravPropsType = {
  chair: MassageChairType;
};

const ZeroGrav = ({ chair }: ZeroGravPropsType) => {
  return (
    <section className="zeroGrav">
      <div className="zeroGravTitles">
        <H2heading color={"#808080"} text={chair.zeroGravSubTitle} />
        <h4 className="sideTitle">{chair.zeroGravtitle}</h4>
      </div>

      <Image
        src={chair.gallery.zeroGravity}
        alt={chair.name}
        width={700}
        height={700}
      />
      <p className="headOnTopDescriptionParagraph zeroGravParagraph">{chair.zeroGravDesc}</p>
    </section>
  );
};

export default ZeroGrav;
