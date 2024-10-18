/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('./src/components/assets/image-hero-mobile.jpg')",
        desktop: "url('./src/components/assets/image-hero-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
