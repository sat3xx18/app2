/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-green': '#0F4C3A',
        'brand-gold': '#D4AF37',
        'brand-black': '#1A1A1A',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        'elegant': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};