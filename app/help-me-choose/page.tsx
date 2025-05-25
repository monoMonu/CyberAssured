import HeroBanner from '@/components/HeroBanner'
import SocForm from '@/sections/SOCHelpForm'
import React from 'react'

function page() {
   return (
      <div>
         <HeroBanner
            imageUrl="/expert-services-banner.jpg"
            title="For best-fit <br />protection, start here"
            subtitle="Which SOC solution is best suited to your business? Our simple tool will help you find out."
         />
         <section className="bg-background text-foreground py-20 max-w-screen-xl mx-auto">
            <div className="mx-auto px-4 text-center space-y-5">
               <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  &quot;Try our <span className="text-secondary">SOC Selector&quot;</span>
               </h2>

               <div className="text-muted-foreground text-base">
                  <p>
                     We provide a range of Security Operations Centre solutions for every business size, need and budget. But if you’re not yet sure which is right for your organisation, our SOC Selector will help you narrow down the options and find the best fit.   
                  </p>
               </div>
            </div>
         </section>
         <SocForm />
      </div>
   )
}

export default page