import React from 'react'

function page() {
  return (
    <div>
      <section className="bg-background text-foreground py-16">
        <div className="container max-w-5xl mx-auto px-4 text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Stellar protection <span className="text-primary">for every business</span>
          </h2>

          <div className="space-y-6 text-muted-foreground text-base md:text-lg">
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

            <p>
              To take your security to the next level, we’ve created a full suite of
              <span className="text-foreground font-medium"> Security Operations Centre </span>
              solutions for every need and budget.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default page