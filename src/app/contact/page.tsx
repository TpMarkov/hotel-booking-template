"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hotels } from "@/data/hotels";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-animate", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top 80%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 md:py-32 bg-charcoal-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 to-charcoal-900" />
        <div className="relative z-10 container text-center">
          <span className="contact-animate block text-xs md:text-sm uppercase tracking-[0.25em] mb-6 text-cream-200">
            Get in Touch
          </span>
          <h1 className="contact-animate font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Contact Concierge
          </h1>
          <p className="contact-animate text-lg text-cream-200 max-w-2xl mx-auto leading-relaxed">
            Whether planning a special celebration or seeking personalized
            travel recommendations, our team is here to assist.
          </p>
        </div>
      </section>

      <div ref={pageRef} className="bg-cream-50">
        {/* Contact Info & Form */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div className="contact-animate">
                <span className="section-label">Reach Out</span>
                <h2 className="section-title mb-8">We Are Here to Help</h2>
                <p className="text-charcoal-600 leading-relaxed mb-10">
                  Our dedicated concierge team is available 24/7 to assist with
                  reservations, special requests, and any questions about our
                  collection. We speak English, Italian, French, Spanish, and
                  German.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cream-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-charcoal-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-charcoal-900">Phone</h3>
                      <p className="text-charcoal-600">+39 055 234 1234</p>
                      <p className="text-xs text-charcoal-400 mt-1">
                        Available 24/7
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cream-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-charcoal-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-charcoal-900">Email</h3>
                      <p className="text-charcoal-600">
                        reservations@villaserenita.com
                      </p>
                      <p className="text-xs text-charcoal-400 mt-1">
                        We reply within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cream-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-charcoal-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-charcoal-900">
                        Headquarters
                      </h3>
                      <p className="text-charcoal-600">
                        Via della Vigna 45
                        <br />
                        50022 Greve in Chianti
                        <br />
                        Florence, Italy
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-animate">
                <div className="bg-cream-50 p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg
                          className="w-8 h-8 text-gold-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="font-display text-2xl mb-4">
                        Message Sent
                      </h3>
                      <p className="text-charcoal-600">
                        Thank you for reaching out. Our concierge team will
                        respond shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <h3 className="font-display text-xl mb-6">
                        Send a Message
                      </h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-xs uppercase tracking-[0.1em] text-charcoal-600 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="input"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-[0.1em] text-charcoal-600 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="input"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-xs uppercase tracking-[0.1em] text-charcoal-600 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="input"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-[0.1em] text-charcoal-600 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="input"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-xs uppercase tracking-[0.1em] text-charcoal-600 mb-2">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="input"
                          required
                        >
                          <option value="">Select a topic...</option>
                          <option value="reservation">
                            Reservation Inquiry
                          </option>
                          <option value="celebration">
                            Special Celebration
                          </option>
                          <option value="corporate">Corporate Event</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="mb-6">
                        <label className="block text-xs uppercase tracking-[0.1em] text-charcoal-600 mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="input resize-none"
                          required
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full">
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Locations */}
        <section className="section bg-charcoal-900 text-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-label text-sage-300">
                Our Properties
              </span>
              <h2 className="section-title text-white">
                Find Your Destination
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hotels.map((hotel) => (
                <Link
                  key={hotel.id}
                  href={`/properties/${hotel.id}`}
                  className="contact-animate group block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden mb-4">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${hotel.images.hero})` }}
                    />
                    <div className="absolute inset-0 bg-charcoal-900/40 group-hover:bg-charcoal-900/20 transition-colors duration-500" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs uppercase tracking-[0.15em] text-white">
                        {hotel.location.country}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display text-lg group-hover:text-gold-400 transition-colors duration-300">
                    {hotel.name}
                  </h3>
                  <p className="text-sm text-cream-200">
                    {hotel.location.city}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section bg-white">
          <div className="container max-w-3xl">
            <div className="text-center mb-12">
              <span className="section-label">Common Questions</span>
              <h2 className="section-title">Frequently Asked</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "What is included in the room rate?",
                  a: "Your room rate includes overnight accommodation, daily gourmet breakfast, access to spa and wellness facilities, and all applicable taxes. Additional experiences and dining are available at an extra charge.",
                },
                {
                  q: "Can I request dietary accommodations?",
                  a: "Absolutely. Our culinary team is experienced in preparing dishes for all dietary requirements including vegetarian, vegan, gluten-free, and allergen-specific menus. Please inform us at the time of booking.",
                },
                {
                  q: "What is your cancellation policy?",
                  a: "We offer complimentary cancellation up to 7 days before your scheduled arrival. Within 7 days, a one-night fee applies. We recommend travel insurance for maximum flexibility.",
                },
                {
                  q: "Do you arrange transportation?",
                  a: "Yes, our concierge team can arrange private transfers, helicopter transfers, rental vehicles, and even yacht charters to ensure seamless travel to and from our properties.",
                },
              ].map((faq, index) => (
                <div key={index} className="border border-charcoal-200 p-6">
                  <h3 className="font-display text-lg mb-3">{faq.q}</h3>
                  <p className="text-charcoal-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
