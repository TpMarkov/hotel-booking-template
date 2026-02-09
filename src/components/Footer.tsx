"use client";

import Link from "next/link";
import { hotels } from "@/data/hotels";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-cream-100">
      {/* Main Footer */}
      <div className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="block mb-6">
                <span className="font-display text-2xl tracking-wider text-white">
                  VILLA SERENITÀ
                </span>
              </Link>
              <p className="text-cream-200 text-sm leading-relaxed mb-6">
                A curated collection of boutique hotels across Europe's most
                captivating destinations. Experience luxury with a soul.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 flex items-center justify-center border border-cream-200/30 hover:border-cream-200 hover:bg-cream-100 hover:text-charcoal-900 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 flex items-center justify-center border border-cream-200/30 hover:border-cream-200 hover:bg-cream-100 hover:text-charcoal-900 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Pinterest"
                  className="w-10 h-10 flex items-center justify-center border border-cream-200/30 hover:border-cream-200 hover:bg-cream-100 hover:text-charcoal-900 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Our Hotels */}
            <div>
              <h4 className="text-sm uppercase tracking-[0.15em] text-white mb-6">
                Our Hotels
              </h4>
              <ul className="space-y-4">
                {hotels.map((hotel) => (
                  <li key={hotel.id}>
                    <Link
                      href={`/properties/${hotel.id}`}
                      className="text-sm text-cream-200 hover:text-gold-400 transition-colors duration-300"
                    >
                      {hotel.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm uppercase tracking-[0.15em] text-white mb-6">
                Discover
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/properties"
                    className="text-sm text-cream-200 hover:text-gold-400 transition-colors duration-300"
                  >
                    All Properties
                  </Link>
                </li>
                <li>
                  <Link
                    href="/booking"
                    className="text-sm text-cream-200 hover:text-gold-400 transition-colors duration-300"
                  >
                    Make a Reservation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-cream-200 hover:text-gold-400 transition-colors duration-300"
                  >
                    Contact Concierge
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-cream-200 hover:text-gold-400 transition-colors duration-300"
                  >
                    Press & Media
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-cream-200 hover:text-gold-400 transition-colors duration-300"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm uppercase tracking-[0.15em] text-white mb-6">
                Concierge
              </h4>
              <address className="not-italic space-y-4">
                <p className="text-sm text-cream-200">
                  <span className="text-white block mb-1">
                    General Inquiries
                  </span>
                  <a
                    href="mailto:reservations@villaserenita.com"
                    className="hover:text-gold-400 transition-colors duration-300"
                  >
                    reservations@villaserenita.com
                  </a>
                </p>
                <p className="text-sm text-cream-200">
                  <span className="text-white block mb-1">Phone</span>
                  <a
                    href="tel:+390552341234"
                    className="hover:text-gold-400 transition-colors duration-300"
                  >
                    +39 055 234 1234
                  </a>
                </p>
                <p className="text-sm text-cream-200">
                  <span className="text-white block mb-1">Headquarters</span>
                  Via della Vigna 45
                  <br />
                  50022 Greve in Chianti
                  <br />
                  Florence, Italy
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream-300">
              © {currentYear} Villa Serenità Collection. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="#"
                className="text-xs text-cream-300 hover:text-gold-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-cream-300 hover:text-gold-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-xs text-cream-300 hover:text-gold-400 transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
