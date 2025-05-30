"use client";

import React from "react";

const HomeHeroBGSlider = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden text-primary-foreground sm:h-[45vh] lg:h-[80vh] xl:h-[80vh] max-h-[900px]">
      <video
        src="/UpdatedBanner/Herovideo.mp4" // ⬅️ Replace with your video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Optional: Overlay text or buttons */}
      {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30 z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Welcome to CyberAssured
        </h1>
        <p className="text-lg md:text-2xl mt-4">
          SOC | Zero Trust | OT/IT Security
        </p>
      </div> */}
    </section>
  );
};

export default HomeHeroBGSlider;
