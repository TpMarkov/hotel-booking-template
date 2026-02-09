"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hotel } from "@/data/hotels";

gsap.registerPlugin(ScrollTrigger);

interface HotelCardProps {
  hotel: Hotel;
  index: number;
}

export default function HotelCard({ hotel, index }: HotelCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
        delay: index * 0.1,
      });
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <article
      ref={cardRef}
      className="group relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-500"
    >
      {/* Image */}
      <Link
        href={`/properties/${hotel.id}`}
        className="block relative aspect-[4/5] overflow-hidden"
      >
        <Image
          src={hotel.images.hero}
          alt={hotel.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Location Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs uppercase tracking-[0.15em] text-charcoal-800">
            {hotel.location.city}, {hotel.location.country}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <p className="text-xs uppercase tracking-[0.2em] text-cream-200 mb-2">
          {hotel.tagline}
        </p>
        <h3 className="font-display text-2xl mb-4 group-hover:text-gold-400 transition-colors duration-300">
          {hotel.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-cream-200">
            From{" "}
            <span className="text-white font-medium">
              €{hotel.pricing.startingFrom}
            </span>{" "}
            / night
          </span>
          <Link
            href={`/properties/${hotel.id}`}
            className="text-xs uppercase tracking-[0.15em] hover:text-gold-400 transition-colors duration-300 flex items-center gap-2"
          >
            Discover
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
