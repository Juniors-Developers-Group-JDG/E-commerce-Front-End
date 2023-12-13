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
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        montserrat: ['montserrat'],
        calibri: ['calibri'],
      },
      boxShadow: {
        'product-container': '0px 0px 12px 0px #26262666',
        'product-miniature': '0px 0px 14px 0px #0F4C75B2',
      },
      keyframes: {
        sidebar: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        sidebar: 'sidebar .5s ease-in',
      },
    },
  },
  plugins: [],
};
export default config;
