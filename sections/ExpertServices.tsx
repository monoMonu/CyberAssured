import ExpertServicesCard from '@/components/ExpertServicesCard'
import FeaturedCard from '@/components/FeatureCard'
import Link from 'next/link'
import React from 'react'

function ExpertServices() {

   return (
      <section className="py-16 bg-background">
         <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-secondary">
               Expert Services
            </h2>
            <ExpertServicesCard />
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