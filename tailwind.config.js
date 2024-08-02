/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF0000',
        'secondary': '#00FF00',
        'tertiary': '#0000FF',
        'logo' : '#404145',
        'navlist' : '#1DBF73',
        'bghero' : '#013A12',
        'bgpink' : '#FFF6F2',
        'custom-bg': 'hsla(137,96%,11%,1)',
        'card1' : '#00732E',
        'card2' : '#FF7640',
        'card3' : '#003912',
        'card4' : '#4D1727',
        'card5' : '#687200',
        'card6' : '#421300',
        'card7' : '#254200',
        'card8' : '#8F2900',
        'card9' : '#687200',
        'card10' : '#00732E',
        'card11' : '#BE5272',
        'button1': '#FC832B',
        'secNav' : '#74767E',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'roboto' : ['Roboto', 'sans-serif'],
        'merriweather' : ['Merriweather', 'serif']
      },
      backgroundImage: {
        'custom-gradient': `
          radial-gradient(at 55% 87%, hsla(135,65%,29%,1) 0px, transparent 50%),
          radial-gradient(at 76% 79%, hsla(137,51%,17%,1) 0px, transparent 50%)
        `,
      },
    },
  },
  plugins: [],
}

