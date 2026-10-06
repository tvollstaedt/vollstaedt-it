/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,yaml}", "./src/index.html"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        bodyBg: "#f1f5fa",
        darkBodyBg: "#14181a",
        charcoal: "#2c3943",
        pColor: "#515456",
        customPurple: "#9C7ECE",
        customPurpleDarker: "#7C64A4",
        steelBlue: "#7E88CE",
        steelBlueDarker: "#646CA4",
      },
      boxShadow: {
        customShadow: "0 8px 34px 0 rgba(22,24,26,0.08)",
        customShadowHover: "0 8px 38px 0 rgba(22,24,26,0.1)",
      },
      backgroundImage: {
        cursorGradient: "linear-gradient(#1100ff 10%, #ff00f2)",
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      keyframes: {
        lineout: {
          "0%": {
            transform: "scaleX(1)",
            transformOrigin: "100% 50%",
          },
          "100%": {
            transform: "scaleX(0)",
            transformOrigin: "100% 50%",
          },
        },
        linein: {
          "0%": {
            transform: "scaleX(0)",
            transformOrigin: "0% 50%",
          },
          "100%": {
            transform: "scaleX(1)",
            transformOrigin: "0% 50%",
          },
        },
        scaleDot: {
          "100%": {
            scale: "2.5",
            opacity: "0",
          },
        },
        loader: {
          "25%": {
            backgroundPosition: "100% 0   ,0 100%,100% 100%",
          },
          "50%": {
            backgroundPosition: "100% 0   ,0 0   ,100% 100%",
          },
          "75%": {
            backgroundPosition: "100% 0   ,0 0   ,0    100%",
          },
          "100%": {
            backgroundPosition: "100% 100%,0 0   ,0    100%",
          },
        },
      },
      animation: {
        lineOut: "lineout 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) both",
        lineIn: "linein 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) both",
        hireDot: "scaleDot 1500ms infinite linear",
        loaderDots: "loader 0.8s infinite ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: [{ pattern: /h-/ }],
};
