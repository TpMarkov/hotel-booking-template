"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.from(".hero-text", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3,
      });

      // Parallax effect
      gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Fade out on scroll
      gsap.to(heroRef.current, {
        opacity: 0.7,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-charcoal-900/40" />
      </div>

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 container text-center text-white"
      >
        <span className="hero-text block text-xs md:text-sm uppercase tracking-[0.25em] mb-6 text-cream-200">
          Welcome to Villa Serenità
        </span>
        <h1 className="hero-text font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-8">
          Where Every Stay
          <br />
          <span className="italic font-light">Becomes a Memory</span>
        </h1>
        <p className="hero-text text-lg md:text-xl max-w-2xl mx-auto mb-12 text-cream-100 font-light leading-relaxed">
          Discover our curated collection of boutique hotels across Europe's
          most enchanting destinations. From Tuscan vineyards to Mediterranean
          cliffs.
        </p>
        <div className="hero-text flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/properties"
            className="btn-primary bg-gold-500 hover:bg-gold-600 border-none"
          >
            Explore Our Hotels
          </Link>
          <Link
            href="/booking"
            className="btn-secondary border-white text-white hover:bg-white hover:text-charcoal-900"
          >
            Make a Reservation
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-[0.2em] text-cream-200">
            Scroll
          </span>
          <svg
            className="w-5 h-5 text-cream-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
