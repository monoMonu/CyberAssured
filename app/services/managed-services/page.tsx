import HeroBanner from '@/components/HeroBanner'
import ManagedServicesCard from '@/components/ManagedServicesCard'
import React from 'react'


const roles = [
  {
    title: 'Security Engineer',
    description: 'Ensures your systems seamlessly integrate with ours so everything works as it should.',
  },
  {
    title: 'Service Delivery Manager',
    description: 'Oversees every element of your service from internal response process to coordination of different teams.',
  },
  {
    title: 'Threat Intelligence Specialist',
    description: 'Looks beyond your perimeter to seek and stop cyber threats before they cause harm.',
  },
  {
    title: 'Security Analyst',
    description: 'Your eyes and ears. Monitors, analyses and investigates your IT estate 24×7 – on deck, not on call.',
  },
  {
    title: 'Security Assurance Consultant',
    description: 'Answers the difficult questions and provides valuable guidance that supports your decisions.',
  },
  {
    title: 'Threat Hunter',
    description: 'Harnesses endpoint data response technologies to hunt down and quarantine suspicious internal threats.',
  },
];


function page() {

  return (
    <div>
      <HeroBanner
        imageUrl="/insight-1.jpg"
        title="Managed Security Services"
        subtitle="Protect your business universe with our flexible range of SOC services."
        ctaText="See SOCs"
        className="bg-background text-foreground"
        link="#socs"
      />
      <section className="bg-background text-foreground py-20">
        <div className="max-w-screen-xl mx-auto px-4 text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            &quot;Stellar protection <span className="text-primary">for every business&quot;</span>
          </h2>

          <div className="space-y-6 text-muted-foreground text-base">
            <p>
              Our <span className="text-foreground font-medium"> Managed Services</span> align you with a world-class
              <span className="text-foreground font-medium"> Security Operations Centre (SOC)</span> solutions tailored
              to your business and budget. Both tech and team work in tandem to solve security challenges, combining
              intelligent analysis with vigilance and real-time remediation. Proud to deliver affordable, enterprise-grade
              solutions, we have a <span className="text-foreground font-medium"> SOC for everyone.</span>
            </p>

            <p>
              Following an initial assessment of your IT environment, needs and budget we define a suite of
              <span className="text-foreground font-medium"> bespoke SOC offerings</span> that includes the right balance,
              number, and combination of solutions to meet your
              <span className="text-foreground font-medium"> business objectives</span>.
            </p>

            <p>
              To take your security to the next level, we’ve created a full suite of
              <span className="text-foreground font-medium"> Security Operations Centre </span>
              solutions for every need and budget.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-background text-foreground py-10" id='socs'>
        <div className="container max-w-screen-xl mx-auto px-4 text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            &quot;A SOC <span className="text-primary">for every challenge&quot;</span>
          </h2>

          <div className="space-y-6 text-muted-foreground text-base">
            <p>
              Security technology works perfectly when it knows what it’s looking for. But as cyber threats
              change, even state-of-the-art tools can be outwitted by something unfamiliar.
              That’s why your security needs <span className="text-foreground font-medium">the human touch</span>.
            </p>

            <p>
              Covering the fundamentals of your security, our standalone
              <span className="text-foreground font-medium"> SIEM service </span>
              helps you make the most of your existing security tools through best-in-class monitoring
              technology and a team of experts.
            </p>
          </div>
        </div>
        <ManagedServicesCard />


        <section className="py-20 px-4 md:px-8 text-center bg-background text-foreground">
          <div className="mx-auto max-w-screen-xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2.5 bg-secondary" />
              <div className="w-2 h-5 bg-secondary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              &quot;Technology advises, humans decide&quot;
            </h2>
            <p className="mx-auto mb-12 text-base">
              Humans know what’s normal and what isn’t when it counts. While technology plays a vital role in protecting your IT, it is up to humans to make the important decisions that ultimately make a difference. They are critical to interpreting and acting on technology’s advice, which is why they’re a huge part of what we do for you. The service you choose determines the team you’ll be working with, and could include:
            </p>

            <div className="grid md:grid-cols-2 gap-y-8 gap-x-12 text-left">
              {roles.map((role, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-secondary shrink-0" />
                  <p>
                    <span className="font-semibold text-secondary">{role.title}</span>{' '}
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </section>

    </div>
  )
}

export default page