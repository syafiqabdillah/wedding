module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bluepastel: '#A3AAB0',
        brownprimary: '#DAB88B',
        brownsecondary: '#F3E9DD',
        brownbg: '#FDF6EC',
        brownaccend: '#B7CADB',
      },
      fontFamily: {
        smooch: ['Smooch', 'cursive'],
        macondo: ['Macondo', 'cursive'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
