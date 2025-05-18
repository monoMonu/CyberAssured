'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const sliderImages = [
   { id: 1, src: '/lone-tree.jpg', alt: 'Promotional image for summer sale showing summer vibes' },
   { id: 2, src: '/insight-1.jpg', alt: 'Promotional image showcasing cool products on sale' },
   { id: 3, src: '/insight-1.jpg', alt: 'Promotional image with a beach theme for the sale' },
   { id: 4, src: '/insight-1.jpg', alt: 'Promotional image highlighting hot deals available' },
   { id: 5, src: '/insight-1.jpg', alt: 'Promotional image indicating limited stock for sale items' },
];

const HomeHeroBGSlider = () => {
   const swiperRef = useRef<any>(null);

   return (
      <section className="relative h-[80vh] w-full overflow-hidden text-primary-foreground">
         <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{
            clickable: true,
            renderBullet: (index, className) => {
               return `<span class="${className} bg-red"> </span>`;
            }
            }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={800}
            className="h-full w-full"
         >
            {sliderImages.map((image) => (
               <SwiperSlide key={image.id}>
                  <div
                     className="relative h-full w-full bg-cover bg-center"
                     style={{ backgroundImage: `url(${image.src})` }}
                     role="img"
                     aria-label={image.alt}
                  >
                     {/* Overlay ONLY on the background */}
                     <div className="absolute inset-0 bg-foreground opacity-50 z-0" />

                     {/* Foreground Content */}
                     <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold">
                           Summer Sale is On!
                        </h1>
                        <p className="text-lg md:text-xl text-primary">
                           Up to 50% off on top brands
                        </p>
                        <Link href="/shop">
                           <Button className="bg-accent text-accent-foreground px-6 py-3">
                              Shop Now
                           </Button>
                        </Link>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>

         {/* Navigation Controls */}
         <button
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
            aria-label="Previous Slide"
            className="absolute z-20 left-4 top-1/2 -translate-y-1/2 bg-accent text-accent-foreground p-2 rounded-full shadow-md hover:opacity-90"
         >
            <ChevronLeft size={28} />
         </button>

         <button
            onClick={() => swiperRef.current?.swiper?.slideNext()}
            aria-label="Next Slide"
            className="absolute z-20 right-4 top-1/2 -translate-y-1/2 bg-accent text-accent-foreground p-2 rounded-full shadow-md hover:opacity-90"
         >
            <ChevronRight size={28} />
         </button>
      </section>
   );
};

export default HomeHeroBGSlider;
