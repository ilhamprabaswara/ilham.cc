/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      sys: {
        light: {
          "on-surface-variant": "#45464F",
          "on-background": "#1B1B1F",
          "on-surface": "#1B1B1F",
          "surface-container": "#EFEDF1",
          background: "#FEFBFF",
          outline: "#767680"
        }
      }
    },
    fontSize: {
      "display-lg": ['57px', '64px'],
      "display-base": ['45px', '52px'],
      "display-sm": ['36px', '44px'],
      "headline-lg": ['32px', '40px'],
      "headline-base": ['28px', '36px'],
      "headline-sm": ['24px', '32px'],
      "title-lg": ['22px', '28px'],
      "title-base": ['16px', '24px'],
      "title-sm": ['14px', '20px'],
      "body-lg": ['16px', '24px'],
      "body-base": ['14px', '20px'],
      "body-sm": ['12px', '16px'],
      "label-lg": ['14px', '20px'],
      "label-base": ['12px', '16px'],
      "label-sm": ['11px', '16px'],
    },
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
