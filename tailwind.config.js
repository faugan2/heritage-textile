/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Brand colors from MyAtchan logo
      gold: '#D4AF37',
      magenta: '#E61E8C',
      emerald: '#2D8659',
      yellow: '#FFC107',

      // Light backgrounds for luxury feel
      white: '#FFFFFF',
      cream: '#FFFAF0',
      beige: '#F5F1E8',

      // Dark text colors
      black: '#000000',
      charcoal: '#2C2C2C',
      darkgray: '#4A4A4A',

      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },

      // Accent neutrals
      neutral: {
        50: '#F8F8F8',
        100: '#E8E8E8',
        200: '#D0D0D0',
        300: '#B0B0B0',
        400: '#808080',
        500: '#606060',
      },

      // Status colors
      red: '#EF4444',
      green: '#22C55E',
      blue: '#3B82F6',
    },

    extend: {
      fontFamily: {
        'sans': ['Segoe UI', 'Roboto', '-apple-system', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(135deg, #FFFAF0 0%, #F5F1E8 100%)',
      }
    },
  },
  plugins: [],
}
