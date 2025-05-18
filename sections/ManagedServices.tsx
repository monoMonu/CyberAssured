import FeaturedCard from '@/components/FeatureCard'
import Link from 'next/link'
import React from 'react'

function ManagedServices() {

   const managedServices = [
      {
         title: 'Tropical Shirts',
         description: 'Breezy and bold summer patterns. Breezy and bold summer patterns. Breezy and bold summer patterns.',
         image: '/cyber-incident-calculator-icon.svg',
         cta: 'Essential SOC\'s',
         color: 'primary',
      },
      {
         title: 'Beach Footwear',
         description: 'Flip-flops, sandals and more for the beach. Breezy and bold summer patterns. Breezy and bold summer patterns.',
         image: '/cyber-incident-calculator-icon.svg',
         cta: 'Professional SOC\'s',
         color: 'primary',
      },
      {
         title: 'Beach Footwear',
         description: 'Flip-flops, sandals and more for the beach. Breezy and bold summer patterns. Breezy and bold summer patterns.',
         image: '/cyber-incident-calculator-icon.svg',
         cta: 'Enterprise SOC\'s',
         color: 'primary',
      },
      {
         title: 'Beach Footwear',
         description: 'Flip-flops, sandals and more for the beach. Breezy and bold summer patterns. Breezy and bold summer patterns.',
         image: '/cyber-incident-calculator-icon.svg',
         cta: 'Defender SOC\'s',
         color: 'primary',
      },
      {
         title: 'Beach Footwear',
         description: 'Flip-flops, sandals and more for the beach. Breezy and bold summer patterns. Breezy and bold summer patterns.',
         image: '/cyber-incident-calculator-icon.svg',
         cta: 'Attacker SOC\'s',
         color: 'primary',
      },
   ]

   return (
      <section className="py-16 bg-muted">
         <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-primary">
               Managed Services
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
               {managedServices.map((item, idx) => (
                  <div className="flex justify-center items-center max-w-sm" key={idx}>
                     <FeaturedCard
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        cta={item.cta}
                        color='primary'
                     />
                  </div>
               ))}
            </div>
         </div>
         <div className="mt-12 text-center">
            <Link
               href="/insights"
               className="group inline-block relative text-secondary text-base transition-all duration-300 ease-in-out transform hover:scale-105"
            >
               <span className="px-2 py-1">
                  Need help finding your SOC ?
               </span>
               <span
                  className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-secondary transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"
               />
            </Link>
         </div>

      </section>
   )
}

export default ManagedServices