import LinkItem from "@/design_theme_items/LinkItem";
import { montserat } from "@/fonts/Fonts";
import Chevron from "./Chevron";
import Nav from "../Shared/Nav";

const Hero = () => {

  return (
    <section className="hero">
      <div className="w-full xl:w-2/5 heroContentWrapper" >
        <h1>Масажери.<span style={{color: "#A2D7EA"}}>мк</span> </h1>
        <p className={`${montserat.className} heroSubtitle`}>Внесете луксуз и релаксација во вашиот дом – со нашиот масажен стол, здравјето и удобноста се на дофат!
        </p>
        <LinkItem path={"/"} text={"Детали"} variant={"light"} />
      </div>
      <Chevron />
      <Nav />
    </section>
  );
};

export default Hero;
