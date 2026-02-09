"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import { brandStory, testimonials } from "@/data/hotels";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const storyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Story section animation
      gsap.from(".story-image", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".story-content", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 75%",
        },
        delay: 0.2,
      });

      // Stats animation
      gsap.from(".stat-item", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
      });

      // Testimonials animation
      gsap.from(".testimonial-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top 75%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Story Section */}
      <section ref={storyRef} className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="story-image relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                alt="Villa Serenità Collection"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="story-content">
              <span className="section-label">Our Story</span>
              <h2 className="section-title mb-8">{brandStory.title}</h2>
              <div className="prose prose-lg text-charcoal-600 leading-relaxed space-y-6">
                {brandStory.content.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/properties" className="btn-primary">
                  Discover Our Hotels
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-charcoal-800">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="stat-item text-center">
              <span className="block font-display text-4xl md:text-5xl text-gold-400 mb-2">
                4
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-cream-200">
                Boutique Hotels
              </span>
            </div>
            <div className="stat-item text-center">
              <span className="block font-display text-4xl md:text-5xl text-gold-400 mb-2">
                54
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-cream-200">
                Unique Suites
              </span>
            </div>
            <div className="stat-item text-center">
              <span className="block font-display text-4xl md:text-5xl text-gold-400 mb-2">
                12
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-cream-200">
                Years of Excellence
              </span>
            </div>
            <div className="stat-item text-center">
              <span className="block font-display text-4xl md:text-5xl text-gold-400 mb-2">
                4
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-cream-200">
                Countries
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <FeaturedProperties />

      {/* Experience Section */}
      <section className="section bg-charcoal-900 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label text-sage-300">Experiences</span>
            <h2 className="section-title text-white mb-6">
              Curated Moments, Unforgettable Memories
            </h2>
            <p className="text-cream-200 leading-relaxed">
              Beyond exceptional accommodations, each of our properties offers
              exclusive experiences designed to connect you with destination,
              culture, and craft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Culinary Journeys",
                description:
                  "Michelin-starred dining, private cooking classes, and farm-to-table experiences led by acclaimed chefs.",
                image:
                  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
              },
              {
                title: "Wellness & Spa",
                description:
                  "Holistic treatments using local ingredients, thermal pools, and serene spaces for total rejuvenation.",
                image:
                  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
              },
              {
                title: "Cultural Immersion",
                description:
                  "Private access to historic sites, artisan workshops, and expert-guided explorations of local heritage.",
                image:
                  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
              },
            ].map((experience, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-charcoal-900/50 group-hover:bg-charcoal-900/30 transition-colors duration-500" />
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="font-display text-2xl mb-3">
                    {experience.title}
                  </h3>
                  <p className="text-cream-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section bg-cream-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Guest Stories</span>
            <h2 className="section-title mb-6">Words from Our Guests</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card bg-white p-8 md:p-10"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-gold-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg text-charcoal-700 leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <cite className="not-italic font-medium text-charcoal-900 block">
                    {testimonial.author}
                  </cite>
                  <span className="text-sm text-charcoal-500">
                    {testimonial.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-sage-100">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label">Stay Connected</span>
            <h2 className="section-title mb-6">Join Our Inner Circle</h2>
            <p className="section-subtitle mb-10 max-w-2xl mx-auto">
              Be the first to discover new properties, exclusive experiences,
              and special offers curated for our most discerning travelers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="input flex-1"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
