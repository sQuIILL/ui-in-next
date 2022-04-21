module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glownyZolty': '#F4B626',
        'gornaStopka': '#BDBDBD',
        'ks':"#E0E0E0"
      },
      spacing: {
        '4vw': '-4vw',
        '60px':'-60px',
        '110px':'-110px'
      }
    },
    midHeight: {
      "1/2": "50%",
      "3/4": "70%",
      "90": "90%",
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
  },
  plugins: [],
}
