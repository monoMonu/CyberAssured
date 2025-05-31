"use client";

import React from "react";

const HomeHeroBGSlider = () => {
  return (
    <section className="relative w-full h-screen sm:h-[60vh] md:h-[70vh] lg:h-[80vh] min-h-[400px] overflow-hidden">
      
      {/* ✅ Desktop Video (visible on sm and larger) */}
      <video
        src="/UpdatedBanner/Herovideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover hidden sm:block"
      />

      {/* ✅ Mobile Video (visible below sm) */}
      <video
        src="/UpdatedBanner/SOC.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover block sm:hidden"
      />

    </section>
  );
};

export default HomeHeroBGSlider;
