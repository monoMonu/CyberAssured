import { Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
   return (
      <footer className="bg-muted text-foreground pt-10 md:pt-12">
         <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-screen-xl mx-auto"> 
               <div className="flex flex-col items-center md:items-start text-center md:text-left px-8 lg:px-4">
                  <Link href="/" passHref>
                     <Image
                        src="/logo.svg"
                        alt="CyberAssured"
                        height={75}
                        width={200} 
                        className="mb-8 invert" 
                     />
                  </Link>
                  <a
                     href="tel:+1234567890" 
                     className="text-primary mb-6 text-xl font-bold hover:text-secondary transition-colors duration-300" 
                  >
                     +1 (234) 567-890
                  </a>
                  <div className="flex space-x-6 justify-center md:justify-start">
                     <a
                        href="https://www.linkedin.com/" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-primary hover:text-secondary transition-colors duration-300" 
                     >
                        <Linkedin size={28} />
                     </a>
                     <a
                        href="https://twitter.com/" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-primary hover:text-secondary transition-colors duration-300" 
                     >
                        <Twitter size={28} />
                     </a>
                  </div>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 col-span-2 gap-y-12 gap-x-8 md:gap-x-12 px-4 justify-center text-center"> 
                  <nav>
                     <h3 className="text-base font-semibold text-primary mb-5 border-b-2 border-primary pb-0.5 inline-block">Our Services</h3>
                     <ul className="space-y-1.5 mt-0"> 
                        <li><Link href="/managed-services" className="text-foreground hover:text-secondary text-sm hover:underline underline-offset-3">Managed Services</Link></li>
                        <li><Link href="/expert-services" className="text-foreground hover:text-secondary text-sm hover:underline underline-offset-3">Expert Services</Link></li>
                        <li><Link href="/consulting" className="text-foreground hover:text-secondary text-sm hover:underline underline-offset-3">Consulting</Link></li>
                        <li><Link href="/cybersecurity-audit" className="text-foreground hover:text-secondary text-sm hover:underline underline-offset-3">Cybersecurity Audit</Link></li>
                     </ul>
                  </nav>

                  <nav>
                     <h3 className="text-base font-semibold text-primary mb-5 border-b-2 border-primary pb-0.5 inline-block">Resources</h3>
                     <ul className="space-y-1.5 mt-0">
                        <li><Link href="/insights" className="text-foreground hover:text-secondary text-sm hover:underline underline-offset-3">Insights</Link></li>
                        <li><Link href="/blog" className="text-foreground hover:text-secondary text-sm hover:underline underline-offset-3">Blog</Link></li>
                        <li><Link href="/help-me-choose" className="text-foreground hover:text-secondary text-sm hover:underline underline-offset-3">Help Me Choose</Link></li>
                        <li><Link href="/case-studies" className="text-foreground hover:text-secondary text-sm hover:underline underline-offset-3">Case Studies</Link></li>
                     </ul>
                  </nav>

                  <nav>
                     <h3 className="text-base font-semibold text-primary mb-5 border-b-2 border-primary pb-0.5 inline-block">About Us</h3>
                     <ul className="space-y-1.5 mt-0">
                        <li><Link href="/about" className="text-foreground hover:text-secondary text-sm hover:underline underline-offset-3">About CyberAssured</Link></li>
                        <li><Link href="/our-team" className="text-foreground hover:text-secondary text-sm hover:underline underline-offset-3">Our Team</Link></li>
                        <li><Link href="/partners" className="text-foreground hover:text-secondary text-sm hover:underline underline-offset-3">Partners</Link></li>
                        <li><Link href="/contact" className="text-foreground hover:text-secondary text-sm hover:underline underline-offset-3">Contact</Link></li>
                     </ul>
                  </nav>

                  <nav>
                     <h3 className="text-base font-semibold text-primary mb-5 border-b-2 border-primary pb-0.5 inline-block">Support</h3>
                     <ul className="space-y-1.5 mt-0">
                        <li><Link href="/faq" className="text-foreground hover:text-secondary text-sm hover:underline underline-offset-3">FAQ</Link></li>
                        <li><Link href="/terms" className="text-foreground hover:text-secondary text-sm hover:underline underline-offset-3">Terms of Service</Link></li>
                        <li><Link href="/privacy-policy" className="text-foreground hover:text-secondary text-sm hover:underline underline-offset-3">Privacy Policy</Link></li>
                        <li><Link href="/cookies" className="text-foreground hover:text-secondary text-sm hover:underline underline-offset-3">Cookies</Link></li>
                     </ul>
                  </nav>
               </div>
            </div>

            <div className="mt-16 pt-5 border-t border-accent bg-secondary px-10">
               <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground space-y-4 max-w-screen-xl mx-auto">
                  <div>
                     <Link href="/privacy-policy" className="text-background hover:text-foreground transition-colors duration-200">Privacy Policy</Link>
                     <Link href="/cookies" className="text-background hover:text-foreground transition-colors duration-200 ml-6">Cookies</Link>
                  </div>

                  <p className="text-background pb-5">&copy; Copyright 2024 CyberAssured</p>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;