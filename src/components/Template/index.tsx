"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInstance } from "swiper/types";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import Image from "next/image";

export default function TestimonySlider() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const images = [
    "/template-1.png",
    "/template-2.png",
    "/template-3.png",
    "/template-4.png",
    "/template-5.png",
  ];

  const totalPages = Math.ceil(images.length / 5);

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index * 5);
      setCurrentPage(index);
    }
  };

  return (
    <div className="bg-black py-16 text-white flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6">Available Templates</h2>

      <div className="w-full max-w-5xl">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={5}
          spaceBetween={20}
          freeMode={true}
          loop={false}
          onSlideChange={(swiper) =>
            setCurrentPage(Math.floor(swiper.activeIndex / 5))
          }
          slidesPerGroup={5}
          modules={[FreeMode]}
          breakpoints={{
            1024: { slidesPerView: 5 },
            768: { slidesPerView: 3 },
            640: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex justify-center">
                <div className="border border-white p-2 bg-white rounded-lg shadow-lg">
                  <Image
                    src={img}
                    width={300}
                    height={400}
                    alt={`Template ${index + 1}`}
                    className="rounded-lg object-cover w-full h-64"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ul className="flex items-center justify-center pt-8 space-x-2">
        <li>
          <button
            onClick={() => goToSlide(Math.max(currentPage - 1, 0))}
            disabled={currentPage === 0}
            className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
              currentPage === 0
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gray-700 hover:bg-primary"
            } text-white`}
          >
            Prev
          </button>
        </li>

        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i}>
            <button
              onClick={() => goToSlide(i)}
              className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
                currentPage === i
                  ? "bg-primary text-white"
                  : "bg-gray-700 hover:bg-primary"
              }`}
            >
              {i + 1}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={() => goToSlide(Math.min(currentPage + 1, totalPages - 1))}
            disabled={currentPage === totalPages - 1}
            className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
              currentPage === totalPages - 1
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gray-700 hover:bg-primary"
            } text-white`}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}
