/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '426px',
      // => @media (min-width: 425pxpx) { ... }

      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '768px',
      // => @media (min-width: 768px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      maxWidth: '100%',
      '@screen sm': {
        maxWidth: '425px',
      },
      '@screen md': {
        maxWidth: '640px',
      },
      '@screen lg': {
        maxWidth: '768px',
      },
      '@screen xl': {
        maxWidth: '1024px',
      },
      '@screen 2xl': {
        maxWidth: '1280px',
      },
    },

    extend: {
      lineHeight: {
        'extra-loose': '30px',
        'xl-loose': '60px',
      },

      container: {
        '@screen 3xl': {
          maxWidth: '1441px',
        },
      },

      borderRadius: {
        '4xl': "1.875rem"
      },
      colors: {
        primary: {
          DEFAULT: "#4588EC",
          light: "#60a5fa",
          dark: "#2563eb"
        }
      },
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'serif'],
        'Inter': ['Inter', 'ui-sans-serif', 'system-ui', 'serif'],
        'Roboto': ['Roboto', 'ui-sans-serif', 'system-ui', 'serif'],
        'Poppins': ['Poppins', 'ui-sans-serif', 'system-ui', 'serif'],
        'Urbanist': ['Urbanist', 'ui-sans-serif', 'system-ui', 'serif'],
      },

      screens: {
        "3xl": "1441px"
        // => @media (min-width: 1536px) { ... }
      },

      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)"
          },
          to: {
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        slideside: {
          from: {
            opacity: "0",
            transform: "translateX(-20px)"
          },
          to: {
            opacity: "1",
            transform: "translateX(0)"
          },
        },
      },
      animation: {
        slidein300: "slidein 1s ease 200ms forwards",
        slidein500: "slidein 1s ease 400ms forwards",
        slidein700: "slidein 1s ease 600ms forwards",
        slideside300: "slideside 1s ease 700ms forwards",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },

  },
  plugins: [],
};