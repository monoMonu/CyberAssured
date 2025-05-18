'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';
import InsightCard from '@/components/InsightCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const insightsData = [
   {
      imageUrl: '/insight-1.jpg',
      category: 'Service Insights',
      title: "You've been breached! Now what?",
      date: '13th Jan 2022',
      link: '/insights/breached',
   },
   {
      imageUrl: '/insight-1.jpg',
      category: 'Threat Landscape',
      title: 'Dynamic email phishing campaign',
      date: '13th Jan 2022',
      link: '/insights/phishing',
   },
   {
      imageUrl: '/insight-1.jpg',
      category: 'Service Insights',
      title: "You've been breached! Now what?",
      date: '13th Jan 2022',
      link: '/insights/breached',
   },
   {
      imageUrl: '/insight-1.jpg',
      category: 'Threat Landscape',
      title: 'Dynamic email phishing campaign',
      date: '13th Jan 2022',
      link: '/insights/phishing',
   },
];

const SecurityInsightsSection = () => {
   const swiperRef = useRef(null);

   return (
      <section className="py-12 bg-background text-foreground">
         <div className="container mx-auto px-4 max-w-screen-xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center py-10 text-secondary">
               Security Insight
            </h2>

            <div className="relative mt-4">
               <Swiper
                  className='flex items-center justify-center h-full relative'
                  ref={swiperRef}
                  modules={[Navigation, Autoplay]}
                  spaceBetween={20}
                  loop={true}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  speed={700}
                  centeredSlides={true}
                  breakpoints={{
                     480: {
                        slidesPerView: 1,
                        centeredSlides: true
                     },
                     648: {
                        slidesPerView: 2,
                     },
                     800: {
                        slidesPerView: 3,
                     },
                  }}
               >
                  {insightsData.map((insight, index) => (
                     <SwiperSlide key={index} className='min-h-full grid place-items-center'>
                        <InsightCard {...insight} />
                     </SwiperSlide>
                  ))}
               </Swiper>

               <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
                  <button
                     className="bg-accent text-accent-foreground p-2 rounded-full"
                     onClick={() => (swiperRef.current as any).swiper.slidePrev()}
                     aria-label="Previous Slide"
                  >
                     <ChevronLeft size={28} />
                  </button>
               </div>

               <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
                  <button
                     className="bg-accent text-accent-foreground p-2 rounded-full"
                     onClick={() => (swiperRef.current as any).swiper.slideNext()}
                     aria-label="Next Slide"
                  >
                     <ChevronRight size={28} />
                  </button>
               </div>
            </div>

            <div className="mt-12 text-center">
               <Link
                  href="/insights"
                  className="group inline-block relative text-secondary text-base transition-all duration-300 ease-in-out transform hover:scale-105"
               >
                  <span className="px-2 py-1">
                     View All Insights
                  </span>
                  <span
                     className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-secondary transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"
                  />
               </Link>
            </div>
         </div>
      </section>
   );
};

export default SecurityInsightsSection;
