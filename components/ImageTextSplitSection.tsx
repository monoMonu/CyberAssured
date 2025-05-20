'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

interface ImageTextSplitSectionProps {
   title: string;
   description: string;
   linkText: string;
   linkHref: string;
   imageSrc: string;
   imageAlt?: string;
   reverse?: boolean; 
   bgColor?: string;
}

const ImageTextSplitSection: React.FC<ImageTextSplitSectionProps> = ({
   title,
   description,
   linkText,
   linkHref,
   imageSrc,
   imageAlt = '',
   reverse = false,
   bgColor = 'bg-muted',
}) => {
   return (
      <section className={`${bgColor} py-16 px-4 lg:px-8`}>
         <div
            className={`max-w-screen-xl mx-auto flex flex-col md:flex-row items-center lg:gap-8 md:gap-4 gap-8 ${reverse ? 'md:flex-row-reverse' : ''
               }`}
         >
            <div className="w-full md:w-1/2 sm:px-4">
               <div className="rounded-lg shadow-md overflow-hidden">
                  <Image
                     src={imageSrc}
                     alt={imageAlt}
                     width={800}
                     height={600}
                     className="w-auto h-80 object-cover"
                  />
               </div>
            </div>

            <div className="w-full md:w-1/2 sm:px-4 text-left">
               <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-secondary" />
                  <div className="w-2 h-5 bg-secondary" />
               </div>
               <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {title}
               </h2>
               <p className="text-muted-foreground text-base mb-6">
                  {description}
               </p>
               <Link
                  href={linkHref}
               >
                  <Button variant={'secondary'} className='text-background'>
                     {linkText}
                  </Button>
               </Link>
            </div>
         </div>
      </section>
   );
};

export default ImageTextSplitSection;
