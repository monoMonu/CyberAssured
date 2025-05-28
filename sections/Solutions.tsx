import React from "react";
import { FaPlug, FaShieldAlt, FaHeadset, FaUserLock, FaNetworkWired, FaSearchLocation } from "react-icons/fa";

export default function Solutions() {
   const cards = [
      {
         title: "24/7 Security Operations",
         description: "Continuous monitoring and threat detection with AI-powered analytics that identify and respond to threats before they impact your business.",
         icon: <FaHeadset className="text-4xl text-indigo-600 mb-4 bg-indigo-100 rounded-full p-2" />,
      },
      {
         title: "Risk-Based Vulnerability Management",
         description: "Quantify cyber risk in real financial terms and focus remediation efforts where they matter most for your business.",
         icon: <FaShieldAlt className="text-4xl text-yellow-500 mb-4 bg-yellow-100 rounded-full p-2" />,
      },
      {
         title: "Zero Trust Identity Security",
         description: "Protect privileged access at scale with advanced identity controls trusted by organizations worldwide.",
         icon: <FaUserLock className="text-4xl text-green-600 mb-4 bg-green-100 rounded-full p-2" />,
      },
      {
         title: "OT/IT Unified Security",
         description: "End-to-end cybersecurity for both operational technology and IT ecosystems with real-time monitoring.",
         icon: <FaNetworkWired className="text-4xl text-purple-600 mb-4 bg-purple-100 rounded-full p-2" />,
      },
      {
         title: "Threat Intelligence",
         description: "Predict cyber threats by combining intelligence, brand monitoring, attack surface analysis, and supply chain insights.",
         icon: <FaSearchLocation className="text-4xl text-red-600 mb-4 bg-red-100 rounded-full p-2" />,
      },
      {
         title: "Compliance & Risk Assessment",
         description: "Navigate complex regulatory requirements with expert guidance on ISO 27001, GDPR, PCI DSS, and industry-specific frameworks.",
         icon: <FaPlug className="text-4xl text-cyan-600 mb-4 bg-cyan-100 rounded-full p-2" />,
      },
   ];

   return (
      <section className="py-16">
         <div className="container max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-primary drop-shadow">
               Comprehensive Security Solutions
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-base">
               We don't just sell technology—we architect integrated security ecosystems that work seamlessly together
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {cards.map((card, idx) => (
                  <div
                     key={idx}
                     className="bg-background rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-muted hover:border-secondary hover:shadow-2xl transition-shadow duration-300"
                  >
                     {card.icon}
                     <h3 className="text-2xl font-semibold mb-2 text-foreground">{card.title}</h3>
                     <p className="text-muted-foreground">{card.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}