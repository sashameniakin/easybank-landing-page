/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      desktop: "821px",
    },
    colors: {},
    fontSize: {
      menu: [
        "14px",
        {
          lineHeight: "16.45px",
          fontWeight: "400",
          letterSpacing: "-0.11px",
        },
      ],
      h1: [
        "56px",
        {
          lineHeight: "64px",
          fontWeight: "300",
          letterSpacing: "-1px",
        },
      ],
      text: [
        "18px",
        {
          lineHeight: "28px",
          fontWeight: "400",
          letterSpacing: "-0.28px",
        },
      ],
      h2: [
        "40px",
        {
          lineHeight: "64px",
          fontWeight: "300",
          letterSpacing: "-0.71px",
        },
      ],
      h3: [
        "24px",
        {
          lineHeight: "28px",
          fontWeight: "300",
          letterSpacing: "-0.43px",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
