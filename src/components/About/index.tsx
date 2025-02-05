"use client"

import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="/logo-about.svg"
            alt="Compro Pixel Verse"
            className="w-full rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg" />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-6">
            About <span className="text-[#ef63ff]">Compro Pixel Verse</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            At Compro Pixel Verse, we believe in capturing moments and creating
            memories that last a lifetime. Our innovative approach to photobooth
            experiences combines cutting-edge technology with artistic flair,
            making every event unforgettable.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-[#ef63ff]">
            Our Services
          </h2>
          <ul className="text-lg text-gray-400 space-y-4">
            <li>
              <span className="text-white font-semibold">
                📸 Photobooth Software:
              </span>
              Our intuitive photobooth software is designed for easy integration
              and user-friendly operation. Whether you’re hosting weddings,
              corporate events, or parties, our software offers a seamless
              experience for both hosts and guests. Customize prints, share
              memories instantly, and enjoy a fun, interactive atmosphere.
            </li>
            <li>
              <span className="text-white font-semibold">
                🎨 Engaging Templates:
              </span>
              We understand that every event is unique, which is why we provide
              a range of attractive templates tailored for various themes. From
              vintage elegance to modern chic designs, our templates are not
              only visually appealing but also customizable to reflect the
              personality of your event.
            </li>
            <li>
              <span className="text-white font-semibold">
                📦 Box Studio Booth:
              </span>
              Our exclusive box studio booth is a game-changer in the world of
              event photography. This compact, stylish setup is perfect for any
              venue and offers high-quality photography while maximizing space.
              With built-in lighting and props, your guests will have everything
              they need to create amazing memories.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#ef63ff]">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            ✅ <span className="text-white font-semibold">Customization:</span>
            Tailor every aspect of your photobooth experience to fit your theme
            and vision.
            <br />✅{" "}
            <span className="text-white font-semibold">User-Friendly:</span>
            Our software is designed for everyone—no technical expertise
            required!
            <br />✅{" "}
            <span className="text-white font-semibold">
              Quality & Experience:
            </span>
            With years of industry experience, we ensure your event runs
            smoothly and successfully.
          </p>

          <Link href="/contact">
            <button className="mt-8 bg-[#121629] text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-500 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
