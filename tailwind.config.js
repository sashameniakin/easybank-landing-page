/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      gradient:
        "linear-gradient(to bottom right, hsl(136, 64%, 51%), hsl(192, 69%, 51%))",
    },

    screens: {
      desktop: "821px",
    },
    colors: {
      grayishBlue: "hsl(231, 8%, 61%)",
      gradient:
        "linear-gradient(to bottom right, hsl(136, 64%, 51%) 50%, hsl(192, 69%, 51%) 50%)",
      pureWhite: "hsl(0, 0%, 100%)",
      darkBlue: "hsl(231, 26%, 24%)",
      backGr: "hsl(0, 0%, 98%)",
      backGrmiddle: " hsla(223, 18%, 96%, 1)",
    },
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
      button: [
        "14px",
        {
          fontWeight: "700",
          lineHeight: "28px",
        },
      ],
      icons: [
        "16px",
        {
          fontWeight: "400",
          lineHeight: "26px",
          letterSpacing: "-0.25px",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
