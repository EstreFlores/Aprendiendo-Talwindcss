/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      with:{
        '120': "430px",
        '160': "510px",
      },
      colors:{
        'blue-gris': "#455c6e",
        'red-pink':{
          "black":"#40401b",
          "white":"#bd4d67",
        },
        'green.lol':{
        50: "#63e670",
        100: "#38d948",
        200:"#23ba32",
        300: "#156b1e"
      }
      },

      transitionTimingFunction:{
        'in-cubic': "cubic-bezier(1, .18, ..18, 1.55)",
        'in-out-back': "cubic-bezier(.27, .78, .69, .31"
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-20deg)' },
          '50%': { transform: 'rotate(20deg)' },
        },
        floating: {
          '50%': { transform: 'translateY(10px)' 

          }
        }
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        floating: "floating 1.5s ease-in-out infinite",
       
      }
    },
  },
  plugins: [],
}

