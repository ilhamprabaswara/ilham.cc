/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sys: {
          light: {
            background: '#FEFBFF',
            'on-background': '#1B1B1F',
            'on-surface': '#1B1B1F',
            'on-surface-variant': '#45464F',
            outline: '#767680',
            primary: '#004EE8',
            'surface-container': '#EFEDF1',
          },
          dark: {
            background: '#1B1B1F',
            'on-background': '#E4E1E6',
            'on-surface': '#C8C6CA',
            'on-surface-variant': '#C6C5D0',
            outline: '#90909A',
            primary: '#B6C4FF',
            'surface-container': '#1F1F23',
          },
        },
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['57px', '64px'],
        'display-base': ['45px', '52px'],
        'display-sm': ['36px', '44px'],
        'headline-lg': ['32px', '40px'],
        'headline-base': ['28px', '36px'],
        'headline-sm': ['24px', '32px'],
        'title-lg': ['22px', '28px'],
        'title-base': ['16px', '24px'],
        'title-sm': ['14px', '20px'],
        'body-lg': ['16px', '24px'],
        'body-base': ['14px', '20px'],
        'body-sm': ['12px', '16px'],
        'label-lg': ['14px', '20px'],
        'label-base': ['12px', '16px'],
        'label-sm': ['11px', '16px'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
