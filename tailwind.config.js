/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary-red": "#ff5556",
        "primary-red-light": "#FF8889",
        "primary-red-dark": "#BF0928",
      },
    },
  },
  plugins: [flowbitePlugin],
};
