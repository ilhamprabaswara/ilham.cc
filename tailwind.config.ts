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
    },
  },
  plugins: [],
}
export default config
