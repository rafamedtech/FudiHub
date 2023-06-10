/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: '1124px',
          xl: '1124px',
          '2xl': '1124px',
        },
      },
      boxShadow: {
        custom: '0 3px 12px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .07)',
      },
      colors: {
        primary: '#51B7E1',
        secondary: '#BD93F9',
        accent: '#FF79C6',
      },
      fontFamily: {
        lexend: 'Lexend Mega, sans-serif',
      },
    },
  },

  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#51B7E1',
          secondary: '#BD93F9',
          accent: '#FF79C6',

          neutral: '#3D4451',

          'base-100': '#FFFFFF',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
};
