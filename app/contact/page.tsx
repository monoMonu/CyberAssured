import ContactForm from '@/components/Contact-Form'
import HeroBanner from '@/components/HeroBanner'
import React from 'react'

function page() {
   return (
      <div>
         <HeroBanner
            imageUrl="/expert-services-banner.jpg"
            title="For best-fit <br />protection, start here"
            subtitle="Which SOC solution is best suited to your business? Our simple tool will help you find out."
            color='secondary'
         />
         <ContactForm />
      </div>
   )
}

export default page