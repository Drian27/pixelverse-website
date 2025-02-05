import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Paket() {
  const packages = [
    {
      name: "Basic Package",
      price: "5 Jt",
      headerColor: "bg-pink-600 text-white",
      bodyColor: "bg-white",
      features: [
        "Sistem Photobooth",
        "ree Server 1 Year",
        "Free Training Sistem",
        "Free Maintenance 1 Year",
        "Free Training Sistem",
        "Price Setting in App",
      ],
    },
    {
      name: "Pro Package",
      price: "25 Jt",
      headerColor: "bg-blue-600 text-white",
      bodyColor: "bg-white",
      features: [
        "Full Access Sistem",
        "Custom UI Sistem Booth",
        "Free Server 1 Year",
        "Free Maintenance 1 Year",
        "Free Training Sistem",
        "Price Setting in App",
      ],
    },
    {
      name: "Advance Package",
      price: "55 Jt",
      headerColor: "bg-orange-600 text-white",
      bodyColor: "bg-white",
      features: [
        "Hardware + Software",
        "PC Mini i5 Ram 8 Rom 256 Dell",
        "Monitor Touchscreen Viewsonic 22inc",
        "Printer Kodak 605",
        "Kertas Photo Kodak + Tinta",
        "Box Studio",
        "Kamera 600d",
        "Sistem Package Full Service",
      ],
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-12 p-8 bg-black text-white">
      {/* Text Section */}
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-4xl font-bold">Choose Your Favourite</h2>
        <p className="text-2xl mt-2 font-semibold">Pricing Package</p>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="relative w-80 rounded-lg shadow-lg overflow-hidden"
          >
            <div className={`p-6 ${pkg.headerColor}`}>
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <p className="text-3xl font-extrabold mt-2">
                {pkg.price}
                <span className="text-lg font-light">/per Month</span>
              </p>
            </div>

            <div className={`p-4 ${pkg.bodyColor} text-black`}>
              {pkg.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm my-2">
                  <FaCheckCircle size={16} color="#6b7280" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
