/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom scrollbar styling
      scrollbarWidth: {
        thin: 'thin',
      },
      colors: {
        scrollbar: '#1f2937',  // Scrollbar color
        'scrollbar-thumb': '#4B5563', // Thumb (the draggable part) color
        'scrollbar-track': '#9CA3AF', // Track color
      }
    }
  },
  plugins: [
    'tailwind-scrollbar',
  ],
}

