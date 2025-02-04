import React from "react";
import Image from "next/image";

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b bg-[#121629] p-6">
      {/* Container utama */}
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl w-full">
        {/* Bagian Kiri: Teks dan Tombol */}
        <div className="text-white text-center lg:text-left max-w-lg">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            <span className="text-white font-extrabold">Click</span>,{" "}
            <span className="text-[#ef63ff] font-extrabold">Smile</span>, Keep
            !!
          </h1>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Click, <span className="text-[#ef63ff] font-extrabold">Smile</span>,
            Keep !!
          </h1>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
            Click, <span className="italic text-[#ef63ff]">Smile</span>,{" "}
            <span className="font-extrabold">Keep !!</span>
          </h1>
          <p className="text-lg sm:text-xl font-semibold">
            make everything easier in one system, wherever and whenever you can{" "}
            <br />
            appear Capture your moments every moment
          </p>

          <button className="mt-6 px-6 py-3 bg-white text-black font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition">
            SHOOT
          </button>
        </div>

        <div className="relative grid grid-cols-2 gap-4">
          <div className="relative">
            <Image
              src="/icon-1.svg"
              alt="Foto 1"
              width={200}
              height={200}
              className="rounded-xl"
            />
          </div>

          <div className="relative">
            <Image
              src="/icon-2.svg"
              alt="Foto 2"
              width={150}
              height={150}
              className="rounded-xl"
            />
          </div>

          <div className="relative col-span-2">
            <Image
              src="/icon-3.svg"
              alt="Foto 3"
              width={250}
              height={250}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
