import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BROADER_IMPACT, FOUNDATION_SUMMARY } from "../constants";

/**
 * Impact Overview Page.
 * Acts as the central hub for the "Impact" dropdown category.
 * Summarizes leadership successes and provides pathways to detailed Tourism and Foundation pages.
 */
const Impact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Helmet>
        <title>Leadership & Impact | Hon. Nabeela Tunis</title>
        <meta
          name="description"
          content="A summary of Hon. Nabeela Tunis's strategic leadership successes, national development planning, and international diplomatic contributions."
        />
        <link rel="canonical" href="https://nabeelatunis.com/impact" />
      </Helmet>
      {/* Strategic Header */}
      <header className="bg-base-200 py-20 px-6 border-b border-base-300">
        <div className="container mx-auto text-center max-w-4xl">
          <span className="badge badge-primary badge-outline mb-4 uppercase tracking-widest font-bold">
            The Visionary Hub
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 serif">
            Legacy of <span className="text-primary">Impact</span>
          </h1>
          <p className="text-xl opacity-70 leading-relaxed">
            Hon. Nabeela Tunis operates at the intersection of strategic policy
            and grassroots advocacy. Her work is dedicated to building a
            resilient, inclusive, and culturally rich Sierra Leone.
          </p>
        </div>
      </header>

      {/* Main Impact Portals - Directing users to sub-pages */}
      <section className="py-20 px-6 container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Tourism Portal Card */}
          <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 overflow-hidden group">
            <figure className="lg:w-1/3 overflow-hidden">
              <img
                src="/Tokeh-min.webp"
                alt="Tokeh Beach in Sierra Leone"
                className="h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </figure>
            <div className="card-body lg:w-2/3">
              <h2 className="card-title serif text-2xl">Tourism & Culture</h2>
              <p className="text-sm opacity-70">
                Transforming national heritage into an economic engine and
                showcasing Sierra Leone to the world stage.
              </p>
              <div className="card-actions justify-end mt-4">
                <Link to="/tourism" className="btn btn-primary btn-sm">
                  Explore Initiatives
                </Link>
              </div>
            </div>
          </div>

          {/* Philanthropy Portal Card */}
          <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 overflow-hidden group">
            <figure className="lg:w-1/3 overflow-hidden">
              <img
                src="/IMG_8936-min.jpg"
                alt="Villagers receiving aid from One Love Salone"
                className="h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </figure>
            <div className="card-body lg:w-2/3">
              <h2 className="card-title serif text-2xl">One Love Salone</h2>
              <p className="text-sm opacity-70">
                A humanitarian foundation focused on national unity, youth
                empowerment, and social cohesion.
              </p>
              <div className="card-actions justify-end mt-4">
                <Link to="/foundation" className="btn btn-primary btn-sm">
                  View Philanthropy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Major Milestone: Best Minister Award (Integrated Impact) */}
        <div className="bg-primary text-primary-content p-8 md:p-12 rounded-3xl shadow-2xl mb-24 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="text-6xl md:text-8xl opacity-20 serif font-bold">
              2025
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 serif">
                Best Minister of Tourism in Africa
              </h3>
              <p className="text-lg opacity-90 max-w-2xl">
                The 21st AKWAABA African Travel Market recognition represents
                the pinnacle of Hon. Tunis's recent strategic leadership,
                validating a policy framework built on commitment, consistency,
                and courage.
              </p>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* Policy & Advocacy Grid */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 serif uppercase tracking-wider">
            Policy Successes
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {BROADER_IMPACT.map((item, index) => (
            <div
              key={index}
              className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow p-2"
            >
              <div className="card-body">
                <div className="text-[10px] uppercase font-bold text-primary tracking-widest mb-2 px-2 py-1 bg-primary/5 rounded w-fit">
                  {item.category}
                </div>
                <h3 className="card-title serif mb-3">{item.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Style Section */}
      <section className="py-24 bg-base-200 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 serif">
            Governance Philosophy
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="bg-base-100 p-8 rounded-2xl shadow-sm border border-base-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Human Capital First</h4>
              <p className="text-sm opacity-70">
                Ensuring every development metric translates into a tangible
                improvement in the quality of life for the average citizen.
              </p>
            </div>
            <div className="bg-base-100 p-8 rounded-2xl shadow-sm border border-base-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Evidence-Led Results</h4>
              <p className="text-sm opacity-70">
                Utilizing data, strategic planning, and rigorous monitoring to
                achieve measurable economic and social targets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
