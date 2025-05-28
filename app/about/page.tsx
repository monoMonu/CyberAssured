import HeroBanner from '@/components/HeroBanner'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { FaAward, FaChartLine, FaGraduationCap, FaHandshake, FaLightbulb, FaLock } from 'react-icons/fa';

function page() {

   const cards = [
      {
         title: "Security First",
         description:
            "We prioritize the security and privacy of our clients' data and systems above all else, implementing the highest standards of protection in everything we do.",
         icon: <FaLock className="text-4xl text-indigo-600 mb-4 bg-indigo-100 rounded-full p-2" />,
      },
      {
         title: "Trusted Partnership",
         description:
            "We build long-term relationships based on trust, transparency, and mutual success, serving as strategic advisors rather than just service providers.",
         icon: <FaHandshake className="text-4xl text-yellow-500 mb-4 bg-yellow-100 rounded-full p-2" />,
      },
      {
         title: "Innovation",
         description:
            "We continuously evolve our solutions and approaches, leveraging cutting-edge technology and emerging best practices to stay ahead of threats.",
         icon: <FaLightbulb className="text-4xl text-green-600 mb-4 bg-green-100 rounded-full p-2" />,
      },
      {
         title: "Results-Driven",
         description:
            "We focus on delivering measurable outcomes that directly impact our clients' security posture and business objectives.",
         icon: <FaChartLine className="text-4xl text-purple-600 mb-4 bg-purple-100 rounded-full p-2" />,
      },
      {
         title: "Continuous Learning",
         description:
            "We invest in ongoing education and professional development to ensure our team stays current with the latest threats and technologies.",
         icon: <FaGraduationCap className="text-4xl text-red-600 mb-4 bg-red-100 rounded-full p-2" />,
      },
      {
         title: "Excellence",
         description:
            "We maintain the highest standards of quality in our services, deliverables, and client interactions, never compromising on excellence.",
         icon: <FaAward className="text-4xl text-cyan-600 mb-4 bg-cyan-100 rounded-full p-2" />,
      },
   ];

   return (
      <div>
         <HeroBanner
            imageUrl="/Image1.png"
            title="Cybersecurity Leadership That Delivers"
            subtitle="Founded by seasoned security professionals with decades of combined experience, CyberAssured transforms complex cybersecurity challenges into business enablers through intelligence-driven solutions and strategic expertise."
            ctaText2="Talk to us"
            link2="#socs"
         />
         <section className="bg-background text-foreground pt-20 pb-12 max-w-screen-xl mx-auto" id='story'>
            <div className="mx-auto px-4 md:px-8 lg:px-16 text-center space-y-5">
               <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  &quot;Our Story&quot;
               </h2>

               <div className="text-muted-foreground text-base text-center flex flex-col items-center gap-4">
                  <p>
                     CyberAssured was founded with a simple yet powerful vision: cybersecurity should enable business growth, not hinder it. Our journey began when our founders, seasoned security leaders with extensive enterprise experience, recognized the gap between traditional security approaches and the needs of modern businesses.
                  </p>
                  <p>
                     Today, we combine this hard-earned experience with cutting-edge technology partnerships to deliver security solutions that not only protect but also empower organizations to pursue their digital transformation goals with confidence.
                  </p>
                  <p>
                     Our approach is consultative rather than transactional. We believe in building long-term partnerships with our clients, serving as their trusted security advisors who understand their unique challenges and business context.
                  </p>
               </div>
            </div>
         </section>
         <section className="py-16 bg-muted" id='mission'>
            <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
               <h2 className="text-3xl md:text-5xl font-bold text-center mb-2 text-primary">
                  Mission & Vision
               </h2>
               <p className="text-center text-base text-muted-foreground mb-8">
                  Driving our commitment to cybersecurity excellence and innovation
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div
                     className="bg-background rounded-2xl shadow-xl py-8 px-6 flex flex-col items-center text-center border border-muted hover:border-secondary hover:shadow-2xl transition-shadow duration-300"
                  >
                     <span className='text-6xl pb-4'>{"🎯"}</span>
                     <h3 className="text-3xl font-semibold mb-2 text-foreground">Our Mission</h3>
                     <p className="text-muted-foreground text-base">
                        To empower organizations with intelligent, integrated cybersecurity solutions that transform security from a business constraint into a competitive advantage. We achieve this by combining deep technical expertise with strategic business understanding. delivering measurable outcomes that protect assets while enabling growth.
                     </p>
                  </div>
                  <div
                     className="bg-background rounded-2xl shadow-xl py-8 px-6 flex flex-col items-center text-center border border-muted hover:border-secondary hover:shadow-2xl transition-shadow duration-300"
                  >
                     <span className='text-6xl pb-4'>{"🔮"}</span>
                     <h3 className="text-3xl font-semibold mb-2 text-foreground">Our Vision</h3>
                     <p className="text-muted-foreground text-base">
                        To be the trusted cybersecurity partner that organizations turn to when they need more than technology-when they need strategic guidance, innovative solutions, and proven expertise to navigate an increasingly complex threat landscape while achieving their business objectives.
                     </p>
                  </div>
               </div>
            </div>
         </section>
         <section className="py-16" id='core-values'>
            <div className="container max-w-screen-xl mx-auto px-4">
               <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-primary drop-shadow">
                  Our Core Values
               </h2>
               <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-base">
                  The principles that guide every decision and define our commitment to excellence
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cards.map((card, idx) => (
                     <div
                        key={idx}
                        className="bg-background rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-muted hover:border-secondary hover:shadow-2xl transition-shadow duration-300"
                     >
                        {card.icon}
                        <h3 className="text-2xl font-semibold mb-2 text-foreground">{card.title}</h3>
                        <p className="text-muted-foreground">{card.description}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>
          <section className="pt-24 pb-20">
            <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
               <h2 className="text-3xl md:text-5xl font-bold text-center text-primary">
                  Ready to Partner with Us?
               </h2>
               <p className="text-center md:text-xl text-lg text-foreground/80 my-6">
                  Experience the difference that comes from working with cybersecurity professionals who understand both the technical challenges and business realities of modern security.   
               </p>
               <div className="flex mt-10 justify-center gap-6 flex-wrap">
                  <Link href={"/contact"}>
                     <Button className="secondary-btn">
                        Start A Conversation
                     </Button>
                  </Link>
                  <Link href={"/services/managed-services"}>
                     <Button className="primary-btn">
                        Explore Our Services
                     </Button>
                  </Link>
               </div>
            </div>
         </section>
      </div>
   )
}

export default page