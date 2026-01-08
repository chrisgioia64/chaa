/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'chaa-teal': '#008080',
        'chaa-navy': '#1a2b3c',
        'chaa-terracota': '#C95B39',
        'chaa-off-white': '#F9F8F4',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

