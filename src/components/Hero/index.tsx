"use client";

import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex justify-center bg-black">
      <div className="grid grid-flow-row grid-cols-1 mb-10 relative w-full">
        <Image
          src="/herosection.png"
          alt="Background"
          width={2600}
          height={2400}
          quality={100}
          className="absolute inset-0 h-full lg:h-[815px] w-full object-cover"
          priority
        />
        <div className="relative z-10 flex flex-col items-center text-whit bg-opacity-50 p-8 rounded-lg">
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
