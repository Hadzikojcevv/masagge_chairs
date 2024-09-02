import { montserat } from "@/fonts/Fonts";
import Image from "next/image";
import ModalOpenerBtn from "./ModalOpenerBtn";

const Footer = () => {
  return (
    <footer>
      <div className="topFooter">
        <div>
          <h3 className={`${montserat.className}`}>Испратете порака</h3>
          <p className={`${montserat.className}`}>Добијте понуда и препорака</p>
        </div>
        <ModalOpenerBtn />
      </div>
      <div className="bottomFooter">
        <div className="bottomFooterLeftSide">
          <p className={`${montserat.className}`}>©2024 Масажери.мк</p>
          <p className={`${montserat.className}`}>Столици за Масажа</p>
        </div>
        <div className="socialWrapper">
          <a href="/" target="_blank">
            <Image
              className="socialIconsPrenav"
              src={"/facebook.png"}
              alt="Facebook Icon"
              width={35}
              height={35}
            />
          </a>
          <a href="/" target="_blank">
            <Image
              className="socialIconsPrenav"
              src={"/instagram.png"}
              alt="instagram Icon"
              width={35}
              height={35}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
