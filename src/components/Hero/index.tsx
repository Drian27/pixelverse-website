"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 50; // Mengatur intensitas pergerakan
    const y = ((clientY - top) / height - 0.5) * 50;

    setOffsetX(x);
    setOffsetY(y);
  };

  return (
    <div 
      className="relative min-h-screen flex justify-center bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="grid grid-flow-row grid-cols-1 mb-10 relative w-full">
        <div 
          className="absolute inset-0 transition-transform duration-300"
          style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
        >
          <Image
            src="/herosection.png"
            alt="Background"
            width={2600}
            height={2400}
            quality={100}
            className="h-full lg:h-[815px] w-full object-cover"
            priority
          />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-white bg-opacity-50 p-8 rounded-lg">
          <button className="mt-[290px] md:mt-[340px] px-8 py-3 border-2 border-white text-white font-semibold text-lg rounded-full transition hover:bg-white hover:text-black">
            Start Shooting
          </button>

          <p className="mt-4 text-lg md:text-xl font-medium text-gray-200 max-w-xl text-center">
            Experience instant photography like never before. Just click, pose, and keep your memories alive forever.
          </p>
        </div>
      </div>
    </div>
  );
}
