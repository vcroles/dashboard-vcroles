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
            },
            maxWidth: {
                "8xl": "88rem",
            },
            typography: () => ({
                DEFAULT: {
                    css: {
                        "code::before": {
                            content: "",
                        },
                        "code::after": {
                            content: "",
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
