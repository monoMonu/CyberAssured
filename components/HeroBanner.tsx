'use client';

import React from 'react';
import Link from 'next/link';

interface HeroBannerProps {
   imageUrl: string;
   title: string;
   subtitle: string;
   ctaText: string;
   className?: string;
   link?: string;
   color?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
   imageUrl,
   title,
   subtitle,
   ctaText,
   link,
   color='primary',
}) => {
   return (
      <section
         className={'w-full py-20 px-4 bg-background text-foreground relative'}
         style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         }}
      >
         <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-1"></div>
         <div className="max-w-4xl mx-auto relative z-20 text-left">
            <h1 className="text-4xl md:text-6xl max-w-2xl font-bold tracking-tight mb-3 leading-[1.1] text-background">
               {title}
            </h1>
            <p className="text-lg md:text-xl text-background/90 mb-6">
               {subtitle}
            </p>
            {ctaText && link && (
               <Link href={link}>
                  <button
                     className={`bg-${color} text-primary-foreground px-6 py-3 text-base rounded-lg font-medium hover:bg-${color}/90 transition-colors cursor-pointer`}
                  >
                     {ctaText}
                  </button>
               </Link>
            )}
         </div>
      </section>
   );
};

export default HeroBanner;
