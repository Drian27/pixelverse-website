"use client";

import React from "react";
import Image from "next/image";

export default function Opsi() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-black overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 bg-[#ef63ff] opacity-30 blur-3xl rounded-full absolute -top-16 -left-16"></div>
        <div className="w-72 h-72 bg-[#ff63a6] opacity-30 blur-3xl rounded-full absolute bottom-16 right-16"></div>
      </div>

      <div className="relative w-full lg:w-1/2 flex justify-center z-10">
        <Image
          src="/landingPayment.svg"
          alt="Payment Illustration"
          width={500}
          height={500}
          className="max-w-full"
        />
      </div>

      <div className="relative w-full lg:w-1/2 text-center lg:text-left z-10">
        <h3 className="text-gray-400 text-lg font-semibold">
          Aplikasi Pixelverse →
        </h3>
        <h2 className="text-4xl font-bold text-white mt-2 leading-tight">
          Kemudahan Pembayaran dengan Transfer & QRIS
        </h2>
        <p className="text-gray-300 mt-4 max-w-md">
          Dengan sistem yang terintegrasi dengan payment gateway dan voucher, pembayaran menjadi lebih cepat, aman, dan nyaman.
        </p>
      </div>
    </div>
  );
}
