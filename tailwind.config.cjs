/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f7faf0",
          100: "#e1f3d3",
          200: "#b4e6a3",
          300: "#85d371",
          400: "#57c03f",
          500: "#39A900", // Color base proporcionado
          600: "#318200",
          700: "#2b7000",
          800: "#245a00",
          900: "#1c4200",
          950: "#071f00",
        },
      },

      fontFamily: {
        Blinker: ["Blinker", "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
        Work: ["Work Sans", "sans-serif"],
      },

      screens: {
        bg: "0px",

        xs: "320px",
        // => @media (min-width: 320px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        md2: "999px",

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1792px",
        // => @media (min-width: 1792px) { ... }

        "4xl": "2048px",
        // => @media (min-width: 2048px) { ... }

        "5xl": "2304px",
        // => @media (min-width: 2304px) { ... }

        "6xl": "2560px",
        // => @media (min-width: 2560px) { ... }

        "7xl": "2816px",
        // => @media (min-width: 2816px) { ... }

        "8xl": "3072px",
        // => @media (min-width: 3072px) { ... }
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
