"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Index() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="relative mt-[166px]">
      <div data-aos="fade-up">
        <Image
          src="/group.png"
          alt="Compro Pixel Verse"
          width={1920}
          height={1080}
          quality={100}
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </div>

      <div className="fixed top-0 left-0 w-full h-full bg-black -z-10"></div>
      <div className="relative w-full max-w-3xl mx-auto p-6 md:p-8 text-white mt-[166px]">
        <h2
          className="text-4xl font-semibold mb-6 text-[#ED1F8B] text-center"
          data-aos="fade-up"
        >
          Why Choose Us?
        </h2>
        <div className="space-y-6">
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-bold text-[#ED1F8B] text-xl md:text-2xl lg:text-2xl">
              Customization
            </h3>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              Tailor every aspect of your photobooth experience to fit your
              theme and vision.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-bold text-[#ED1F8B] text-xl md:text-2xl lg:text-2xl">
              User-Friendly
            </h3>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              Our software is designed for everyone—no technical expertise
              required!
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-bold text-[#ED1F8B] text-xl md:text-2xl lg:text-2xl">
              Quality & Experience
            </h3>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              With years of industry experience, we ensure your event runs
              smoothly and successfully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
