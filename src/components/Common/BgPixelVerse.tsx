"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BgPixelVerse() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Mencegah render di server

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
        />
      </div>
    </section>
  );
}