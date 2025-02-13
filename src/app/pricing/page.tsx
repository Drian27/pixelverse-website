"use client";

import Paket from "@/components/Common/Paket";
import Payment from "@/components/Pricing";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      <div
        className="relative max-w-6xl mx-auto mb-12"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
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
