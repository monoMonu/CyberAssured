import { Cpu, ShieldCheck, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

const benefits = [
   {
      title: 'World-Class Expertise',
      description:
         'Certified professionals (CISSP, CISM, CEH, OSCP) with experience across all industries, staying ahead of cybersecurity trends.',
      icon: (
         <ShieldCheck size={36} className="text-secondary" />
      ),
   },
   {
      title: 'Cutting-Edge Technology',
      description:
         'Advanced tools for threat detection, vulnerability management, and identity protection—tailored to your environment.',
      icon: (
         <Cpu size={36} className="text-secondary" />
      ),
   },
   {
      title: 'Customer-Centric Approach',
      description:
         'We align security with your business goals—flexible programs that grow with you without slowing you down.',
      icon: (
         <Users size={36} className="text-secondary" />
      ),
   },
   {
      title: 'Proven Results',
      description:
         'Clients see 85% fewer incidents and 40% faster response times with our proactive managed services.',
      icon: (
         <TrendingUp size={36} className="text-secondary" />
      ),
   },
];

export default function WhyChooseCyberassured() {
   return (
      <section className="py-20 text-foreground bg-muted">
         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Why Choose Cyberassured</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
               Trusted by industry leaders, our security solutions are built for performance, precision, and partnership.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {benefits.map((item, index) => (
                  <div
                     key={index}
                     className="bg-primary/10 p-5 rounded-xl ring-1 ring-border hover:ring-accent/30 hover:scale-[1.02] transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
                  >
                     <div className="mb-4 text-center grid place-items-center py-3">{item.icon}</div>
                     <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                     <p className="text-muted-foreground text-base">{item.description}</p>
                  </div>
               ))}
            </div>
            <div className="mt-12 text-center">
               <Link
                  href="/insights"
                  className="group inline-block relative text-primary text-base transition-all duration-300 ease-in-out transform hover:scale-105"
               >
                  <span className="px-2 py-1">
                     More About Cyberassured
                  </span>
                  <span
                     className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"
                  />
               </Link>
            </div>
         </div>
      </section>
   );
}
