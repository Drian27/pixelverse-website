"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="relative px-6 lg:px-24 flex flex-col items-center justify-between bg-black -mb-[150px] pb-[150px]">
      <div className="max-w-lg text-center space-y-4" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#ED1F8B] tracking-tight">
          Security, Simplicity, Easiness
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-7 md:leading-8">
          Pixelverse empowers your app with seamless security, effortless
          simplicity, and intuitive ease, creating the most secure and
          user-friendly payment experience.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-10 lg:mt-14">
        <div
          className="w-80 p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex items-center">
            <Image
              src="/security.png"
              alt="Shield Logo"
              width={40}
              height={40}
              className="w-auto h-auto"
            />
          </div>
          <h3 className="font-semibold text-lg mt-4 text-gray-900">
            Advanced Data Security & Compliance
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Stay compliant with regulations and protect sensitive patient
            information.
          </p>
        </div>

        <div
          className="w-80 p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex items-center">
            <Image
              src="/oneline.png"
              alt="Scan Logo"
              width={40}
              height={40}
              className="w-auto h-auto"
            />
          </div>
          <h3 className="font-semibold text-lg mt-4 text-gray-900">
            Safe And Fast Online Payment
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Scan the QR code for easy and fast online payment (E-Wallet).
          </p>
        </div>

        <div
          className="w-80 p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="flex items-center">
            <Image
              src="/offline.png"
              alt="Wallet Logo"
              width={40}
              height={40}
              className="w-auto h-auto"
            />
          </div>
          <h3 className="font-semibold text-lg mt-4 text-gray-900">
            Event-Only Offline Payments
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Boothlab Apps generates unique codes to unlock exclusive event
            vouchers.
          </p>
        </div>
      </div>
    </section>
  );
}
