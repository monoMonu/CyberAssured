'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

interface HeroBannerProps {
   imageUrl: string;
   title: string;
   subtitle: string;
   ctaText?: string;
   className?: string;
   link?: string;
   color?: string;
   link2?: string;
   ctaText2?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
   imageUrl,
   title,
   subtitle,
   ctaText,
   link,
   link2,
   ctaText2,
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
         <div className="max-w-5xl mx-auto relative z-20 text-left">
            <h1 className="text-4xl md:text-7xl max-w-3xl font-bold tracking-tight mb-5 leading-[1.1] text-background" dangerouslySetInnerHTML={{ __html: title }} />
            <p className="text-lg md:text-xl text-background/90 mb-6">
               {subtitle}
            </p>
            <div className="flex mt-10 gap-6 flex-wrap">
               {ctaText && link && (
                  <Link href={link}>
                     <Button className="secondary-btn">
                        {ctaText}
                     </Button>
                  </Link>
               )}
               {ctaText2 && link2 && (
                  <Link href={link2}>
                     <Button className="primary-btn">
                        {ctaText2}
                     </Button>
                  </Link>
               )}
            </div>
         </div>
      </section>
   );
};

export default HeroBanner;
