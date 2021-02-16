module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                image: "url('./images/bg.jpg')",
                "image-text-blue": "url('./images/bg-text-blue.jpg')",
                "image-text-pink": "url('./images/bg-text-pink.jpg')",
            }),
            height: {
                "85vh": "85vh",
            },
            borderRadius: {
                "5xl": "3.5rem",
            },
            animation: {
                hello: "hello 1s ease-in-out infinite",
                "bg-gradient": "bg-gradient 7.5s ease infinite",
            },
            keyframes: {
                hello: {
                    "0%, 100%": { transform: "rotate(-30deg)" },
                    "50%": { transform: "rotate(30deg)" },
                },
                "bg-gradient": {
                    "0%, 100%": {
                        "background-size": "400% 400%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "400% 400%",
                        "background-position": "right center",
                    },
                },
            },
        },
        backdropFilter: {
            blur: "blur(40px)",
            "custom-blur": "blur(25px)",
        },
    },
    variants: {
        extend: {},
        backdropFilter: ["responsive"],
    },
    plugins: [require("tailwindcss-filters")],
};
