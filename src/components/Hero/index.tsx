"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 70;
    const y = ((clientY - top) / height - 0.5) * 70;

    setOffsetX(x);
    setOffsetY(y);
  };

  return (
    <div
      className="relative min-h-screen flex justify-center bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
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

      {/* Animasi Images */}
      <Image
        src="/animasi-2.png"
        alt="Animasi Image 1"
        width={400}
        height={400}
        quality={100}
        className="absolute top-[10%] left-[5%] lg:w-[300px] lg:h-auto"
        style={{ transform: `translate(${offsetX / 2}px, ${offsetY / 2}px)` }}
      />

      <Image
        src="/animasi-4.png"
        alt="Animasi Image 2"
        width={400}
        height={200}
        quality={100}
        className="absolute bottom-[15%] right-[10%] lg:w-[300px] lg:h-auto"
        style={{ transform: `translate(${offsetX / 3}px, ${offsetY / 3}px)` }}
      />

      <Image
        src="/animasi-6.png"
        alt="Animasi Image 2"
        width={400}
        height={200}
        quality={100}
        className="absolute bottom-[35%] right-[10%] lg:w-[200px] lg:h-auto"
        style={{ transform: `translate(${offsetX / 3}px, ${offsetY / 3}px)` }}
      />

      <Image
        src="/animasi-11.png"
        alt="Animasi Image 3"
        width={250}
        height={250}
        quality={100}
        className="absolute top-[calc(-5%+250px)] left-[calc(5%+250px)] lg:w-[200px] lg:h-auto"
        style={{ transform: `translate(${offsetX / 4}px, ${offsetY / 4}px)` }}
      />

      <Image
        src="/animasi-10.png"
        alt="Overlay Image 3"
        width={250}
        height={250}
        quality={100}
        className="absolute top-[28%] right-[26%] lg:w-[200px] lg:h-auto"
        style={{ transform: `translate(${offsetX / 4}px, ${offsetY / 4}px)` }}
      />

      <Image
        src="/animasi-5.png"
        alt="Overlay Image Bottom Left"
        width={250}
        height={250}
        quality={100}
        className="absolute bottom-[14%] left-[12%] lg:w-[200px] lg:h-auto"
        style={{ transform: `translate(${offsetX / 4}px, ${offsetY / 4}px)` }}
      />

      <Image
        src="/animasi-8.png"
        alt="Overlay Image Bottom Center"
        width={250}
        height={250}
        quality={100}
        className="absolute bottom-[15%] left-[40%] transform -translate-x-1/2 lg:w-[200px] lg:h-auto"
        style={{ transform: `translate(${offsetX / 4}px, ${offsetY / 4}px)` }}
      />

      <Image
        src="/animasi-7.png"
        alt="Overlay Image Bottom Center"
        width={250}
        height={250}
        quality={100}
        className="absolute bottom-[10%] left-[60%] transform -translate-x-1/2 lg:w-[200px] lg:h-auto"
        style={{ transform: `translate(${offsetX / 4}px, ${offsetY / 4}px)` }}
      />

      <Image
        src="/animasi-9.png"
        alt="Overlay Image Bottom Center"
        width={250}
        height={250}
        quality={100}
        className="absolute bottom-[10%] left-[27%] transform -translate-x-1/2 lg:w-[200px] lg:h-auto"
        style={{ transform: `translate(${offsetX / 4}px, ${offsetY / 4}px)` }}
      />

      {/* Text & Button */}
      <div className="relative z-10 flex flex-col items-center text-white bg-opacity-50 p-8 rounded-lg">
        <button className="mt-[290px] md:mt-[340px] px-8 py-3 border-2 border-white text-white font-semibold text-lg rounded-full transition hover:bg-white hover:text-black">
          Start Shooting
        </button>

        <p className="mt-4 text-lg md:text-xl font-medium text-gray-200 max-w-xl text-center">
          Experience instant photography like never before. Just click, pose,
          and keep your memories alive forever.
        </p>
      </div>
    </div>
  );
}
