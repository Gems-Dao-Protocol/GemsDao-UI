import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
      ],
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        "bg-black": "#131313",
        "border-dark": "#2A2A2A",
        "text-gray": "#9C9C9C",
        "main-gradient":
          "linear-gradient(90deg, #875CFF 0%, #FF5995 39%, #FFD911 68%, #45FF9C 100%)",
        "gradient-3": "linear-gradient(0deg, #7806EA 0%, #C387FF 100%)",
        "gradient-4": "linear-gradient(0deg, #514EFF 0%, #00C2FF 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
