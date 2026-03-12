/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./comps/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
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
  
