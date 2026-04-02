import React from "react";
import {
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

interface FooterLink {
  name: string;
  href: string;
}

interface ContactInfo {
  id: string;
  type: string;
  value: string;
  icon: React.ElementType;
}

const QUICK_LINKS: FooterLink[] = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#" },
  { name: "Courses", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Testimonials", href: "#" },
];

const OUR_COURSES: FooterLink[] = [
  { name: "Basic Chinese", href: "#" },
  { name: "Intermediate Chinese", href: "#" },
  { name: "Advanced Chinese", href: "#" },
  { name: "HSK Preparation", href: "#" },
  { name: "Business Chinese", href: "#" },
];

const CONTACT_INFO: ContactInfo[] = [
  {
    id: "whatsapp",
    type: "WhatsApp",
    value: "+62 081268353504",
    icon: MessageCircle,
  },
  {
    id: "email",
    type: "Email",
    value: "info@youhaomandarin.com",
    icon: Mail,
  },
  {
    id: "location",
    type: "Location",
    value: "Jakarta, Indonesia",
    icon: MapPin,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#223E84] text-white pt-16 pb-6 border-t-[6px] border-[#DA291C] font-sans relative overflow-hidden">
      {/* Optional: Subtle Panda/Bamboo Watermark placeholder for the bottom right */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[url('https://www.transparenttextures.com/patterns/bamboo.png')] opacity-10 pointer-events-none mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Description */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#F05A4A] text-2xl font-black tracking-wider">
                友好
              </span>
              <span className="text-xl font-bold">Youhao Mandarin</span>
            </div>
            <p className="text-blue-100/70 text-sm leading-relaxed mb-8 pr-4">
              Your trusted partner in mastering Mandarin Chinese. Excellence in
              language education since 2016.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-[#DA291C] transition-colors rounded-lg flex items-center justify-center"
              >
                <FaFacebook size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-[#DA291C] transition-colors rounded-lg flex items-center justify-center"
              >
                <FaInstagram size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-[#DA291C] transition-colors rounded-lg flex items-center justify-center"
              >
                <FaYoutube size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-100/70 hover:text-red-500 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Courses */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6 tracking-wide">
              Our Courses
            </h4>
            <ul className="space-y-4">
              {OUR_COURSES.map((course) => (
                <li key={course.name}>
                  <a
                    href={course.href}
                    className="text-blue-100/70 hover:text-red-500 text-sm transition-colors"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-6">
              {CONTACT_INFO.map((contact) => {
                const Icon = contact.icon;
                return (
                  <li key={contact.id} className="flex items-start gap-4">
                    <Icon
                      size={20}
                      className="text-[#F05A4A] shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-sm font-medium mb-1 text-white/90">
                        {contact.type}
                      </p>
                      <p className="text-sm text-blue-100/70">
                        {contact.value}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100/50">
          <p>© 2025 Youhao Mandarin. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
