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
      // animation: {
      //   'cloudy-shape': 'cloudy-shape 3s infinite',
      // },
      // keyframes: {
      //   'cloudy-shape': {
      //     '0%, 100%': { borderRadius: '50% 50% 0 0 / 100% 100% 0 0', transform: 'scale(1)' },
      //     '50%': { borderRadius: '40% 60% 0 0 / 100% 100% 0 0', transform: 'scale(1.1)' },
      //   },
      // },
    },
  },
  plugins: [],
};
