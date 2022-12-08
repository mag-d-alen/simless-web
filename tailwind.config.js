/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    theme: {
      extend: {
        animation: {
          pulse: "pulse 10s linear",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
