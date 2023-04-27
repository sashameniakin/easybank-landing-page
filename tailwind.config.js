/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      gradient:
        "linear-gradient(to bottom right, hsl(136, 64%, 51%), hsl(192, 69%, 51%))",
      modalGradient:
        "linear-gradient(to bottom, hsl(231, 26%, 24%, 1), hsl(231, 26%, 24%, 0))",
    },

    screens: {
      desktop: "821px",
    },
    colors: {
      grayishBlue: "hsl(231, 8%, 61%)",
      pureWhite: "hsl(0, 0%, 100%)",
      darkBlue: "hsl(231, 26%, 24%)",
      backGr: "hsl(0, 0%, 98%)",
      backGrmiddle: " hsla(223, 18%, 96%, 1)",
      green: "hsla(158, 61%, 49%, 1)",
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
      author: [
        "10px",
        {
          fontWeight: "400",
          lineHeight: "18px",
          letterSpacing: "-0.16px",
        },
      ],
      article: [
        "13px",
        {
          fontWeight: "400",
          lineHeight: "18px",
          letterSpacing: "-0.2px",
        },
      ],
      articleTitle: [
        "16px",
        {
          fontWeight: "300",
          lineHeight: "20px",
          letterSpacing: "-0.29px",
        },
      ],
      footer: [
        "15px",
        {
          fontWeight: "400",
          lineHeight: "26px",
          letterSpacing: "-0.23px",
        },
      ],
      H2Mobile: [
        "40px",
        {
          fontWeight: "300",
          lineHeight: "47px",
          letterSpacing: "-0.71px",
        },
      ],
      mainMobile: [
        "15px",
        {
          fontWeight: "400",
          lineHeight: "25px",
          letterSpacing: "-0.23px",
        },
      ],
      H1Mobile: [
        "32px",
        {
          fontWeight: "300",
          lineHeight: "37.6px",
          letterSpacing: "-0.57px",
        },
      ],
      H3Mobile: [
        "20px",
        {
          fontWeight: "300",
          lineHeight: "28px",
          letterSpacing: "-0.36px",
        },
      ],
      menuText: [
        "18px",
        {
          fontWeight: "400",
          lineHeight: "21.15px",
          letterSpacing: "-0.14px",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
