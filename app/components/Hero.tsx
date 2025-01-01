"use client"
import { ArrowRight } from "lucide-react"
import Cog from "@/assets/cog.png"
import cylinderImage from "@/assets/cylinder.png"
import noodleImage from "@/assets/noodle.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return( 
    <section 
      id="home" 
      ref={heroRef} 
      className="pt-8 pb-20 px-4 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="w-full md:w-[478px] md:pr-8">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts and celebrate your success
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowRight size={12}/>
              </button>
            </div>
          </div>

          {/* Right content */}
          <div className="w-full md:w-1/2 mt-20 md:mt-0 md:h-[648px] relative">
            <motion.img 
              src={Cog.src}
              alt="cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30]
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut"
              }}
              style={{
                rotate: 30
              }}
            />
            <motion.img 
              src={cylinderImage.src}
              alt="Decorative cylinder"
              className="hidden md:block -top-8 -left-32 md:absolute"
              width={220} 
              height={220} 
              style={{
                translateY
              }}
            />
            <motion.img 
              src={noodleImage.src}
              alt="Decorative noodle"
              className="hidden lg:block absolute top-[524px] left-[440px] rotate-[30deg]"
              width={220}
              style={{
                rotate: 30,
                translateY
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};