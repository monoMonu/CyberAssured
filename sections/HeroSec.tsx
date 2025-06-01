"use client";

import React, { useEffect, useState } from "react";

const messages = [
  {
    main: "ZERO TRUST-IDENTITY SECURITY FOR THE MODERN ENTERPRISE",
    sub: "PROTECTING PRIVILEGED ACCESS AT SCALE WITH A CONVERGED IDENTITY PLATFORM TRUSTED BY 1500+ ORGANIZATIONS WORLDWIDE.",
  },
  {
    main: "PRIORITIZE WHAT MATTERS: \nRISK-BASED VULNERABILITY MANAGEMENT",
    sub: "Quantify cyber risk in real financial terms and focus remediation where it counts most.",
  },
  {
    main: "END-TO-END CYBERSECURITY FOR OT AND IT ECOSYSTEMS",
    sub: "SAFEGUARD CRITICAL OPERATIONS WITH ZERO-TRUST CONTROLS, REAL-TIME MONITORING, AND ADVANCED THREAT RESPONSE.",
  },
  {
    main: "WE PREDICT CYBER THREATS",
    sub: "WE COMBINE THE POWER OF CYBER INTELLIGENCE, BRAND MONITORING & ATTACK SURFACE MONITORING TO GIVE CONTEXT TO OUR CUSTOMERS' DIGITAL RISKS.",
  },
  {
    main: "CYBER THREATS DON'T CLOCK OUT. NEITHER DO WE.",
    sub: "NEXT-GEN 24/7 SOC-AS-A-SERVICE \n BUILT FOR GROWING BUSINESSES - POWERFUL PROTECTION SMARTLY PRICED \n START RISK-FREE WITH A 30-DAY PILOT",
  },
];

const HomeHeroBGSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen sm:h-[60vh] md:h-[70vh] lg:h-[80vh] min-h-[400px] overflow-hidden">
      {/* Background Video */}
      <video
        src="/UpdatedBanner/cubeBanner.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Right-Aligned Responsive Text */}
      <div className="absolute inset-0 z-10 flex items-center justify-end bg-black/50 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="w-full max-w-[600px] overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full text-right"
              >
                <h1
                  className="text-lg sm:text-5xl md:text-5xl lg:text-5xl font-extrabold leading-tight mb-4 text-stroke-purple uppercase tracking-wide"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {msg.main}
                </h1>

                <p
                  className="text-sm sm:text-2xl md:text-lg text-gray-200"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {msg.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroBGSlider;
