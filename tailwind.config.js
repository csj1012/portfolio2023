/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
    colors: {
      moss: '#57602B',
      licorice: '#161413',
      blackbean: '#311102',
      floralwhite: '#F6F4ED',
      tawny: '#CD5B09',
      yellow: '#F4BD18',
      citrine: '#D1D11C',
      frenchgray: '#C8CCD1',
      offwhite: '#f5f4f2',
      wheat: '#E6CFA5',
      beigeybeige: '#f2e1c3',
      // --engineering-orange: #B12710ff;
      // --penn-red: #9A1212ff;
      // --english-violet: #484356ff;
      // --pakistan-green: #014712ff;
      // --mahogany: #BD4D14ff;
      // --black-bean: #321212ff;
      // --sage: #B8B58Bff;
    },
    fontFamily: {
      title: ['Alata', 'Helvetica', 'sans-serif'],
      subheading: ['"Goudy Bookletter 1911"', 'Georgia', 'serif'],
      body: ['Raleway', 'Helvetica', 'sans-serif'],
    },
    keyframes: {
      textBackground: {
        '0%': { backgroundPosition: '0% 50%' },
        '100%': { backgroundPosition: '100% 50%' },
      },
    },
    animation: {
      textBackground: 'textBackground 4s ease-in-out infinite alternate',
    },
  },
  plugins: [],
}
