import React from 'react'
import FeaturedCard from './FeatureCard'


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

function ExpertServicesCard() {
   return (
      <div className="flex justify-center gap-x-2">
         {expertServices.map((item, idx) => (
            <div className="flex justify-center items-center max-w-screen-sm" key={idx}>
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

   )
}

export default ExpertServicesCard