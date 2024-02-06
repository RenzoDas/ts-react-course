/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "h-xl": ["6rem", "100px"],
        "h-lg": ["4rem", "64px"],
        "h-md": ["3rem", "48px"],
        "h-sm": ["2rem", "40px"],
        "p-md": ["1.125rem", "24px"],
        "p-sm": ["1rem", "24px"],
        "p-xs": ["0.75rem", "12px"],
      },
      fontFamily: {
        base: "Poppins",
      },
      colors: {
        primary: {
          100: "#f4d2d4",
          300: "#e28a8f",
          500: "#d1434b",
          700: "#822a2f",
          900: "#321012",
        },
        secondary: {
          100: "#CEE0EE",
          300: "#7FAFD2",
          500: "#317EB7",
          700: "#1E4E71",
          900: "#0C1E2C",
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
        /^(text|bg)-(primary|secondary|neutral|feedback)-(100|300|500|700|900|success|error|warning)$/,
    },
  ],
  plugins: [],
}
