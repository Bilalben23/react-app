import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#00598a",     // dark blue
                secondary: "#f54900",   // amber
                secondary100: "#3652AD",      // 
                customGray: "#E9F6FF", // light 
                dark: "#020618",      // dark gray
            },
        },
    },
    plugins: [typography],
}
