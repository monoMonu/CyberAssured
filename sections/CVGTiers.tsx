import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const serviceData = [
  {
    title: 'CyberVanguard Edge',
    description: 'Let us manage your critical IT systems and lower your IT costs. Your firewall is the gate for all traffic moving in and out of your network. CyberVanguard Edge helps you achieve increased threat visibility by analyzing and correlating the logs produced by your firewall.',
    bullets: [
      'Correlate events from Edge firewall',
      'Provide alerts and reports',
      'Historically retain alerts (30 days)',
      'Auto-remediate alerts at the firewall',
      'True ML/AI firewall SIEM platform',
      'Real-time analysis of logs and alerts via ML/AI',
      'Reduces MTTR',
      'Threat model knowledge base updated daily by 40 NSA, Honeypot, and industry feeds',
    ],
  },
  {
    title: 'CyberVanguard Insights',
    description: 'CyberVanguard Insights takes threat monitoring and detection to the next level of visibility. By analyzing two additional priority sources of log data from your network in addition to the firewall, we can create a more comprehensive view of threats that would otherwise go unnoticed.',
    bullets: [
      'Correlate events from your firewall and 2 additional or 3rd party log/flow streams',
      'Identify compromised user credentials/insider threat (AD required)',
      'Identify suspicious user account creation (AD required)',
      'Detect suspicious lateral movement in a business environment',
      'Auto-remediate alerts at active directory',
    ],
  },
  {
    title: 'CyberVanguard 360',
    description: 'CyberVanguard 360 has you covered, from your user endpoints to wireless APs to switches. We collect and correlate data streams from all relevant sources in your environment so that you have a 360-degree view of your security operations center in action.',
    bullets: [
      'True 360° view of the network',
      'Correlate events from ALL log and flow streams',
      'Ingest logs and flows directly from endpoints',
      'Comprehensive threat visibility across entire infrastructure',
    ],
  },
];

export const CVGTiers = () => {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-12">
          CyberVanguard Service Tiers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {serviceData.map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md bg-background gap-3">
              <CardHeader>
                <CardTitle className="text-2xl text-primary font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-foreground/80 mb-4">
                    {service.description}
                  </p>
                  {service.bullets.map((item, i) => (
                    <p key={i} className="flex items-start gap-2 text-foreground/80">
                      <span className='min-w-7 min-h-7'>
                        <CheckCircle size={20} className="text-green-500 mt-1" />
                      </span>
                      {item}
                    </p>
                  ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};