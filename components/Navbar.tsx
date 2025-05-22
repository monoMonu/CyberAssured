"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
   const [showServices, setShowServices] = useState(false);
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   return (
      <div className="mx-auto bg-card sticky top-0 z-50 shadow">
         <nav className="max-w-screen-xl w-full flex items-center justify-between px-4 md:px-8 h-20 mx-auto relative">
            <div className="text-3xl font-bold text-foreground">
               <Link href="/" className="flex items-center">
                  <span className="text-primary font-black">CyberAssured</span>
               </Link>
            </div>

            <div className="md:hidden">
               <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-foreground">
                  {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
               </button>
            </div>

            <div className="hidden md:flex gap-8 text-base font-medium text-foreground relative">
               <Link className="hover:text-primary py-3" href="/">Home</Link>
               <div
                  className="relative h-full py-3"
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => setShowServices(false)}
               >
                  <span className="hover:text-primary cursor-pointer">Services</span>
                  {showServices && (
                     <div className="absolute -left-44 top-8/12 mt-4 w-2xl shadow-xl bg-muted py-8 px-6 flex gap-6 z-50 transition-all">
                        <div className="w-1/2">
                           <h3 className="text-lg font-bold mb-2 text-primary">Managed services</h3>
                           <p className="text-sm text-muted-foreground mb-5">
                              Security tools alone are not enough to deliver the level of protection needed. True resilience requires human intervention.
                           </p>
                           <div className="pt-2">
                              <Link href="/services/managed-services">
                                 <Button variant={'outline'} className="border-2 hover:bg-primary hover:text-background">
                                    Managed Security Services
                                 </Button>
                              </Link>
                           </div>
                        </div>

                        <div className="w-1/2">
                           <h3 className="text-lg font-bold mb-2 text-primary">Expert services</h3>
                           <p className="text-sm text-muted-foreground mb-5">
                              Our Expert Services deliver rigorous assessments to identify weaknesses, enhance protections, or manage attack fallout.
                           </p>
                           <div className="pt-2">
                              <Link href="/services/expert-services">
                                 <Button variant={'outline'} className="border-2 hover:bg-primary hover:text-background">
                                    Expert Services
                                 </Button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  )}
               </div>
               <Link className="hover:text-primary py-3" href="/help-me-choose">Help me choose</Link>
               <Link className="hover:text-primary py-3" href="/resources">Resources</Link>
               <Link className="hover:text-primary py-3" href="/about">About</Link>
               <Link className="hover:text-primary py-3" href="/contact">Contact</Link>
            </div>
         </nav>

         {/* Mobile Menu */}
         <div
            className={cn(
               "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
               mobileMenuOpen ? "max-h-[500px]" : "max-h-0"
            )}
         >
            <div className="flex flex-col gap-4 px-6 py-4 text-base font-medium text-foreground">
               <Link className="hover:text-primary" href="/">Home</Link>
               <details className="group">
                  <summary className="cursor-pointer hover:text-primary">Services</summary>
                  <div className="mt-2 ml-4 space-y-2">
                     <Link href="/services/managed-services" className="block hover:text-primary">
                        Managed Security Services
                     </Link>
                     <Link href="/services/expert-services" className="block hover:text-primary">
                        Expert Services
                     </Link>
                  </div>
               </details>
               <Link className="hover:text-primary" href="/help-me-choose">Help me choose</Link>
               <Link className="hover:text-primary" href="/resources">Resources</Link>
               <Link className="hover:text-primary" href="/about">About</Link>
               <Link className="hover:text-primary" href="/contact">Contact</Link>
               <Link className="hover:text-primary" href="/">Home</Link>
            </div>
         </div>
      </div>
   );
}
