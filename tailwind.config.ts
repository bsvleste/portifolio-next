import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes:{
        animationBorder:{
          '0%, 100%': { transform: 'scale(1)' },
        }
      }, 
      animation:{
        wiggle:'animationBorder 2s linear infinite'
      },
      fontFamily:{
        sans:['var(--font-roboto)']
      },
      gridTemplateColumns:{
        app:'minmax(18rem,30rem ) 1fr'
      },
      maxWidth:{
        template:'min(100% - 15px,1180px);'
      },
      backgroundColor:{
        app:"#202024"
      }
    },
  },
  plugins: [],
}
export default config
