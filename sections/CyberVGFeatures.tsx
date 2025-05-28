'use client';

import { useState } from 'react';
import {
  BrainCircuit,
  Clock3,
  ShieldCheck,
  Users2,
  MonitorCheck,
  BarChart3
} from 'lucide-react';

export const CyberVGFeatures = () => {
  const [tab, setTab] = useState<'features' | 'benefits'>('features');

  const features = [
    { label: 'AI-Powered Analysis', icon: BrainCircuit },
    { label: 'Real-Time Correlation', icon: Clock3 },
    { label: 'Automated Response', icon: ShieldCheck },
    { label: 'Expert SOC Team', icon: Users2 },
    { label: '24/7/365 Monitoring', icon: MonitorCheck },
    { label: 'Actionable Intelligence', icon: BarChart3 },
  ];

  return (
    <section className="relative bg-white text-black min-h-[700px] px-6 py-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto relative z-10">

        {/* HEADER SECTION */}
        <div className="text-center mb-20 px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
            Comprehensive Threat Detection & Response
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            At CyberAssured, we see organizations struggle with increasingly complex IT infrastructures
            made even more challenging by rapidly evolving cyber threats and a lack of human resources.
            CyberVanguard combines powerful SIEM technology driven by AI and machine learning with a
            SOC team to deliver relevant, actionable alerts in real time.
          </p>
        </div>

        {/* FEATURE + CIRCLE UI */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* LEFT SIDE */}
          <div className="md:w-1/3 text-left">
            <h3 className="text-3xl md:text-5xl font-bold mt-5 mb-5 text-primary">CyberVanguard <br /> Platform Features</h3>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative md:w-2/3 w-full flex items-center justify-center text-center">
            <div className="mt-80 ml-160 absolute w-[500px] h-[500px] bg-gradient-to-br from-purple-700 to-violet-200 rounded-full opacity-80 z-0 scale-110" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 z-10 max-w-3xl">
              {features.map(({ label, icon: Icon }, index) => (
                <div key={index} className="flex items-start gap-4 text-left">
                  <Icon className="text-primary" size={32} />
                  <p className="text-2xl font-medium leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
