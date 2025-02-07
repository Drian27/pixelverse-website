"use client";

import React from "react";
import Image from "next/image";

export default function Opsi() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-black overflow-hidden">
      <div className="relative w-full lg:w-1/2 flex justify-center z-10">
        <Image
          src="/landingPayment.svg"
          alt="Payment Illustration"
          width={500}
          height={500}
          className="max-w-full"
        />
      </div>

      <div className="w-full lg:w-1/2 text-left space-y-4">
        <h3 className="text-[#ED1F8B] text-lg md:text-4xl font-semibold">
          Aplikasi Pixelverse
        </h3>
        <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-snug">
          Kemudahan Pembayaran dengan <br className="hidden md:block" />
          Transfer & QRIS
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md">
          Sistem yang terintegrasi dengan payment gateway dan voucher,
          pembayaran menjadi lebih cepat, aman, dan nyaman.
        </p>
      </div>
    </div>
  );
}
