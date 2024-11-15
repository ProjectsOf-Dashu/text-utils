/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        boxShadow :{

            'custom-shadow' : '-7px 6px 0px rgba(0,0,0,0.6)',
            'custom-box-shadow' : '-7px 6px 0px rgba(242, 244, 247, 0.6)'
        }
    },
  },
  plugins: [],
}