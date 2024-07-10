import type { Config } from 'tailwindcss';

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
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black: '#0E0A09',
        white: '#FFF',
        primary: '#00A52C',
        secondary: '#FCC019',
        tertiary: '#ADADAD',
      },
      container: {
        center: true,
        //padding: '2rem',
      },
      maxWidth: {
        '5xl': '1081px',
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        mm: '993px',
        md: '1020px',
        lg: '1200px',
        xl: '1700px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
