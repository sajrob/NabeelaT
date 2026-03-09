import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Navbar component for site navigation.
 */
const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  // Handle clicking outside of dropdown for mobile/desktop toggle variants
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    return `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
      ? "bg-primary text-white shadow-md shadow-primary/20"
      : "hover:bg-primary/70 text-base-content/80 hover:text-base-content"
      }`;
  };

  const getMobileLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    return `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${isActive
      ? "bg-primary text-white shadow-md shadow-primary/20"
      : "hover:bg-primary/70 text-base-content/80 hover:text-base-content"
      }`;
  };

  return (
    <nav className={`sticky top-0 inset-x-0 z-[100] transition-all duration-500 ${scrolled ? "bg-base-100/80 backdrop-blur-xl border-b border-base-200 py-2 shadow-sm" : "bg-base-100/40 backdrop-blur-md py-3 md:py-4"}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold tracking-tighter serif flex items-center gap-3 active:scale-95 transition-transform group"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
              <span className="text-lg md:text-xl">N</span>
            </div>
            <span className="text-primary">
              <span className="text-black">Hon.</span> Nabeela Tunis
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle Navigation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          <Link to="/" className={getLinkClasses("/")}>
            Home
          </Link>
          <Link to="/biography" className={getLinkClasses("/biography")}>
            Biography
          </Link>

          {/* Impact Dropdown */}
          <div className="relative group" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 ${getLinkClasses("/impact")} ${['/tourism', '/foundation', '/impact'].includes(location.pathname) ? "bg-primary text-white shadow-md shadow-primary/20" : ""}`}
            >
              Impact
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : "group-hover:rotate-180"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu - Hover on Desktop */}
            <div className={`absolute top-full left-0 mt-3 w-56 bg-base-100 rounded-2xl shadow-2xl border border-base-200 overflow-hidden transition-all origin-top ${dropdownOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100"}`}>
              <div className="p-2 flex flex-col gap-1">
                <Link to="/impact" className="px-4 py-2 rounded-xl hover:bg-primary/70 transition-colors text-sm font-medium">
                  Overview
                </Link>
                <Link to="/tourism" className="px-4 py-2 rounded-xl hover:bg-primary/70 transition-colors text-sm font-medium">
                  Tourism
                </Link>
                <Link to="/foundation" className="px-4 py-2 rounded-xl hover:bg-primary/70 transition-colors text-sm font-medium">
                  Foundation
                </Link>
              </div>
            </div>
          </div>

          <div className="w-px h-6 bg-base-200 mx-2"></div>

          <Link to="/contact" className="btn btn-primary btn-sm md:btn-sm rounded-xl px-6 shadow-md shadow-primary/20 transition-transform active:scale-95">
            Get in touch
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-x-4 top-[80px] rounded-3xl transition-all duration-300 ease-in-out overflow-hidden shadow-2xl border border-white/5 backdrop-blur-3xl z-50 ${mobileMenuOpen
          ? "max-h-[600px] opacity-100 scale-100 bg-base-100/95"
          : "max-h-0 opacity-0 scale-95 pointer-events-none"
          }`}
      >
        <div className="p-4 flex flex-col gap-2">
          <Link to="/" className={getMobileLinkClasses("/")}>
            Home
          </Link>
          <Link to="/biography" className={getMobileLinkClasses("/biography")}>
            Biography
          </Link>

          <div className="flex flex-col gap-1">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${['/tourism', '/foundation', '/impact'].includes(location.pathname) ? "bg-primary text-white shadow-md shadow-primary/20" : "hover:bg-primary/30 text-base-content/80 hover:text-base-content"}`}
            >
              Impact
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mobile Dropdown Content */}
            <div className={`flex flex-col overflow-hidden transition-all duration-300 ${dropdownOpen ? "max-h-64 opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
              <div className="flex flex-col gap-1 p-2 bg-base-200/50 rounded-2xl mx-2">
                <Link to="/impact" className="block px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/30 transition-colors">
                  Overview
                </Link>
                <Link to="/tourism" className="block px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/30 transition-colors">
                  Tourism
                </Link>
                <Link to="/foundation" className="block px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/30 transition-colors">
                  Foundation
                </Link>
              </div>
            </div>
          </div>

          <div className="h-px bg-base-content/10 my-2 mx-4"></div>

          <Link to="/contact" className="btn btn-primary w-full rounded-2xl py-3 shadow-lg shadow-primary/20 border-none group relative overflow-hidden">
            <span className="relative z-10">Get in touch</span>
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
