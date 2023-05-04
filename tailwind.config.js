/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        "slide-left": "slide-left 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550) both",
        "slide-bottom": "slide-bottom 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550) both",
      },
      keyframes: {
        "slide-left": {
          "0%": {
            transform: "translateX(0px)"
          },
          to: {
            transform: "translateX(-340px)"
          }
        },
        "slide-bottom": {
          "0%": {
            transform: "translateY(0px)"
          },
          to: {
            transform: "translateY(180px)"
          }
        }
      }
    },
  },
  plugins: [],
}
