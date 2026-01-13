/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // AQUÍ DEBE IR LA ANIMACIÓN
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
      },
      // AQUÍ DEBEN IR LOS KEYFRAMES
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-33.33%)' }, // Ajustado para 3 copias del array
        }
      }
    },
  },
  plugins: [],
}