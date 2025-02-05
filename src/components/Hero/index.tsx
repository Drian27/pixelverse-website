import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black p-6">
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl w-full">
        <div className="text-white text-center lg:text-left max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Capture Your <span className="text-[#ef63ff]">Best</span> Moments!
          </h1>
          <p className="text-lg sm:text-xl font-semibold opacity-80 mb-6">
            Experience instant photography like never before. Just click, pose, and keep your memories alive forever!
          </p>
          <button className="mt-6 px-8 py-3 bg-[#ef63ff] text-white font-bold text-lg rounded-full shadow-lg hover:bg-[#d450e0] transition">
            Start Shooting
          </button>
        </div>

        <div className="relative grid grid-cols-2 gap-4">
          <div className="absolute -top-10 -left-10 w-56 h-56 bg-[#ef63ff] opacity-20 blur-3xl rounded-full"></div>
          
          <div className="relative">
            <Image src="/icon-1.svg" alt="Photo 1" width={200} height={250} className="rounded-xl shadow-lg" />
          </div>

          <div className="relative">
            <Image src="/icon-2.svg" alt="Photo 2" width={180} height={220} className="rounded-xl shadow-lg" />
          </div>

          <div className="relative col-span-2">
            <Image src="/icon-3.svg" alt="Photo 3" width={280} height={280} className="rounded-xl shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
