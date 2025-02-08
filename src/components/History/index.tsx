import React from "react";
import Image from "next/image";

export default function Index() {
  return (
    <div className="flex flex-col items-center p-4 md:p-10 bg-black min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <div className="bg-white p-4 rounded-2xl shadow-lg flex items-center">
          <Image
            src="/box-1.png"
            width={300}
            height={300}
            alt="Photobooth 1"
            className="rounded-xl"
          />
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-lg flex items-center">
          <Image
            src="/box-1.png"
            width={300}
            height={300}
            alt="Photobooth 2"
            className="rounded-xl"
          />
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-lg flex items-center">
          <Image
            src="/box-1.png"
            width={300}
            height={300}
            alt="Photobooth 3"
            className="rounded-xl"
          />
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-lg flex items-center">
          <Image
            src="/box-1.png"
            width={300}
            height={300}
            alt="Photobooth 3"
            className="rounded-xl"
          />
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-lg flex items-center">
          <Image
            src="/box-1.png"
            width={300}
            height={300}
            alt="Photobooth 3"
            className="rounded-xl"
          />
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-lg flex items-center">
          <Image
            src="/box-1.png"
            width={300}
            height={300}
            alt="Photobooth 3"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
