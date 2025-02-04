"use client";

import React from "react";
import Image from "next/image";

export default function Opsi() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-[#121629]">
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <Image
          src="/landingPayment.svg"
          alt="Payment Illustration"
          width={500}
          height={500}
          className="max-w-full"
        />
      </div>

      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h3 className="text-gray-500 text-lg font-semibold">
          Aplikasi Pixelverse →
        </h3>
        <h2 className="text-4xl font-bold text-white mt-2 leading-tight">
          Memberikan Opsi Pembayaran Transfer dan Qris.
        </h2>
        <p className="text-gray-600 mt-4 max-w-md">
          By using a system that is integrated with a payment gateway and
          voucher system to support transfer payments.
        </p>
      </div>
    </div>
  );
}
