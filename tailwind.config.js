/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      animation: {
        textBackground: 'textBackground 4s ease-in-out infinite alternate',
        linkHover: 'all .4s ease-in-out',
        fadeIn: 'opacity .4s ease-in'
      },
    },
    colors: {
      haze: '#dfd4d8',
      hazelight: '#f8f4f6',
      jade: '#437254',
      grape: '#453f67',
      tomato: '#486aaa',
      root: '#3D3131'
      
    },
    fontFamily: {
      sans: ['Alata', 'Helvetica', 'sans-serif'],
      serif: ['"Goudy Bookletter 1911"', 'Georgia', 'serif'],
      body: ['Raleway', 'Helvetica', 'sans-serif'],
    },
    keyframes: {
      textBackground: {
        '0%': { backgroundPosition: '0% 50%' },
        '100%': { backgroundPosition: '100% 50%' },
      },
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 }
      }
    },
  },
  plugins: [],
}


/*

57602B
161413
311102
F6F4ED
CD5B09
F4BD18
D1D11C
C8CCD1
f5f4f2
E6CFA5
f2e1c3

*/