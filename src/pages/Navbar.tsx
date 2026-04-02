import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-red-500">
                友好 <span className="text-blue-900">Youhao Mandarin</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#courses"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Courses
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Desktop Contact Button */}
            <button className="hidden sm:flex bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium items-center space-x-2 transition-colors">
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

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="text-gray-900 hover:text-red-500 block px-3 py-2 text-base font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-red-500 block px-3 py-2 text-base font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-red-500 block px-3 py-2 text-base font-medium transition-colors"
              >
                Courses
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-red-500 block px-3 py-2 text-base font-medium transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-red-500 block px-3 py-2 text-base font-medium transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-red-500 block px-3 py-2 text-base font-medium transition-colors"
              >
                Contact
              </a>

              {/* Mobile Contact Button */}
              <div className="px-3 py-2">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 transition-colors">
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
