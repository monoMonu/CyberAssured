import FeaturedCard from '@/components/FeatureCard'
import Link from 'next/link'
import React from 'react'

function ExpertServices() {

   const expertServices = [
      {
         title: 'Tropical Shirts',
         description: 'Breezy and bold summer patterns. Breezy and bold summer patterns. Breezy and bold summer patterns.',
         image: '/cyber-incident-calculator-icon.svg',
         cta: 'Essential SOC\'s',
      },
      {
         title: 'Beach Footwear',
         description: 'Flip-flops, sandals and more for the beach. Breezy and bold summer patterns. Breezy and bold summer patterns.',
         image: '/cyber-incident-calculator-icon.svg',
         cta: 'Professional SOC\'s',
      },
      {
         title: 'Beach Footwear',
         description: 'Flip-flops, sandals and more for the beach. Breezy and bold summer patterns. Breezy and bold summer patterns.',
         image: '/cyber-incident-calculator-icon.svg',
         cta: 'Enterprise SOC\'s',
      },
   ]

   return (
      <section className="py-16 bg-background">
         <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-secondary">
               Expert Services
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
               {expertServices.map((item, idx) => (
                  <div className="flex justify-center items-center max-w-sm" key={idx}>
                     <FeaturedCard
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        cta={item.cta}
                        color='secondary'
                     />
                  </div>
               ))}
            </div>
         </div>
         <div className="mt-12 text-center">
            <Link
               href="/insights"
               className="group inline-block relative text-primary text-base transition-all duration-300 ease-in-out transform hover:scale-105"
            >
               <span className="px-2 py-1">
                  Need help finding your SOC ?
               </span>
               <span
                  className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"
               />
            </Link>
         </div>

      </section>
   )
}

export default ExpertServices