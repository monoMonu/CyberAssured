import ExpertServicesCard from '@/components/ExpertServicesCard';
import HeroBanner from '@/components/HeroBanner'
import ImageTextSplitSection from '@/components/ImageTextSplitSection';
import React from 'react'

function page() {

   return (
      <div>
         <HeroBanner
            imageUrl="/expert-services-banner.jpg"
            title="Expert Services"
            subtitle="Expert examination of your IT defences."
            ctaText="see assessments"
            className="bg-background text-foreground"
            link="#assessments"
            color='secondary'
         />
         <section className="bg-background text-foreground py-20">
            <div className="max-w-screen-xl mx-auto px-4 text-center space-y-10">
               <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  &quot;Rigorous assessments <span className="text-secondary">to refine protection&quot;</span>
               </h2>

               <div className="space-y-6 text-muted-foreground text-base">
                  <p>
                     Our expert services establish the effectiveness of your existing security defences and offer important guidance to help fortify them. When it comes to your security, it’s essential to stay on top of vulnerabilities to ensure your business remains protected. We’re ready to help your security live up to its full potential.
                  </p>
               </div>
            </div>
         </section>
         <section className="py-10 px-4 md:px-8 text-center bg-background text-foreground" id='assessments'>
            <div className="mx-auto max-w-screen-xl w-full">
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-2 h-2.5 bg-secondary" />
                  <div className="w-2 h-5 bg-secondary" />
               </div>
               <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  &quot;Assessment Overviews&quot;
               </h2>
               <p className="mx-auto mb-6 text-base">
                  Through rigorous assessments we interrogate your defences to spot weaknesses, build stronger security or help you manage the fallout of an attack   
               </p>
               <ExpertServicesCard />
            </div>
         </section>

         <ImageTextSplitSection
            title="Root and branch security review"
            description="Our expert services consist of several assessments that evaluate your IT security. Whether spotlighting specific protections or conducting an entire analysis, we can be as focused or as in-depth as you like. We even offer critical response in the event of an emergency to help you ensure the problem never reoccurs."
            linkText="See example reports"
            linkHref="#"
            imageSrc="/insight-1.jpg"
            imageAlt="Expert Services"
            reverse={false}
         />
         <ImageTextSplitSection
            title="Root and branch security review"
            description="Our expert services consist of several assessments that evaluate your IT security. Whether spotlighting specific protections or conducting an entire analysis, we can be as focused or as in-depth as you like. We even offer critical response in the event of an emergency to help you ensure the problem never reoccurs."
            linkText="See example reports"
            linkHref="#"
            imageSrc="/insight-1.jpg"
            imageAlt="Expert Services"
            reverse={true}
            bgColor='bg-background'
         />

      </div>
   )
}

export default page