"use client";

import { useEffect, useRef } from "react";
import HotelCard from "@/components/HotelCard";
import { hotels } from "@/data/hotels";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PropertiesPage() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".page-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 md:py-32 bg-charcoal-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 to-charcoal-900" />
        <div ref={headerRef} className="relative z-10 container text-center">
          <span className="page-header block text-xs md:text-sm uppercase tracking-[0.25em] mb-6 text-cream-200">
            Our Collection
          </span>
          <h1 className="page-header font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Discover Our Hotels
          </h1>
          <p className="page-header text-lg text-cream-200 max-w-2xl mx-auto leading-relaxed">
            Each property in our collection tells a unique story. From historic
            villas to cliffside retreats, find your perfect sanctuary.
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section bg-cream-50">
        <div className="container">
          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All Destinations", "Italy", "France", "Spain"].map(
              (filter, index) => (
                <button
                  key={filter}
                  className={`px-6 py-2 text-sm uppercase tracking-[0.15em] transition-all duration-300 ${
                    index === 0
                      ? "bg-charcoal-800 text-white"
                      : "bg-white text-charcoal-600 hover:bg-charcoal-800 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ),
            )}
          </div>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hotels.map((hotel, index) => (
              <HotelCard key={hotel.id} hotel={hotel} index={index} />
            ))}
          </div>

          {/* All Properties Listed */}
          <div className="mt-16 p-8 bg-white text-center">
            <h3 className="font-display text-2xl mb-4">Can't Decide?</h3>
            <p className="text-charcoal-600 mb-6 max-w-xl mx-auto">
              Our concierge team specializes in crafting personalized
              itineraries across our collection. Let us help you find the
              perfect match.
            </p>
            <a href="/contact" className="btn-secondary">
              Contact Concierge
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
