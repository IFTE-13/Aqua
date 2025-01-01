"use client"
import { useState } from 'react';
import Logo from '@/assets/logosaas.png'
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const pricing = document.getElementById('pricing');
    pricing?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
        <div className="inline-flex gap-1 items-center">
          <p className="text-white cursor-pointer">Get started for free</p>
          <ArrowRight size={12}/>
        </div>
      </div>
      <div className="py-5 relative bg-white/60 backdrop-blur-sm">
        <nav className="container mx-auto">
          <div className="flex items-center justify-between px-4">
            <Image src={Logo} alt="Logo" height={40} width={40} className='cursor-pointer'/>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-30"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? 
                <X size={30} className="text-black" /> :
                <Menu size={30} className="text-black" />
              }
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href={"#pricing"} onClick={scrollToPricing}>Pricing</Link>
              <Link href={"#footer"} onClick={scrollToFooter}>Contact</Link>
              <button className="btn btn-primary">Get Now</button>
            </nav>

            {/* Mobile Navigation with Blur Effect */}
            <div className={`
              absolute top-full left-0 right-0
              bg-white/70 backdrop-blur-md
              border-t border-gray-200/20
              shadow-lg md:hidden
              transition-all duration-300 ease-in-out
              ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
            `}>
              <nav className="flex flex-col items-center py-8 gap-6">
                <Link 
                  href={"#pricing"} 
                  onClick={scrollToPricing}
                  className="text-black/70 hover:text-black transition-colors text-lg"
                >
                  Pricing
                </Link>
                <Link 
                  href={"#footer"} 
                  onClick={scrollToFooter}
                  className="text-black/70 hover:text-black transition-colors text-lg"
                >
                  Contact
                </Link>
                <button className="btn btn-primary text-lg">Get Now</button>
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};