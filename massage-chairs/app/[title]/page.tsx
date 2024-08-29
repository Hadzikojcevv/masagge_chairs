"use client";
import HeadOn from "@/components/DetailsPage/HeadOn";
import Hero from "@/components/DetailsPage/Hero";
import Side from "@/components/DetailsPage/Side";
import ZeroGrav from "@/components/DetailsPage/ZeroGrav";
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
      </>
    );
  }

  return "";
};

export default DetailsPage;
