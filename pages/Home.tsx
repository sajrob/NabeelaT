import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/**
 * Home page component.
 * Features the primary hero section and core value propositions.
 */
const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Helmet>
        <title>Hon. Nabeela Tunis | Official Website</title>
        <meta
          name="description"
          content="Explore the official website of Hon. Nabeela Tunis, Sierra Leone's Minister of Tourism and Cultural Affairs. Learn about her leadership, biography, and impact."
        />
        <link rel="canonical" href="https://nabeelatunis.com/" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/922-1920x1080-grayscale.jpg"
            alt="Hon. Nabeela Tunis"
            className="w-full mask-image-fade h-full object-cover object-[75%] md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-base-100 via-base-100/95 md:via-base-100/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 py-20 md:py-0">
          <div className="max-w-2xl">
            <span className="badge badge-primary badge-outline mb-4 uppercase tracking-widest font-semibold">
              Leadership in Service
            </span>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Hon. Nabeela <br className="hidden md:block" />
              <span className="text-primary italic">Farida</span> Tunis
            </h1>
            <p className="text-lg md:text-xl mb-8 text-base-content/80 leading-relaxed max-w-lg">
              Minister of Tourism and Cultural Affairs of the Republic of Sierra
              Leone. A dedicated diplomat, development expert, and humanitarian
              fostering national unity and sustainable growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/biography" className="btn btn-primary px-8">
                Read Biography
              </Link>
              <Link to="/tourism" className="btn btn-outline px-8">
                Tourism Initiatives
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolios */}
      <section className="py-20 bg-base-100 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Pillars of Action
            </h2>
            <p className="max-w-xl mx-auto text-base-content/70">
              Through strategic leadership and grassroots initiatives, Hon.
              Nabeela Tunis continues to shape the future of Sierra Leone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl hover:-translate-y-1 transition-transform border border-base-300">
              <div className="card-body">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <h3 className="card-title serif">Diplomacy</h3>
                <p className="text-sm text-base-content/70">
                  With a rich background in Foreign Affairs and UN governance,
                  she bridges Sierra Leone with the global community.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl hover:-translate-y-1 transition-transform border border-base-300">
              <div className="card-body">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="card-title serif">Cultural Heritage</h3>
                <p className="text-sm text-base-content/70">
                  Transforming the tourism sector into a driver for economic
                  development while preserving the unique Salone identity.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl hover:-translate-y-1 transition-transform border border-base-300">
              <div className="card-body">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="card-title serif">Humanitarianism</h3>
                <p className="text-sm text-base-content/70">
                  Founder of One Love Salone Foundation, focusing on education,
                  unity, and uplifting vulnerable populations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-content">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-6 md:mb-8 opacity-50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 17.7614 19.7784 20 17.017 20H14.017V21ZM5.01691 21L5.01691 18C5.01691 16.8954 5.91234 16 7.01691 16H10.0169C10.5692 16 11.0169 15.5523 11.0169 15V9C11.0169 8.44772 10.5692 8 10.0169 8H6.01691C5.46463 8 5.01691 8.44772 5.01691 9V12C5.01691 12.5523 4.56919 13 4.01691 13H2.01691C1.46463 13 1.01691 12.5523 1.01691 12V9C1.01691 7.34315 2.36006 6 4.01691 6H10.0169C11.6738 6 13.0169 7.34315 13.0169 9V15C13.0169 17.7614 10.7783 20 8.01691 20H5.01691V21Z" />
            </svg>
            <blockquote className="text-2xl md:text-4xl font-medium serif italic mb-6 md:mb-8">
              "Development is about the dignity of every citizen and the
              richness of our shared cultural heritage."
            </blockquote>
            <cite className="font-semibold tracking-widest uppercase text-sm md:text-base">
              — Hon. Nabeela Tunis
            </cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
