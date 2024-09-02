import AboutSection from "@/components/Home/AboutSection";
import Hero from "@/components/Home/Hero";
import Listing from "@/components/Listing/Listing";
import ContactSection from "@/components/Shared/ContactSection";
import ProductCarousell from "@/components/Shared/ProductCarousell";
import PromoSection from "@/components/Shared/PromoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Listing />
      <AboutSection />
      <ProductCarousell />
      <ContactSection />
      <PromoSection />
    </>
  );
}
