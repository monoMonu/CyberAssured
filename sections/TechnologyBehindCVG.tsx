'use client';

import { CardStack } from "@/components/ui/card-stack";
import {
  Bolt,
  Target,
  User,
  SatelliteDish,
  BrainCircuit,
  Bot,
} from "lucide-react";

const technologies = [
  { id: 1, icon: <Bolt className="h-16 w-16 text-primary" />, label: "Elastic Computing Power" },
  { id: 2, icon: <Target className="h-16 w-16 text-primary" />, label: "Dynamic Threat Models" },
  { id: 3, icon: <User className="h-16 w-16 text-primary" />, label: "User & Entity Behavioral Analytics (UEBA)" },
  { id: 4, icon: <SatelliteDish className="h-16 w-16 text-primary" />, label: "Threat Intelligence Feeds" },
  { id: 5, icon: <BrainCircuit className="h-16 w-16 text-primary" />, label: "Advanced Machine Learning" },
  { id: 6, icon: <Bot className="h-16 w-16 text-primary" />, label: "AI with Actionable Intelligence" },
];

export default function TechnologyBehindCVG() {
  return (
    <section className="py-20 px-6 bg-white text-black">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            <span className="text-black">The Technology Behind </span>
            <span className="text-primary">CyberVanguard</span>
          </h2>
          <p className="mt-6 text-lg text-primary max-w-lg">
            CyberVanguard leverages advanced AI and threat modeling technologies to secure your enterprise in real-time.
          </p>
        </div>

        {/* Right CardStack Section */}
        <div className="lg:w-1/2 flex justify-center">
          <CardStack
            items={technologies.map((tech) => ({
              id: tech.id,
              name: tech.label, // keep this a plain string
              designation: "Technology",
              content: (
                <div className="flex justify-center items-center mb-4">
                  {tech.icon}
                </div>
              ),
            }))}
            offset={12}
            scaleFactor={0.05}
          />
        </div>
      </div>
    </section>
  );
}
