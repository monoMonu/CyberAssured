'use client';

import { Linkedin, Twitter, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-foreground pt-16 border-t bg-muted">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <Link href="/" passHref>
              <Image
                src="/logo.svg"
                alt="CyberAssured"
                height={75}
                width={200}
                className="invert"
              />
            </Link>

            <a
              href="tel:+971589788531"
              className="text-primary text-xl font-bold hover:text-secondary transition"
            >
              +971 02 020 2202
            </a>

            <a
              href="mailto:contact@cyberassured.ae"
              className="flex items-center gap-2 text-primary hover:text-secondary transition text-sm"
            >
              <Mail size={20} />
              contact@cyberassured.ae
            </a>

            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition cursor-pointer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition cursor-pointer"
              >
                <Twitter size={24} />
              </a>
            </div>

            {/* Office Addresses */}
            <div className="mt-6 text-sm space-y-2 text-gray-700">
              <p className="font-semibold text-primary">Office Location - UAE</p>
              <p>DUBAI INVESTMENT PARK FIRST,<br />DUBAI</p>

              <p className="mt-4 font-semibold text-primary">Office Location - UK</p>
              <p>WATFORD, HERTFORDSHIRE,<br />LONDON</p>
            </div>
          </div>

          {/* Right Nav Sections */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-12 text-center md:text-left">
            {/* Our Services */}
            <div>
              <h3 className="text-base font-semibold text-primary mb-3 border-b-2 border-primary inline-block">Our Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/managed-services" className="hover:underline">Managed Services</Link></li>
                <li><Link href="/services/expert-services" className="hover:underline">Expert Services</Link></li>
                <li><Link href="/services/expert-services/#brand-protection" className="hover:underline">Brand Protection</Link></li>
                <li><Link href="/services/expert-services/#zero-trust" className="hover:underline">Zero Trust Security</Link></li>
                <li><Link href="/services/expert-services/#compliance-risk" className="hover:underline">Compliance & Risk</Link></li>
                <li><Link href="/services/expert-services/#otit" className="hover:underline">OT/IT Security</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-base font-semibold text-primary mb-3 border-b-2 border-primary inline-block">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/resources" className="hover:underline">Blog</Link></li>
                <li><Link href="/help-me-choose" className="hover:underline">Help Me Choose</Link></li>
                <li><Link href="/resources" className="hover:underline">Case Studies</Link></li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h3 className="text-base font-semibold text-primary mb-3 border-b-2 border-primary inline-block">About Us</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about/#story" className="hover:underline">Our Story</Link></li>
                <li><Link href="/about/#mission" className="hover:underline">Mission & Vision</Link></li>
                <li><Link href="/about/#core-values" className="hover:underline">Core Values</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-base font-semibold text-primary mb-3 border-b-2 border-primary inline-block">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
                <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
                <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="/cookies" className="hover:underline">Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary w-full mt-10">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-background">
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-white transition">Cookies</Link>
          </div>
          <p className="mt-2 md:mt-0">&copy; 2024 CyberAssured</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
