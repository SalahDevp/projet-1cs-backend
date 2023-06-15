const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      darkBlue: {
        100: "#1E3A55",
        200: "#011A27",
        300: "#051732",
        400: "#041527",
        500: "#022D46",
      },
      orange: "#f97068",
      "mod-blue": "#3FABAF",
      "modified-white": "#F7EFE5",
      bright: "rgba(217,217,217,0.58)",
      "another-orange": "#FF2E00",
    },
    fontFamily: {
      sans: ["Poppins"],
      mono: ["Fredoka"],
    },
    extend: {
      dropShadow: {
        "3xl": "0 4px 20px 0 rgba(0, 0, 0, 0.71)",
      },
    },
    screens: {
      xss: "400px",
      smm: "540px",
      mdd: "740px",
      lgg: "1000px",
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/aspect-ratio"),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
});
