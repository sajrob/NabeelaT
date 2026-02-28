import React from "react";
import { Helmet } from "react-helmet-async";
import { FOUNDATION_INITIATIVES } from "../constants";

/**
 * Foundation page.
 * Highlights the humanitarian work of the One Love Salone Foundation.
 */
const Foundation: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Helmet>
        <title>One Love Salone Foundation | Philanthropy by Nabeela Tunis</title>
        <meta
          name="description"
          content="Supporting unity and social progress through the One Love Salone Foundation, founded by Hon. Nabeela Tunis to empower youth and vulnerable communities in Sierra Leone."
        />
        <link rel="canonical" href="https://nabeelatunis.com/foundation" />
      </Helmet>
      <header className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/IMG_9011-min.jpg"
          alt="Unity"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            One Love Salone Foundation
          </h1>
          <p className="text-xl text-white/90">
            Founded by Hon. Nabeela Tunis with a vision of a united, empowered,
            and progressive Sierra Leone.
          </p>
        </div>
      </header>

      <section className="py-20 px-6 container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 serif">Our Core Mission</h2>
          <p className="text-lg opacity-80 leading-relaxed">
            The One Love Salone Foundation is a non-profit organization
            dedicated to building social bridges and providing essential support
            to the most vulnerable. We believe that by fostering a culture of
            "One Love," we can overcome tribalism and economic hardship to build
            a resilient nation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {FOUNDATION_INITIATIVES.map((initiative) => (
            <div
              key={initiative.id}
              className="card bg-base-100 shadow-xl overflow-hidden group"
            >
              <figure className="h-64 overflow-hidden">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title serif text-primary">
                  {initiative.title}
                </h3>
                <p className="text-sm leading-relaxed">
                  {initiative.description}
                </p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-sm btn-ghost text-primary hover:bg-primary/10">
                    <a href="https://onelovesalonefoundation.org/news/">
                      Learn More
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="bg-primary/5 py-24 px-6 border-y border-primary/10">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">
                The Flagship Program
              </span>
              <h2 className="text-4xl font-bold mb-8 serif">
                University Scholarship Program
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="badge badge-primary badge-outline h-12 w-12 rounded-full p-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold">Merit-Based Selection</h4>
                    <p className="text-sm opacity-70">
                      We identify high-performing students who face significant
                      financial barriers.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="badge badge-primary badge-outline h-12 w-12 rounded-full p-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold">Holistic Support</h4>
                    <p className="text-sm opacity-70">
                      Beyond tuition, we provide stipends for learning materials
                      and research.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="badge badge-primary badge-outline h-12 w-12 rounded-full p-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold">Leadership Development</h4>
                    <p className="text-sm opacity-70">
                      Scholars participate in workshops to build civic
                      responsibility and professional skills.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="btn btn-primary mt-10">
                  Support the Scholarship Fund
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img
                src="/IMG_9001-min copy.jpg"
                alt="Student"
                className="rounded-2xl shadow-lg mt-8"
              />
              <img
                src="/IMG_8941-min.jpg"
                alt="Student"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 px-6 container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-black text-primary mb-2">200+</div>
            <div className="font-medium text-base-content/60">
              Scholars Supported
            </div>
          </div>
          <div>
            <div className="text-5xl font-black text-primary mb-2">500+</div>
            <div className="font-medium text-base-content/60">
              Students have received school supplies, including backpacks,
              notebooks, and pens
            </div>
          </div>
          <div>
            <div className="text-5xl font-black text-primary mb-2">15+</div>
            <div className="font-medium text-base-content/60">
              Remote villages and towns directly reached through our
              on-the-ground distribution efforts
            </div>
          </div>
          <div>
            <div className="text-5xl font-black text-primary mb-2">1M+</div>
            <div className="font-medium text-base-content/60">
              Lives Impacted
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Foundation;
