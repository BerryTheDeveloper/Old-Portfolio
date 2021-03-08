module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                violet: {
                    800: "#5B21B6",
                },
            },
            backgroundImage: (theme) => ({
                image: "url('./images/bg.png')",
            }),
            height: {
                "85vh": "85vh",
            },
            borderRadius: {
                "5xl": "3.5rem",
            },
            animation: {
                hello: "hello 1s ease-in-out infinite",
                "bg-gradient": "bg-gradient 5s ease infinite",
                "btn-gradient": "bg-gradient 3s ease infinite",
                "gradient-left": "gradient-left 2s linear  infinite",
                "gradient-top": "gradient-top 2s linear infinite",
                "gradient-right": "gradient-right 2s linear  infinite",
                "gradient-bottom": "gradient-bottom 2s linear infinite",
            },
            keyframes: {
                hello: {
                    "0%, 100%": { transform: "rotateZ(-30deg)" },
                    "50%": { transform: "rotateZ(30deg)" },
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
                "gradient-left": {
                    "0%, 100%": {
                        "background-size": "400% 400%",
                        "background-position": "top center",
                    },
                    "50%": {
                        "background-size": "400% 400%",
                        "background-position": "bottom center",
                    },
                },
                "gradient-top": {
                    "0%, 100%": {
                        "background-size": "400% 400%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "400% 400%",
                        "background-position": "right center",
                    },
                },
                "gradient-right": {
                    "0%, 100%": {
                        "background-size": "400% 400%",
                        "background-position": "bottom center",
                    },
                    "50%": {
                        "background-size": "400% 400%",
                        "background-position": "top center",
                    },
                },
                "gradient-bottom": {
                    "0%, 100%": {
                        "background-size": "400% 400%",
                        "background-position": "right center",
                    },
                    "50%": {
                        "background-size": "400% 400%",
                        "background-position": "left center",
                    },
                },
            },
        },
        backdropFilter: {
            blur: "blur(40px)",
            "custom-blur": "blur(25px)",
            "btn-blur": "blur(5px)",
        },
        skew: {
            45: "45deg",
        },
    },
    variants: {
        extend: {},
        backdropFilter: ["responsive"],
    },
    plugins: [require("tailwindcss-filters")],
};
