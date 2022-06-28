module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        themeprimary: '#810955',
        themesecondary: '#EE81B3',
        themebg: '#FFF9D7',
        themetext: '#3C2C3E',
      },
      fontFamily: {
        smooch: ['Smooch', 'cursive'],
        macondo: ['Macondo', 'cursive'],
        orbitron: ['Orbitron', 'sans-serif'],
        greatvibes: ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}
