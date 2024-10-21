/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('../src/components/assets/image-hero-mobile.jpg')",
        desktop: "url('../src/components/assets/image-hero-desktop.jpg')",
      },
      colors: {
        moderateCyan: "hsl(176, 50%, 47%)",
        darkCyan: "hsl(176, 72%, 28%)",
        black: "hsl(0, 0%, 0%)",
        darkGray: "hsl(0, 0%, 48%)",
      },
      fontFamily: {
        custom: ["commissioner", "sans-serif"],
      },
    },
  },
  plugins: [],
};
