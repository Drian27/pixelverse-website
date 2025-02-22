"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    imgSrc: "/security.png",
    imgAlt: "Shield Logo",
    title: "Advanced Data Security & Compliance",
    description:
      "Stay compliant with regulations and protect sensitive patient information.",
  },
  {
    imgSrc: "/oneline.png",
    imgAlt: "Scan Logo",
    title: "Safe And Fast Online Payment",
    description:
      "Scan the QR code for easy and fast online payment (E-Wallet).",
  },
  {
    imgSrc: "/offline.png",
    imgAlt: "Wallet Logo",
    title: "Event-Only Offline Payments",
    description:
      "Boothlab Apps generates unique codes to unlock exclusive event vouchers.",
  },
];

const Card = ({ imgSrc, imgAlt, title, description }: any) => (
  <div
    className="w-80 p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
    data-aos="fade-up"
    data-aos-delay="0"
  >
    <div className="flex items-center">
      <Image src={imgSrc} alt={imgAlt} width={40} height={40} />
    </div>
    <h3 className="font-semibold text-lg mt-4 text-gray-900">{title}</h3>
    <p className="text-gray-600 text-sm mt-2">{description}</p>
  </div>
);

export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="relative px-6 lg:px-24 flex flex-col items-center justify-between bg-black -mb-[10px] pb-[150px]">
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
        {features.map((feature, index) => (
          <Card
            key={index}
            imgSrc={feature.imgSrc}
            imgAlt={feature.imgAlt}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
