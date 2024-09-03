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
import { Metadata } from "next";
import { redirect } from "next/navigation";

type MetadataFuncProps = {
  params: {
    title: string;
  };
};

export const generateMetadata = ({ params }: MetadataFuncProps): Metadata => {
  const chair: MassageChairType | undefined = massageChairs.find(
    (chair) => chair.name.toLowerCase() === params.title.toLowerCase()
  );

  return {
    title: chair?.name,
    description: chair?.headOnDesc,
  };
};

const DetailsPage = ({ params }: { params: { title: string } }) => {
  const param = params.title;
  const chair: MassageChairType | undefined = massageChairs.find(
    (chair) => chair.name.toLowerCase() === param.toLowerCase()
  );

  if (!chair) redirect("/");

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
