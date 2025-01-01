import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LogoSlider } from "./components/LogoSlider";
import { ProductShowcase } from "./components/ProductShowcase";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoSlider />
      <ProductShowcase />
    </>
  );
}