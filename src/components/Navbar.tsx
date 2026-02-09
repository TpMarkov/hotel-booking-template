"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(".mobile-menu", {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(".mobile-menu", {
        x: "100%",
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Our Hotels" },
    { href: "/booking", label: "Book Now" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <span
                className={`font-display text-2xl tracking-wider transition-colors duration-300 ${
                  isScrolled ? "text-charcoal-800" : "text-white"
                }`}
              >
                VILLA SERENITÀ
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm uppercase tracking-[0.15em] hover:opacity-70 transition-opacity duration-300 ${
                    isScrolled ? "text-charcoal-800" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/booking"
                className={`px-6 py-3 text-sm uppercase tracking-[0.15em] transition-all duration-300 ${
                  isScrolled
                    ? "bg-charcoal-800 text-white hover:bg-charcoal-700"
                    : "bg-white text-charcoal-800 hover:bg-cream-100"
                }`}
              >
                Reserve
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                } ${isScrolled ? "bg-charcoal-800" : "bg-white"}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                } ${isScrolled ? "bg-charcoal-800" : "bg-white"}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                } ${isScrolled ? "bg-charcoal-800" : "bg-white"}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="mobile-menu fixed inset-0 z-40 bg-sage-900 flex flex-col items-center justify-center md:hidden"
        style={{ transform: "translateX(100%)", opacity: 0 }}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-cream-100 text-2xl font-display tracking-wide hover:text-gold-400 transition-colors duration-300"
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 px-10 py-4 bg-gold-500 text-white text-sm uppercase tracking-[0.15em] hover:bg-gold-600 transition-colors duration-300"
          >
            Reserve Now
          </Link>
        </div>
      </div>
    </>
  );
}
