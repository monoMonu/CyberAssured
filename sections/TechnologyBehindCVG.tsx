import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const technologies = [
   { icon: "⚡", label: "Elastic Computing Power" },
   { icon: "🎯", label: "Dynamic Threat Models" },
   { icon: "👤", label: "User and Entity Behavioral Analytics (UEBA)" },
   { icon: "📡", label: "Threat Intelligence Feeds" },
   { icon: "💾", label: "Advanced Machine Learning" },
   { icon: "🤖", label: "AI with Actionable Intelligence" },
];

export default function TechnologyBehindCVG() {
   return (
      <section className="py-12 px-4 md:px-8 lg:px-16 max-w-screen-xl mx-auto">
         <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
               The Technology Behind CyberVanguard
            </h2>
            <p className="text-muted-foreground mt-4 mx-auto">
               The CyberVanguard platform goes beyond simple threat data analysis and correlation.
               CyberVanguard leverages advanced technologies to deliver unparalleled security intelligence.
            </p>
         </div>
         <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {technologies.map((tech) => (
               <Card key={tech.label} className="text-center items-center justify-center min-h-40 px-6">
                  <CardContent>
                     <div className="text-3xl mb-2">{tech.icon}</div>
                     <p className="font-semibold text-[color:var(--foreground)]">
                        {tech.label}
                     </p>
                  </CardContent>
               </Card>
            ))}
         </div>
      </section>
   );
}