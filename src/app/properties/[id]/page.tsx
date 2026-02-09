"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hotels } from "@/data/hotels";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  params: { id: string };
}

export default function PropertyPage({ params }: Props) {
  const hotel = hotels.find((h) => h.id === params.id);
  const pageRef = useRef<HTMLDivElement>(null);

  if (!hotel) {
    notFound();
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".fade-in-up", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".content-section",
          start: "top 80%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, [hotel]);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hotel.images.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/50 to-transparent" />
        <div className="relative z-10 container text-white">
          <div className="hero-content max-w-4xl">
            <span className="block text-xs md:text-sm uppercase tracking-[0.25em] mb-4 text-cream-200">
              {hotel.location.city}, {hotel.location.country}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              {hotel.name}
            </h1>
            <p className="text-xl md:text-2xl text-cream-200 font-light leading-relaxed">
              {hotel.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div ref={pageRef} className="content-section bg-cream-50">
        {/* Description & Quick Info */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              <div className="lg:col-span-2 fade-in-up">
                <span className="section-label">About the Property</span>
                <h2 className="section-title mb-8">A Place Apart</h2>
                <p className="text-charcoal-700 leading-relaxed text-lg mb-6">
                  {hotel.fullDescription}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {hotel.amenities.slice(0, 4).map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-gold-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-charcoal-600 text-sm">
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="fade-in-up">
                <div className="bg-cream-100 p-8 sticky top-24">
                  <h3 className="font-display text-xl mb-6">Quick Facts</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-charcoal-500">Location</span>
                      <span className="text-charcoal-800 font-medium">
                        {hotel.location.city}, {hotel.location.country}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-500">Suites</span>
                      <span className="text-charcoal-800 font-medium">
                        {hotel.rooms.length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-500">Established</span>
                      <span className="text-charcoal-800 font-medium">
                        {hotel.established}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-500">Starting From</span>
                      <span className="text-charcoal-800 font-medium text-gold-600">
                        €{hotel.pricing.startingFrom}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/booking"
                    className="btn-primary w-full mt-8 text-center"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Full */}
        <section className="section bg-charcoal-900 text-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-label text-sage-300">Amenities</span>
              <h2 className="section-title text-white">
                Exceptional by Design
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {hotel.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="fade-in-up text-center p-6 border border-charcoal-700"
                >
                  <span className="text-cream-200">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rooms */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-label">Accommodations</span>
              <h2 className="section-title">Suites & Rooms</h2>
            </div>
            <div className="space-y-8">
              {hotel.rooms.map((room) => (
                <div
                  key={room.id}
                  className="fade-in-up grid grid-cols-1 md:grid-cols-2 gap-8 bg-cream-50 overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={room.images[0]}
                      alt={room.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="font-display text-2xl mb-4">{room.name}</h3>
                    <p className="text-charcoal-600 mb-6">{room.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                      <div>
                        <span className="text-charcoal-500">Size</span>
                        <p className="font-medium text-charcoal-800">
                          {room.size}
                        </p>
                      </div>
                      <div>
                        <span className="text-charcoal-500">Bed</span>
                        <p className="font-medium text-charcoal-800">
                          {room.bedType}
                        </p>
                      </div>
                      <div>
                        <span className="text-charcoal-500">Guests</span>
                        <p className="font-medium text-charcoal-800">
                          {room.maxGuests}
                        </p>
                      </div>
                      <div>
                        <span className="text-charcoal-500">Price</span>
                        <p className="font-medium text-gold-600">
                          €{room.price} / night
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {room.amenities.slice(0, 3).map((amenity, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white text-xs text-charcoal-600"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <Link href="/booking" className="btn-secondary text-center">
                      Reserve This Room
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="section bg-sage-100">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto">
              <span className="section-label">Recognition</span>
              <h2 className="section-title mb-8">Awards & Accolades</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {hotel.awards.map((award, index) => (
                <div
                  key={index}
                  className="fade-in-up flex items-center gap-3 px-6 py-4 bg-white"
                >
                  <svg
                    className="w-6 h-6 text-gold-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-charcoal-700 font-medium">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up">
                <span className="section-label">Location</span>
                <h2 className="section-title mb-6">Find Your Way</h2>
                <p className="text-charcoal-600 leading-relaxed mb-8">
                  Located in the heart of {hotel.location.city},{" "}
                  {hotel.location.country}, our property offers easy access to
                  local attractions while providing a peaceful retreat from the
                  bustle.
                </p>
                <address className="not-italic mb-8">
                  <p className="font-display text-lg mb-2">{hotel.name}</p>
                  <p className="text-charcoal-600">{hotel.location.address}</p>
                </address>
                <Link href="/contact" className="btn-primary">
                  Get Directions
                </Link>
              </div>
              <div className="fade-in-up bg-cream-100 h-80 flex items-center justify-center">
                <span className="text-charcoal-500">
                  Map Integration Placeholder
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
