import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Navbar component for site navigation with enhanced accessibility and premium design.
 * Polished with glassmorphism and refined transitions.
 */
const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    return `nav-link ${isActive ? "nav-link-active" : ""}`;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Biography", path: "/biography" },
    { name: "News", path: "/news" },
  ];

  const impactLinks = [
    { name: "Overview", path: "/impact" },
    { name: "Tourism", path: "/tourism" },
    { name: "Foundation", path: "/foundation" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-700 ease-in-out px-4 md:px-8 py-4 ${scrolled ? "pt-4" : "pt-6"
        }`}
    >
      <div
        className={`container mx-auto transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${scrolled
          ? "max-w-5xl bg-white/90 backdrop-blur-2xl glass-rim rounded-[2.5rem] px-8 py-3 shadow-2xl"
          : "max-w-full bg-transparent px-2 py-0"
          } flex items-center justify-between`}
      >
        {/* Logo Section */}
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-4 active:scale-95 transition-transform group"
            aria-label="Hon. Nabeela Tunis Home"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#291334] flex items-center justify-center text-white shadow-lg shadow-[#291334]/20 group-hover:rotate-12 transition-all duration-500">
              <span className="text-xl font-bold font-serif">N</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[#291334]/50 text-[10px] uppercase font-black tracking-[0.25em] mb-0.5 transition-colors duration-500">The Honorable</span>
              <span className="text-[#291334] text-lg md:text-xl font-serif font-bold tracking-tight transition-colors duration-500">
                Nabeela Tunis
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={getLinkClasses(link.path)}
              aria-current={location.pathname === link.path ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}

          {/* Impact Dropdown */}
          <div
            className="relative group/impact"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className={`flex items-center gap-1.5 transition-all duration-500 nav-link ${["/tourism", "/foundation", "/impact"].includes(location.pathname) ? "nav-link-active" : ""
                }`}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Impact
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-3.5 w-3.5 transition-transform duration-500 ${dropdownOpen ? "rotate-180" : "group-hover/impact:rotate-180"
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-3 w-52 bg-white/95 backdrop-blur-2xl rounded-[1.8rem] shadow-2xl border border-white/40 ring-1 ring-black/[0.03] overflow-hidden transition-all duration-300 origin-top transform ${dropdownOpen ? "scale-y-100 opacity-100 translate-y-0" : "scale-y-95 opacity-0 -translate-y-2 pointer-events-none"
                }`}
            >
              <div className="p-2.5 flex flex-col gap-1">
                {impactLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-2xl transition-all duration-300 text-sm font-medium ${location.pathname === link.path
                      ? "bg-[#291334]/5 text-[#291334]"
                      : "hover:bg-[#291334]/5 text-[#291334]/70 hover:text-[#291334]"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="w-px h-6 bg-[#291334]/10 mx-5 transition-colors duration-500"></div>

          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-7 py-3 font-bold text-white transition-all duration-500 bg-[#291334] rounded-[1.2rem] hover:bg-[#291334]/90 hover:shadow-2xl hover:shadow-[#291334]/20 active:scale-95 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#291334] focus-visible:ring-offset-2"
          >
            <span className="relative z-10 text-sm">Get in touch</span>
            <div className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-3 rounded-2xl bg-[#291334] shadow-xl shadow-[#291334]/20 text-white transition-all duration-500 active:scale-90 ${mobileMenuOpen ? "bg-primary text-[#291334]" : ""}`}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-x-4 top-[100px] rounded-[2.5rem] transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) glass-rim bg-white/95 backdrop-blur-3xl z-50 overflow-hidden ${mobileMenuOpen
          ? "max-h-[85vh] opacity-100 scale-100 translate-y-0 pointer-events-auto shadow-2xl"
          : "max-h-0 opacity-0 scale-95 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="p-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-6 py-5 rounded-[1.8rem] text-xl font-bold transition-all duration-300 ${location.pathname === link.path
                ? "bg-[#291334] text-white shadow-2xl shadow-[#291334]/20"
                : "hover:bg-[#291334]/5 text-[#291334]"
                }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col gap-3">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className={`flex items-center justify-between px-6 py-5 rounded-[1.8rem] text-xl font-bold transition-all duration-300 ${["/tourism", "/foundation", "/impact"].includes(location.pathname)
                ? "bg-[#291334]/5 text-[#291334]"
                : "hover:bg-[#291334]/5 text-[#291334]"
                }`}
            >
              Impact
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition-transform duration-500 ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`flex flex-col gap-1.5 px-4 overflow-hidden transition-all duration-500 ${dropdownOpen ? "max-h-[400px] opacity-100 mb-4" : "max-h-0 opacity-0"
                }`}
            >
              {impactLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-6 py-4 rounded-2xl transition-all duration-300 text-lg font-semibold ${location.pathname === link.path
                    ? "text-primary bg-primary/5"
                    : "text-[#291334]/70 hover:text-[#291334]"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="h-px bg-[#291334]/10 my-4 mx-6"></div>

          <Link
            to="/contact"
            className="flex items-center justify-center py-6 rounded-[2rem] bg-[#291334] text-white font-black text-xl shadow-2xl shadow-[#291334]/20 active:scale-95 transition-all active:bg-[#291334]/90"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;