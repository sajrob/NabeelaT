import React, { useRef, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

/**
 * Navbar component for site navigation.
 * Features a structured hierarchy where Tourism and Philanthropy are grouped under "Impact".
 */
const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Helper to check if any child of Impact is active
  const isImpactActive = () =>
    ["/impact", "/tourism", "/foundation"].includes(location.pathname);

  const desktopDetailsRef = useRef<HTMLDetailsElement | null>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenus = () => {
    setMobileOpen(false);
    if (desktopDetailsRef.current) desktopDetailsRef.current.open = false;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus whenever the route changes
  useEffect(() => {
    closeMenus();
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className={`sticky top-0 inset-x-0 z-[100] transition-all duration-500 ${scrolled ? "bg-base-100/80 backdrop-blur-xl border-b border-base-200 py-2 shadow-sm" : "bg-base-100/40 backdrop-blur-md py-3 md:py-4"}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tighter serif flex items-center gap-3 active:scale-95 transition-transform group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
              <span className="text-xl">N</span>
            </div>
            <span className="hidden sm:block">
              <span className="text-primary">Hon.</span> Nabeela Tunis
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-8">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-2">
            <li>
              <Link
                to="/"
                className={`px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-widest transition-all ${isActive("/") ? "bg-primary text-white shadow-lg shadow-primary/20" : "hover:bg-primary/5 text-base-content/70 hover:text-primary"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/biography"
                className={`px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-widest transition-all ${isActive("/biography") ? "bg-primary text-white shadow-lg shadow-primary/20" : "hover:bg-primary/5 text-base-content/70 hover:text-primary"}`}
              >
                Biography
              </Link>
            </li>
            <li className="relative group">
              <details ref={desktopDetailsRef} className="dropdown dropdown-bottom">
                <summary className={`px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-widest cursor-pointer list-none flex items-center gap-1 transition-all ${isImpactActive() ? "bg-primary text-white shadow-lg shadow-primary/20" : "hover:bg-primary/5 text-base-content/70 hover:text-primary"}`}>
                  Impact
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <ul className="p-4 shadow-2xl menu dropdown-content z-[2] bg-base-100 rounded-[1.5rem] w-64 border border-base-200 mt-2 animate-in fade-in slide-up">
                  <li>
                    <Link to="/impact" onClick={closeMenus} className="p-3 rounded-xl hover:bg-primary/5 group/link">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        </div>
                        <div>
                          <p className="font-bold text-sm">Overview</p>
                          <p className="text-[10px] opacity-60">Leadership Strategy</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/tourism" onClick={closeMenus} className="p-3 rounded-xl hover:bg-secondary/5 group/link">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover/link:bg-secondary group-hover/link:text-white transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>
                        </div>
                        <div>
                          <p className="font-bold text-sm">Tourism</p>
                          <p className="text-[10px] opacity-60">Cultural Heritage</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/foundation" onClick={closeMenus} className="p-3 rounded-xl hover:bg-accent/5 group/link">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover/link:bg-accent group-hover/link:text-white transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </div>
                        <div>
                          <p className="font-bold text-sm">Foundation</p>
                          <p className="text-[10px] opacity-60">Humanitarian Aid</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>

          <Link to="/contact" className="hidden lg:flex btn btn-primary rounded-2xl px-6 shadow-xl shadow-primary/20 transition-transform active:scale-95">
            Get in touch
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-12 h-12 rounded-2xl bg-base-200 flex items-center justify-center text-primary active:scale-95 transition-all"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-[64px] bg-base-100 z-[99] md:hidden transition-all duration-500 overflow-y-auto ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"}`}>
        <div className="p-8 space-y-8">
          <ul className="space-y-4">
            <li>
              <Link to="/" onClick={closeMenus} className={`text-4xl font-bold serif ${isActive("/") ? "text-primary" : "opacity-40"}`}>Home</Link>
            </li>
            <li>
              <Link to="/biography" onClick={closeMenus} className={`text-4xl font-bold serif ${isActive("/biography") ? "text-primary" : "opacity-40"}`}>Biography</Link>
            </li>
            <li className="space-y-4 pt-4 border-t border-base-200">
              <p className="text-xs font-black uppercase tracking-widest opacity-30">Our Impact</p>
              <div className="grid grid-cols-1 gap-4">
                <Link to="/impact" onClick={closeMenus} className="text-2xl font-bold serif opacity-40 hover:opacity-100">Policy & Leadership</Link>
                <Link to="/tourism" onClick={closeMenus} className="text-2xl font-bold serif opacity-40 hover:opacity-100">Tourism & Culture</Link>
                <Link to="/foundation" onClick={closeMenus} className="text-2xl font-bold serif opacity-40 hover:opacity-100">One Love Foundation</Link>
              </div>
            </li>
          </ul>
          <div className="pt-8 border-t border-base-200">
            <Link to="/contact" onClick={closeMenus} className="btn btn-primary btn-lg btn-block rounded-2xl">Contact Hon. Tunis</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

