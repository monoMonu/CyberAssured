import React from 'react'
import {
  FolderLock,
  ShieldCheck,
  AlarmClock,
  CheckCircle2,
  LandPlot,
  Milestone
} from 'lucide-react' // Lucide icon components

function ManagedServicesCard() {
  const managedServicesCard = [
    {
      title: 'Proactive Defense',
      icon: 'ShieldCheck',
      badgeColor: 'from-blue-500 to-indigo-500',
      buttonText: 'Explore Defense Solutions',
      description:
        'Advanced threat detection and prevention through intelligent monitoring and risk-based security controls',
      features: [
        '24/7 Security Operations Center monitoring',
        'AI-powered threat detection and analysis',
        'Real-time vulnerability management',
        'Brand protection and digital risk monitoring',
        'Zero-trust architecture implementation',
        'Cloud security posture management',
      ],
      idealFor:
        'Small businesses with limited IT infrastructure and basic compliance requirements.',
    },
    {
      title: 'Rapid Response',
      icon: 'AlarmClock',
      badgeColor: 'from-purple-600 to-pink-500',
      buttonText: 'Learn About Response',
      description:
        'Expert-led incident response and security operations that minimize impact and accelerate recovery',
      features: [
        'Expert incident response and digital forensics',
        'Automated threat containment and remediation',
        'Crisis management and communication support',
        'Business continuity and disaster recovery',
        'Post-incident analysis and improvement',
        'Threat hunting and intelligence gathering',
      ],
      idealFor:
        'Growing mid-sized businesses with increasing digital footprint and compliance obligations.',
    },
    {
      title: 'Strategic Governance',
      icon: 'LandPlot',
      badgeColor: 'from-cyan-600 to-blue-600',
      buttonText: 'Explore Governance Options',
      description:
        'Comprehensive compliance management and strategic security guidance that aligns with business objectives',
      features: [
        'Regulatory compliance and audit support',
        'Risk assessment and management programs',
        'Security policy development and implementation',
        'Virtual CISO and strategic advisory services',
        'Security awareness training and culture building',
        'Third-party risk management and vendor assessments',
      ],
      idealFor:
        'Larger mid-sized organizations with complex environments and regulatory requirements.',
    },
  ]

  // Map of string -> actual Lucide component
  const IconMap = {
    FolderLock,
    ShieldCheck,
    AlarmClock,
    LandPlot
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
      {managedServicesCard.map((pkg, idx) => {

        const IconComponent = IconMap[pkg.icon as keyof typeof IconMap]

        return (
          <div
            key={idx}
            className="flex flex-col justify-between h-full rounded-xl border border-gray-200 shadow-lg bg-white transition-transform hover:scale-[1.01] overflow-hidden"
          >
            {/* Colored top bar */}
            <div
              className={`h-2 w-full bg-gradient-to-r ${pkg.badgeColor}`}
            ></div>

            {/* Card content */}
            <div className="p-6 flex flex-col justify-between h-full items-center text-center">
              {/* Title with icon */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2 justify-center">
                <IconComponent className="w-8 h-8 text-blue-600" />
                {pkg.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 italic mb-4">
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 text-sm text-gray-700 mb-4 text-left">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Milestone
                      size={16}
                      className="text-green-500 mt-[2px]"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="flex justify-center mt-4">
                <button
                  className={`bg-gradient-to-r ${pkg.badgeColor} text-white text-sm py-2 px-5 rounded-full shadow hover:opacity-90 transition`}
                >
                  {pkg.buttonText}
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ManagedServicesCard
