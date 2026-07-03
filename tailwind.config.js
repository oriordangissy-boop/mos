/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        space: "#050B18",
        panel: "rgba(15, 30, 55, 0.75)",
        primary: "#2F80FF",
        cyan: "#00D5FF",
        success: "#20E3B2",
        warning: "#FFB020",
        risk: "#FF4D6D",
        textMain: "#EAF2FF",
        textSoft: "#8EA4C8"
      },
      boxShadow: {
        glow: "0 0 34px rgba(0, 213, 255, 0.18)",
        card: "0 18px 70px rgba(0, 0, 0, 0.32)"
      }
    }
  },
  plugins: []
};
