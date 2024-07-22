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
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding:  {
        "default-padding": "60px 250px",
        
      },
      keyframes: {
        'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
        }
      },    
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
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
        "3xl": "3rem",
        "2xl": "2rem",
        "xl": "1.7rem",
        "lg": "1.3rem",
        "md": "1rem",
        "sm": ".7rem",
        "xs": ".5rem"
      }
    },
  },
  plugins: [],
};
export default config;
