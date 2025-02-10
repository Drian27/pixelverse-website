import React from "react";

export default function index() {
  return (
    <div className="relative mt-[144px]">
      <div className="fixed top-0 left-0 w-full h-full bg-black -z-10"></div>

      {/* Konten */}
      <div className="relative w-full max-w-3xl mx-auto p-6 md:p-8 text-white">
        <h2 className="text-4xl font-semibold mb-6 text-[#ED1F8B] text-center">
          Why Choose Us?
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-[#ED1F8B] text-xl md:text-2xl lg:text-2xl">
              Customization
            </h3>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              Tailor every aspect of your photobooth experience to fit your
              theme and vision.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#ED1F8B] text-xl md:text-2xl lg:text-2xl">
              User-Friendly
            </h3>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              Our software is designed for everyone—no technical expertise
              required!
            </p>
          </div>
          <div>
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
