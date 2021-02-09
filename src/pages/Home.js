import Particles from "react-tsparticles";
function Home() {
    return (
        <div className="w-4/5 h-3/4 text-white text-left absolute right-0">
            <div className="w-11/12 pt-3 m-auto">
                <p className="text-5xl font-semibold tracking-wider">
                    A frontend developer passionate about creating user friendly
                    products
                </p>
                <p className="tracking-wider text-2xl mt-8">
                    Currently frelancing and seraching for new oppurtonites.
                </p>
                <button className="text-xl mt-10">View my work</button>
            </div>
            <div className="absolute top-0 left-0 h-full w-full">
                <Particles
                    id="tsparticles"
                    className="h-full w-full"
                    options={{
                        fpsLimit: 60,
                        interactivity: {
                            detectsOn: "window",
                            events: {
                                resize: true,
                            },
                        },
                        motion: {
                            disable: false,
                            reduce: {
                                factor: 4,
                                value: true,
                            },
                        },
                        particles: {
                            bounce: {
                                horizontal: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0.1,
                                    },
                                    value: 1,
                                },
                                vertical: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0.1,
                                    },
                                    value: 1,
                                },
                            },
                            collisions: {
                                bounce: {
                                    horizontal: {
                                        random: {
                                            enable: false,
                                            minimumValue: 0.1,
                                        },
                                        value: 1,
                                    },
                                    vertical: {
                                        random: {
                                            enable: false,
                                            minimumValue: 0.1,
                                        },
                                        value: 1,
                                    },
                                },
                                enable: true,
                                mode: "bounce",
                            },
                            color: {
                                value: "#f00",
                                animation: {
                                    enable: true,
                                    speed: 50,
                                    sync: false,
                                },
                            },
                            life: {
                                count: 0,
                                delay: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0,
                                    },
                                    value: 0,
                                    sync: false,
                                },
                                duration: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0.0001,
                                    },
                                    value: 0,
                                    sync: false,
                                },
                            },
                            links: {
                                blink: false,
                                color: {
                                    value: "random",
                                },
                                consent: false,
                                distance: 100,
                                enable: true,
                                frequency: 1,
                                opacity: 1,
                                shadow: {
                                    blur: 5,
                                    color: {
                                        value: "#00ff00",
                                    },
                                    enable: false,
                                },
                                triangles: {
                                    enable: false,
                                    frequency: 1,
                                },
                                width: 1,
                                warp: false,
                            },
                            move: {
                                angle: {
                                    offset: 45,
                                    value: 90,
                                },
                                attract: {
                                    enable: false,
                                    rotate: {
                                        x: 3000,
                                        y: 3000,
                                    },
                                },
                                direction: "right",
                                distance: 0,
                                enable: true,
                                gravity: {
                                    acceleration: 9.81,
                                    enable: false,
                                    maxSpeed: 50,
                                },
                                noise: {
                                    delay: {
                                        random: {
                                            enable: false,
                                            minimumValue: 0,
                                        },
                                        value: 0,
                                    },
                                    enable: false,
                                },
                                outModes: {
                                    default: "out",
                                },
                                random: false,
                                size: false,
                                speed: 2,
                                straight: false,
                                trail: {
                                    enable: false,
                                    length: 10,
                                    fillColor: {
                                        value: "#000000",
                                    },
                                },
                                vibrate: false,
                                warp: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                    factor: 1000,
                                },
                                limit: 0,
                                value: 100,
                            },
                            opacity: {
                                random: {
                                    enable: true,
                                    minimumValue: 0.3,
                                },
                                value: 0.8,
                                animation: {
                                    destroy: "none",
                                    enable: true,
                                    minimumValue: 0.3,
                                    speed: 0.5,
                                    startValue: "random",
                                    sync: false,
                                },
                            },
                            reduceDuplicates: false,
                            rotate: {
                                random: {
                                    enable: false,
                                    minimumValue: 0,
                                },
                                value: 0,
                                animation: {
                                    enable: false,
                                    speed: 0,
                                    sync: false,
                                },
                                direction: "clockwise",
                                path: false,
                            },
                            shadow: {
                                blur: 0,
                                color: {
                                    value: "#000000",
                                },
                                enable: false,
                                offset: {
                                    x: 0,
                                    y: 0,
                                },
                            },
                            shape: {
                                options: {},
                                type: "circle",
                            },
                            size: {
                                random: {
                                    enable: true,
                                    minimumValue: 1,
                                },
                                value: 3,
                                animation: {
                                    destroy: "none",
                                    enable: true,
                                    minimumValue: 1,
                                    speed: 3,
                                    startValue: "random",
                                    sync: false,
                                },
                            },
                            stroke: {
                                width: 0,
                                color: {
                                    value: "",
                                    animation: {
                                        enable: false,
                                        speed: 0,
                                        sync: false,
                                    },
                                },
                            },
                            twinkle: {
                                lines: {
                                    enable: false,
                                    frequency: 0.05,
                                    opacity: 1,
                                },
                                particles: {
                                    enable: false,
                                    frequency: 0.05,
                                    opacity: 1,
                                },
                            },
                            detectRetina: true,
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default Home;
