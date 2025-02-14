/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        road: ["var(--font-road-rage)", "cursive"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        geist: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
        jeju: ["Jeju Myeongjo", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};


// fontFamily: {
//   road: ["var(--font-road-rage)", "cursive"],
//   roboto: ["var(--font-roboto)", "sans-serif"],
//   geist: ["var(--font-geist-sans)", "sans-serif"],
//   geistMono: ["var(--font-geist-mono)", "monospace"],
//   jeju: ["Jeju Myeongjo", "serif"],
// },
// fontFamily: {
//   road: ['Road Rage', 'cursive'],
//   jeju: ['Jeju Myeongjo', 'serif'],
//   roboto: ['Roboto', 'sans-serif'],
// },