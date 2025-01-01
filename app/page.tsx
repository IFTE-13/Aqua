import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LogoSlider } from "./components/LogoSlider";
import { Pricing } from "./components/Pricing";
import { ProductShowcase } from "./components/ProductShowcase";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoSlider />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
    </>
  );
}