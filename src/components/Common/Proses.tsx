import React from 'react';
import Image from 'next/image';

const steps = [
  { id: 1, color: 'bg-red-500', title: 'Customer Datang Ke Booth', img: '/online1.svg' },
  { id: 2, color: 'bg-blue-500', title: 'Tekan Tombol Start Untuk Memulai', img: '/online2.svg' },
  { id: 3, color: 'bg-pink-500', title: 'Lakukan Scan QR untuk Pembayaran', img: '/online3.svg' },
  { id: 4, color: 'bg-yellow-500', title: 'Tunggu Beberapa Saat Pengecekan Pembayaran Otomatis', img: '/online4.svg' },
  { id: 5, color: 'bg-green-500', title: 'Proses Foto sampai Printing (by Dsrlbooth)', img: '/online5.svg' }
];

export default function Proses() {
  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-3xl font-bold">Alur Proses Photo <span className="text-white">*</span></h1>
      <h2 className="text-2xl font-semibold">Pixelverse</h2>
      <div className="flex space-x-4 mt-6">
        {steps.map((step) => (
          <div key={step.id} className={`p-4 rounded-xl text-center ${step.color} w-60`}>
            <div className="bg-white text-black px-4 py-1 rounded-lg inline-block mb-2">Step: 0{step.id}</div>
            <div className="w-40 h-40 mx-auto relative">
              <Image src={step.img} alt={step.title} layout="fill" objectFit="contain" />
            </div>
            <p className="mt-4 font-medium">{step.title}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex space-x-4">
        <button className="bg-white px-6 py-2 rounded-full font-semibold">Online</button>
      </div>
    </div>
  );
}