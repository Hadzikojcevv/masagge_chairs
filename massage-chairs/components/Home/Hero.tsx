import { montserat } from "@/fonts/Fonts";
import ModalOpenerBtn from "../Shared/ModalOpenerBtn";
import Chevron from "./Chevron";

const Hero = () => {
  return (
    <section className="hero">
      <div className="w-full xl:w-2/5 heroContentWrapper">
        <h1 className="heroTitle">
          Масажери.<span style={{ color: "#A2D7EA" }}>мк</span>{" "}
        </h1>
        <p className={`${montserat.className} heroSubtitle`}>
          Внесете луксуз и релаксација во вашиот дом – со нашиот масажен стол,
          здравјето и удобноста се на дофат!
        </p>
        <ModalOpenerBtn />
      </div>
      <Chevron />
    </section>
  );
};

export default Hero;
