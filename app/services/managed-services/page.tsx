import HeroBanner from '@/components/HeroBanner'
import { Button } from '@/components/ui/button';
import CVGBenefits from '@/sections/CVGBenefits';
import { CVGTiers } from '@/sections/CVGTiers';
import { CyberVGFeatures } from '@/sections/CyberVGFeatures';
import TechnologyBehindCVG from '@/sections/TechnologyBehindCVG';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function page() {

  return (
    <div>
      <HeroBanner
        imageUrl="/Image3.png"
        title="Cyber VanGuard Empowers Your IT Team"
        subtitle="CyberVanguard leverages Machine Learning and AI to analyze, correlate, detect, and respond to known and unknown threats without the additional time and expense of hiring and training a in-house security team."
        ctaText="Explore Service Tiers"
        link="#services"
        ctaText2="Request Demo"
        link2="#"
        className="bg-background text-foreground"
      />
      <section className="bg-background text-foreground pt-10 max-w-screen-xl mx-auto px-4 text-center">
        <Image
          src={"/CyberVanGuard.png"}
          width={1200}
          height={600}
          alt="Cyber VanGuard Logo"
          className='w-screen h-auto mx-auto'
        />
      </section>

      {/* <section className="bg-background text-foreground py-20">
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
      <section className="bg-muted text-foreground py-10" id='socs'>
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
          <ManagedServicesCard />
        </div>

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

      </section> */}

      <CyberVGFeatures />

      <CVGTiers />

      <TechnologyBehindCVG />

      <CVGBenefits />

      <section className="pt-24 pb-20">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-primary">
            Future-Proof Your Cybersecurity Posture
          </h2>
          <p className="text-center md:text-xl text-lg text-foreground/80 my-6">
            Siloed log data, costly infrastructure upgrades, and a lack of specialized staff keep many organizations from achieving full threat visibility. CyberAssured&apos;s security information and event management services empower IT teams to build a comprehensive cybersecurity posture that defends against current and future threats.
          </p>
          <div className="flex mt-10 justify-center gap-6 flex-wrap">
            <Link href={"/"}>
              <Button className="secondary-btn">
                Start Your Security Transformation
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default page