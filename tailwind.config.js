module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bluepastel: '#A3AAB0',
        themeprimary: '#DAB88B',
        themesecondary: '#F3E9DD',
        themebg: '#FDF6EC',
        brownaccend: '#B7CADB',
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
