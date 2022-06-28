module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        themeprimary: '#243A73',
        themesecondary: '#A5BECC',
        themebg: '#F2EBE9',
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
