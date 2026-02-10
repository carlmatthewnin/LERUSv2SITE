/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        logo: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2C4A3C',
          hover: '#1e3529',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F5F0E8',
          foreground: '#2C4A3C',
        },
        background: '#B84B30',
        foreground: '#2C4A3C',
        muted: '#F5F0E8',
        accent: '#F5F0E8',
        destructive: '#EF4444',
        success: '#10B981',
        forest: {
          DEFAULT: '#2C4A3C',
          light: '#3d5f4f',
          dark: '#1e3529',
        },
        cream: {
          DEFAULT: '#B84B30',
          light: '#C45A40',
          dark: '#A04020',
        }
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [],
}
