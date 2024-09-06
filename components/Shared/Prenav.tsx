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
          <a href="tel:+38975477444" className={` ${montserat.className} phoneNum`}>
            Контакт: <span>+389 075 477 444</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61564838936840" target="_blank">
            <Image
              className="socialIconsPrenav"
              src={"/facebook.png"}
              alt="Facebook Icon"
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
