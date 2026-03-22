/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Legacy aliases (keep for transition)
        "primary": "#3B82F6",
        "background-light": "#0B1120",
        "background-dark": "#0B1120",
        "card-dark": "#151E32",
        "border-dark": "#1F2E4A",
        "surface-dark": "#151E32",
        "surface-dark-highlight": "#1F2E4A",
        "text-secondary": "#8A9BBA",
        // Brand Design System
        "brand-bg": "#0B1120",
        "brand-surface": "#151E32",
        "brand-border": "#1F2E4A",
        "brand-text": "#F8FAFC",
        "brand-muted": "#8A9BBA",
        "brand-purple": "#A855F7",
        "brand-blue": "#3B82F6",
        "brand-amber": "#F59E0B",
        "brand-green": "#22C55E",
        "brand-pink": "#EC4899",
        "brand-teal": "#14B8A6",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
