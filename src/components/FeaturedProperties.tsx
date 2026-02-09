"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hotels } from "@/data/hotels";
import HotelCard from "./HotelCard";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProperties() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-cream-100">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Our Collection</span>
          <h2 className="section-title mb-6">
            Curated Properties Across Europe
          </h2>
          <p className="section-subtitle">
            Each property in our collection has been selected for its unique
            character, exceptional location, and unwavering commitment to
            hospitality excellence.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {hotels.map((hotel, index) => (
            <HotelCard key={hotel.id} hotel={hotel} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/properties" className="btn-secondary">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
