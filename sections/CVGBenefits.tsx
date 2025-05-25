import { Card, CardContent } from "@/components/ui/card";

const benefits = [
   {
      icon: "⚡",
      title: "Reduce MTTR With Automatic Threat Remediation",
      description:
         "Minimize response times through intelligent automation and immediate threat containment capabilities.",
   },
   {
      icon: "⭐",
      title: "Unrivaled Customer Experience",
      description:
         "Dedicated support and personalized service that treats your security like our own priority.",
   },
   {
      icon: "✅",
      title: "Continuous Compliance and Monitoring",
      description:
         "Maintain regulatory compliance with ongoing monitoring and automated reporting capabilities.",
   },
   {
      icon: "🚨",
      title: "Rapid Incident Response",
      description:
         "Swift response to security incidents with expert-led investigation and remediation support.",
   },
];

export function CVGBenefits() {
   return (
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-muted">
         <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-8">
               <h2 className="text-3xl md:text-5xl font-bold text-[color:var(--secondary)]">
                  Key CyberVanguard Benefits
               </h2>
               <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Transform your security operations with measurable outcomes and enhanced protection
               </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
               {benefits.map((benefit) => (
                  <Card key={benefit.title} className="p-6">
                     <CardContent>
                        <div className="text-3xl mb-3">{benefit.icon}</div>
                        <h3 className="font-semibold text-[color:var(--foreground)] mb-1">
                           {benefit.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                           {benefit.description}
                        </p>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </section>
   );
}


export default CVGBenefits