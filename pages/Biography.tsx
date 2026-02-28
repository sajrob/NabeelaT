
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
      <div className="grid lg:grid-cols-12 gap-16 items-start">

        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-12">
          <section>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 serif">A Life of <span className="text-primary">Service</span></h1>
            <p className="text-lg leading-relaxed mb-6">
              Hon. Nabeela Farida Tunis is a distinguished diplomat and development practitioner who has dedicated her life to the advancement of governance and social progress. Her journey is rooted in a strong academic foundation, beginning in Sierra Leone where she earned her Bachelor of Arts in Political Science and English from Fourah Bay College, University of Sierra Leone.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Driven by a commitment to global development, she furthered her studies in the United Kingdom, obtaining a Master of Science in Development Studies from the prestigious London School of Economics (LSE). These academic pursuits provided the analytical framework that would later define her data-driven and human-centric approach to national planning.
            </p>
          </section>

          {/* Personal Life Section */}
          <section className="border-y border-base-200 py-10">
            <h2 className="text-2xl font-bold mb-6 serif">Personal Life</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <p className="text-lg leading-relaxed mb-4">
                  Beyond her demanding public roles, Hon. Nabeela Tunis is a devoted family woman. She is married to <strong>Hon. Sidie Mohamed Tunis</strong>, a prominent political figure who has served as the Speaker of the ECOWAS Parliament and a Member of Parliament in Sierra Leone.
                </p>
                <p className="opacity-80 leading-relaxed">
                  As a mother, she balances the rigors of ministerial duties with a deep commitment to her household. This personal experience as a parent and spouse informs her advocacy for family-centered policies and her drive to create a safer, more prosperous future for the children of Sierra Leone. She is widely respected for her humility, groundedness, and the grace with which she navigates both high-level diplomacy and everyday community life.
                </p>
              </div>
            </div>
          </section>

          {/* International Recognition Highlight */}
          <section className="bg-primary/5 p-8 rounded-3xl border border-primary/20 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 serif text-primary flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Continental Recognition
            </h2>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                On September 15, 2025, in Lagos, Nigeria, Hon. Nabeela Farida Tunis received a historic honor at the <strong>21st AKWAABA African Travel Market</strong>, where she was announced as the <strong>Best Minister of Tourism in Africa</strong>.
              </p>
              <p className="opacity-80">
                This prestigious accolade recognizes her courage in advancing Sierra Leone's tourism sector. In addition to this top honor, she was celebrated among <strong>Africa’s Top 100 Travel and Tourism Personalities</strong>, a recognition of her vision for sustainable, community-led growth and the elevation of cultural heritage as a driver for national pride.
              </p>
            </div>
          </section>

          <section className="bg-base-200 p-8 rounded-3xl border border-base-300">
            <h2 className="text-2xl font-bold mb-6 serif">Ministerial Contributions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Pioneering Economic Strategy</h3>
                <p className="opacity-80">
                  As the former Minister of Planning and Economic Development, Hon. Tunis was the primary architect of Sierra Leone's <strong>Medium-Term National Development Plan (2019-2023)</strong>. She ensured that the Sustainable Development Goals (SDGs) were woven into the local governance fabric.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Diplomacy & Global Relations</h3>
                <p className="opacity-80">
                  During her time as the Minister of Foreign Affairs, she represented Sierra Leone with poise, strengthening international partnerships and elevating the nation's voice within the African Union and the United Nations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Tourism for All</h3>
                <p className="opacity-80">
                  In her current role, she leads the "Tourism for All" campaign, transforming the sector into a vital engine for job creation and cultural preservation, ensuring that economic benefits reach the most remote communities.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-8 border-t border-base-300">
            <h2 className="text-xl font-bold mb-4 serif">Official References</h2>
            <ul className="space-y-3 text-sm italic opacity-70">
              <li>
                <a href="https://www.facebook.com/sierraleonenationaltouristboard/videos/nabeela-farida-tunis-announced-best-minister-of-tourism-in-africa-at-akwaaba-202/3806161809684730/" target="_blank" rel="noopener noreferrer" className="link link-primary flex items-center gap-2 text-primary font-medium">
                  National Tourist Board - Announcement of Best Minister of Tourism in Africa (AKWAABA 2025)
                </a>
              </li>
              <li>
                <a href="https://tourism.gov.sl/minister-of-tourism" target="_blank" rel="noopener noreferrer" className="link link-primary flex items-center gap-2">
                  Official Profile - Ministry of Tourism and Cultural Affairs
                </a>
              </li>
              <li>
                <a href="https://moped.gov.sl/" target="_blank" rel="noopener noreferrer" className="link link-primary flex items-center gap-2">
                  Ministry of Planning and Economic Development Archive
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Sidebar: Timeline */}
        <div className="lg:col-span-4 space-y-8 sticky top-24">
          {/* Career Timeline Card */}
          <div className="bg-primary text-primary-content p-6 rounded-3xl shadow-xl">
            <h2 className="text-xl font-bold mb-6 serif">Career Timeline</h2>
            <div className="space-y-6">
              <div className="relative pl-6 border-l border-primary-content/30 pb-2">
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_white]"></div>
                <time className="block text-xs font-mono mb-1 text-white font-bold">2025</time>
                <h4 className="font-bold leading-tight mb-1">Best Minister of Tourism in Africa</h4>
                <p className="text-xs opacity-90">AKWAABA African Travel Market</p>
              </div>

              {CAREER_HISTORY.map((milestone, index) => (
                <div key={index} className="relative pl-6 border-l border-primary-content/30 pb-2">
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white shadow-sm opacity-60"></div>
                  <time className="block text-xs font-mono mb-1 opacity-80">{milestone.year}</time>
                  <h4 className="font-bold leading-tight mb-1">{milestone.role}</h4>
                  <p className="text-xs opacity-90">{milestone.organization}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Biography;
