import React from "react";
import {
  MessageSquare,
  Mail,
  MapPin,
  Send
} from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function GetInTouch() {
  return (
    <section className="min-h-screen bg-[#FFFDF9] py-20 px-4 font-sans relative">
      {/* Background decoration (optional, subtle dragon/pattern hint) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A2B49] mb-4 tracking-tight">
          Get In <span className="text-[#DA291C]">Touch</span>
        </h2>
        <p className="text-gray-500 text-lg">
          Ready to start your Mandarin journey? Contact us today and let's
          discuss your learning goals
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Left Column: Form */}
        <div className="lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <h3 className="text-2xl font-bold text-[#1A2B49] mb-8">
            Send Us a Message
          </h3>

          <form className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 block"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#DA291C] focus:ring-1 focus:ring-[#DA291C] outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 block"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#DA291C] focus:ring-1 focus:ring-[#DA291C] outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700 block"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+62 812 xxxx xxxx"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#DA291C] focus:ring-1 focus:ring-[#DA291C] outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700 block"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your learning goals..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#DA291C] focus:ring-1 focus:ring-[#DA291C] outline-none transition-all text-sm resize-y"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-[#DA291C] text-white rounded-xl py-4 font-semibold hover:bg-[#B82217] transition-colors duration-200 flex justify-center items-center gap-2 mt-2 shadow-sm"
            >
              <Send size={18} />
              Send Message via WhatsApp
            </button>
          </form>
        </div>

        {/* Right Column: Contact Info & Hours */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Contact Card (Red) */}
          <div className="bg-[#DA291C] text-white rounded-[2rem] p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl font-bold mb-8">Quick Contact</h3>

            <div className="space-y-8">
              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="font-bold mb-1">WhatsApp</p>
                  <p className="text-white/80 text-sm">+62 081268353504</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-bold mb-1">Email</p>
                  <p className="text-white/80 text-sm">
                    info@youhaomandarin.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold mb-1">Location</p>
                  <p className="text-white/80 text-sm">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            <hr className="border-white/20 my-8" />

            {/* Social Links */}
            <div>
              <p className="font-bold mb-4">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors rounded-full flex items-center justify-center"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors rounded-full flex items-center justify-center"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors rounded-full flex items-center justify-center"
                >
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Office Hours Card (White) */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex-1">
            <h3 className="text-xl font-bold text-[#1A2B49] mb-6">
              Office Hours
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 font-medium">
                  Monday - Friday
                </span>
                <span className="text-gray-500">9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 font-medium">Saturday</span>
                <span className="text-gray-500">10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 font-medium">Sunday</span>
                <span className="text-gray-500">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
