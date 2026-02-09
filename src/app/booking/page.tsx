"use client";

import { useState } from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hotels } from "@/data/hotels";

gsap.registerPlugin(ScrollTrigger);

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedHotel, setSelectedHotel] = useState(hotels[0]);
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 2,
    room: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".booking-step", {
        y: 30,
        opacity: 0,
        duration: 0.5,
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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4); // Confirmation step
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
          <span className="block text-xs md:text-sm uppercase tracking-[0.25em] mb-6 text-cream-200">
            Reservations
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Book Your Stay
          </h1>
          <p className="text-lg text-cream-200 max-w-2xl mx-auto leading-relaxed">
            Begin your journey to exceptional hospitality. Select your
            destination and let us craft an unforgettable experience.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section ref={pageRef} className="section bg-cream-50">
        <div className="container max-w-5xl">
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {["Select Hotel", "Dates & Guests", "Your Details"].map(
              (label, index) => (
                <div key={label} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
                      step > index + 1
                        ? "bg-gold-500 text-white"
                        : step === index + 1
                          ? "bg-charcoal-800 text-white"
                          : "bg-charcoal-200 text-charcoal-500"
                    }`}
                  >
                    {step > index + 1 ? (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span
                    className={`ml-2 text-sm uppercase tracking-[0.1em] hidden sm:block ${
                      step >= index + 1
                        ? "text-charcoal-800"
                        : "text-charcoal-400"
                    }`}
                  >
                    {label}
                  </span>
                  {index < 2 && (
                    <div
                      className={`w-12 md:w-24 h-px mx-4 ${
                        step > index + 1 ? "bg-gold-500" : "bg-charcoal-200"
                      }`}
                    />
                  )}
                </div>
              ),
            )}
          </div>

          {/* Form Content */}
          <div className="bg-white shadow-lg p-8 md:p-12">
            {/* Step 1: Select Hotel */}
            {step === 1 && (
              <div className="booking-step">
                <h2 className="font-display text-2xl mb-8 text-center">
                  Select Your Destination
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {hotels.map((hotel) => (
                    <button
                      key={hotel.id}
                      onClick={() => {
                        setSelectedHotel(hotel);
                        setStep(2);
                      }}
                      className={`relative overflow-hidden text-left p-6 border transition-all duration-300 ${
                        selectedHotel.id === hotel.id
                          ? "border-charcoal-800 bg-cream-50"
                          : "border-charcoal-200 hover:border-charcoal-400"
                      }`}
                    >
                      <div className="flex gap-4">
                        <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                          <Image
                            src={hotel.images.hero}
                            alt={hotel.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <span className="text-xs uppercase tracking-[0.15em] text-charcoal-500">
                            {hotel.location.city}, {hotel.location.country}
                          </span>
                          <h3 className="font-display text-xl mt-1">
                            {hotel.name}
                          </h3>
                          <p className="text-sm text-charcoal-600 mt-2">
                            From €{hotel.pricing.startingFrom} / night
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Dates & Guests */}
            {step === 2 && (
              <div className="booking-step">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-charcoal-100">
                  <div className="relative w-16 h-16 overflow-hidden">
                    <Image
                      src={selectedHotel.images.hero}
                      alt={selectedHotel.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg">
                      {selectedHotel.name}
                    </h3>
                    <p className="text-sm text-charcoal-500">
                      {selectedHotel.location.city},{" "}
                      {selectedHotel.location.country}
                    </p>
                  </div>
                  <button
                    onClick={() => setStep(1)}
                    className="ml-auto text-xs uppercase tracking-[0.1em] text-charcoal-500 hover:text-charcoal-800"
                  >
                    Change
                  </button>
                </div>

                <h2 className="font-display text-2xl mb-8 text-center">
                  Select Dates & Guests
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm uppercase tracking-[0.1em] text-charcoal-600 mb-2">
                      Check In
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-[0.1em] text-charcoal-600 mb-2">
                      Check Out
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-[0.1em] text-charcoal-600 mb-2">
                      Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="input"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-8">
                  <label className="block text-sm uppercase tracking-[0.1em] text-charcoal-600 mb-2">
                    Preferred Room
                  </label>
                  <select
                    name="room"
                    value={formData.room}
                    onChange={handleInputChange}
                    className="input"
                  >
                    <option value="">Select a room...</option>
                    {selectedHotel.rooms.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.name} - €{room.price}/night
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-between mt-10">
                  <button onClick={() => setStep(1)} className="btn-secondary">
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="btn-primary"
                    disabled={!formData.checkIn || !formData.checkOut}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Guest Details */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="booking-step">
                <h2 className="font-display text-2xl mb-8 text-center">
                  Your Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm uppercase tracking-[0.1em] text-charcoal-600 mb-2">
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
                    <label className="block text-sm uppercase tracking-[0.1em] text-charcoal-600 mb-2">
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
                  <div>
                    <label className="block text-sm uppercase tracking-[0.1em] text-charcoal-600 mb-2">
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
                    <label className="block text-sm uppercase tracking-[0.1em] text-charcoal-600 mb-2">
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
                  <div className="md:col-span-2">
                    <label className="block text-sm uppercase tracking-[0.1em] text-charcoal-600 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="input resize-none"
                      placeholder="Dietary requirements, accessibility needs, celebration details..."
                    />
                  </div>
                </div>

                <div className="mt-10 p-6 bg-cream-100 mb-8">
                  <h3 className="font-display text-lg mb-4">
                    Reservation Summary
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-charcoal-500">Property</span>
                      <p className="font-medium">{selectedHotel.name}</p>
                    </div>
                    <div>
                      <span className="text-charcoal-500">Dates</span>
                      <p className="font-medium">
                        {formData.checkIn} — {formData.checkOut}
                      </p>
                    </div>
                    <div>
                      <span className="text-charcoal-500">Guests</span>
                      <p className="font-medium">{formData.guests}</p>
                    </div>
                    <div>
                      <span className="text-charcoal-500">Room</span>
                      <p className="font-medium">
                        {selectedHotel.rooms.find((r) => r.id === formData.room)
                          ?.name || "Not selected"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-secondary"
                  >
                    Back
                  </button>
                  <button type="submit" className="btn-primary">
                    Confirm Reservation
                  </button>
                </div>
              </form>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div className="booking-step text-center py-12">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg
                    className="w-10 h-10 text-gold-500"
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
                </div>
                <h2 className="font-display text-3xl mb-4">
                  Reservation Received
                </h2>
                <p className="text-charcoal-600 max-w-md mx-auto mb-8">
                  Thank you, {formData.firstName}. Your reservation request has
                  been received. Our concierge team will contact you within 24
                  hours to confirm your booking and assist with any special
                  arrangements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/" className="btn-primary">
                    Return Home
                  </Link>
                  <Link href="/properties" className="btn-secondary">
                    Explore More Hotels
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Concierge CTA */}
      <section className="section bg-charcoal-900 text-white">
        <div className="container text-center">
          <h2 className="font-display text-3xl mb-6">Need Assistance?</h2>
          <p className="text-cream-200 max-w-xl mx-auto mb-8">
            Our concierge team is available around the clock to help plan your
            perfect stay. Contact us for personalized recommendations.
          </p>
          <Link
            href="/contact"
            className="btn-secondary border-white text-white hover:bg-white hover:text-charcoal-900"
          >
            Contact Concierge
          </Link>
        </div>
      </section>
    </>
  );
}
