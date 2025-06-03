import HeroBanner from "@/components/HeroBanner";
import ResourceCard from "@/components/Resource-card"


const reports = [
  {
    title: "The Ultimate Guide to Cybersecurity Certifications for Young Professionals",
    description:
    "In today’s digital age, cybersecurity is no longer just an IT concern—it’s a critical business priority. With threats evolving rapidly, organizations seek skilled professionals to protect their systems and data. For young professionals, the right certifications can launch or advance a cybersecurity career.",
    imageUrl: "/Image5.png",
    link: "/resources/blog/blog1",
  },
  {
    title: "Understanding Industry-Standard Cybersecurity Frameworks: A Guide for Businesses",
    description:
    "Cybersecurity frameworks are structured guidelines that help businesses manage risk, ensure compliance, and implement strong security controls. Learn how frameworks like NIST, ISO 27001, and CIS Controls can strengthen your organization’s security posture.",
    imageUrl: "/Image2.png",
    link: "/resources/blog/blog2",
  },
  {
    title: "Cybersecurity Jobs: Key Insights for Professionals in Saudi Arabia and the UAE",
    description:
    "Driven by initiatives like Saudi Vision 2030 and the UAE’s Digital Economy Strategy, the GCC region is rapidly becoming a cybersecurity hub. Discover the growing demand, skill trends, and job opportunities in Riyadh, Dubai, Abu Dhabi, and beyond.",
    imageUrl: "/Image3.png",
    link: "/resources/blog/blog3",
  },
  {
    title: "Are You Really Ready for a Cyber Attack? Why Paper Plans Aren’t Enough",
    description:
    "Many organizations have incident response plans—on paper. But without real-world testing, these plans may fail. Discover why tabletop exercises, red teaming, and live simulations are crucial for true preparedness.",
    imageUrl: "/Image1.png",
    link: "/resources/blog/blog4",
  },
];


export default function ResourcesPage() {
   return (
      <>
      <HeroBanner
            imageUrl="/Image3.png"
            title="Resources"
            subtitle="Insights that go beyond the surface - delivering real-world cybersecurity intelligence from trusted professionals."
            // ctaText="Explore Our Expertise"
            // link="#assessments"
            // ctaText2="Discuss Your Needs"
            // className="bg-background text-foreground"
            // link2="/contact"
         />
         <section className="min-h-screen px-4 py-8 md:px-12 bg-background text-foreground">
         <div className="max-w-screen-xl mx-auto">
            {/* <h1 className="text-5xl font-bold mb-10 text-center gap-2">
               Resources
            </h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {reports.map((report, index) => (
                  <ResourceCard key={index} {...report} />
               ))}
            </div>
         </div>
      </section>
      </>
      
   )
}
