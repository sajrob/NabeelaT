import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BROADER_IMPACT } from "../constants";

/**
 * Impact Overview Page.
 * Acts as the central hub for the "Impact" dropdown category.
 * Summarizes leadership successes and provides pathways to detailed Tourism and Foundation pages.
 */
const Impact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <Helmet>
        <title>Leadership & Impact | Hon. Nabeela Tunis</title>
        <meta
          name="description"
          content="A summary of Hon. Nabeela Tunis's strategic leadership successes, national development planning, and international diplomatic contributions."
        />
        <link rel="canonical" href="https://nabeelatunis.com/impact" />
      </Helmet>

      {/* Strategic Header */}
      <header className="relative section-padding bg-base-200/50 border-b border-base-200 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="animate-in slide-up">
            <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8 inline-block">
              Strategies for Growth
            </span>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 serif tracking-tight">
              Legacy of <span className="text-primary italic">Impact</span>
            </h1>
            <p className="text-xl md:text-2xl text-base-content/60 max-w-2xl mx-auto opacity-90 font-light italic border-l-2 border-primary pl-6">

              "Building a resilient, inclusive, and culturally rich Sierra Leone through strategic policy and grassroots advocacy."
            </p>
          </div>
        </div>
      </header>

      {/* Main Impact Portals */}
      <section className="section-padding container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          {/* Tourism Portal Card */}
          <div className="premium-card group bg-base-100 flex flex-col md:flex-row min-h-[400px]">
            <div className="md:w-1/2 relative overflow-hidden">
              <img
                src="/Tokeh-min.webp"
                alt="Sierra Leone Tourism"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <span className="text-[10px] uppercase font-black tracking-widest text-primary mb-4 block">National Portfolio</span>
              <h2 className="text-3xl font-bold serif mb-6">Tourism & Culture</h2>
              <p className="text-base-content/60 mb-8 leading-relaxed">
                Transforming national heritage into an economic engine and showcasing Sierra Leone on the global stage.
              </p>
              <Link to="/tourism" className="btn btn-primary rounded-xl px-8 group shadow-lg shadow-primary/10">
                Explore Initiatives
              </Link>
            </div>
          </div>

          {/* Philanthropy Portal Card */}
          <div className="premium-card group bg-base-100 flex flex-col md:flex-row min-h-[400px]">
            <div className="md:w-1/2 relative overflow-hidden">
              <img
                src="/IMG_8936-min.jpg"
                alt="Community Aid"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <span className="text-[10px] uppercase font-black tracking-widest text-secondary mb-4 block">Humanitarian Hub</span>
              <h2 className="text-3xl font-bold serif mb-6">One Love Salone</h2>
              <p className="text-base-content/60 mb-8 leading-relaxed">
                A humanitarian foundation focused on national unity, youth empowerment, and social cohesion.
              </p>
              <Link to="/foundation" className="btn btn-secondary rounded-xl px-8 group shadow-lg shadow-secondary/10">
                Foundation Hub
              </Link>
            </div>
          </div>
        </div>

        {/* Global recognition milestone */}
        <div className="premium-card bg-primary text-primary-content p-12 lg:p-20 relative overflow-hidden group mb-32">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-slow-rotate"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-shrink-0 animate-float">
              <div className="w-40 h-40 bg-white/10 backdrop-blur-xl rounded-[3rem] border border-white/20 flex items-center justify-center">
                <p className="text-6xl font-bold serif">2025</p>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-4xl md:text-6xl font-bold mb-8 serif tracking-tight">Best Minister of Tourism <br className="hidden lg:block" /> in <span className="text-accent">Africa</span></h3>
              <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl leading-relaxed">
                The 21st AKWAABA African Travel Market recognition represents the pinnacle of Hon. Tunis's recent strategic leadership, validating a policy framework built on commitment and consistency.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Success Grid */}
        <div className="text-center mb-20 animate-in slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 serif tracking-tight">Policy <span className="text-primary italic">Successes</span></h2>
          <div className="w-24 h-1 bg-primary/20 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {BROADER_IMPACT.map((item, index) => (
            <div key={index} className="premium-card p-12 group bg-base-200/50 hover:bg-base-100">
              <div className="text-[10px] uppercase font-black tracking-widest text-primary mb-6 group-hover:scale-110 transition-transform inline-block">
                {item.category}
              </div>
              <h4 className="text-2xl font-bold mb-6 serif tracking-tight">{item.title}</h4>
              <p className="text-base-content/60 leading-relaxed font-light">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Governance Philosophy Section */}
      <section className="section-padding bg-base-200 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 serif tracking-tight">Governance <span className="text-primary italic">Philosophy</span></h2>
            <div className="w-20 h-1 bg-primary/20 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="glass-card p-12 group hover:scale-105 transition-all duration-700">
              <div className="w-16 h-16 bg-primary rounded-[1.5rem] flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition-transform shadow-xl shadow-primary/20">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h4 className="text-2xl font-bold mb-6 serif tracking-tight">Human Capital First</h4>
              <p className="text-base-content/70 leading-relaxed font-light italic">
                "Ensuring every development metric translates into a tangible improvement in the quality of life for the average citizen. We serve the people, and our success is measured by their dignity."
              </p>
            </div>

            <div className="glass-card p-12 group hover:scale-105 transition-all duration-700">
              <div className="w-16 h-16 bg-secondary rounded-[1.5rem] flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition-transform shadow-xl shadow-secondary/20">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h4 className="text-2xl font-bold mb-6 serif tracking-tight">Evidence-Led Results</h4>
              <p className="text-base-content/70 leading-relaxed font-light italic">
                "Utilizing data, strategic planning, and rigorous monitoring to achieve measurable economic and social targets. Accountability is the hallmark of leadership."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;

