/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        navy: {
          950: '#0A192F',
          900: '#0F2547',
          800: '#1A365D',
          700: '#2A4A7F',
        },
        cream: {
          100: '#FFF8E7',
          200: '#FFE8C4',
        },
        golden: {
          500: '#FFB800',
        },
        crimson: {
          500: '#DC2626',
        },
      },
    },
  },
  plugins: [],
} 