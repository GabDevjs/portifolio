const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./mdx-components.tsx",
    "content/**/*.mdx",
  ],

  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-calsans)"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fade-in 3s ease-in-out forwards",
        title: "title 3s ease-out forwards",
        "fade-left": "fade-left 3s ease-in forwards",
        "fade-right": "fade-right 3s ease-in-out forwards",
        "fade-up": "fade-up 3s ease-in-out forwards",
        "fade-down": "fade-down 5s ease-in-out forwards",
        "fade-card-left": "fade-card-left 0.5s ease-in-out forwards",
        "fade-card-in": "fade-in 0.5s ease-in-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0%",
          },
          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        "fade-card-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0%",
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        "fade-up": {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateY(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        "fade-down": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0%",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "100%",
          },
        },

        title: {
          "0%": {
            opacity: "0",
          },
          "25%": {
            opacity: "25%",
          },
          "75%": {
            opacity: "75%",
          },
          "100%": {
            opacity: "100%",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-debug-screens"),
  ],
};
