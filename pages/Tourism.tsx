import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * Tourism & Culture page.
 * Showcases ministerial work in the tourism sector.
 */
const destinations = [
  {
    id: 1,
    name: "Kangari Hills Forest",
    img: "/Tacugama-Chimps.webp",
    description: "Kangari Hills Forest",
  },
  {
    id: 2,
    name: "Bureh Beach",
    img: "/bureh-beach.jpg",
    description: "Coastal Beauty",
  },
  {
    id: 3,
    name: "Tiwai Island",
    img: "/Forest-walks-in-Tiwai-min.webp",
    description: "Forest Treks & Wildlife",
  },
  {
    id: 4,
    name: "National Museum",
    img: "/photo1jpg-min.jpg",
    description: "Historic Escape",
  },
];

const Tourism: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Helmet>
        <title>Tourism & Culture | Hon. Nabeela Tunis</title>
        <meta
          name="description"
          content="Explore Sierra Leone's tourism transformation under the leadership of Hon. Nabeela Tunis. Learn about the 'Tourism for All' campaign and national heritage preservation."
        />
        <link rel="canonical" href="https://nabeelatunis.com/tourism" />
      </Helmet>
      <header className="bg-primary text-primary-content py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tourism & Cultural Affairs
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Showcasing the beauty, resilience, and rich heritage of the Lion
            Mountain to the rest of the world.
          </p>
        </div>
      </header>

      <section className="py-20 px-6 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <img
              src="/Exploring-Sierra-Leones-National-Parks-min.webp"
              alt="Sierra Leone National Parks"
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 serif">
              The Vision for Tourism
            </h2>
            <p className="mb-6 leading-relaxed">
              Under the leadership of Hon. Nabeela Tunis, the Ministry of
              Tourism and Cultural Affairs is implementing a strategic roadmap
              to position Sierra Leone as a top-tier destination for eco-tourism
              and cultural immersion. The focus remains on sustainable practices
              that benefit local communities while preserving the pristine
              nature of our beaches, forests, and historical sites.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-base-200 rounded-xl">
                <span className="text-primary font-bold block text-2xl mb-1">
                  Eco-Focus
                </span>
                <p className="text-xs">
                  Prioritizing environmentally responsible travel.
                </p>
              </div>
              <div className="p-4 bg-base-200 rounded-xl">
                <span className="text-primary font-bold block text-2xl mb-1">
                  Cultural Pride
                </span>
                <p className="text-xs">
                  Preserving traditional arts and historic landmarks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Bunce Island Restoration",
              desc: "Protecting and documenting one of West Africa most significant historical sites.",
              icon: "🏰",
            },
            {
              title: "Eco-Village Initiatives",
              desc: "Developing sustainable hospitality models in rural coastal areas.",
              icon: "🌿",
            },
            {
              title: "Arts & Crafts Expo",
              desc: "Providing an international stage for Sierra Leonean artisans and creatives.",
              icon: "🎨",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="card bg-base-100 border border-base-200 shadow-md"
            >
              <div className="card-body">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="card-title serif">{item.title}</h3>
                <p className="text-sm opacity-70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div> */}
      </section>

      {/* Destination Highlight */}
      <section className="bg-base-200 py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl font-bold serif">Destination Spotlight</h2>
            <a
              href="https://tourismsierraleone.com/"
              className="btn btn-outline btn-primary mt-10 md:mt-4"
            >
              View All Destinations
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className="group relative overflow-hidden rounded-2xl h-80"
              >
                <img
                  src={dest.img} // Pulls unique image from your object
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <div className="text-white">
                    <h4 className="font-bold text-lg">{dest.name}</h4>
                    <p className="text-xs opacity-80">{dest.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tourism;
