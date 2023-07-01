/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      rotate: {
        7: "7deg",
      },
    },
  },
  variants: {
    extend: {
      rotate: ["hover"],
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
