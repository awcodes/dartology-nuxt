const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px"
    },
    container: {
      center: true,
      padding: "1.5rem"
    },
    extend: {
      colors: {
        primary: {
          50: "#fafef5",
          100: "#f6fdeb",
          200: "#e8f9cd",
          300: "#daf5ae",
          400: "#bfee72",
          500: "#a3e635",
          600: "#93cf30",
          700: "#7aad28",
          800: "#628a20",
          900: "#50711a"
        },
        orange: {
          50: "#fef9f4",
          100: "#fdf3ea",
          200: "#f9e0ca",
          300: "#f5cda9",
          400: "#eea869",
          500: "#E68229",
          600: "#cf7525",
          700: "#ad621f",
          800: "#8a4e19",
          900: "#714014"
        },
        tertiary: {
          50: "#fcf4fe",
          100: "#f8e9fd",
          200: "#eec7f9",
          300: "#e4a5f5",
          400: "#d062ee",
          500: "#BC1EE6",
          600: "#a91bcf",
          700: "#8d17ad",
          800: "#71128a",
          900: "#5c0f71"
        },
        secondary: {
          50: "#f6fcfe",
          100: "#edfafd",
          200: "#d2f2f9",
          300: "#b7e9f5",
          400: "#82d9ee",
          500: "#4CC9E6",
          600: "#44b5cf",
          700: "#3997ad",
          800: "#2e798a",
          900: "#256271"
        },
        accent: {
          50: "#fffff5",
          100: "#feffea",
          200: "#fdfecb",
          300: "#fbfeab",
          400: "#f8fd6c",
          500: "#F5FC2D",
          600: "#dde329",
          700: "#b8bd22",
          800: "#93971b",
          900: "#787b16"
        }
      },
      fontFamily: {
        sans: ["Ubuntu", ...fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {
      opacity: ["disabled"]
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
};
