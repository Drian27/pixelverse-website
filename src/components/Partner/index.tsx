"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "Photobin.id", logo: "/logo-photobin.png" },
  { name: "Pipper Photobooth", logo: "/logo.png" },
  { name: "Photobin.id", logo: "/logo-photobin.png" },
  { name: "Photobin.id", logo: "/logo-photobin.png" },
  { name: "Photobin.id", logo: "/logo-photobin.png" },
  { name: "Photobin.id", logo: "/logo-photobin.png" },
];

const scrollingBrands = [...brands, ...brands, ...brands];

export default function Index() {
  return (
    <div className="bg-black py-10 text-center overflow-hidden">
      <h2 className="text-xl md:text-2xl font-bold text-white">Our Partner</h2>
      <div className="relative mt-6 flex w-full overflow-hidden">
        <motion.div
          className="flex space-x-10 items-center"
          animate={{ x: ["0%", "-40%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          style={{ display: "flex", minWidth: "150%" }}
        >
          {scrollingBrands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center text-lg font-semibold text-gray-300">
              <Image 
                src={brand.logo} 
                alt={brand.name} 
                width={100}
                height={100}
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
              />
              {brand.name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
