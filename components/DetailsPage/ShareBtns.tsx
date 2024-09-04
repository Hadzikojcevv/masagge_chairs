'use client'
import { montserat } from "@/fonts/Fonts";
import { useEffect, useState } from "react";
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

  const [url, setUrl] = useState('')

  
  useEffect(() => {

    if(window) {
      setUrl(window.location.href)
    }

  }, [])

  return (
    <div className="shareBtnsWrapper">
      <p className={`${montserat.className}`} style={{
        fontWeight: 300,
        fontSize: 14
      }}>Сподели: </p>
      <div className="shareIconsWrapper">
        <FacebookShareButton url={url.toString()} className="shareBtn">
          {" "}
          <FacebookIcon size={30} round={true} className="shareIcon"/>{" "}
        </FacebookShareButton>
        <FacebookMessengerShareButton
          url={url.toString()}
          appId=""
        >
          {" "}
          <FacebookMessengerIcon size={30} round={true} className="shareIcon"/>{" "}
        </FacebookMessengerShareButton>
        <ViberShareButton url={url.toString()}>
          <ViberIcon size={30} round={true} className="shareIcon"/>
        </ViberShareButton>
        <WhatsappShareButton url={url.toString()}>
          <WhatsappIcon size={30} round={true} className="shareIcon"/>
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default ShareBtns;
