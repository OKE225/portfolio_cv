/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "move-diagonal": {
          from: { backgroundPosition: "0% 0%" },
          to: { backgroundPosition: "100% 100%" },
        },
      },
      animation: {
        "move-diagonal": "move-diagonal 12s linear infinite",
      },
    },
  },
};

export default config;
