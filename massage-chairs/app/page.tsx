import AboutSection from "@/components/Home/AboutSection";
import Hero from "@/components/Home/Hero";
import Listing from "@/components/Listing/Listing";
import ProductCarousell from "@/components/Shared/ProductCarousell";

export default function Home() {
  return (
    <>
      <Hero />
      <Listing />
      <AboutSection />
      <ProductCarousell />
    </>
  );
}
