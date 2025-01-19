/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                fjalla: ['var(--font-fjalla)'],
                garamond: ['var(--font-garamond)'],
            },
            rotate: {
                'y-5': '5deg',
            },
            perspective: {
                '1000': '1000px',
            },
            transformStyle: {
                '3d': 'preserve-3d',
            },
        },
    },
    plugins: [],
}; 