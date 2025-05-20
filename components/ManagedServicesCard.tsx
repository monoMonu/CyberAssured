import FeaturedCard from '@/components/FeatureCard'
import React from 'react'

function ManagedServicesCard() {

   const managedServicesCard = [
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
      <div className="flex flex-wrap justify-center gap-5 mt-8">
         {managedServicesCard.map((item, idx) => (
            <FeaturedCard
               key={idx}
               title={item.title}
               description={item.description}
               image={item.image}
               cta={item.cta}
               color='primary'
            />
         ))}
      </div>
   )
}

export default ManagedServicesCard