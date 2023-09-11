/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
	],
	theme: {
		screens: {

			"sm1": "450px", 

			'sm': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
	  
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		  },
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
		  Josefin: ["Josefin"],
		},
  
	  },
	},
  
	plugins: [],
  };
  