import { colors } from "src/styles/theme/colors"
import { fontSize, fontFamily } from "src/styles/theme/fonts"
import { boxShadow } from "src/styles/theme/shadows"

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize,
      fontFamily,
      colors,
      boxShadow,
    },
  },
  safelist: [
    {
      pattern:
        /^(text|bg)-(primary|secondary|neutral|feedback)-(100|300|500|700|900|success|error|warning)$/,
    },
  ],
  plugins: [],
}
export default config
