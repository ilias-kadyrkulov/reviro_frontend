import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/**/**/ui/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '45px',
    },
    screens: {
      xl: { max: '1279px' },

      lg: { max: '1023px' },

      md: { max: '767px' },

      sm: { max: '639px' },
    },
    extend: {
      colors: {
        'theme-black': '#0C0F16',
        'theme-white': '#fff',

        'theme-primary-100': '#8d8fdb',
        'theme-primary-200': '#494CAA',
        'theme-primary-300': '#292B74',
        'theme-primary-400': '#1a1b41',

        'theme-red-100': '#e718181a',
        'theme-red-200': '#e7181829',
        'theme-red-300': '#fee2e2',
        'theme-red-400': '#e7181875',
        'theme-red-500': '#E71818',
        'theme-red-600': '#b91c1c',

        'theme-blue-100': '#EBF2FA',
        'theme-blue-200': '#292b7475',
        'theme-blue-300': '#137AF1',
        'theme-blue-400': '#28303D',

        'theme-grey-100': '#f8f9fa',
        'theme-grey-150': '#F5F5F5',
        'theme-grey-200': '#e9ecef',
        'theme-grey-300': '#ced4da',
        'theme-grey-400': '#ADB5BD',
        'theme-grey-500': '#52525B',
      },
      width: {
        header: 'calc(100% - 128px)',
      },
      minHeight: {
        main: 'calc(100vh - 76px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'auto-fill': value => ({
            gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
          }),
          'auto-fit': value => ({
            gridTemplateColumns: `repeat(auto-fit, minmax(${value}, 1fr))`,
          }),
        },
        {
          values: theme('width', {}),
        },
      );
    }),
  ],
};
export default config;
