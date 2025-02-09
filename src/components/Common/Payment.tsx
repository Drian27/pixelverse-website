"use client";

import Image from "next/image";

export default function Payment() {
  return (
    <section className="relative py-20 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between bg-black">
      {/* Kiri: Deskripsi */}
      <div className="max-w-lg text-left space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#ED1F8B] tracking-tight">
          Security, Simplicity, Easiness
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-7 md:leading-8">
          Pixelverse empowers your app with seamless security, effortless
          simplicity, and intuitive ease, creating the most secure and
          user-friendly payment experience.
        </p>
      </div>

      {/* Kanan: Opsi Pembayaran */}
      <div className="flex flex-col lg:flex-row gap-6 mt-10 lg:mt-0">
        {/* Box Pembayaran Online */}
        <div className="w-80 p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center">
            <Image
              src="/scan.png"
              alt="Scan Logo"
              width={40}
              height={40}
              className="w-auto h-auto"
            />
          </div>
          <h3 className="font-semibold text-lg mt-4 text-gray-900">
            Online Payments
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Scan the QRIS barcode for online payments (eWallet) and capture the
            moments.
          </p>
        </div>

        {/* Box Pembayaran Offline (Event-Only) */}
        <div className="w-80 p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center">
            <Image
              src="/wallet.png"
              alt="Wallet Logo"
              width={40}
              height={40}
              className="w-auto h-auto"
            />
          </div>
          <h3 className="font-semibold text-lg mt-4 text-gray-900">
            Event-Only Offline Payments
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Generate and print a unique barcode from the Admin Dashboard, then
            let the Boothlab app scan it to unlock exclusive event vouchers.
          </p>
        </div>
      </div>
      <div className="relative w-full mb-12">
        <Image
          src="/group.png"
          alt="Compro Pixel Verse"
          width={1920}
          height={1080}
          quality={100}
          className="w-full h-auto object-cover"
          style={{ marginTop: "50px" }}
        />
      </div>
    </section>
  );
}
