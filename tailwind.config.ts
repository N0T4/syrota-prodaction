import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'theme': {
          primary: '#537D5D',    // Deep sage green
          secondary: '#73946B',  // Medium sage green
          tertiary: '#9EBC8A',  // Light sage green
          accent: '#D2D0A0',    // Soft yellow-green
          text: {
            DEFAULT: '#222831',  // Dark gray, almost black
            light: '#3A4149',    // Lighter version for less emphasis
            dark: '#1B1F26'      // Darker version for more emphasis
          }
        }
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'body': ['Lora', 'serif'],
        'sans': ['Inter', 'sans-serif']
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.theme.text.DEFAULT'),
            h1: {
              fontFamily: theme('fontFamily.display').join(', '),
              color: theme('colors.theme.primary'),
              fontWeight: '600'
            },
            h2: {
              fontFamily: theme('fontFamily.display').join(', '),
              color: theme('colors.theme.primary'),
              fontWeight: '600'
            },
            h3: {
              fontFamily: theme('fontFamily.display').join(', '),
              color: theme('colors.theme.secondary'),
              fontWeight: '600'
            },
            p: {
              color: theme('colors.theme.text.DEFAULT'),
            },
            strong: {
              color: theme('colors.theme.text.dark'),
              fontWeight: '600'
            },
            a: {
              color: theme('colors.theme.primary'),
              '&:hover': {
                color: theme('colors.theme.secondary')
              }
            },
            blockquote: {
              color: theme('colors.theme.text.light'),
              borderLeftColor: theme('colors.theme.tertiary')
            },
            code: {
              color: theme('colors.theme.primary'),
              fontWeight: '500'
            }
          }
        }
      }),
      boxShadow: {
        'elegant': '0 4px 12px rgba(34, 40, 49, 0.08)',
        'elegant-lg': '0 8px 24px rgba(34, 40, 49, 0.12)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class'
}

export default config 