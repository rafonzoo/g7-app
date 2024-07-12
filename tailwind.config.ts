import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        lg: '1080px',
      },
      spacing: {
        medium: '735px',
        large: '980px',
        super: '1548px',
        safe: '87.5vw',
        copy: '90vw',
        18: '72px',
      },
      colors: {
        gold: '#DEB841',
        navy: '#192036',
      },
      letterSpacing: {
        base: '0.013em',
      },
      fontSize: {
        base: ['17px', '24px'],
        xl: ['20px', '25px'],
        '2.5xl': ['28px', '32px'],
        '4.5xl': ['40px', '44px'],
        '5.5xl': ['56px', '60px'],
        '6.5xl': ['64px', '68px'],
        '7.5xl': ['80px', '84px'],
      },
    },
  },
  plugins: [],
}
export default config
