"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [showServices, setShowServices] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
   setMounted(true);

   const handleScroll = () => {
      setScrolled(window.scrollY > 200);
   };
   window.addEventListener("scroll", handleScroll);
   handleScroll();
   return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const isScrolled = mounted && scrolled;



  return (
      <div
      className={cn(
         "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
         isScrolled
            ? "bg-white shadow-md backdrop-blur-md"
            : "bg-transparent shadow-none"
      )}
      >
      <nav
         className={cn(
            "max-w-screen-xl w-full flex items-center justify-between px-4 md:px-8 h-20 mx-auto relative",
            isScrolled ? "text-black" : "text-white"
         )}
      >
         {/* logo */}
         <Link href="/" className="flex items-center font-bold text-2xl">
            <Image
            src="/logo_only.png"
            alt="CyberAssured Logo"
            width={40}
            height={40}
            className="object-contain m-2"
            priority
            />
            Cyber
            <span className="text-[#0FB5FE] font-bold text-2xl ml-1">Assured</span>
         </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-base font-medium text-foreground relative">
          <Link 
          className={cn(
            "hover:text-primary py-3",
            isScrolled ? "text-black" : "text-white"
         )}
          href="/">Home</Link>
          <div
            className="relative h-full py-3"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <span
               className={cn(
               "hover:text-primary cursor-pointer",
               isScrolled ? "text-black" : "text-white"
            )}>Services</span>
            {showServices && (
              <div className="absolute -left-44 top-full mt-4 w-2xl shadow-xl bg-background py-8 px-6 flex gap-6 z-50">
                <div className="w-1/2">
                  <h3 className="text-lg font-bold mb-2 text-primary">
                    Managed services
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    Security tools alone are not enough to deliver the level of protection needed.
                  </p>
                  <Link href="/services/managed-services">
                    <Button variant="outline" className="border-2 hover:bg-primary hover:text-background">
                      Managed Security Services
                    </Button>
                  </Link>
                </div>
                <div className="w-1/2">
                  <h3 className="text-lg font-bold mb-2 text-primary">Expert services</h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    Our Expert Services deliver rigorous assessments to identify weaknesses and manage risk.
                  </p>
                  <Link href="/services/expert-services">
                    <Button variant="outline" className="border-2 hover:bg-primary hover:text-background">
                      Expert Services
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link 
          className={cn(
            "hover:text-primary py-3",
            isScrolled ? "text-black" : "text-white"
         )} href="/help-me-choose">Help me choose</Link>
          <Link className={cn(
            "hover:text-primary py-3",
            isScrolled ? "text-black" : "text-white"
         )} href="/resources">Resources</Link>
          <Link className={cn(
            "hover:text-primary py-3",
            isScrolled ? "text-black" : "text-white"
         )} href="/about">About</Link>
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
              <Link href="/services/managed-services" className="block hover:text-primary">Managed Security Services</Link>
              <Link href="/services/expert-services" className="block hover:text-primary">Expert Services</Link>
            </div>
          </details>
          <Link className="hover:text-primary" href="/help-me-choose">Help me choose</Link>
          <Link className="hover:text-primary" href="/resources">Resources</Link>
          <Link className="hover:text-primary" href="/about">About</Link>
        </div>
      </div>
    </div>
  );
}
