module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        themeprimary: '#495C83',
        themesecondary: '#7A86B6',
        themebg: '#F5EDDC',
        themetext: '#3C2C3E',
        themepeach: '#F8C0AA',
        themepurple: '#B095AD',
      },
      fontFamily: {
        smooch: ['Smooch', 'cursive'],
        macondo: ['Macondo', 'cursive'],
        orbitron: ['Orbitron', 'sans-serif'],
        greatvibes: ['Great Vibes', 'cursive'],
      },
      backgroundImage: {
        paper: "url('/img/paper.jpg')",
      },
    },
  },
  plugins: [],
}
