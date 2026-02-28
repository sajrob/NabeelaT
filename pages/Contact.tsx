import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm, ValidationError } from "@formspree/react";

/**
 * Contact page component.
 * Provides a formal way for visitors to reach out to the office of Hon. Nabeela Tunis.
 * Includes functional form handling via Formspree and official contact details.
 */
const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xgolkrob");

  return (
    <div className="animate-in fade-in duration-700">
      <Helmet>
        <title>Contact Hon. Nabeela Tunis | Official Office</title>
        <meta
          name="description"
          content="Get in touch with the office of Hon. Nabeela Tunis for ministerial matters, speaking engagements, or professional inquiries."
        />
        <link rel="canonical" href="https://nabeelatunis.com/contact" />
      </Helmet>
      <header className="bg-primary/5 border-b border-primary/10 py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 serif">
            Official Inquiries
          </h1>
          <p className="text-lg max-w-2xl mx-auto opacity-70">
            For ministerial matters, speaking invitations, or professional
            consultations with the office of Hon. Nabeela Tunis.
          </p>
        </div>
      </header>

      <section className="py-20 px-6 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-base-100 p-8 rounded-3xl border border-base-200 shadow-sm">
            {state.succeeded ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">Message Sent</h2>
                <p className="opacity-70 mb-8">
                  Thank you for your message. Our office will respond to your
                  inquiry via the email provided.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="btn btn-primary"
                >
                  New Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {state.errors && (
                  <div className="alert alert-error shadow-sm rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      There was an error sending your message. Please try again
                      or email directly.
                    </span>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Full Name
                      </span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered w-full focus:input-primary"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="email@address.com"
                      className="input input-bordered w-full focus:input-primary"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Inquiry Type
                    </span>
                  </label>
                  <select
                    name="type"
                    className="select select-bordered w-full focus:select-primary"
                    required
                  >
                    <option disabled selected value="">
                      Select an option
                    </option>
                    <option value="Ministerial Office">
                      Ministerial Office
                    </option>
                    <option value="Diplomatic/International Relations">
                      Diplomatic/International Relations
                    </option>
                    <option value="Media & Press Inquiries">
                      Media & Press Inquiries
                    </option>
                    <option value="Speaking & Engagements">
                      Speaking & Engagements
                    </option>
                    <option value="Professional Consultation">
                      Professional Consultation
                    </option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Your Message
                    </span>
                  </label>
                  <textarea
                    name="message"
                    className="textarea textarea-bordered h-32 focus:textarea-primary"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary w-full ${state.submitting ? "btn-disabled" : ""}`}
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    "Submit Official Inquiry"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & External Links */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 serif border-b pb-2 inline-block">
                Official Channels
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit text-primary">
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">
                      Ministry of Tourism and Cultural Affairs
                    </h3>
                    <p className="text-sm opacity-70">
                      Kingharman Road, Brookfields
                    </p>
                    <p className="text-sm opacity-70">Freetown, Sierra Leone</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit text-primary">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Direct Correspondence</h3>
                    <a
                      href="mailto:info@nabeelatunis.com"
                      className="text-sm link link-primary font-medium"
                    >
                      info@nabeelatunis.com
                    </a>
                  </div>
                </div>

                <div className="card bg-base-200 border border-dashed border-primary/30 p-6">
                  <h4 className="font-bold mb-2">
                    Social & Philanthropic Work
                  </h4>
                  <p className="text-sm opacity-70 mb-4">
                    For matters related to the One Love Salone Foundation,
                    please visit their dedicated contact platform.
                  </p>
                  <a
                    href="http://onelovesalonefoundation.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline btn-primary"
                  >
                    Foundation Contact Page
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 serif border-b pb-2 inline-block">
                Official Networks
              </h2>
              <div className="flex gap-4">
                {/* LinkedIn Profile */}
                <a
                  href="https://sl.linkedin.com/in/nabeela-farida-tunis-64599776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline btn-primary"
                  aria-label="Connect with Hon. Nabeela Tunis on LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                {/* X Profile */}
                <a
                  href="https://x.com/NabeelaTunis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline btn-primary"
                  aria-label="Follow Hon. Nabeela Tunis on X"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                {/* Instagram Profile */}
                <a
                  href="https://www.instagram.com/nabeela_tunis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline btn-primary"
                  aria-label="Follow Hon. Nabeela Tunis on Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
