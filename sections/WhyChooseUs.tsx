import { cn } from "@/lib/utils";
import { Cpu, ShieldCheck, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

const benefits = [
   {
      title: 'Predict and Prevent Cyber Threats',
      description:
         'We go beyond reactive security by combining Cyber Intelligence, Brand Monitoring, Attack Surface Monitoring, Infrastructure Monitoring, and Supply Chain Intelligence. This unified approach provides complete context around your digital risks, enabling proactive threat mitigation before attacks can impact your operations.',
      icon: (
         <ShieldCheck size={36} className="text-secondary" />
      ),
   },
   {
      title: 'Cutting-Edge Technology',
      description:
         'Our zero-trust identity security solutions protect privileged access across your entire enterprise infrastructure. With proven deployment experience across 1500+ organizations worldwide, we ensure that only authorized users can access critical systems, when they need it, and for exactly as long as necessary.',
      icon: (
         <Cpu size={36} className="text-secondary" />
      ),
   },
   {
      title: 'Prioritize Risk-Based Vulnerability Management',
      description:
         'Not all vulnerabilities are created equal. Our advanced platform quantifies cyber risk in real financial terms, helping you focus remediation efforts where they matter most. By understanding the true business impact of security gaps, you can allocate resources efficiently and reduce overall risk exposure.',
      icon: (
         <Users size={36} className="text-secondary" />
      ),
   },
   {
      title: 'Unify OT & IT Security',
      description: 'We specialize in protecting both traditional IT infrastructure and operational technology environments under a single security framework. Our end-to-end approach safeguards critical operations with zero-trust controls, real-time monitoring, and advanced threat response capabilities that understand the unique requirements of industrial and connected environments.',
      icon: (
         <TrendingUp size={36} className="text-secondary" />
      ),
   },
];

export default function WhyChooseCyberassured({ className }: { className?: string }) {
   return (
      <section className={`py-10 text-foreground  ${cn(className)}`}>
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
                     <p className="text-muted-foreground text-base text-wrap wrap-break-word">{item.description}</p>
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
