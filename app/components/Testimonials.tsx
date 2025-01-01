"use client"
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { motion } from "framer-motion"
import React from "react";

const testimonials = [
  {
    text: "As a hiking enthusiast, I've tried countless water bottles, but this flask's durability and temperature retention are simply unmatched.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Since switching to this water bottle, our family has completely eliminated single-use plastics. The kids love the designs too!",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "The perfect gym companion! Keeps my water ice-cold throughout my entire workout session.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how long this bottle keeps my drinks hot. Perfect for my morning coffee during winter hikes.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "As a yoga instructor, staying hydrated is crucial. This bottle's sleek design and large capacity mean I can focus on teaching without constant refills.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The leak-proof design and premium materials make this the most reliable water bottle I've ever owned.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Our entire office switched to these bottles for our sustainability initiative. Everyone loves the premium feel and eco-friendly approach.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "Whether it's hot tea or cold water, this flask maintains the temperature perfectly. A game-changer for my daily commute.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "The thoughtful design and sustainable materials align perfectly with my eco-conscious lifestyle. Plus, it looks stunning!",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0,3);
const secondColumn = testimonials.slice(3,6);
const thirdColumn = testimonials.slice(6,9);

const TestimonialsColumn = (props: {className?: string; testimonials: typeof testimonials; duration?: number}) => (
  <div className={props.className}>
    <motion.div 
      className="flex flex-col gap-6 pb-6"
      animate={{
        translateY: '-50%'
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
        duration: props.duration || 10
      }}
      >
            {[... new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {props.testimonials.map(({ text, imageSrc, name, username }) => (
                  <div className="card" key={text}>
                    <div>{text}</div>
                    <div className="flex items-center gap-2 mt-5">
                      <Image
                        src={imageSrc}
                        alt={name}
                        width={40}
                        height={40}
                        className="rounded-full"
                        />
                        <div className="flex flex-col">
                          <div className="font-medium tracking-tight leading-5">{name}</div>
                          <div className="leading-5 tracking-tight">{username}</div>
                        </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
  </div>
)

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-description mt-5">
            From intitive design to powerful features, our product has become an essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center mt-10 gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] overflow-hidden max-h-[738px]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn 
            testimonials={secondColumn} 
            className="hidden md:block"
            duration={29}
            />
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            className="hidden lg:block"
            duration={17}
            />
        </div>
      </div>
    </section>
  );
};
