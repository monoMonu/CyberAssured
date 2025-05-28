'use client';

import InsightCard from '@/components/InsightCard';

const insightsData = [
  {
    imageUrl: '/insight-2.jpg',
    category: 'Threat Landscape',
    title: 'The Strategic Guide to Selecting the Right SOC Managed Service Provider',
    date: '13th Jan 2022',
    link: '/insights/soc',
  },
  {
    imageUrl: '/compliance.jpg',
    category: '',
    title: "Compliance-Driven Security Operations: Why It’s No Longer Optional for Organizations",
    date: '13th Jan 2022',
    link: '/insights/compliance',
  },
  {
    imageUrl: '/insight-3.jpg',
    category: 'Threat Landscape',
    title: 'Understanding Industry-Standard Cybersecurity Frameworks: A Guide for Businesses',
    date: '13th Jan 2022',
    link: '/insights/phishing',
  },
];

const SecurityInsightsSection = () => {
  return (
    <section className="pb-16 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center py-10 text-primary">
          Security Insight
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {insightsData.map((insight, index) => (
            <InsightCard key={index} {...insight} />
          ))}
        </div>

        {/* View All Link - Optional */}
        {/* 
        <div className="mt-12 text-center">
          <Link
            href="/insights"
            className="group inline-block relative text-secondary text-base transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="px-2 py-1">View All Insights</span>
            <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-secondary transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full" />
          </Link>
        </div> 
        */}
      </div>
    </section>
  );
};

export default SecurityInsightsSection;
