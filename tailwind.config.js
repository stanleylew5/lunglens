/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        regalblack: '#040309',
        regalpurple: '#451541',
        regalmagenta: '#FB28FF',
        regalhovermagenta: '#BA2DBD',
        regalblue: '#0175FD',
        textpurple: '#5b00fa',
        textpink: '#f98ef9',
        textmidpink: '#fe00ff',
      },
      boxShadow:{
        '3xl': '0px 0px 16px #FFFFFF;' 
      }
    },
  },
  plugins: [],
};
