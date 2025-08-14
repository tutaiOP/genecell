/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#489A36",
        "primary-10": "#489A36",
        "primary-dark": "#115B12",
        secondary: "#F4C916",
        background: "#F2F2F2",
        "bg-input": "#F5F5F5",
        text: "#212121",
        "text-secondary": "#757575",
        border: "#329A35",
        card: "#F8F8F8",
        warning: "#FB8C00",
        notification: "#FF4500",
      },
    },
  },
  plugins: [],
};
