import Particles from "react-tsparticles";
import Card from "../components/Card";

const Projects = () => {
    return (
        <div className=" w-full relative pt-10">
            <Particles
                id="tsparticles"
                className="w-full absolute inset-0"
                options={{
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "window",
                        events: {
                            resize: false,
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
                            value: "#fff",
                            animation: {
                                enable: true,
                                speed: 4,
                                sync: false,
                            },
                        },
                        links: {
                            blink: false,
                            color: {
                                value: "#fff",
                            },
                            consent: false,
                            distance: 100,
                            enable: true,
                            frequency: 1,
                            opacity: 1,
                            shadow: {
                                blur: 5,
                                color: {
                                    value: "#fff",
                                },
                                enable: false,
                            },
                            triangles: {
                                enable: false,
                                frequency: 1,
                            },
                            width: 0.1,
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
                            enable: true, // TUTAJ WŁĄCZA SIĘ RUCH
                            gravity: {
                                acceleration: 9.81,
                                enable: false,
                                maxSpeed: 10,
                            },
                            outModes: {
                                default: "out",
                            },
                            random: false,
                            size: false,
                            speed: 1,
                            straight: false,
                            trail: {
                                enable: false,
                                length: 100,
                                fillColor: {
                                    value: "#000000",
                                },
                            },
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
                        reduceDuplicates: true,
                        rotate: {
                            random: {
                                enable: true,
                                minimumValue: 45,
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
                        shape: {
                            options: {},
                            type: "circle",
                        },
                        size: {
                            random: {
                                enable: true,
                                minimumValue: 1,
                            },
                            value: 2,
                            animation: {
                                destroy: "none",
                                enable: true,
                                minimumValue: 1,
                                speed: 3,
                                startValue: "random",
                                sync: false,
                            },
                        },
                        detectRetina: true,
                    },
                }}
            />
            <div className="w-full flex">
                <div className="flex m-auto">
                    <div className="flex justify-center flex-col">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="flex flex-col pt-64">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
