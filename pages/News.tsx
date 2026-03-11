import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

/**
 * News Page component.
 * Currently serves as a "Coming Soon" placeholder for the media and press center.
 */
const News: React.FC = () => {
    return (
        <div className="animate-in fade-in duration-1000">
            <Helmet>
                <title>News & Media | Hon. Nabeela Tunis</title>
                <meta
                    name="description"
                    content="Latest updates, press releases, and media coverage of Hon. Nabeela Tunis's work and initiatives."
                />
                <link rel="canonical" href="https://nabeelatunis.com/news" />
            </Helmet>

            {/* Hero / Coming Soon Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-base-200">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-[100px] animate-pulse delay-700"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* News Icon Wrapper */}
                        <div className="mb-12 mt-12 inline-block relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] rotate-6 animate-slow-rotate blur-xl"></div>
                            <div className="relative w-24 h-24 bg-primary/10 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center text-primary border border-primary/20 animate-float">
                                <svg
                                    className="w-12 h-12"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                    />
                                </svg>
                            </div>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold mb-8 serif tracking-tight text-base-content">
                            News & <span className="text-primary italic">Media</span>
                        </h1>

                        <div className="w-24 h-1 bg-primary/20 mx-auto mb-10 rounded-full"></div>

                        <p className="text-xl md:text-2xl text-base-content/60 leading-relaxed font-light max-w-2xl mx-auto mb-12">
                            Our press center is currently under development. Soon, you will find official press releases, event coverage, and multimedia updates here.
                        </p>

                        <div className="glass-card p-8 md:p-12 mb-12 border-primary/10">
                            <h2 className="text-3xl font-bold mb-4 serif tracking-tight">Coming Soon</h2>
                            <p className="text-base-content/50 mb-8 max-w-md mx-auto">
                                We are curating the most impactful stories and updates to share with you. Stay tuned for the launch of our digital newsroom.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link
                                    to="/"
                                    className="btn btn-primary btn-lg rounded-2xl px-12 text-white border-none shadow-xl shadow-primary/20"
                                >
                                    Return Home
                                </Link>
                                <Link
                                    to="/contact"
                                    className="btn btn-ghost btn-lg rounded-2xl px-12 border-2 border-base-300 hover:border-primary/50 transition-all font-medium"
                                >
                                    Inquiries
                                </Link>
                            </div>
                        </div>

                        {/* Feature Teasers */}
                        <div className="grid md:grid-cols-3 gap-6 text-left">
                            {[
                                { title: "Press Releases", icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" },
                                { title: "Media Gallery", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
                                { title: "Speeches", icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4 p-6 rounded-2xl bg-base-100/50 border border-base-200">
                                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                                        </svg>
                                    </div>
                                    <span className="font-bold serif text-lg">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section placeholder */}
            <section className="section-padding bg-primary text-primary-content overflow-hidden relative">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="container mx-auto relative z-10 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 serif tracking-tight">Be the first to know.</h2>
                        <p className="text-xl mb-12 opacity-80 font-light italic">
                            Subscribe to receive the latest updates directly in your inbox as soon as they are released.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-lg bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 transition-all rounded-2xl w-full"
                                disabled
                            />
                            <button className="btn btn-secondary btn-lg rounded-2xl px-8 shadow-2xl shadow-secondary/20" disabled>
                                Subscribe
                            </button>
                        </div>
                        <p className="mt-6 text-sm opacity-50">
                            Subscription service will be available soon.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;
