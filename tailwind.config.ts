import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "black-pattern-1": "url('./assets/images/black-pattern-1.webp')",
        "black-pattern-2": "url('./assets/images/black-pattern-2.webp')",
        "white-abstract-pattern-1": "url('./assets/images/flat-illustration-wavy-white-background.jpg')",
        "white-abstract-pattern-2": "url('./assets/images/white-abstract-background-2.webp')",
        "white-abstract-pattern-3": "url('./assets/images/white-abstract-background-3.webp')",
        "white-abstract-pattern-5": "url('./assets/images/white-abstract-background-5.webp')",
      },
      padding:  {
        "default-padding": "60px 400px",
        "medium-padding": "60px 30px",
        "small-padding": "60px 10px"
      },
      keyframes: {
        'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
        }
      },    
      animation: {
        'infinite-scroll': 'infinite-scroll 60s linear infinite',
      },
      colors: {
        "gray-1": "#353535",
        "gray-2": "#666666",
        "gray-3": "#CCCCCC",
        "gray-4": "#EEEEEE",
        "beige": "#DBC8B0",
      },
      fontSize: {
        "4xl": "4rem",
        "3xl": "2.8rem",
        "2xl": "2rem",
        "xl": "1.7rem",
        "lg": "1.2rem",
        "md": "1rem",
        "sm": ".7rem",
        "xs": ".5rem"
      },
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [],
};
export default config;
