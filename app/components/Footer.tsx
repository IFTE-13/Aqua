"use client"
import Image from "next/image";
import logo from "../../assets/logosaas.png"
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricing = document.getElementById("pricing");
    pricing?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const home = document.getElementById("home");
    home?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-black text-[#BCBCBC] text-sm text-center py-10">
      <div className="container mx-auto">
        <div className="inline-flex before:rounded-full relative before:content-[''] before:top-0.5 before:bottom-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src={logo}
            height={40}
            width={40}
            alt="logo"
            className="relative"
          />
        </div>
        <nav className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <Link href={"#home"} onClick={scrollToHome}>Home</Link>
          <Link href={"#pricing"} onClick={scrollToPricing}>Pricing</Link>
        </nav>
        <div className="flex justify-center gap-8 mt-6">
          <Twitter />
          <Facebook />
          <Instagram />
          <Youtube />
          <Linkedin />
        </div>
        <p className="mt-6">&copy; 2025; All rights reserverd by <span className="text-[#86efac]"><Link href={"https://github.com/IFTE-13"} target="_blank">IFTE-13</Link></span></p>
      </div>
    </footer>
  );
};