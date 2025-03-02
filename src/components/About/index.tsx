"use client";

import React, { useEffect, useCallback } from "react";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";

const debounce = (func: () => void, delay: number) => {
  let timeout: NodeJS.Timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
};

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  const handleScroll = useCallback(
    debounce(() => {
      AOS.refresh();
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80 backdrop-blur-xl" />

      <div className="relative max-w-6xl mx-auto mb-12" data-aos="fade-up">
        <Image
          src="/about-3.png"
          alt="Compro Pixel Verse"
          width={1000}
          height={800}
          quality={100}
          className="w-full rounded-lg shadow-lg mb-10 mt-[175px]"
        />
      </div>

      <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <Image
          src="/about-2.png"
          alt="Compro Pixel Verse"
          width={1000}
          height={800}
          quality={100}
          className="w-full rounded-lg shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold mb-6 text-[#ED1F8B]">
            About <span className="text-[#ED1F8B]">Us</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            At Compro Pixel Verse, we believe in capturing moments and creating
            memories that last a lifetime. Our innovative approach to photobooth
            experiences combines cutting-edge technology with artistic flair,
            making every event unforgettable.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-[165px] space-y-6">
        <div className="space-y-2" data-aos="fade-right">
          <h2 className="text-4xl font-semibold text-[#ED1F8B]">
            Our Services
          </h2>
          <p className="text-lg text-gray-300">
            Provide The Best Service With Out Of The Box Ideas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Service Card Component
interface ServiceCardProps {
  index: number;
  title: string;
  description: string;
}

const ServiceCard = ({ index, title, description }: ServiceCardProps) => {
  return (
    <div
      className="bg-[#ED1F8B] text-white p-6 rounded-xl relative transition transform hover:scale-105 hover:shadow-xl cursor-pointer"
      data-aos="zoom-in"
      data-aos-delay={index * 100}
    >
      <span className="text-4xl font-bold">{`0${index + 1}`}</span>
      <h3 className="text-2xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-200 mt-2">{description}</p>
      <span className="absolute top-4 right-4 text-white text-xl">↗</span>
    </div>
  );
};

const services = [
  {
    title: "Photobooth Software",
    description:
      "Our intuitive photobooth software is designed for easy integration and user-friendly operation.",
  },
  {
    title: "Engaging Templates",
    description:
      "We understand that every event is unique, which is why we provide a range of attractive templates.",
  },
  {
    title: "Box Studio Booth",
    description:
      "Our exclusive box studio booth is a game-changer in the world of event photography.",
  },
];
