module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        listView: 'listView 0.3s ease-in-out'
      },
      keyframes: {
        listView: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },

      colors: {
        warm: '#FFE3D8',
        primary: '#FFFFFF',
        secondary: '#1E5F74',
        white: '#ffffff',
        info: '#03fcc6',
        warning: '#fcc203',
        error: '#fc0303',
        success: '#03fc4e',
        black: '#000000'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    }
  },

  purge: {
    enabled: process.env.NODE_ENV === 'publish',
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  }
}
