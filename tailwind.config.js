module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                gradient: "url('./images/bg.png')",
                image: "url('./images/bg.jpg')",
            }),
        },
        backdropFilter: {
            blur: "blur(40px)",
        },
    },
    variants: {
        extend: {},
        backdropFilter: ["responsive"],
    },
    plugins: [require("tailwindcss-filters")],
};
