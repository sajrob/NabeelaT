import React from "react";
import { Link } from "react-router-dom";

/**
 * Footer component with secondary navigation and copyright.
 * Updated with official social media links for Hon. Nabeela Tunis.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-base-100 pt-24 pb-12 px-6 border-t border-base-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl font-bold tracking-tighter serif mb-8 block">
              <span className="text-primary">Hon.</span> Nabeela Tunis
            </Link>
            <p className="text-base-content/60 max-w-sm leading-relaxed font-light mb-8">
              Leadership dedicated to fostering national unity, cultural pride, and sustainable tourism for every citizen of Sierra Leone.
            </p>
            <div className="flex gap-4">
              {/* LinkedIn */}
              <a href="https://sl.linkedin.com/in/nabeela-farida-tunis-64599776" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-base-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              {/* X */}
              <a href="https://x.com/NabeelaTunis" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-base-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/nabeela_tunis/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-base-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-8 opacity-40">Navigate</h4>
            <ul className="space-y-4">
              <li><Link to="/biography" className="text-base-content/70 hover:text-primary transition-colors font-medium">The Journey</Link></li>
              <li><Link to="/impact" className="text-base-content/70 hover:text-primary transition-colors font-medium">Shared Success</Link></li>
              <li><Link to="/foundation" className="text-base-content/70 hover:text-primary transition-colors font-medium">Humanitarian Aid</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-base-200 flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-sm font-medium opacity-40">
            Copyright © {new Date().getFullYear()} — Official Website of Hon. Nabeela Tunis
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
