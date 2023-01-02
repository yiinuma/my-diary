/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#B7C4CF',
      secondary: '#D7C0AE',
      accent: '#967E76',
      background: '#EEE3CB',
      white: '#FFFFFF'
    }
  },
  plugins: [require('daisyui')]
}
