import InsightCard from "@/components/InsightCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const pledges = [
   {
      imageUrl: '/insight-1.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      title: "You've been breached! Now what?",
   },
   {
      imageUrl: '/insight-1.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      title: 'Dynamic email phishing campaign',
   },
   {
      imageUrl: '/insight-1.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      title: "You've been breached! Now what?",
   },
];

export default function CustomerPledges() {
   return (
      <section className="py-20 text-foreground">
         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Our Customer Pledge</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-sm">
               We’re confident in the services we provide, and we want you to be too. That’s why we offer the following pledge to every business considering onboarding us as their managed security service provider:
            </p>

            <div className="flex items-center justify-center gap-6 mx-auto">
               {pledges.map((insight, idx) => (
                  <Card key={idx} className="bg-card text-card-foreground shadow-lg rounded-none max-w-xs gap-0 p-0 pb-4 border-primary">
                     <CardHeader className="p-0">
                        <div className="relative w-full h-40 overflow-hidden">
                           <Image src={insight.imageUrl} alt={insight.title} layout="fill" objectFit="cover" />
                        </div>
                     </CardHeader>
                     <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground">{insight.text}</p>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </section>
   );
}
