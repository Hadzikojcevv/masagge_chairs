import { montserat } from "@/fonts/Fonts";
import Image from "next/image";
import MobileNav from "./MobileNav";
import MassageChairDropdown from "./MassageChairDropdown";
import Link from "next/link";
import DesktopNavRightSide from "./DesktopNavRightSide";

const Prenav = () => {
  return (
    <header>
      <div className="prenav">
        <DesktopNavRightSide />
        <Link href={"/"} className="mobileLogo">
          <Image src={"/logo.png"} alt="Logo" width={60} height={40} />
        </Link>

        <div className="socialWrapper">
          <a href="tel:" className={` ${montserat.className} phoneNum`}>
            Контакт: <span>+389 77 123 456</span>
          </a>
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
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Prenav;