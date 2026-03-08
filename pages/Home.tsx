import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/**
 * Home page component.
 * Features the primary hero section and core value propositions.
 */
const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <Helmet>
        <title>Hon. Nabeela Tunis | Official Website</title>
        <meta
          name="description"
          content="Explore the official website of Hon. Nabeela Tunis, Sierra Leone's Minister of Tourism and Cultural Affairs. Learn about her leadership, biography, and impact."
        />
        <link rel="canonical" href="https://nabeelatunis.com/" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/922-1920x1080-grayscale.jpg"
            alt="Hon. Nabeela Tunis Background"
            className="w-full h-full object-cover grayscale opacity-60 transition-transform duration-[20s] ease-out group-hover:scale-110"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 py-32 md:py-0 -mt-8 md:-mt-16">
          <div className="max-w-4xl">

            <h1 className="text-5xl md:text-8xl font-bold mb-10 leading-[0.95] tracking-tighter text-white">
              Hon. Nabeela <br className="hidden lg:block" />
              <span className="text-primary italic font-serif relative inline-block">
                Farida
                <svg className="absolute -bottom-4 left-0 w-full h-3 text-primary/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span> Tunis
            </h1>

            <p className="text-xl md:text-2xl mb-14 text-white/80 leading-relaxed max-w-2xl animate-in slide-up delay-100 italic font-light border-l-2 border-primary/40 pl-10">
              Minister of Tourism and Cultural Affairs of the Republic of Sierra Leone. Dedicated to fostering national unity and sustainable growth.
            </p>

            <div className="flex flex-wrap gap-8 animate-in slide-up delay-200">
              <Link to="/biography" className="btn btn-primary btn-lg rounded-2xl px-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] shadow-primary/20 group hover:scale-105 transition-all text-white border-none">
                The Journey
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              {/* <Link to="/tourism" className="btn btn-outline btn-lg rounded-2xl px-12 border-2 text-white border-white/30 hover:bg-white hover:text-black hover:border-white transition-all backdrop-blur-sm">
                Our Tourism
              </Link> */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
          <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>
        </div>
      </section>



      {/* Core Action Pillars */}
      <section className="section-padding overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-24 max-w-2xl mx-auto animate-in slide-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 serif tracking-tight">
              Pillars of <span className="text-primary italic">Transformation</span>
            </h2>
            <div className="w-24 h-1 bg-primary/20 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-base-content/60 leading-relaxed font-light">
              Strategic leadership that bridges diplomacy, culture, and humanitarian action for a better Sierra Leone.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="premium-card p-10 group bg-white/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary mb-8 transition-colors group-hover:bg-primary group-hover:text-white group-hover:rotate-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 serif tracking-tight">Global Diplomacy</h3>
              <p className="text-base-content/60 leading-relaxed mb-8">
                Strengthening international partnerships and elevating Sierra Leone's voice across the United Nations and African Union.
              </p>
              <Link to="/impact" className="text-sm font-bold uppercase tracking-widest text-primary hover:underline flex items-center gap-2">
                Learn More <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            <div className="premium-card p-10 group bg-white/50 backdrop-blur-sm xl:scale-110 xl:z-10 xl:shadow-2xl xl:border-primary/10">
              <div className="w-16 h-16 bg-secondary/10 rounded-[2rem] flex items-center justify-center text-secondary mb-8 transition-colors group-hover:bg-secondary group-hover:text-white group-hover:rotate-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 serif tracking-tight">Tourism & Culture</h3>
              <p className="text-base-content/60 leading-relaxed mb-8">
                Revitalizing national heritage and tourism through the "Tourism for All" campaign, driving sustainable community growth.
              </p>
              <Link to="/tourism" className="text-sm font-bold uppercase tracking-widest text-secondary hover:underline flex items-center gap-2">
                Discover More <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            <div className="premium-card p-10 group bg-white/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-accent/10 rounded-[2rem] flex items-center justify-center text-accent mb-8 transition-colors group-hover:bg-accent group-hover:text-white group-hover:rotate-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 serif tracking-tight">One Love Foundation</h3>
              <p className="text-base-content/60 leading-relaxed mb-8">
                Empowering vulnerable communities through educational support, unity programs, and compassionate humanitarian aid.
              </p>
              <Link to="/foundation" className="text-sm font-bold uppercase tracking-widest text-accent hover:underline flex items-center gap-2">
                Support Foundation <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Quote */}
      <section className="relative section-padding overflow-hidden bg-primary text-primary-content text-center">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <svg className="h-16 w-16 mx-auto mb-10 opacity-20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 17.7614 19.7784 20 17.017 20H14.017V21ZM5.01691 21L5.01691 18C5.01691 16.8954 5.91234 16 7.01691 16H10.0169C10.5692 16 11.0169 15.5523 11.0169 15V9C11.0169 8.44772 10.5692 8 10.0169 8H6.01691C5.46463 8 5.01691 8.44772 5.01691 9V12C5.01691 12.5523 4.56919 13 4.01691 13H2.01691C1.46463 13 1.01691 12.5523 1.01691 12V9C1.01691 7.34315 2.36006 6 4.01691 6H10.0169C11.6738 6 13.0169 7.34315 13.0169 9V15C13.0169 17.7614 10.7783 20 8.01691 20H5.01691V21Z" />
            </svg>
            <blockquote className="text-3xl md:text-5xl lg:text-6xl font-medium serif italic mb-12 leading-tight tracking-tight">
              "Development is about the dignity of every citizen and the richness of our shared cultural heritage."
            </blockquote>
            <cite className="font-bold tracking-[0.3em] uppercase text-sm md:text-lg opacity-80">
              — Hon. Nabeela Tunis
            </cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

