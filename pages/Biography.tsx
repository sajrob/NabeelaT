
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CAREER_HISTORY } from '../constants';

/**
 * Biography page.
 * Provides a comprehensive, fact-based overview of Hon. Nabeela Tunis's life,
 * blending her academic foundations, professional milestones, and personal life.
 */
const Biography: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 py-16 animate-in fade-in duration-500">
      <Helmet>
        <title>Biography of Hon. Nabeela Tunis | Dedicated Public Servant</title>
        <meta
          name="description"
          content="Discover the life and career journey of Hon. Nabeela Tunis. From her academic foundations at LSE to her notable roles as Minister of Foreign Affairs and Minister of Tourism."
        />
        <link rel="canonical" href="https://nabeelatunis.com/biography" />
      </Helmet>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Sidebar: Profile Photo (Desktop) & Timeline */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 order-1 lg:order-2">
          {/* Profile Card */}
          <div className="relative group">
            {/* Subtle glow effect behind card */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-60 transition duration-1000"></div>

            <div className="relative bg-base-100 rounded-[2rem] overflow-hidden shadow-2xl border border-base-200">
              {/* Image Section */}
              <div className="aspect-[4/5] relative overflow-hidden bg-primary/5">
                <img
                  src="/NFT-min.png"
                  alt="Hon. Nabeela Tunis"
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Floating Badge */}
                {/* <div className="absolute top-4 right-4 animate-bounce-slow">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-success"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-base-content/80">Active Service</span>
                  </div>
                </div> */}

                {/* Bottom Overlay with Title */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 pt-20">
                  <h2 className="text-white text-3xl font-bold serif mb-2">Hon. Nabeela Tunis</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge badge-primary font-bold">Minister</span>
                    <span className="text-xs font-medium uppercase tracking-widest text-white/90 self-center">Tourism & Cultural Affairs</span>
                  </div>
                </div>
              </div>

              {/* Quick Info Section */}
              <div className="p-8 bg-gradient-to-b from-base-100 to-base-200/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-colors group-hover/item:bg-primary group-hover/item:text-white">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-tighter opacity-50">Organization</p>
                      <p className="font-semibold text-sm">Gov. of Sierra Leone</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary transition-colors group-hover/item:bg-secondary group-hover/item:text-white">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-tighter opacity-50">Education</p>
                      <p className="font-semibold text-sm">LSE Master of Science</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Career Timeline Card */}
          <div className="bg-primary text-primary-content p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
            <h2 className="text-xl font-bold mb-8 serif relative z-10 border-b border-primary-content/20 pb-4">Career Timeline</h2>
            <div className="space-y-8 relative z-10">
              <div className="relative pl-8 border-l border-primary-content/30 pb-2">
                <div className="absolute left-[-6px] top-1 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_white]"></div>
                <time className="block text-xs font-mono mb-1 text-white font-black tracking-widest uppercase">2025</time>
                <h4 className="font-bold leading-tight mb-1 text-lg">Best Minister of Tourism in Africa</h4>
                <p className="text-xs opacity-80 font-medium">AKWAABA African Travel Market</p>
              </div>

              {CAREER_HISTORY.map((milestone, index) => (
                <div key={index} className="relative pl-8 border-l border-primary-content/20 pb-2">
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/40 shadow-sm transition-all group-hover:bg-white/70"></div>
                  <time className="block text-xs font-mono mb-1 opacity-70 tracking-widest">{milestone.year}</time>
                  <h4 className="font-bold leading-tight mb-1">{milestone.role}</h4>
                  <p className="text-xs opacity-80">{milestone.organization}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-12 order-2 lg:order-1">
          <section>
            <h1 className="text-5xl md:text-7xl font-bold mb-10 serif tracking-tight leading-tight">
              A Life of <br />
              <span className="text-primary italic relative"> Service
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-2xl leading-relaxed mb-8 font-light text-base-content/90 border-l-4 border-primary/20 pl-8">
                Hon. Nabeela Farida Tunis is a distinguished diplomat and development practitioner who has dedicated her life to the advancement of governance and social progress.
              </p>

              <p className="text-lg leading-relaxed mb-6 opacity-80">
                Her journey is rooted in a strong academic foundation, beginning in Sierra Leone where she earned her Bachelor of Arts in Political Science and English from Fourah Bay College, University of Sierra Leone.
              </p>

              <p className="text-lg leading-relaxed mb-8 opacity-80">
                Driven by a commitment to global development, she furthered her studies in the United Kingdom, obtaining a Master of Science in Development Studies from the prestigious London School of Economics (LSE). These academic pursuits provided the analytical framework that would later define her data-driven and human-centric approach to national planning.
              </p>
            </div>
          </section>

          {/* Personal Life Section */}
          <section className="bg-base-200/50 p-10 rounded-[2.5rem] border border-base-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L14.017 2H12.017V3L12.017 6C12.017 8.20914 10.2261 10 8.017 10H5.017C4.46472 10 4.017 10.4477 4.017 11V17C4.017 17.5523 4.46472 18 5.017 18H8.017C9.12157 18 10.017 18.8954 10.017 20V21H12.017V20C12.017 17.7909 13.8079 16 16.017 16H18.017V21H14.017Z" /></svg>
            </div>

            <h2 className="text-3xl font-bold mb-8 serif">Personal Life</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  Beyond her demanding public roles, Hon. Nabeela Tunis is a devoted family woman. She is married to <strong>Hon. Sidie Mohamed Tunis</strong>, a prominent political figure who has served as the Speaker of the ECOWAS Parliament.
                </p>
                <div className="p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/40">
                  <p className="opacity-80 leading-relaxed italic">
                    As a mother, she balances the rigors of ministerial duties with a deep commitment to her household. This personal experience informs her advocacy for family-centered policies and her drive to create a safer, more prosperous future for the children of Sierra Leone.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* International Recognition Highlight */}
          <section className="bg-primary/5 p-10 rounded-[2.5rem] border border-primary/20 shadow-sm relative group overflow-hidden">
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>

            <h2 className="text-3xl font-bold mb-8 serif text-primary flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Continental Recognition
            </h2>

            <div className="space-y-6 relative z-10">
              <p className="text-xl leading-relaxed">
                On September 15, 2025, in Lagos, Nigeria, Hon. Nabeela Farida Tunis received a historic honor at the <strong>21st AKWAABA African Travel Market</strong>, where she was announced as the <span className="text-primary font-bold">Best Minister of Tourism in Africa</span>.
              </p>
              <p className="opacity-80 leading-relaxed">
                This prestigious accolade recognizes her courage in advancing Sierra Leone's tourism sector. In addition to this top honor, she was celebrated among <strong>Africa’s Top 100 Travel and Tourism Personalities</strong>, a recognition of her vision for sustainable, community-led growth.
              </p>
            </div>
          </section>

          <section className="bg-base-200/30 p-10 rounded-[2.5rem] border border-base-200">
            <h2 className="text-3xl font-bold mb-10 serif">Ministerial Contributions</h2>
            <div className="grid md:grid-cols-1 gap-8">
              <div className="group bg-base-100 p-8 rounded-3xl border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Pioneering Economic Strategy</h3>
                    <p className="opacity-70 leading-relaxed">
                      As the former Minister of Planning and Economic Development, Hon. Tunis was the primary architect of Sierra Leone's <strong>Medium-Term National Development Plan (2019-2023)</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-base-100 p-8 rounded-3xl border border-transparent hover:border-secondary/20 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-secondary mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">Diplomacy & Global Relations</h3>
                    <p className="opacity-70 leading-relaxed">
                      During her time as the Minister of Foreign Affairs, she represented Sierra Leone with poise, strengthening international partnerships and elevating the nation's voice globally.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-base-100 p-8 rounded-3xl border border-transparent hover:border-accent/20 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-accent mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">Tourism for All</h3>
                    <p className="opacity-70 leading-relaxed">
                      In her current role, she leads the "Tourism for All" campaign, transforming the sector into a vital engine for job creation and cultural preservation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="pt-12 border-t border-base-300">
            <h2 className="text-sm font-bold mb-6 uppercase tracking-widest opacity-50">Official References</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="https://www.facebook.com/sierraleonenationaltouristboard/videos/nabeela-farida-tunis-announced-best-minister-of-tourism-in-africa-at-akwaaba-202/3806161809684730/" target="_blank" rel="noopener noreferrer" className="p-4 bg-base-200 rounded-2xl hover:bg-primary/10 transition-colors group">
                <span className="text-xs font-bold text-primary group-hover:underline block mb-2">AKWAABA 2025</span>
                <span className="text-sm opacity-70">Announcement of Best Minister of Tourism</span>
              </a>
              <a href="https://tourism.gov.sl/minister-of-tourism" target="_blank" rel="noopener noreferrer" className="p-4 bg-base-200 rounded-2xl hover:bg-primary/10 transition-colors group">
                <span className="text-xs font-bold text-primary group-hover:underline block mb-2">Gov Profile</span>
                <span className="text-sm opacity-70">Ministry of Tourism & Cutural Affairs</span>
              </a>
              <a href="https://moped.gov.sl/" target="_blank" rel="noopener noreferrer" className="p-4 bg-base-200 rounded-2xl hover:bg-primary/10 transition-colors group">
                <span className="text-xs font-bold text-primary group-hover:underline block mb-2">Economic Strategy</span>
                <span className="text-sm opacity-70">National Development Plan Archive</span>
              </a>
            </div>
          </footer>
        </div>

      </div>
    </div>
  );
};

export default Biography;

