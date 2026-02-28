import React from "react";
import { Link } from "react-router-dom";

/**
 * Footer component with secondary navigation and copyright.
 * Updated with official social media links for Hon. Nabeela Tunis, including LinkedIn.
 */
const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content border-t border-base-300">
      <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
        <Link to="/biography" className="link link-hover">
          Biography
        </Link>
        <Link to="/impact" className="link link-hover">
          Impact
        </Link>
        {/* <Link to="/tourism" className="link link-hover">Tourism & Culture</Link> */}
        <Link to="/foundation" className="link link-hover">
          Philanthropy
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-6">
          {/* LinkedIn Link */}
          <a
            href="https://sl.linkedin.com/in/nabeela-farida-tunis-64599776"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-all hover:scale-110"
            aria-label="Connect with Hon. Nabeela Tunis on LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </a>
          {/* X (Twitter) Link */}
          <a
            href="https://x.com/NabeelaTunis"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-all hover:scale-110"
            aria-label="Follow Hon. Nabeela Tunis on X"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="fill-current"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/nabeela_tunis/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-all hover:scale-110"
            aria-label="Follow Hon. Nabeela Tunis on Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-current"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p className="text-sm font-medium opacity-60">
          Copyright © {new Date().getFullYear()} - Official Website of Hon.
          Nabeela Tunis
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
