/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial Luxury Palette - Cream/Sage tones
        sage: {
          50: "#f7f7f4",
          100: "#e8e8e1",
          200: "#d4d4c8",
          300: "#b8b8a5",
          400: "#9a9a80",
          500: "#808065",
          600: "#686850",
          700: "#545440",
          800: "#454535",
          900: "#3b3b2d",
        },
        cream: {
          50: "#fdfcf9",
          100: "#faf8f3",
          200: "#f4f0e6",
          300: "#ebe5d4",
          400: "#dfd5bc",
          500: "#cec1a0",
          600: "#b8a682",
          700: "#9a8a68",
          800: "#807255",
          900: "#696047",
        },
        charcoal: {
          50: "#f6f6f6",
          100: "#e8e8e8",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6b6b6b",
          600: "#5a5a5a",
          700: "#4a4a4a",
          800: "#3d3d3d",
          900: "#2d2d2d",
        },
        gold: {
          400: "#d4a853",
          500: "#c99a45",
          600: "#b8862f",
        },
      },
      fontFamily: {
        sans: ["Cormorant Garamond", "Georgia", "serif"],
        display: ["Playfair Display", "serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
        float: "float 4s ease-in-out infinite",
        "slow-pulse": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
