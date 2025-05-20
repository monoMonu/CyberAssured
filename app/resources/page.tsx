import ResourceCard from "@/components/Resource-card"


const reports = [
   {
      title: "Sample Key Risk Indicator report",
      description:
         "See an example of the monthly KRI reports we provide to our SOC customers, detailing risks, trends or threats detected over the period.",
      imageUrl: "/expert-services-banner.jpg",
      link: "#",
   },
   {
      title: "Sample breach report",
      description:
         "If you've experienced a security incident this report details the event’s origin, impact and scale - and best practice guidance for how to defend against future breaches.",
      imageUrl: "/expert-services-banner.jpg",
      link: "#",
   },
   {
      title: "Sample penetration test report",
      description:
         "A simulated attack to evaluate your organization's security posture, identifying vulnerabilities before attackers do.",
      imageUrl: "/expert-services-banner.jpg",
      link: "#",
   },
   {
      title: "Sample SecureStart report",
      description:
         "A comprehensive baseline security assessment conducted during onboarding to ensure you're set up for protection.",
      imageUrl: "/expert-services-banner.jpg",
      link: "#",
   },
]

export default function ResourcesPage() {
   return (
      <section className="min-h-screen px-4 py-8 md:px-12 bg-background text-foreground">
         <div className="max-w-screen-xl mx-auto">
            <h1 className="text-5xl font-bold mb-10 text-center gap-2">
               Resources
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {reports.map((report, index) => (
                  <ResourceCard key={index} {...report} />
               ))}
            </div>
         </div>
      </section>
   )
}
