"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative bg-black text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80 backdrop-blur-xl" />
      <div className="relative max-w-6xl mx-auto mb-12">
        <Image
          src="/about-3.png"
          alt="Compro Pixel Verse"
          width={1000}
          height={800}
          quality={100}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/about-2.png"
            alt="Compro Pixel Verse"
            width={1000}
            height={800}
            quality={100}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2">
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

      <div className="relative max-w-6xl mx-auto mt-20">
        <div className="flex flex-col items-start justify-between mb-6">
          <h2 className="text-4xl font-semibold text-[#ED1F8B]">
            Our Services
          </h2>
          <p className="text-lg text-gray-300 mt-2">
            Provide The Best Service With Out Of The Box Ideas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#ED1F8B] text-white p-6 rounded-xl relative transition transform hover:scale-105 hover:shadow-xl cursor-pointer">
            <span className="text-4xl font-bold">01</span>
            <h3 className="text-2xl font-semibold mt-2">Photobooth Software</h3>
            <p className="text-gray-200 mt-2">
              Our intuitive photobooth software is designed for easy integration
              and user-friendly operation.
            </p>
            <span className="absolute top-4 right-4 text-white text-xl">↗</span>
          </div>

          <div className="bg-[#ED1F8B] text-white p-6 rounded-xl relative transition transform hover:scale-105 hover:shadow-xl cursor-pointer">
            <span className="text-4xl font-bold">02</span>
            <h3 className="text-2xl font-semibold mt-2">Engaging Templates</h3>
            <p className="text-gray-200 mt-2">
              We understand that every event is unique, which is why we provide
              a range of attractive templates.
            </p>
            <span className="absolute top-4 right-4 text-white text-xl">↗</span>
          </div>

          <div className="bg-[#ED1F8B] text-white p-6 rounded-xl relative transition transform hover:scale-105 hover:shadow-xl cursor-pointer">
            <span className="text-4xl font-bold">03</span>
            <h3 className="text-2xl font-semibold mt-2">Box Studio Booth</h3>
            <p className="text-gray-200 mt-2">
              Our exclusive box studio booth is a game-changer in the world of
              event photography.
            </p>
            <span className="absolute top-4 right-4 text-white text-xl">↗</span>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto mt-12 bg-[#ED1F8B] p-8 rounded-lg text-white">
        <h2 className="text-4xl font-semibold mt-8 mb-4 text-white text-center">
          Why Choose Us?
        </h2>
        <div className="p-8 rounded-lg text-white">
          <p className="text-lg leading-relaxed">
            <span className="font-semibold">Customization</span>
            <br />
            Tailor every aspect of your photobooth experience to fit your theme
            and vision.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            <span className="font-semibold">User-Friendly</span>
            <br />
            Our software is designed for everyone—no technical expertise
            required!
          </p>
          <p className="text-lg leading-relaxed mt-4">
            <span className="font-semibold">Quality & Experience</span>
            <br />
            With years of industry experience, we ensure your event runs
            smoothly and successfully.
          </p>
        </div>
      </div>
    </div>
  );
}
