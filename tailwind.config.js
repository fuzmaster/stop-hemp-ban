/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hemp: '#CCFF00',
        ink: '#07070A',
        purpleGlow: '#6D28D9',
      },
      boxShadow: {
        glow: '0 0 45px rgba(204,255,0,0.18)',
        purple: '0 0 55px rgba(109,40,217,0.22)',
      },
    },
  },
  plugins: [],
};
