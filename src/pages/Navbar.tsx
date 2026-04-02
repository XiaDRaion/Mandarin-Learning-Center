import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-900">
                友好 <span className="text-red-500">Youhao Mandarin</span>
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#"
                className="text-gray-900 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Courses
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
