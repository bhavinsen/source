/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      colors: {
        'ghost-white': '#F9F9F9',
        'yankees-blue':'#12203D',
        'dark-silver':'#717171',
        'silver-sand':'#C6C6C6',
        'blue-green':'#3DBEC1',
        'dark-blue-green':'#36A8AB',
        'active-blue-green':'#287E80',
        'independence':'#465168',
        'platinum':'#E2E2E2'
      },
      boxShadow: {
        'main': '0px 3px 6px #00000029;',
      }
    },
  },
  plugins: [],
}