import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary:"#F7F7F7",
        text:"#000000",
        primary:"#FFFFFF"
      },
      fontFamily:{
        sans:["Roboto" , "sans-serif"]
      }
      
    },
  },
  plugins: [],
};
export default config;
