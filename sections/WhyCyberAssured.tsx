"use client";
import Image from "next/image";
import { Users, ShieldCheck, BadgeCheck, Handshake } from "lucide-react";

const values = [
  {
    icon: <Users className="text-purple-600 w-6 h-6" />,
    title: "Customer Success",
    desc: "We ensure our platform delivers real value with dedicated support and onboarding.",
    position: "top-left",
  },
  {
    icon: <ShieldCheck className="text-purple-600 w-6 h-6" />,
    title: "Efficiency",
    desc: "We help clients streamline processes with minimal resource usage.",
    position: "top-right",
  },
  {
    icon: <BadgeCheck className="text-purple-600 w-6 h-6" />,
    title: "Transparency",
    desc: "We promote clear communication and open data for confident decision-making.",
    position: "bottom-left",
  },
  {
    icon: <Handshake className="text-purple-600 w-6 h-6" />,
    title: "Collaboration",
    desc: "We work closely with our clients to achieve joint cybersecurity goals.",
    position: "bottom-right",
  },
];

export default function CoreValuesShowcase() {
  return (
    <section className="bg-[#ffffff] pt-20 pb-0 px-4 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-primary">
          Our Core Values <span className="text-primary">Guide Everything</span>
        </h2>
      </div>

      {/* Grid layout */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center pb-0">
        {/* LEFT cards */}
        <div className="flex flex-col gap-10 mb-15">
          {values.filter(v => v.position.includes("left")).map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md w-[300px] min-h-[160px] flex flex-col justify-between"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-purple-100 p-3 rounded-full">{val.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{val.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* CENTER phone image */}
        <div className="relative w-full h-full flex items-end justify-center">
          <Image
            src="/phone-img-5.png"
            alt="Phone demo"
            width={400}
            height={700}
            className="z-10 object-contain w-[200px] md:w-[350px] h-auto mb-[-8px]" // mb-[-8px] pulls image to bottom
          />
        </div>

        {/* RIGHT cards */}
        <div className="flex flex-col gap-10 mb-15">
          {values.filter(v => v.position.includes("right")).map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md w-[300px] min-h-[160px] flex flex-col justify-between"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-purple-100 p-3 rounded-full">{val.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{val.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
