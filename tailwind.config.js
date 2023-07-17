/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxxs: "400px",
      s450: "450px",
      s480: "480px",
      xxs: "500px",
      xs: "540px",
      x580: "580px",
      s: "600px",
      sm: "640px",
      ssm: "670px",
      m: "720px",
      md: "768px",
      mmd: "800px",
      mmmd: "850px",
      pc: "900px",
      lg: "1024px",
      llg: "1079px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {},
  },
  plugins: [],
};
