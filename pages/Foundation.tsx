import React from "react";
import { Helmet } from "react-helmet-async";
import { FOUNDATION_INITIATIVES } from "../constants";
import { Link } from "react-router-dom";

/**
 * Foundation page.
 * Highlights the humanitarian work of the One Love Salone Foundation.
 */
const Foundation: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <Helmet>
        <title>One Love Salone Foundation | Philanthropy by Nabeela Tunis</title>
        <meta
          name="description"
          content="Supporting unity and social progress through the One Love Salone Foundation, founded by Hon. Nabeela Tunis to empower youth and vulnerable communities in Sierra Leone."
        />
        <link rel="canonical" href="https://nabeelatunis.com/foundation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-black group">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/foundation_hero.png"
            alt="One Love Salone Foundation Unity"
            className="w-full h-full object-cover opacity-60 scale-100 transition-transform duration-[20000ms] ease-out group-hover:scale-110"
          />
          {/* Multi-layered premium overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral/40 via-transparent to-base-100"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-base-100/40 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Soft center glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-12 left-12 w-24 h-24 border-t-2 border-l-2 border-primary/20 z-10 hidden md:block"></div>
        <div className="absolute bottom-12 right-12 w-24 h-24 border-b-2 border-r-2 border-primary/20 z-10 hidden md:block"></div>

        <div className="relative z-10 text-center text-white px-6">
          <div className="animate-in slide-up">
            <h1 className="text-5xl md:text-8xl font-bold mb-8 serif tracking-tight">
              Fostering <span className="text-primary italic">Unity</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90 font-light italic border-l-2 border-primary pl-6">
              Building common ground across boundaries for a united and progressive Sierra Leone.
            </p>
          </div>
        </div>

        
      </section>

      {/* Core Mission */}
      <section className="section-padding bg-base-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-20
           animate-in slide-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-10 serif tracking-tight">The <span className="text-primary italic font-serif">Mission</span></h2>
            <div className="w-24 h-1 bg-primary/20 mx-auto mb-10 rounded-full"></div>
            <p className="text-xl md:text-2xl text-base-content/60 leading-relaxed font-light font-serif italic">
              "The One Love Salone Foundation is dedicated to building social bridges and providing essential support to the most vulnerable, fostering a culture where every citizen feels valued."
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 mb-4">
            {FOUNDATION_INITIATIVES.map((initiative, idx) => (
              <div
                key={initiative.id}
                className={`premium-card group bg-base-100 overflow-hidden animate-in slide-up delay-${(idx + 1) * 100}`}
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-neutral/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-10">
                  <span className="text-[10px] uppercase font-black tracking-widest text-primary mb-4 block">Key Program</span>
                  <h3 className="text-2xl font-bold mb-6 serif tracking-tight">
                    {initiative.title}
                  </h3>
                  <p className="text-base-content/60 leading-relaxed mb-8 font-light">
                    {initiative.description}
                  </p>
                  <a href="https://onelovesalonefoundation.org/news/" target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest text-primary hover:underline flex items-center gap-2">
                    Learn More <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="bg-primary/5 py-16 px-6 border-y border-primary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 lg:items-center">
            <div className="lg:w-1/2 space-y-10 animate-in slide-up">
              <div>
                <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8 inline-block">
                  Academic Excellence
                </span>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 serif tracking-tight leading-tight">
                  University <span className="text-primary italic">Scholarship</span> Program
                </h2>
                <p className="text-xl text-base-content/60 font-light leading-relaxed">
                  Identifying and supporting high-performing students who face significant financial barriers, ensuring that talent knows no economic boundaries.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { title: "Merit-Based Selection", desc: "Rigorous evaluation for high-performing students." },
                  { title: "Holistic Support", desc: "Covering tuition, materials, and living stipends." },
                  { title: "Leadership Training", desc: "Preparing scholars for civic responsibility." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center text-primary font-bold serif flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-base-content/60 text-sm font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="https://onelovesalonefoundation.org/" className="btn btn-primary btn-lg rounded-2xl px-12 shadow-xl shadow-primary/20 transition-transform hover:scale-105 active:scale-95">
                Support the Fund
              </Link>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl animate-float">
                  <img src="/IMG_9001-min copy.jpg" alt="Scholarship Student" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-base-200">
                  <p className="text-5xl font-bold text-primary mb-2 serif">200+</p>
                  <p className="text-xs font-black uppercase tracking-widest opacity-50">Active Scholars</p>
                </div>
              </div>
              <div className="pt-20 space-y-8">
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-base-200">
                  <p className="text-5xl font-bold text-secondary mb-2 serif">15+</p>
                  <p className="text-xs font-black uppercase tracking-widest opacity-50">Communities Covered</p>
                </div>
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                  <img src="/IMG_8941-min.jpg" alt="Foundation Impact" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers Grid */}
      <section className="section-padding bg-base-100">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-6xl font-bold text-primary serif">200+</span>
              </div>
              <p className="text-sm font-black uppercase tracking-widest opacity-30">University Scholars Sustained</p>
            </div>
            <div className="text-center group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-6xl font-bold text-primary serif">500+</span>
              </div>
              <p className="text-sm font-black uppercase tracking-widest opacity-30">Primary School Kits Distributed</p>
            </div>
            <div className="text-center group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-6xl font-bold text-primary serif">15+</span>
              </div>
              <p className="text-sm font-black uppercase tracking-widest opacity-30">Remote Villages Directly Reached</p>
            </div>
            <div className="text-center group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-6xl font-bold text-primary serif">1M+</span>
              </div>
              <p className="text-sm font-black uppercase tracking-widest opacity-30">Total Beneficiaries Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Quote Call to Action */}
      {/* <section className="relative py-32 bg-secondary text-secondary-content text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="container mx-auto relative z-10 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 serif italic tracking-tight">"Love is the foundation of national progress."</h2>
            <div className="w-24 h-1 bg-white/30 mx-auto mb-12"></div>
            <p className="text-xl md:text-2xl font-light opacity-90 mb-16 max-w-2xl mx-auto italic">Join us in our mission to empower the next generation of leaders in Sierra Leone.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="btn btn-white btn-lg rounded-2xl px-12 text-secondary font-bold hover:bg-white hover:scale-105 transition-all">Support Our Work</button>
              <button className="btn btn-outline btn-lg rounded-2xl px-12 text-white border-2 hover:bg-white/10 transition-all">Get Involved</button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Foundation;
