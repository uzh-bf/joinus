module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'thesans-plain': ['TheSans Plain'],
        'thesans-bold': ['TheSans Bold'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
