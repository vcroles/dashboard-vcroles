// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                highlight: "#3F48CC",
                "highlight-dark": "#2B32A3",
                "highlight-darker": "#1A1E7A",
                "highlight-darkest": "#0D0F3D",
                "highlight-light": "#5E6AE6",
                "highlight-lighter": "#7C88FF",
                "highlight-lightest": "#9B97FF",
                "highlight-transparent": "rgba(63, 72, 204, 0.1)",
            },
            maxWidth: {
                "8xl": "88rem",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
