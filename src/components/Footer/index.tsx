import React from "react";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#ED1F8B] text-white py-10 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8 space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-2">
            <Image
              src="/logoverse.png"
              alt="PixelVerse Logo"
              width={180}
              height={100}
              className="object-contain"
            />
          </div>
          <div className="text-center lg:text-right">
            <h3 className="text-2xl font-bold leading-tight">
              So, What You Waiting For? <br />
              Let's Talk Together Now!
            </h3>
            <button className="mt-4 bg-white text-[#ED1F8B] font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>

        <hr className="border-t border-white opacity-30 mb-6" />

        <div className="flex justify-between items-center">
          <nav className="flex justify-start space-x-8 lg:pl-6">
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-200">
              About
            </Link>
            <Link href="/pricing" className="hover:text-gray-200">
              Pricing
            </Link>
            <Link href="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </nav>

          <div className="flex justify-end space-x-6 lg:pr-6">
            <Link href="#" className="text-white text-2xl hover:text-gray-200">
              <FaInstagram />
            </Link>
            <Link href="#" className="text-white text-2xl hover:text-gray-200">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-white text-2xl hover:text-gray-200">
              <FaTiktok />
            </Link>
          </div>
        </div>

        <div className="text-center text-sm opacity-80 mt-[48px]">
          PixelVerse | Copyright 2025 | All Right Reserved.
        </div>
      </div>
    </footer>
  );
}
