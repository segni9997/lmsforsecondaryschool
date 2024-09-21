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
        background: "var(--background)",
        foreground: "var(--foreground)",
      }, 
      backgroundImage: {
        'hero-pattern': "url('/assets/images/background_image.jpg')",
        'ethiostudent': "url('/assets/images/ethiostudent.jpg')",
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui :{
    themes: ['cupcake', 'coffee','aqua']
  }
};
export default config;
