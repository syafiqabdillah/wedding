module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        themeprimary: '#F473B9',
        themesecondary: '#FFC4C4',
        themebg: '#FFE7BF',
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
