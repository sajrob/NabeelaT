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

  const closeMenus = () => {
    setMobileOpen(false);
    if (desktopDetailsRef.current) desktopDetailsRef.current.open = false;
  };

  const [mobileOpen, setMobileOpen] = useState(false);

  // Close menus whenever the route changes (covers navigation, back/forward)
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
    <div className="navbar bg-base-100/90 backdrop-blur-md sticky top-0 z-50 px-4 md:px-12 border-b border-base-200">
      <div className="navbar-start gap-2">
        {/* Mobile Menu */}
        <div className="relative md:hidden">
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="btn btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            role="menu"
            className={`menu menu-sm mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute left-3 ${mobileOpen ? "block" : "hidden"} z-50 border border-base-200`}
          >
            <li>
              <Link
                to="/"
                onClick={closeMenus}
                className={isActive("/") ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/biography"
                onClick={closeMenus}
                className={isActive("/biography") ? "active" : ""}
              >
                Biography
              </Link>
            </li>
            <li>
              <span className="font-bold opacity-60 uppercase text-[11px] tracking-widest mt-2">
                Impact
              </span>
              <ul>
                <li>
                  <Link
                    to="/impact"
                    onClick={closeMenus}
                    className={isActive("/impact") ? "active" : ""}
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tourism"
                    onClick={closeMenus}
                    className={isActive("/tourism") ? "active" : ""}
                  >
                    Tourism & Culture
                  </Link>
                </li>
                <li>
                  <Link
                    to="/foundation"
                    onClick={closeMenus}
                    className={isActive("/foundation") ? "active" : ""}
                  >
                    Foundation
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenus}
                className={isActive("/contact") ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="text-xl font-bold tracking-tight serif text-primary hover:opacity-80 transition-opacity"
        >
          Hon. Nabeela Tunis
        </Link>
      </div>

      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-1 items-center">
          <li>
            <Link
              to="/"
              className={`font-medium transition-colors px-4 py-2 ${isActive("/") ? "text-primary border-b-2 border-primary rounded-none" : "hover:text-primary"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/biography"
              className={`font-medium transition-colors px-4 py-2 ${isActive("/biography") ? "text-primary border-b-2 border-primary rounded-none" : "hover:text-primary"}`}
            >
              Biography
            </Link>
          </li>

          {/* Impact Dropdown for Desktop */}
          <li className="relative group">
            <details
              ref={desktopDetailsRef}
              className="dropdown dropdown-hover"
            >
              <summary
                className={`font-medium transition-colors px-4 py-2 cursor-pointer list-none flex items-center gap-1 ${isImpactActive() ? "text-primary border-b-2 border-primary rounded-none" : "hover:text-primary"}`}
              >
                Impact
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-56 border border-base-200 mt-0">
                <li>
                  <Link
                    to="/impact"
                    onClick={closeMenus}
                    className={
                      isActive("/impact") ? "bg-primary/10 text-primary" : ""
                    }
                  >
                    <div className="flex flex-col">
                      <span className="font-bold">Overview</span>
                      <span className="text-[10px] opacity-60">
                        Leadership & Policy Successes
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tourism"
                    onClick={closeMenus}
                    className={
                      isActive("/tourism") ? "bg-primary/10 text-primary" : ""
                    }
                  >
                    <div className="flex flex-col">
                      <span className="font-bold">Tourism & Culture</span>
                      <span className="text-[10px] opacity-60">
                        National Heritage & Arts
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/foundation"
                    onClick={closeMenus}
                    className={
                      isActive("/foundation")
                        ? "bg-primary/10 text-primary"
                        : ""
                    }
                  >
                    <div className="flex flex-col">
                      <span className="font-bold">Philanthropy</span>
                      <span className="text-[10px] opacity-60">
                        One Love Salone Foundation
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <Link
              to="/contact"
              className={`font-medium transition-colors px-4 py-2 ${isActive("/contact") ? "text-primary border-b-2 border-primary rounded-none" : "hover:text-primary"}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
