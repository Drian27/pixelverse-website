"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hardware() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    AOS.refreshHard();

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hardwareItems = [
    {
      id: 1,
      image: "/pc.png",
      alt: "PC",
    },
    {
      id: 2,
      image: "/monitor.png",
      alt: "Monitor",
    },
    {
      id: 3,
      image: "/camera.png",
      alt: "Camera",
    },
    {
      id: 4,
      image: "/printer.png",
      alt: "Printer",
    },
    {
      id: 5,
      image: "/paper.png",
      alt: "Paper Roll",
    },
  ];

  return (
    <>
      <section className="relative px-6 lg:px-24 flex flex-col items-center justify-between bg-black pb-[150px]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#ED1F8B] tracking-tight mb-8">
          Hardware
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {hardwareItems.map((item) => (
            <div
              key={item.id}
              className="w-[220px] h-[220px] bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center justify-between transition-all duration-300 hover:shadow-xl overflow-hidden"
              data-aos="fade-up"
            >
              <div className="w-full flex justify-start p-2">
                <Image
                  src="/logo-hardware.png"
                  alt="Hadrware Logo"
                  width={80}
                  height={20}
                  className="object-contain"
                />
              </div>
              <div className="flex-grow flex justify-center items-center">
                <div className="w-[120px] h-[120px] relative">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
