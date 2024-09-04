"use client";
import { montserat } from "@/fonts/Fonts";
import Image from "next/image";
import { useEffect, useState } from "react";

const PromoTop = () => {
  const titles = ["ЛУКСУЗ", "РЕЛАКСАЦИЈА", "УЖИВАЊЕ"];
  const [title, setTitle] = useState("");

  useEffect(() => {
    let count = 0;

    setTitle(titles[count]);

    const interval = setInterval(() => {
      if (count === 2) {
        count = 0;

        setTitle(titles[count]);
      } else {
        count += 1;
        setTitle(titles[count]);
      }
    }, 2000);
  }, []);

  return (
    <section className="promoTop">
      <Image src={"/logo.png"} alt="Logo" width={300} height={200} />

      {/* <div className="promoTopHeadingWrapper"> */}
        {/* <h2 style={{ fontWeight: 900 }} className={`  promoTopHeading`}>
          ЛУКСУЗ
        </h2> */}
        <h2 style={{ fontWeight: 900 }} className={`  promoTopHeading`}>
          {title}
        </h2>
        <p className={`${montserat.className} aboutDesc`}>Нека вашето здравје биде ваш приоритет.</p>

        {/* <h2 style={{ fontWeight: 900 }} className={`  promoTopHeading`}>
          УЖИВАЊЕ
        </h2> */}
      {/* </div> */}
    </section>
  );
};

export default PromoTop;
