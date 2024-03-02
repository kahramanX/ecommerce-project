/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            textShadow: {
                black: "rgb(0, 0, 0) 2px 2px 0px",
                reset: "0px 0px 0px 0px rgba(0,0,0,1)",
                white: "rgb(255,255,255) 2px 2px 0px",
            },
            boxShadow: {
                boxDefault: "2px 2px 0px 0px rgba(0,0,0,1)",
                reset: "0px 0px 0px 0px rgba(0,0,0,1)",
                inputDefault: "2px 2px 0px 0px rgba(195,195,199,1)",
            },
            gridTemplateColumns: {
                "1-2-1": "1fr 2fr 1fr",
                "1-2_1-1": "1fr 2.1fr 1fr",
                "1-3-1": "1fr 3fr 1fr",
                "1-4-1": "1fr 4fr 1fr",
                "1-5-1": "1fr 5fr 1fr",
                "1-6-1": "1fr 6fr 1fr",
                "3_2-1": "3.2fr 1fr",
                "3-1": "3.2fr 1fr",
            },
        },
        fontFamily: {
            KoHo: ["KoHo", "system-ui", "sans-serif"],
        },
        colors: {
            // warm whites
            grey1: "#FAF7F5",
            grey2: "#D8D7DB",
            grey3: "#C3C3C7",
            // cold blacks
            grey4: "#8E8D90",
            grey5: "#2A2A2B",
            grey6: "#1B1A1B",
            // soft and eye catching pastels
            violet: "#F5EBFF",
            blue: "#EBF4FF",
            green: "#F6FFEB",
            orange: "#FFF5EB",
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "text-shadow": (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme("textShadow") }
            );
        }),
    ],
};
