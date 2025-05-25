'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';

interface ImageTextSplitSectionProps {
   id: string;
   title: string;
   description1: string;
   description2: string;
   linkText: string;
   linkHref: string;
   imageSrc: string;
   bullets?: string[];
   imageAlt?: string;
   reverse?: boolean; 
   bgColor?: string;
}

const ImageTextSplitSection: React.FC<ImageTextSplitSectionProps> = ({
   id,
   title,
   description1,
   description2,
   linkText,
   linkHref,
   imageSrc,
   bullets = [],
   imageAlt = '',
   reverse = false,
   bgColor = 'bg-muted',
}) => {
   return (
      <section className={`${bgColor} py-16 px-4 lg:px-8`} id={id}>
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
               <p className="text-foreground/80 text-base mb-5">
                  {description1}
               </p>
               <p className="text-foreground/80 text-base mb-5">
                  {description2}
               </p>
               {bullets.map((item, i) => (
                  <p key={i} className="flex items-start gap-2 text-foreground/80">
                     <span className='min-w-7 min-h-7'>
                        <CheckCircle size={20} className="text-green-500 mt-1" />
                     </span>
                     {item}
                  </p>
               ))}
               <Link
                  href={linkHref}
                  className='mt-6 inline-block'
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
