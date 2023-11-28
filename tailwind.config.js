/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "slide-1": "url('/assets/hero-slide-1.jpg')",
        "slide-2": "url('/assets/hero-slide-2.jpg')",
        "slide-3": "url('/assets/hero-slide-3.jpg')",
      },
    },
  },
  plugins: [],
};
