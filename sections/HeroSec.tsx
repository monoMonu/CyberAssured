'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const sliders = [
   { id: 1, src: '/SOC.mp4', alt: 'Promotional slider for SOC' },
   { id: 2, src: '/Brand-Protection.mp4', alt: 'Promotional slider for brand protection' },
   { id: 3, src: '/ZeroTrust1.mp4', alt: 'Promotional slider for identity management' },
   { id: 4, src: '/Vlun1.mp4', alt: 'Promotional slider for vulnerability management' },
   { id: 5, src: '/OTITSec.mp4', alt: 'Promotional slider for OT/IT security' },
];

const HomeHeroBGSlider = () => {
   const swiperRef = useRef<any>(null);

   return (
      <section className="relative max-h-screen w-full overflow-hidden text-primary-foreground">
         <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{
               clickable: true,
               renderBullet: (index, className) => {
                  return `<span class="${className} rounded-full w-2.5 h-2.5 inline-block"></span>`;
               }
            }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={800}
            className="h-[calc(100vh-160px)] mt-10 w-full relative"
         >
            {sliders.map((slider) => (
               <SwiperSlide key={slider.id}>
                  <div
                     className="relative h-full mx-auto"
                     role="img"
                     aria-label={slider.alt}
                  >
                     {slider.src.endsWith('.mp4') ? (
                        <video
                           src={slider.src}
                           autoPlay
                           loop
                           muted
                           className="relative h-full mx-auto"
                        />
                     ) : (
                        <div
                           className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                           style={{ backgroundImage: `url(${slider.src})` }}
                        />
                     )}
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


// 'use client';

// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay, Pagination } from 'swiper/modules';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/autoplay';
// import 'swiper/css/pagination';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

// const sliders = [
//    {
//       id: 1,
//       src: '/lone-tree.jpg',
//       alt: 'Promotional slider for summer sale showing summer vibes' ,
//       title: "Not all heroes wear capes",
//       subtitle: "Imagine. Zero riska, zero vulnerabilities, and zero successful attacks",
//       cta: "Cyber Zero",
//    },
//    {
//       id: 2,
//       src: '/insight-1.jpg',
//       alt: 'Promotional slider showcasing cool products on sale',
//       title: "Not all heroes wear capes",
//       subtitle: "Imagine. Zero riska, zero vulnerabilities, and zero successful attacks",
//       cta: "Cyber Zero",
//    },
//    {
//       id: 3,
//       src: '/insight-1.jpg',
//       alt: 'Promotional slider with a beach theme for the sale',
//       title: "Not all heroes wear capes",
//       subtitle: "Imagine. Zero riska, zero vulnerabilities, and zero successful attacks",
//       cta: "Cyber Zero",
//    },
//    {
//       id: 4,
//       src: '/insight-1.jpg',
//       alt: 'Promotional slider highlighting hot deals available',
//       title: "Not all heroes wear capes",
//       subtitle: "Imagine. Zero riska, zero vulnerabilities, and zero successful attacks",
//       cta: "Cyber Zero",
//    },
//    {
//       id: 5,
//       src: '/insight-1.jpg',
//       alt: 'Promotional slider indicating limited stock for sale items',
//       title: "Not all heroes wear capes",
//       subtitle: "Imagine. Zero riska, zero vulnerabilities, and zero successful attacks",
//       cta: "Cyber Zero",
//    },
// ];

// const HomeHeroBGSlider = () => {
//    const swiperRef = useRef<any>(null);

//    return (
//       <section className="relative h-[80vh] w-full overflow-hidden text-primary-foreground">
//          <Swiper
//             ref={swiperRef}
//             modules={[Navigation, Autoplay, Pagination]}
//             spaceBetween={0}
//             slidesPerView={1}
//             pagination={{
//             clickable: true,
//             renderBullet: (index, className) => {
//                return `<span class="${className} bg-red"> </span>`;
//             }
//             }}
//             loop={true}
//             autoplay={{ delay: 5000, disableOnInteraction: false }}
//             speed={800}
//             className="h-full w-full"
//          >
//             {sliders.map((slider) => (
//                <SwiperSlide key={slider.id}>
//                   <div
//                      className="relative h-full w-full bg-cover bg-center"
//                      style={{ backgroundImage: `url(${slider.src})` }}
//                      role="img"
//                      aria-label={slider.alt}
//                   >
//                      {/* Overlay ONLY on the background */}
//                      <div className="absolute inset-0 bg-foreground opacity-50 z-0" />

//                      {/* Foreground Content */}
//                      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 space-y-6">
//                         <h1 className="text-4xl md:text-7xl font-bold">
//                            {slider.title}
//                         </h1>
//                         <p className="text-lg md:text-2xl">
//                            {slider.subtitle}
//                         </p>
//                         <Link href="/shop">
//                            <Button>
//                               {slider.cta}
//                            </Button>
//                         </Link>
//                      </div>
//                   </div>
//                </SwiperSlide>
//             ))}
//          </Swiper>

//          {/* Navigation Controls */}
//          <button
//             onClick={() => swiperRef.current?.swiper?.slidePrev()}
//             aria-label="Previous Slide"
//             className="absolute z-20 left-4 top-1/2 -translate-y-1/2 bg-accent text-accent-foreground p-2 rounded-full shadow-md hover:opacity-90"
//          >
//             <ChevronLeft size={28} />
//          </button>

//          <button
//             onClick={() => swiperRef.current?.swiper?.slideNext()}
//             aria-label="Next Slide"
//             className="absolute z-20 right-4 top-1/2 -translate-y-1/2 bg-accent text-accent-foreground p-2 rounded-full shadow-md hover:opacity-90"
//          >
//             <ChevronRight size={28} />
//          </button>
//       </section>
//    );
// };

// export default HomeHeroBGSlider;

