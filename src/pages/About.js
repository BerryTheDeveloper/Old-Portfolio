import { ReactComponent as Hello } from "../images/hello.svg";

const About = () => {
    const getSelectors = () => {
        const divLeft = document.querySelector(".div-left");
        const divTop = document.querySelector(".div-top");
        const divRight = document.querySelector(".div-right");
        const divBottom = document.querySelector(".div-bottom");
        return { divLeft, divTop, divRight, divBottom };
    };

    const handleMouseEnter = (e) => {
        const { divLeft, divTop, divRight, divBottom } = getSelectors();
        divLeft.classList.add("animate-gradient-left");
        divTop.classList.add("animate-gradient-top");
        divRight.classList.add("animate-gradient-right");
        divBottom.classList.add("animate-gradient-bottom");
    };
    const handleMouseLeave = (e) => {
        const { divLeft, divTop, divRight, divBottom } = getSelectors();
        divLeft.classList.remove("animate-gradient-left");
        divTop.classList.remove("animate-gradient-top");
        divRight.classList.remove("animate-gradient-right");
        divBottom.classList.remove("animate-gradient-bottom");
        // e.class.add(
        //     "bg-gradient-to-r from-blue-500 via-purple-500 to pink-500"
        // );
    };

    return (
        <div className="w-full flex flex-col m-auto">
            <div className="w-full text-center pt-36">
                <p className="text-7xl uppercase font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-pink-700 animate-bg-gradient">
                    let me introduce myself
                </p>
            </div>
            <div className="w-full flex flex-col pb-24 justify-center items-center">
                <div className="w-10/12 h-full m-auto my-36 text-center font-semibold text-2xl uppercase font-bold text-3xl tracking-wider leading-normal relative  rounded-lg border-1 ">
                    <div className="w-full m-auto z-20 relative">
                        <p className="text-gray-300 pt-24 pb-16 flex justify-center items-center m-auto">
                            Cześć!
                            <span className="animate-hello pl-3 ">
                                <Hello className="w-8 h-8" />
                            </span>
                        </p>
                        <p className="text-gray-300">
                            Nazywam się{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                                Bartłomiej Popiołek
                            </span>
                            . Jestem absolwentem Politechniki Wrocławskiej,
                            kótry specjalizuje się w Elektronice Cyfrowej.
                        </p>
                        <p className="text-gray-300 py-24 px-8">
                            Na co dzień zajmuję się tworzeniem stron oraz
                            aplikacji internetowych. Najczęsciej używam
                            techcnologii takich jak{" "}
                            <span className="text-yellow-300">JavaScript</span>{" "}
                            oraz <span className="text-blue-500"> React </span>
                            <span className="text-red-500">❤️</span>
                        </p>
                        <p className="text-gray-300 pb-24 px-8">
                            Wolne chwilę pooświęcan na czytaniu książek, graniu
                            w gry oraz koszykówkę.
                        </p>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-50 backdrop-blur rounded-lg border-1 z-10"></div>
                    <div
                        className="absolute -bottom-8 -left-8 w-3/4 h-3/4 rounded-lg bg-blue-500 opacity-40"
                        style={{ filter: "blur(40px)" }}></div>
                    <div
                        className="absolute -top-8 -right-8 w-3/4 h-3/4 rounded-lg bg-pink-500 opacity-40"
                        style={{ filter: "blur(40px)" }}></div>

                    <div className="w-max h-max m-auto flex justify-center text-gray-300 relative cursor-pointer z-20 mb-12">
                        <a
                            href="#"
                            className="text-2xl font-semibold py-3 px-2 tracking-wider uppercase z-20 relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            Resume
                        </a>
                        <div className="div-left absolute -inset-y-1 left-0 w-1 h-full m-auto z-20 bg-gradient-to-t from-pink-500 via-purple-500 to-blue-500"></div>
                        <div className="div-top absolute -inset-x-1 top-0 h-1 w-full m-auto z-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                        <div className="div-right absolute -inset-y-1 right-0 w-1 h-full m-auto z-20 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500"></div>
                        <div className="div-bottom absolute -inset-x-1 bottom-0 h-1 w-full m-auto z-20 bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
