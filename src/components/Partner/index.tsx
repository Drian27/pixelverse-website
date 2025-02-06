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

const scrollingBrands = [...brands, ...brands];

export default function PartnersSection() {
  return (
    <div className="bg-white py-10 text-center overflow-hidden">
      <h2 className="text-sm md:text-lg font-bold text-[#ED1F8B] uppercase tracking-wide">
        Our Partners
      </h2>

      <div className="relative mt-6 flex w-full overflow-hidden">
        <motion.div
          className="flex space-x-6 items-center flex-nowrap"
          animate={{ x: ["0%", "-40%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {scrollingBrands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-32 h-20 md:w-36 md:h-24 lg:w-40 lg:h-28 border border-gray-300 bg-gray-400 p-4"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={80}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
