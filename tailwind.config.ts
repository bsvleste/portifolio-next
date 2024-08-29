import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:'class',
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
        app:"minmax(18rem,20rem ) 1fr",
        profile:"max-content 1fr min-content",
        form:"minmax(7.5rem,17.5rem ) minmax(25rem, 1fr) minmax(0, 15rem)"
      },
      maxWidth:{
        app:"708px"
      },
      backgroundColor:{
        app:"#27272a"
      }
    },
  },
  plugins: [],
}
export default config
