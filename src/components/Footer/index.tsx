import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b bg-black text-white py-10 px-6">
      <div className="container mx-auto text-center lg:text-left">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="#"
            className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-all"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="#"
            className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-all"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="#"
            className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-all"
          >
            <FaInstagram size={18} />
          </a>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Section */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-gray-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/mobile" className="hover:text-gray-300">
                  Mobile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  📞 +62 896-3823-3061
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-300">
                  info@pixelverse.id
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-300"></Link>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Address</h4>
            <ul className="space-y-2">
              <li>
                📍 Villa Bogor Indah 5, Cluster Pelikan Blok CE 11 No 16, Kota
                Bogor, Jawa Barat 16161
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
