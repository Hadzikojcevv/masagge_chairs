"use client";
import HeadOn from "@/components/DetailsPage/HeadOn";
import Hero from "@/components/DetailsPage/Hero";
import Side from "@/components/DetailsPage/Side";
import Specs from "@/components/DetailsPage/Specs";
import ZeroGrav from "@/components/DetailsPage/ZeroGrav";
import ContactSection from "@/components/Shared/ContactSection";
import ProductCarousell from "@/components/Shared/ProductCarousell";
import PromoSection from "@/components/Shared/PromoSection";
import { massageChairs } from "@/data/Data";
import { MassageChairType } from "@/types/Types";
import { usePathname } from "next/navigation";

const DetailsPage = () => {
  const param = usePathname().split("/")[1];
  const chair: MassageChairType | undefined = massageChairs.find(
    (chair) => chair.name.toLowerCase() === param.toLowerCase()
  );

  if (chair) {
    return (
      <>
        <Hero chair={chair} />
        <HeadOn chair={chair} />
        <Side chair={chair} />
        <ZeroGrav chair={chair} />
        <Specs chair={chair} />
        <ProductCarousell />
        <ContactSection />
        <PromoSection />
      </>
    );
  }

  return "";
};

export default DetailsPage;
