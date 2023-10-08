import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
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
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
