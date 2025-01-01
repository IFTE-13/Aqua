"use client"
import acme from "../../assets/logo-acme.png"
import quantum from "../../assets/logo-quantum.png"
import echo from "../../assets/logo-echo.png"
import celestial from "../../assets/logo-celestial.png"
import pulse from "../../assets/logo-pulse.png"
import apex from "../../assets/logo-apex.png"
import Image from "next/image"
import { motion } from "framer-motion"

export const LogoSlider = () => {
  return (
    <div className="py-8 bg-white md:py-12">
      <div className="container mx-auto">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div 
            className="flex justify-evenly flex-none"
            animate={{
              translateX: "-48%"
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            >
            <Image 
              src={acme}
              alt="acme"
              className="logo-slider-image"
            />
            <Image 
              src={quantum}
              alt="quantum"
              className="logo-slider-image"
            />
            <Image 
              src={echo}
              alt="echo"
              className="logo-slider-image"
            />
            <Image 
              src={celestial}
              alt="celestial"
              className="logo-slider-image"
            />
            <Image 
              src={pulse}
              alt="pulse"
              className="logo-slider-image"
            />
            <Image 
              src={apex}
              alt="pulse"
              className="logo-slider-image"
            />
            <Image 
              src={acme}
              alt="acme"
              className="logo-slider-image"
            />
            <Image 
              src={quantum}
              alt="quantumLogo"
              className="logo-slider-image"
            />
            <Image 
              src={echo}
              alt="echo"
              className="logo-slider-image"
            />
            <Image 
              src={celestial}
              alt="celestial"
              className="logo-slider-image"
            />
            <Image 
              src={pulse}
              alt="pulse"
              className="logo-slider-image"
            />
            <Image 
              src={apex}
              alt="pulse"
              className="logo-slider-image"
            />
            <Image 
              src={acme}
              alt="acme"
              className="logo-slider-image"
            />
            <Image 
              src={quantum}
              alt="quantumLogo"
              className="logo-slider-image"
            />
            <Image 
              src={echo}
              alt="echo"
              className="logo-slider-image"
            />
            <Image 
              src={celestial}
              alt="celestial"
              className="logo-slider-image"
            />
            <Image 
              src={pulse}
              alt="pulse"
              className="logo-slider-image"
            />
            <Image 
              src={apex}
              alt="pulse"
              className="logo-slider-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
