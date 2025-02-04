"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full py-4 from-yellow-50 fixed top-0 left-0 z-50">
      <nav className="container w-full mx-auto lg:px-4 flex items-center justify-center">
        {/* Burger Menu (Menu Garis 3 di kanan) */}

        <Link href="/" className="text-white text-2xl font-bold">
          <span className="tracking-wide">PIXELVERSE</span>
        </Link>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none absolute right-4"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`w-full transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          } lg:max-h-none lg:flex lg:gap-8 lg:items-center bg-black lg:bg-transparent text-sm font-medium`}
          style={{ marginLeft: "50px" }}
        >
          <li className="group py-2 px-4 text-center">
            <Link
              href="/"
              className="text-[#9C9C9C] text-[18px] hover:text-white relative"
            >
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
              Home
            </Link>
          </li>
          <li className="group py-2 px-4 text-center">
            <Link
              href="/about"
              className="text-[#9C9C9C] text-[18px] hover:text-white relative"
            >
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
              About
            </Link>
          </li>
          <li className="group py-2 px-4 text-center">
            <Link
              href="/pricing"
              className="text-[#9C9C9C] text-[18px] hover:text-white relative"
            >
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
              Pricing
            </Link>
          </li>
          <li className="group py-2 px-4 text-center">
            <Link
              href="/contact"
              className="text-[#9C9C9C] text-[18px] hover:text-white relative"
            >
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#605DFF] transition-all duration-300 group-hover:w-full"></span>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
