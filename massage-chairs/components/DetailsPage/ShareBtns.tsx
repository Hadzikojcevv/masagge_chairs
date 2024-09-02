import { montserat } from "@/fonts/Fonts";
import { useRouter } from "next/navigation";
import {
    FacebookMessengerShareButton,
    FacebookShareButton,
    ViberShareButton,
    WhatsappShareButton
} from "react-share";

import {
    FacebookIcon,
    FacebookMessengerIcon,
    ViberIcon,
    WhatsappIcon
} from "react-share";

const ShareBtns = () => {
  const router = useRouter();


  return (
    <div className="shareBtnsWrapper">
      <p className={`${montserat.className}`} style={{
        fontWeight: 300,
        fontSize: 14
      }}>Сподели: </p>
      <div className="shareIconsWrapper">
        <FacebookShareButton url="http://localhost:3000/bl-h530">
          {" "}
          <FacebookIcon size={30} round={true} className="shareIcon"/>{" "}
        </FacebookShareButton>
        <FacebookMessengerShareButton
          url="http://localhost:3000/bl-h530"
          appId=""
        >
          {" "}
          <FacebookMessengerIcon size={30} round={true} className="shareIcon"/>{" "}
        </FacebookMessengerShareButton>
        <ViberShareButton url="http://localhost:3000/bl-h530">
          <ViberIcon size={30} round={true} className="shareIcon"/>
        </ViberShareButton>
        <WhatsappShareButton url="http://localhost:3000/bl-h530">
          <WhatsappIcon size={30} round={true} className="shareIcon"/>
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default ShareBtns;
