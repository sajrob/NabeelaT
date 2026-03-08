import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Tourism page.
 * Focuses on Hon. Nabeela Tunis's impact on the tourism sector and cultural heritage.
 */
const Tourism: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Helmet>
        <title>Tourism & Culture | Hon. Nabeela Tunis</title>
        <meta
          name="description"
          content="Explore Hon. Nabeela Tunis's vision for Sierra Leonean tourism. Discover the 'Tourism for All' campaign and initiatives promoting cultural heritage and sustainable growth."
        />
        <link rel="canonical" href="https://nabeelatunis.com/tourism" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/Tokeh-min.webp"
            alt="Sierra Leone Tourism"
            className="w-full h-full object-cover scale-110 animate-float"
            style={{ animationDuration: '20s' }}
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <div className="animate-in slide-up">
            <span className="bg-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 inline-block shadow-xl shadow-primary/20">National Vision</span>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 serif tracking-tight">Tourism & <span className="text-primary italic">Culture</span></h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90 font-light italic border-white/20 border-l-2 pl-6">
              "Transforming our natural beauty and cultural heritage into sustainable national prosperity."
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-base-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-32">
            <div className="relative group animate-in slide-up">
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all duration-1000"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img src="/photo1jpg-min.jpg" alt="Minister at Event" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              {/* Floating stat inside image section */}
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-base-200 hidden md:block animate-float">
                <p className="text-4xl font-bold text-primary serif mb-1">16</p>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-50">Local Districts<br />Empowered</p>
              </div>
            </div>

            <div className="space-y-10 animate-in slide-up delay-200">
              <h2 className="text-4xl md:text-6xl font-bold serif leading-tight">The <span className="text-primary italic">Tourism for All</span> Campaign</h2>
              <div className="w-24 h-1.5 bg-primary/20 rounded-full"></div>
              <p className="text-xl leading-relaxed text-base-content/70 font-light">
                Under the leadership of Hon. Nabeela Tunis, the "Tourism for All" campaign was launched to decentralize tourism and ensure that every Sierra Leonean benefits from the sector.
              </p>

              <div className="space-y-6">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Decentralized Growth</h4>
                    <p className="text-base-content/60 leading-relaxed">Spreading tourism infrastructure beyond the capital to rural communities.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Cultural Pride</h4>
                    <p className="text-base-content/60 leading-relaxed">Encouraging citizens to explore and celebrate their own heritage sites.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-20 max-w-2xl mx-auto animate-in slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 serif tracking-tight">Strategic Initiatives</h2>
            <div className="w-20 h-1 bg-primary/20 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="premium-card p-12 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 transition-all group-hover:bg-primary group-hover:text-white">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 serif">Eco-Tourism</h3>
              <p className="text-base-content/60 leading-relaxed">
                Protecting our national parks and marine life while creating world-class destination experiences for eco-conscious travelers.
              </p>
            </div>

            <div className="premium-card p-12 group border-primary shadow-2xl bg-primary/5">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-primary/20">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 serif">Arts & Heritage</h3>
              <p className="text-base-content/60 leading-relaxed">
                Promoting Sierra Leonean craftsmanship, historic landmarks, and the diverse cultural expressions that define our nation.
              </p>
            </div>

            <div className="premium-card p-12 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 transition-all group-hover:bg-primary group-hover:text-white">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 serif">Policy Reform</h3>
              <p className="text-base-content/60 leading-relaxed">
                Implementing favorable frameworks for tourism investors and streamlining hospitality standards to compete globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery Preview */}
      <section className="py-32 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 animate-in slide-up">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 serif tracking-tight">Our Natural <span className="text-primary italic">Heritage</span></h2>
              <p className="text-lg opacity-60 leading-relaxed font-light">From the pristine beaches of Tokeh to the lush hills of the Freetown Peninsula, discovery awaits.</p>
            </div>
            <a href="https://tourism.gov.sl/" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg rounded-2xl px-12 group shadow-xl shadow-primary/20 transition-all hover:scale-105">
              Official Registry
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <div className="group relative rounded-[2rem] overflow-hidden h-[400px] shadow-2xl animate-in slide-up delay-100">
              <img src="/bureh-beach.jpg" alt="Bureh Beach" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-white font-bold serif text-xl">Bureh Beach</p>
              </div>
            </div>
            <div className="group relative rounded-[2rem] overflow-hidden h-[400px] shadow-2xl animate-in slide-up delay-200 mt-12">
              <img src="/Tacugama-Chimps.webp" alt="Tacugama Chimps" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-white font-bold serif text-xl">Tacugama</p>
              </div>
            </div>
            <div className="group relative rounded-[2rem] overflow-hidden h-[400px] shadow-2xl animate-in slide-up delay-300">
              <img src="/Forest-walks-in-Tiwai-min.webp" alt="Tiwai Forest" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-white font-bold serif text-xl">Tiwai Island</p>
              </div>
            </div>
            <div className="group relative rounded-[2rem] overflow-hidden h-[400px] shadow-2xl animate-in slide-up delay-500 mt-12">
              <img src="/Exploring-Sierra-Leones-National-Parks-min.webp" alt="National Parks" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-white font-bold serif text-xl">Outamba Kilimi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tourism;
