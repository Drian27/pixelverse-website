"use client";

import Paket from "@/components/Common/Paket";
import Payment from "@/components/Pricing";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="elative bg-black text-white overflow-hidden">
      <div className="relative max-w-6xl mx-auto mb-12">
        <Image
          src="/pricing-1.png"
          alt="Compro Pixel Verse"
          width={1000}
          height={800}
          quality={100}
          className="w-full rounded-lg shadow-lg mb-10 mt-[175px]"
        />
      </div>
      <Paket />
      <Payment />
    </div>
  );
}
