"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Icon */}
          <div className="mb-8">
            <svg
              className="w-32 h-32 mx-auto text-gold-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-6xl font-display font-bold text-charcoal-900 mb-4">
            404
          </h1>

          <h2 className="text-2xl font-display font-semibold text-charcoal-700 mb-4">
            Page Not Found
          </h2>

          <p className="text-charcoal-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-charcoal-800 hover:bg-charcoal-700 text-white font-medium px-8 py-3 transition-colors tracking-wide"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Return Home
            </Link>

            <Link
              href="/properties"
              className="inline-flex items-center justify-center border border-charcoal-800 text-charcoal-800 hover:bg-charcoal-800 hover:text-white font-medium px-8 py-3 transition-colors tracking-wide"
            >
              Our Hotels
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-charcoal-200">
            <p className="text-sm text-charcoal-500 mb-4">Quick Links</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/booking"
                className="text-gold-500 hover:text-gold-600 text-sm"
              >
                Book a Stay
              </Link>
              <Link
                href="/contact"
                className="text-gold-500 hover:text-gold-600 text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
