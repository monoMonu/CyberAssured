import { Button } from "@/components/ui/button";
import CustomerPledges from "@/sections/CustomerPledge";
import ExpertServices from "@/sections/ExpertServices";
import HeroCarousel from "@/sections/HeroSec";
import ManagedServices from "@/sections/ManagedServices";
import SecurityInsightsSection from "@/sections/SecurityInsights";
import WhyChooseCyberassured from "@/sections/WhyChooseUs";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative w-full">
      <HeroCarousel />
      <section className="pt-24 pb-20">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-primary">
            Inteligent Secrity Operations
          </h2>
          <p className="text-center md:text-2xl text-lg text-muted-foreground my-6">
            Enterprice-grade cybersecurity that combines AI-driven threat detection, risk based vulnerability management, and 24/7 monitoring -  all delivered at a price that makes sense for growing businesses.
          </p>
          <div className="flex mt-10 justify-center gap-6 flex-wrap">
            <Link href={"#services"}>
              <Button className="secondary-btn">
                View Packages
              </Button>
            </Link>
            <Link href={"/services/managed-services"}>
              <Button className="primary-btn">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ManagedServices />
      <ExpertServices />
      <WhyChooseCyberassured />
      <CustomerPledges />
      <SecurityInsightsSection />
    </section>
  );
}
