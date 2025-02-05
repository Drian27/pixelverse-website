"use client";

import { QrCode, Wallet } from "lucide-react";

export default function Payment() {
  return (
    <section className="relative py-40 px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r bg-black">
      <div className="max-w-lg text-center lg:text-left">
        <h2 className="text-5xl font-bold text-white leading-tight">
          Security, <span className="text-white">Simplicity,</span>
          <br />
          <span className="text-gray-500">Easiness.</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Pixelverse empowers your app with seamless security, effortless simplicity, and intuitive ease, creating the most secure and user-friendly payment experience.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-10 lg:mt-0">
        {/* Online Payment Box */}
        <div className="w-80 p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 box-border">
          <QrCode className="text-gray-700 w-10 h-10" />
          <h3 className="font-semibold text-lg mt-4 text-gray-900">
            Online Payments
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Scan QRIS Barcode for online payments (eWallet) and capture the moments.
          </p>
        </div>

        {/* Event-Only Offline Payment Box */}
        <div className="w-80 p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 box-border">
          <Wallet className="text-gray-700 w-10 h-10" />
          <h3 className="font-semibold text-lg mt-4 text-gray-900">
            Event-Only Offline Payments
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Generate and print a unique barcode from the Admin Dashboard, then allow the Boothlab app to scan it, unlocking exclusive event vouchers for your transaction.
          </p>
        </div>
      </div>
    </section>
  );
}
