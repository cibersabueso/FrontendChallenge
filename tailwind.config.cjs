/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        fontFamily: {
          'montserrat': ['Montserrat', 'sans-serif'],
          'poppins': ['Poppins', 'sans-serif'],
        },
        colors: {
          'primary': '#B88E2F',
          'secondary': '#F9F1E7',
          'text-primary': '#333333',
          'text-secondary': '#9F9F9F',
        },
        fontSize: {
          'xs': '0.75rem',
          'sm': '0.875rem',
          'base': '1rem',
          'lg': '1.125rem',
          'xl': '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem',
          '5xl': '3rem',
        },
        spacing: {
          '72': '18rem',
          '84': '21rem',
          '96': '24rem',
        },
      },
    },
    plugins: [],
  }