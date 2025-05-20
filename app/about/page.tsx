import HeroBanner from '@/components/HeroBanner'
import ImageTextSplitSection from '@/components/ImageTextSplitSection'
import { Button } from '@/components/ui/button'
import WhyChooseCyberassured from '@/sections/WhyChooseUs'
import Link from 'next/link'
import React from 'react'

function page() {
   return (
      <div>
         <HeroBanner
            imageUrl="/insight-1.jpg"
            title="About CyberAssured"
            subtitle="We take care of your security"
            ctaText="Talk to us"
            link="#socs"
            color='secondary'
         />
         <section className="bg-background text-foreground py-20 max-w-screen-xl mx-auto">
            <div className="mx-auto px-4 text-center space-y-5">
               <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  &quot;Our mission&quot;
               </h2>

               <div className="text-muted-foreground text-base">
                  <p>
                     We exist to guide IT professionals away from the countless alerts and vulnerabilities that needlessly eat up their time, and towards a landscape of zero risks, zero cyber incidents and zero successful attacks. Through our tailored and affordable security services for organisations of all sizes, we replace fear, anxiety, distraction and lack of resource with confidence that resonates across a business. 
                  </p>
               </div>
               <Link href="/services/managed-services">
                  <Button className={`border-secondary border-2 hover:bg-secondary/100 cursor-pointer text-base`} variant={'outline'}>
                     Explore our services
                  </Button>
               </Link>
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
         />
         <WhyChooseCyberassured />
         <section className="bg-background text-foreground py-12 max-w-screen-xl mx-auto">
            <div className="mx-auto py-8 px-4 text-center space-y-5 bg-muted">
               <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  &quot;Get Started&quot;
               </h2>

               <div className="text-muted-foreground text-base">
                  <p>
                     We’re ready to join you wherever you are on your security journey – to help solve your challenges and provide peace of mind. Not sure where to start? Use our SOC Selector or Cyber Incident Calculator to identify your security needs and budget. Or simply get in touch with a security expert.
                  </p>
               </div>
               <Link href="/services/managed-services">
                  <Button className={`border-secondary border-2 hover:bg-secondary/100 cursor-pointer text-base`} variant={'outline'}>
                     Get in touch
                  </Button>
               </Link>
            </div>
         </section>
      </div>
   )
}

export default page