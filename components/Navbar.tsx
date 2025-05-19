// app/components/ui/navbar.tsx
"use client";
import Link from "next/link";

export default function Navbar() {
   return (
      <div className="mx-auto bg-card sticky top-0 z-50 shadow">
         <nav className="max-w-screen-xl w-full flex items-center justify-between px-4 md:px-8 py-5 mx-auto">
            <div className="text-3xl font-bold text-foreground">
               <span className="text-primary font-black">CyberAssured</span>
            </div>
            <div className="hidden md:flex gap-8 text-base font-medium text-foreground">
               <Link 
                  className="hover:text-primary"
                  href="#"
               >
                  Services
               </Link>
               <Link 
                  className="hover:text-primary"
                  href="#"
               >
                  Help me choose
               </Link>
               <Link 
                  className="hover:text-primary"
                  href="#"
               >
                  Resources
               </Link>
               <Link 
                  className="hover:text-primary"
                  href="#"
               >
                  About
               </Link>
               <Link 
                  className="hover:text-primary"
                  href="#"
               >
                  Contact
               </Link>
            </div>
         </nav>
      </div>
   );
}
