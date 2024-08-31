import { montserat } from "@/fonts/Fonts";
import Image from "next/image";

const Prenav = () => {
  return (
    <header>
      <div className="prenav">
        <a href="tel:" className={` ${montserat.className} phoneNum`}>
          Контакт: <span>+389 77 123 456</span>
        </a>
        <div className="socialWrapper">
          <a href="" target="_blank">
            <Image
              className="socialIconsPrenav"
              src={"/facebook.png"}
              alt="Facebook Icon"
              width={25}
              height={25}
            />
          </a>
          <a href="" target="_blank">
            <Image
              className="socialIconsPrenav"
              src={"/instagram.png"}
              alt="instagram Icon"
              width={25}
              height={25}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Prenav;
