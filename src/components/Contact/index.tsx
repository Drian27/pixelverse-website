"use client";

import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    
    <section className="mx-auto px-6 py-12 lg:py-40 flex flex-col lg:flex-row gap-10 bg-black">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full lg:w-1/3 border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-5">
          Bogor, Indonesia
        </h3>
        <div className="space-y-4 text-gray-700">
          <div className="flex items-center gap-3">
            <Phone className="text-[#121629] w-5 h-5" />
            <span>+62 896-3823-3061</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-[#121629] w-5 h-5" />
            <span>pixelverse.id</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="text-[#121629] w-5 h-5 mt-1" />
            <span className="leading-relaxed">
              Villa Bogor Indah 5, Cluster Pelikan Blok CE 11 No 16, Kota Bogor,
              Jawa Barat 16161
            </span>
          </div>
        </div>
      </div>

      {/* Formulir Kontak */}
      <div className="bg-gray-100 shadow-lg rounded-xl p-6 lg:p-8 w-full lg:w-2/3">
        <h3 className="text-lg font-semibold text-gray-900 mb-5">
          Mulailah berkonsultasi dengan kami
        </h3>
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Nama & Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Alamat Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
            />
          </div>

          {/* Nomor Telepon & Subjek */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Nomor Telepon (Optional)
            </label>
            <input
              type="tel"
              placeholder="+62 856 **** ****"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Subjek
            </label>
            <input
              type="text"
              placeholder="Subjek"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
            />
          </div>

          {/* Pesan */}
          <div className="lg:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Apa yang bisa kami bantu?
            </label>
            <textarea
              rows={4}
              placeholder="Tulis Pesan Disini"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
            ></textarea>
          </div>

          {/* Checkbox & Button */}
          <div className="lg:col-span-2 flex items-start gap-2 text-gray-600">
            <input
              type="checkbox"
              className="w-5 h-5 accent-white cursor-pointer"
            />
            <span>
              Alamat email Anda tidak akan dipublikasikan. Bidang yang wajib
              diisi ditandai
            </span>
          </div>

          {/* Submit Button */}
          <div className="lg:col-span-2">
            <button className="mt-4 flex items-center justify-center gap-2 bg-[#121629] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-slate-500 transition">
              Submit Now <ArrowUpRight size={18} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
