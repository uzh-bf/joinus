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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  corePlugins: {
    preflight: false,
  },
}
