import AboutSection from "@/components/Home/AboutSection";
import Hero from "@/components/Home/Hero";
import Listing from "@/components/Listing/Listing";
import ContactSection from "@/components/Shared/ContactSection";
import ProductCarousell from "@/components/Shared/ProductCarousell";
import PromoSection from "@/components/Shared/PromoSection";
import PromoTop from "@/components/Shared/PromoTop";

export default function Home() {
  return (
    <>
      <Hero />
      <Listing />
      <PromoTop />
      <AboutSection />
      <ProductCarousell />
      <ContactSection />
      <PromoSection />
    </>
  );
}
