/** @type {import('tailwindcss').Config} */
module.exports = {
    
    content: [
    "./comps/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
        colors: {
          orange: "#f9ba60",
          pink: "#e9768f",
          black: "#1d1c1c",
          white: "#fff",
          "light-color": "#666",
        },
        boxShadow: {
          custom: "0 .5rem 1.5rem rgba(0,0,0,.1)",
        },
      },
    },
    plugins: [],
  };
  
