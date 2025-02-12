import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Pricing() {
  const packages = [
    {
      name: "Basic Package",
      price: "5M",
      features: [
        "Sistem Photobooth",
        "Free Server 1 Year",
        "Free Training System",
        "Free Maintenance 1 Year",
        "Price Setting in Apps",
      ],
    },
    {
      name: "Pro Package",
      price: "25M",
      features: [
        "Full Access System",
        "Custom UI System Booth",
        "Free Server 1 Year",
        "Free Maintenance 1 Year",
        "Free Training System",
        "Price Setting in Apps",
      ],
    },
    {
      name: "Advance Package",
      price: "55M",
      features: [
        "Hardware + Software",
        "PC Mini DELL i5, 8Gb RAM",
        "Monitor Touchscreen Viewsonic 22inc",
        "Printer Kodak 605",
        "Paper Photo Kodak + Ink",
        "Studio Box",
        "Camera Canon 600D",
        "System Package Full Service",
      ],
    },
  ];

  return (
    <section className="bg-black py-16 px-6 lg:px-24 flex flex-col items-center mt-[176px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 w-80">
            <h3 className="text-gray-800 text-lg font-semibold">{pkg.name}</h3>
            <p className="text-3xl font-bold mt-2">{pkg.price}</p>
            <button className="mt-4 w-full py-2 border rounded-md text-gray-800 font-medium hover:bg-gray-100 transition">
              Get Started
            </button>
            <hr className="my-4" />
            <ul className="mt-2 space-y-2 text-gray-600 text-sm">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle size={16} color="#6b7280" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}