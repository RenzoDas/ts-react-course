const config = {
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
          100: "#D9D9D9",
          300: "#C2C2C2",
          500: "#9D9D9D",
          700: "#616161",
          900: "#262626",
        },
        feedback: {
          success: "#09C97F",
          error: "#F95668",
          warning: "#F8B15D",
        },
        base: {
          white: "#FFFFFF",
          black: "#000000",
        },
      },
      boxShadow: {
        sm: "3px 3px 6px 0px #0000001A",
        md: "3px 3px 10px 0px #00000040",
        lg: "0px 4px 16px 0px #00000059",
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(border|text|bg)-(primary|secondary|neutral|feedback)-(100|200|300|400|500|600|700|800|900|success|error|warning)$/,
    },
    {
      pattern: /^(border|text|bg)-(base)-(white|black)$/,
    },
  ],
  plugins: [],
}
export default config
