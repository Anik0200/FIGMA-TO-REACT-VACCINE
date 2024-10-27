/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,

            padding: {
                DEFAULT: '35px',
                sm: '50px',
                lg: '0',
                xl: '0',
                '2xl': '0',
            },
        },

        extend: {
            colors: {
                primary: '#17C2EC',
                secondary: '#FFFFFF',
                third: '#C4C4C4',
            },

            fontFamily: {
                Montserrat: ["Montserrat", "sans-serif"],
            },
        },

    },
    plugins: [],
}
