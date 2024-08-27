import { massageChairs } from "@/data/Data";
import DarkChairSection from "@/design_theme_items/DarkChairSection";
import LightChairSection from "@/design_theme_items/LightChairSection";
import React from "react";

const Listing = () => {
  return (
    <section id="listing">
      {massageChairs.map((chair, idx) =>
        idx % 2 !== 0 ? (
          <DarkChairSection key={chair.id} chair={chair} />
        ) : (
          <LightChairSection key={chair.id} chair={chair} />
        )
      )}
    </section>
  );
};

export default Listing;
