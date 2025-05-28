import HeroBanner from '@/components/HeroBanner'
import ImageTextSplitSection from '@/components/ImageTextSplitSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

function page() {

   return (
      <div>
         <HeroBanner
            imageUrl="/Image2.png"
            title="Specialized CyberSecurity Expertise"
            subtitle="Beyond traditional security solutions, we deliver specialized expertise in brand protection, zero trust architecture, regulatory compliance, and unified OT/IT security- helping organizations address their most complex security challenges."
            ctaText="Explore Our Expertise"
            link="#assessments"
            ctaText2="Discuss Your Needs"
            className="bg-background text-foreground"
            link2="/contact"
         />
         {/* <section className="bg-background text-foreground py-20">
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
         </section> */}

         <ImageTextSplitSection
            id="brand-protection"
            title="Brand Protection & Digital Risk Monitoring"
            description1="Your brand's digital twin is under constant attack. While most organizations focus on perimeter security, cybercriminals are exploiting your brand identity across social media, domain registrations, mobile apps, and dark web marketplaces."
            description2="Our comprehensive brand protection combines advanced threat intelligence with proactive monitoring to detect and neutralize threats before they damage your reputation or deceive your customers,"
            bullets={[
               "Dark web monitoring for brand mentions and leaked credentials", 
               "Domain spoofing detection and takedown services", 
               "Social media impersonation monitoring across all platforms", 
               "Mobile app cloning and trademark infringement", 
               "Executive impersonation and SEC attack prevention", 
               "Supply chain brand risk assessment and monitoring", 
               "Real-time threat intelligence with automated response", 
               "Comprehensive brand exposure reporting and analytics"
            ]}
            linkText="Protect Your Brand"
            linkHref="/contact"
            imageSrc="/Brand-Protection&Digital-Risk-Monitoring.png"
            imageAlt="Expert Services"
            reverse={true}
         />
         
         <ImageTextSplitSection
            id="zero-trust"
            title="Zero Trust Identity Security"
            description1="Traditional perimeter-based security models are obsolete in today's distributed work environment. Our Zero Trust Identity Security framework ensures that every user, device, and application is continuously verified-never trusted by default."
            description2="Protecting privileged access at scale with a converged identity platform trusted by 1500+ organizations worldwide, we implement comprehensive identity governance that adapts to your business needs."
            bullets={[
               "Privileged access management with just-in-time permissions", 
               "Multi-factor authentication across all enterprise systems", 
               "User and entity behavior analytics (UEBA) for anomaly detection", 
               "Adaptive authentication based on tisk context", 
               "Session monitoring and privileged credential rotation", 
               "Cloud identity integration across hybrid environmerita", 
               "Compliance reporting for regulatory frameworkes", 
               "Identity lifecycle management and governance"
            ]}
            linkText="Implement Zero Trust"
            linkHref="/contact"
            imageSrc="/Zero-Trust-Identity-Sec.png"
            imageAlt="Expert Services"
            reverse={false}
         />
         <ImageTextSplitSection
            id="compliance-risk"
            title="Compliance & Risk Assessment"
            description1="Navigate complex regulatory landscapes with confidence. Our compliance experts don't just help you check boxes -- we build security programs that actually reduce risk while meeting regulatory requirements efficiently,"
            description2="With extensive experience across multiple frameworks and industries, we translate regulatory complexity into actionable security implementations that protect your business and satisfy auditors."
            linkText="Secure Your Operations"
            linkHref="/contact"
            bullets={[
               "ISO 27001/27002 implementation and certification support",
               "GDPR compliance assessment and data protection strategies",
               "PCI DSS compliance for payment processing environments",
               "NIST Cybersecurity Framework alignment and maturity assessment",
               "Industry- specific compliance (HIPAA, SOK, FISMA]",
               "Risk assessment and business impact analysis",
               "Audit preparation and regulatory response support",
               "Continuous compliance monitoring and reporting"
            ]}
            imageSrc="/Compliance&Risk-Assessment.jpg"
            imageAlt="Access Your Compliance"
            reverse={true}
            bgColor='bg-background'
         />
         <ImageTextSplitSection
            id="otit"
            title="OT/IT Unified Security"
            description1="Bridge the gap between operational technology and information technology security, As industrial systems become increasingly connected, the convergence of OT and IT creates new attack vectors that traditional security approaches can't address."
            description2="Our unified security approach protects both your business systems and critical operational infrastructure with specialized expertise in industrial control systems, manufacturing processes, and connected loT environments."
            linkText="Secure Your Operations"
            linkHref="/contact"
            bullets={[
               "Industrial control system (ICS) security assessment",
               "SCADA system monitoring and protection",
               "loT device discovery, inventory, and security management",
               "Network segmentation between IT and OT environments",
               "Real-time monitoring of operational technology assets",
               "Safety system integrity verification and protection",
               "Incident response for operational disruptions",
               "Regulatory compliance for critical infrastructure",
            ]}
            imageSrc="/OT-IT-sec.png"
            imageAlt="Expert Services"
            bgColor='bg-background'
         />

         <section className="pt-24 pb-20">
            <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
               <h2 className="text-3xl md:text-5xl font-bold text-center text-primary">
                  Ready to Transform Your Security Posture?
               </h2>
               <p className="text-center md:text-xl text-lg text-foreground/80 my-6">
                  Our specialized expertise goes beyond traditional cybersecurity. We deliver strategic security solutions that protect your brand, secure your identities, ensure compliance, and unify your IT and OT environments.   
               </p>
               <div className="flex mt-10 justify-center gap-6 flex-wrap">
                  <Link href={"/contact"}>
                     <Button className="secondary-btn">
                        Schedule Expert Consultation
                     </Button>
                  </Link>
                  <Link href={"/services/managed-services"}>
                     <Button className="primary-btn">
                        View Our Packages
                     </Button>
                  </Link>
               </div>
            </div>
         </section>

      </div>
   )
}

export default page