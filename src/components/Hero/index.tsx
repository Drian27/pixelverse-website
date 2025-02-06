"use client";

import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      <div className="absolute left-0 right-0 top-[50px] bottom-0">
        <Image
          src="/herosection.png"
          alt="Background"
          fill
          quality={100}
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-white">
        <button className="mt-[290px] md:mt-[340px] px-8 py-3 border-2 border-white text-white font-semibold text-lg rounded-full transition hover:bg-white hover:text-black">
          Start Shooting
        </button>

        <p className="mt-4 text-lg md:text-xl font-medium text-gray-200 max-w-xl text-center">
          Experience instant photography like never before. Just click, pose, and keep your memories alive forever.
        </p>
      </div>
    </div>
  );
}
