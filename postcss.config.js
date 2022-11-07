module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  theme: {
    screens: {
      mobile: "480px",
      tablet: "768px",
      laptop: "976px",
      desktop: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#694DEC",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Avenir Next", "sans-serif"],
      serif: ["Avenir Next", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
