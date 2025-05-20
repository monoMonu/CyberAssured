import FeaturedCard from "@/components/FeatureCard";
import CustomerPledges from "@/sections/CustomerPledge";
import ExpertServices from "@/sections/ExpertServices";
import HeroCarousel from "@/sections/HeroSec";
import ManagedServices from "@/sections/ManagedServices";
import SecurityInsightsSection from "@/sections/SecurityInsights";
import WhyChooseCyberassured from "@/sections/WhyChooseUs";

export default function Home() {

  const whereToStart = [
    {
      title: "Tropical Shirts",
      description: "Breezy and bold summer patterns. Breezy and bold summer patterns. Breezy and bold summer patterns.",
      image: "\cyber-incident-calculator-icon.svg",
    },
    {
      title: "Beach Footwear",
      description: "Flip-flops, sandals and more for the beach. Breezy and bold summer patterns. Breezy and bold summer patterns.",
      image: "\cyber-incident-calculator-icon.svg",
    },
  ];
  return (
    <section className="relative w-full">
      <HeroCarousel />
      {/* Where to start sec */}
      <section className="py-16 pb-10 bg-muted">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-2 text-primary">
            Where to Start
          </h2>
          <p className="text-center text-base text-muted-foreground mb-2">
            Discover the First Steps Towards Cyber Protection
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {whereToStart.map((item, idx) => (
              <div className="flex justify-center items-center" key={idx}>
                <FeaturedCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  color="primary"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SecurityInsightsSection />
      <ManagedServices />
      <ExpertServices />
      <WhyChooseCyberassured className="bg-muted" />
      <CustomerPledges />
    </section>
  );
}
