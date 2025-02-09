"use client";

import Image from "next/image";

export default function BgPixelVerse() {
  return (
    <section className="w-full h-full">
      <div>
        <Image
          src="/group.png"
          alt="Compro Pixel Verse"
          width={1920}
          height={1080}
          quality={100}
          className="w-full h-auto object-cover"
          // style={{ marginTop: "50px" }}
        />
      </div>
    </section>
  );
}
