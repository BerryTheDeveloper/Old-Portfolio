module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                image: "url('./images/bg.jpg')",
            }),
            height: {
                "85vh": "85vh",
            },
        },
        backdropFilter: {
            blur: "blur(40px)",
            "custom-blur": "blur(25px)",
        },
        borderRadius: {
            lg: "0.5rem",
            xl: "0.75rem",
            "2xl": "1rem;",
            "3xl": "1.5rem",
            "5xl": "3.5rem",
        },
    },
    variants: {
        extend: {},
        backdropFilter: ["responsive"],
    },
    plugins: [require("tailwindcss-filters")],
};
