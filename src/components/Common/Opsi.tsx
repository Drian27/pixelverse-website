"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Opsi() {
  useEffect(() => {
    AOS.init({
      duration: 450,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="relative px-6 lg:px-20 py-[140px] bg-black text-center overflow-hidden">
      <div className="mb-8 space-y-4" data-aos="fade-up">
        <h3 className="text-[#ED1F8B] text-xl md:text-4xl font-semibold">
          PixelVerse Apps
        </h3>
        <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-snug">
          Payment Facilities with Transfer & QRIS
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          An integrated system with a payment gateway and vouchers makes
          payments faster, safer, and more convenient.
        </p>
      </div>

      <div className="mt-10" data-aos="fade-up" data-aos-delay="300">
        <Image
          src="/group-1.png"
          alt="Payment Illustration"
          width={1400}
          height={1100}
          className="mx-auto w-auto h-auto"
        />
      </div>
    </section>
  );
}
