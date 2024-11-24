/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{liquid,html,js}'],
  theme: {
    extend: {},
    keyframes: {},
    fontFamily: {
      primary: ['sofia-pro', 'sans-serif'],
      secondary: ['"Sofia Sans Extra Condensed"', 'sans-serif'],
    },
    colors: {
      white: '#FFFFFF',
      black: '#111111',
      transparent: 'transparent',
      red: '#DB1A1A',
      'accent-1': '#7D39FB', // Purple
      purple: '#7D39FB', // Purple
      'accent-2': '#D0C0FA', // Light Purple
      'light-purple': '#D0C0FA', // Light Purple
      'accent-3': '#7894F8', // Blue
      blue: '#7894F8', // Blue
      'accent-4': '#F0F4FF', // Light Blue
      'light-blue': '#F0F4FF', // Light Blue
    },
  },
  plugins: [],
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  },
};
// npx tailwind -i tw-input.css -o ./assets/_custom.css --watch --minify
