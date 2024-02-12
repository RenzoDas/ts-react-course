import { Config } from "tailwindcss"

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "h-xl": ["6rem", { lineHeight: "100px" }],
        "h-lg": ["4rem", { lineHeight: "64px" }],
        "h-md": ["3rem", { lineHeight: "48px" }],
        "h-sm": ["2rem", { lineHeight: "40px" }],
        "p-md": ["1.125rem", { lineHeight: "24px" }],
        "p-sm": ["1rem", { lineHeight: "24px" }],
        "p-xs": ["0.75rem", { lineHeight: "12px" }],
      },
      fontFamily: {
        base: "Poppins",
      },
      colors: {
        primary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },
        secondary: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344",
        },

        neutral: {
          white: "#FFFFFF",
          100: "#ebebeb",
          200: "#e2e2e2",
          300: "#c4c4c4",
          400: "#b1b1b1",
          500: "#9D9D9D",
          600: "#7e7e7e",
          700: "#5e5e5e",
          800: "#3f3f3f",
          900: "#1f1f1f",
          black: "#000000",
        },
        feedback: {
          success: "#09C97F",
          error: "#F95668",
          warning: "#F8B15D",
        },
      },
      boxShadow: {
        sm: "3px 3px 6px 0px #0000001A",
        md: "3px 3px 10px 0px #00000040",
        lg: "0px 4px 16px 0px #00000059",
        "border-inner-primary": `inset 0 0 0 2px #8b5cf6`,
        "border-inner-primary-800": `inset 0 0 0 2px #5b21b6`,
        "border-inner-secondary": `inset 0 0 0 2px #06b6d4`,
        "border-inner-secondary-800": `inset 0 0 0 2px #155e75`,
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(border|text|bg)-(primary|secondary|neutral|feedback)-(50|100|200|300|400|500|600|700|800|900|950|success|error|warning|black|white)$/,
    },
  ],
  plugins: [],
}
export default config
