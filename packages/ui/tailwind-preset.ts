import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          '100': '#ffe3e5',
          '200': '#ffcbd3',
          '300': '#ffa1ad',
          '400': '#ff6c82',
          '50': '#fff0f2',
          '500': '#fb3a5d',
          '600': '#e91546',
          '700': '#c50b3b',
          '800': '#a40d39',
          '900': '#8c0f36',
          '950': '#4f0219'
        },
        gray: colors.zinc,
        green: colors.emerald
      }
    }
  },
  variants: { extend: {} }
};
