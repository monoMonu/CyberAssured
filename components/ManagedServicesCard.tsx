import React from 'react'

function ManagedServicesCard() {
   const managedServicesCard = [
      {
         title: 'Defender',
         tier: 'Essential Protection',
         price: 'Monthly Price: $______',
         description: 'Foundational security for organizations taking their first steps toward comprehensive protection.',
         features: [
            '24/7 aiSIEM-CGuard monitoring and alerting',
            'Automated threat detection and response',
            'Monthly security posture reporting',
            'Basic security event logging and retention',
            '8x5 security analyst support'
         ],
         idealFor: 'Small businesses with limited IT infrastructure and basic compliance requirements.'
      },
      {
         title: 'Guardian',
         tier: 'Professional Protection',
         price: 'Monthly Price: $______',
         description: 'Elevate your security posture with enhanced threat intelligence and expanded coverage.',
         features: [
            'All Defender features, plus:',
            'Enhanced aiSIEM-CGuard threat detection capabilities',
            'Cloud security monitoring',
            'User and entity behavior analytics (UEBA)',
            'Quarterly vulnerability assessments',
            '16x5 security analyst support',
            'Incident response planning'
         ],
         idealFor: 'Growing mid-sized businesses with increasing digital footprint and compliance obligations.'
      },
      {
         title: 'Sentinel',
         tier: 'Advanced Protection',
         price: 'Monthly Price: $______',
         description: 'Comprehensive coverage with advanced threat hunting capabilities for environments with elevated risk profiles.',
         features: [
            'All Guardian features, plus:',
            'Network traffic analysis',
            'Advanced endpoint detection and response',
            'Extended security event logging and retention (12 months)',
            'Proactive threat hunting (monthly)',
            '24x7 security analyst support',
            'Enhanced compliance reporting package'
         ],
         idealFor: 'Larger mid-sized organizations with complex environments and regulatory requirements.'
      },
      {
         title: 'Warden',
         tier: 'Premium Protection',
         price: 'Monthly Price: $______',
         description: 'Enterprise-grade security operations built for organizations requiring sophisticated defense capabilities.',
         features: [
            'All Sentinel features, plus:',
            'Advanced aiXDR implementation with custom rules',
            'IoT/OT security monitoring',
            'SERA AI integration for intelligent threat analysis',
            'Executive-level security reporting',
            'Bi-weekly threat hunting',
            'Incident response support with 4-hour SLA',
            'Dedicated security success manager'
         ],
         idealFor: 'Large organizations with substantial digital assets and specific security requirements.'
      },
      {
         title: 'Sovereign',
         tier: 'Enterprise Protection',
         price: 'Monthly Price: $______',
         description: 'The ultimate in IT protection with bespoke, premium service delivering proactive cyber threat hunting, analysis, and remediation in real-time.',
         features: [
            'All Warden features, plus:',
            'Full aiXDR implementation with tailored use cases',
            'aiSecurity Score360 integration for comprehensive reporting',
            'Custom security engineering',
            'Weekly threat hunting',
            'Red team simulations (quarterly)',
            'Annual security roadmap planning',
            '1-hour incident response SLA',
            'Executive threat briefings'
         ],
         idealFor: 'Large enterprises with substantial digital assets and high-level security demands.'
      },
   ]

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 text-left">
         {managedServicesCard.map((pkg, idx) => (
            <div
               key={idx}
               className="relative flex flex-col justify-between h-full bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-[1.02]"
            >
               {/* Tier Badge */}
               <div className="absolute top-4 right-4 bg-[var(--secondary)] text-[var(--secondary-foreground)] text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {pkg.tier}
               </div>

               {/* Title */}
               <h3 className="text-2xl font-extrabold text-[var(--primary)] mb-2">
                  🛡️ {pkg.title}
               </h3>

               {/* Price */}
               <p className="text-sm text-[var(--muted-foreground)] font-medium mb-3">
                  {pkg.price}
               </p>

               {/* Description */}
               <p className="text-[var(--foreground)] mb-4">
                  {pkg.description}
               </p>

               {/* Features List */}
               <ul className="mb-4 list-disc list-inside space-y-1 text-sm text-[var(--foreground)]">
                  {pkg.features.map((feature, i) => (
                     <li key={i}>✅ {feature}</li>
                  ))}
               </ul>

               {/* Ideal for */}
               <p className="italic text-sm text-[var(--muted-foreground)]">
                  Ideal for: {pkg.idealFor}
               </p>
            </div>
         ))}
      </div>
   )
}

export default ManagedServicesCard
