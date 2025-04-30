/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#3A86FF', // Primary blue
          600: '#0066FF',
          700: '#0052CC',
          800: '#003D99',
          900: '#002966',
        },
        success: {
          50: '#E8F9E8',
          100: '#D1F2D1',
          200: '#A3E5A3',
          300: '#75D875',
          400: '#47CB47',
          500: '#38B000', // Success green
          600: '#2C8C00',
          700: '#216800',
          800: '#164400',
          900: '#0B2200',
        },
        warning: {
          50: '#FFF6E6',
          100: '#FFECD3',
          200: '#FFD9A3',
          300: '#FFC573',
          400: '#FFB244',
          500: '#FF9F1C', // Warning orange
          600: '#FF8C00',
          700: '#CC7000',
          800: '#995400',
          900: '#663800',
        },
        accent: {
          50: '#F2E6FF',
          100: '#E6CCFF',
          200: '#CC99FF',
          300: '#B366FF',
          400: '#9933FF',
          500: '#8338EC', // Accent purple
          600: '#6600CC',
          700: '#4C0099',
          800: '#330066',
          900: '#190033',
        }
      },
    },
  },
  plugins: [],
};