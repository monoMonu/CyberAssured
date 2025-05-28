import ManagedServicesCard from '@/components/ManagedServicesCard'
import Link from 'next/link'
import React from 'react'

function ManagedServices() {
   return (
      <section className="py-8 max-w-screen-xl mx-auto">
         <div className="mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-primary">
               Comprehensive Security Capabilities
            </h2>
            <p className="text-l md:text-l text-center m-4 ">
               Three core pillars of cybersecurity excellence that protect, detect, and respond to modern threats
            </p>
            <ManagedServicesCard />
         </div>
         <div className="mt-8 text-center">
            <Link
               href="/contact"
               className="group inline-block relative text-secondary text-base transition-all duration-300 ease-in-out transform hover:scale-105"
            >
               <span className="px-2 py-1 text-primary">
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