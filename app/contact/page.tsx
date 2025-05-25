import ContactForm from '@/components/Contact-Form'
import HeroBanner from '@/components/HeroBanner'
import React from 'react'

function page() {
   return (
      <div>
         <HeroBanner
            imageUrl="/expert-services-banner.jpg"
            title="Ready to strengthen your security posture?"
            subtitle="Contact our experts today for a comprehensive security assessment and discover how we can help protect what matters most to your organization."
         />
         <ContactForm />
      </div>
   )
}

export default page