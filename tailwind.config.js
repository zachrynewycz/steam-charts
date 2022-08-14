/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "component-bg": "#16202c",
      "green-txt": "#8dcc0f",
      "steam-online": "#2ebffe",
      "steam-playing": "#bcfe2e",
      "gray-alt-txt": "#a0a0a2",
      "price-btn": "#007eff",
      "category-bg": "#20303e",
      "gdnt-pri": "#1b2838",
      "gdnt-sec": "#194454",
      "page-bg": "#0b1820",
      "white": "#FFFFFF",
    },
    extend: {
      fontFamily: {
        pop_bold: ["Pop-Bold"],
        pop_reg: ["Pop-Reg"],
        pop_semi: ["Pop-Semi"],
        pop_med: ["Pop-Med"],
      },
    },
  },
  plugins: [],
}
