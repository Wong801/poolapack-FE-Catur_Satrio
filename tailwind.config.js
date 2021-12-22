module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'brown': {
          'primary': '#4B1412',
        },
        'yellow': {
          'primary': '#F9BE00',
        },
        'gray': {
          'text': '#9797AA',
          'bg': '#FBFBFB'
        } 
      },
      boxShadow: {
        'form': '0 0 16px 2px rgba(0, 0, 0, 0.07)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
