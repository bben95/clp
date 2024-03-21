/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{shtml,html,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        mobile: "100%",
        tablet: "100%",
        desktop: "1290px",
      },
    },

    extend: {
      colors: {
        white: "#fff",
        black: "#141032",
        darkbluemagenta: "#191857",
        green: "#36CE58",
        richblack: "#01011D",
        aliceblue: "#F1F6FA",
        primary: "#EB1A59",
        secondary: "#0C084A",
        nightfog: "#2F1C60",
        corbeau: "#1A1328",
        lavenderblue: "#DED1FF",
        palelavender: "#D9D1F9",
        orange: "#EFB92F",
        purple: "#675BDA",
        seashell: "#EEE8FC",
        blue: "#0F2C57",
        lightgrey: "#D2DEEF",
        customgrey: "#494651",
        darkgrey: "#121212",
        red: "#CE3640",
        lightblack: "#555C66",
      },
      boxShadow: {
        xl: "0px 0px 28px 0px rgba(0, 0, 0, 0.06)",
      },
      fontSize: {
        small: [
          "12px",
          {
            lineHeight: "22px",
            fontWeight: "500",
            letterSpacing: "2px",
          },
        ],
        small16: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500",
          },
        ],
        small18: [
          "12px",
          {
            lineHeight: "18px",
            fontWeight: "600",
            letterSpacing: "0.6px",
          },
        ],
        sm: ["14px", "21px"],
        sm22: ["14px", "22px"],
        sm24: ["14px", "24px"],
        sm26: ["14px", "26px"],
        link: [
          "15px",
          {
            lineHeight: "22px",
            fontWeight: "500",
          },
        ],
        base: [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        base2: [
          "16px",
          {
            lineHeight: "22px",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        "base2.5": [
          "16px",
          {
            lineHeight: "26px",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        base3: [
          "18px",
          {
            lineHeight: "30px",
            letterSpacing: "-0.5px",
            fontWeight: "700",
          },
        ],
        "xl-small": [
          "20px",
          {
            lineHeight: "32px",
            fontWeight: "500",
          },
        ],
        xl: [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "600",
          },
        ],
        "xl-36": [
          "24px",
          {
            lineHeight: "36px",
            fontWeight: "500",
            letterSpacing: "-0.5px",
          },
        ],
        "3.2xl": [
          "32px",
          {
            lineHeight: "46px",
            letterSpacing: "-0.5px",
            fontWeight: "600",
          },
        ],
        "3.6xl": [
          "36px",
          {
            lineHeight: "44px",
            letterSpacing: "-1.5px",
            fontWeight: "600",
          },
        ],
        "4xl": [
          "40px",
          {
            lineHeight: "48px",
            letterSpacing: "-1.5px",
            fontWeight: "600",
          },
        ],
        "4.5xl": [
          "44px",
          {
            lineHeight: "56px",
            letterSpacing: "-1.5px",
            fontWeight: "600",
          },
        ],
        "4.6xl": [
          "44px",
          {
            lineHeight: "64px",
            fontWeight: "700",
          },
        ],
        "4.8xl": [
          "48px",
          {
            lineHeight: "58px",
            fontWeight: "700",
            letterSpacing: "-1px",
          },
        ],
      },
      fontFamily: {
        manrope: "Manrope, sans-serif",
        inter: "Inter, sans-serif",
        // jetbrains: "JetBrains Mono, monospace",
      },
      maxWidth: {
        container: "1240px",
      },
      animation: {
        marquee: "marqueeanim 30s normal linear infinite",
      },
      keyframes: {
        marqueeanim: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },

    spacing: {
      0: "0px",
      1: "8px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "48px",
      6: "64px",
      7: "72px",
      8: "100px",
    },

    fontSize: {
      12: "12px",
      13: "13px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      32: "32px",
      48: "48px",
      64: "64px",
      96: "96px",
    },
  },
  plugins: [],
};
