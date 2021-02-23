import Cv_ENG from "../assets/cv/bartlomiej_popiolek_CV_ENG.pdf";

function Home() {
    const handleMouseEnter = (e) => {
        const divGlass = e.target.parentElement.querySelector(".glass");
        const divNeonTop = e.target.parentElement.parentElement.querySelector(
            ".neon-top"
        );
        const divNeonBottom = e.target.parentElement.parentElement.querySelector(
            ".neon-bottom"
        );

        e.target.parentElement.parentElement.classList.add("scale-110");

        divGlass.classList.remove("delay-300");
        divGlass.classList.add("translate-x-52");

        divNeonBottom.classList.remove("filter-blur-3");
        divNeonBottom.classList.add("filter-blur-10");
        divNeonBottom.classList.remove("-bottom-2");
        divNeonBottom.classList.add("-bottom-0");
        divNeonBottom.classList.add("w-full");
        divNeonBottom.classList.add("h-1/2");

        divNeonTop.classList.remove("filter-blur-3");
        divNeonTop.classList.add("filter-blur-10");
        divNeonTop.classList.remove("-top-2");
        divNeonTop.classList.add("-top-0");
        divNeonTop.classList.add("w-full");
        divNeonTop.classList.add("h-1/2");
    };

    const handleMouseLeave = (e) => {
        const divGlass = e.target.parentElement.querySelector(".glass");
        const divNeonTop = e.target.parentElement.parentElement.querySelector(
            ".neon-top"
        );
        const divNeonBottom = e.target.parentElement.parentElement.querySelector(
            ".neon-bottom"
        );

        e.target.parentElement.parentElement.classList.remove("scale-110");
        setTimeout(() => {
            divGlass.classList.remove("translate-x-52");
        }, 300);

        divNeonBottom.classList.add("filter-blur-3");
        divNeonBottom.classList.remove("filter-blur-10");
        divNeonBottom.classList.add("-bottom-2");
        divNeonBottom.classList.remove("-bottom-0");
        divNeonBottom.classList.remove("w-full");
        divNeonBottom.classList.remove("h-1/2");

        divNeonTop.classList.add("filter-blur-3");
        divNeonTop.classList.remove("filter-blur-10");
        divNeonTop.classList.add("-top-2");
        divNeonTop.classList.remove("-top-0");
        divNeonTop.classList.remove("w-full");
        divNeonTop.classList.remove("h-1/2");
    };

    return (
        <div
            className="w-full sm:h-screen text-white flex flex-col text-left md:pt-20 pl-8 z-20"
            id="Home">
            <div className="pt-12 sm:pt-36 sm:pt-52">
                <p className="text-3xl lg:text-4xl xl:text-5xl font-medium tracking-wider">
                    A Frontend Developer Passionate
                </p>
                <p className="text-3xl lg:text-4xl xl:text-5xl font-medium tracking-wider">
                    About Creating User
                </p>
                <p className="text-3xl lg:text-4xl xl:text-5xl font-medium tracking-wider">
                    Friendly Products
                </p>
                <p className="tracking-wider text-xl xl:text-2xl mt-12 opacity-50">
                    Currently frelancing and seraching for new oppurtonites.
                </p>
            </div>
            <div className="h-max flex flex-col flex-wrap sm:flex-row mt-24 justify-start items-center pb-10 sm:pb-0">
                {/* First button */}
                <div className="w-max h-max md:ml-6 relative transform transition-all duration-500">
                    <div className="w-max h-max relative overflow-hidden z-10">
                        <a
                            href="#Projects"
                            className="block bg-white bg-opacity-10 backdrop-btn-blur text-md cursor-pointer py-2 px-3 tracking-wider border-2 border-solid border-white border-opacity-90 rounded-sm relative z-20 transition-all duration-300"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            View my work
                        </a>
                        <div className="glass bg-gradient-to-l from-white to-transparent opacity-10 absolute top-0 -left-5 w-8/12 h-full transform skew-x-45 transition duration-500 z-10"></div>
                    </div>
                    <div className="neon-top bg-blue-800 absolute -top-2 left-1/2 w-12 h-3 rounded-md transform -translate-x-1/2 transition-all delay-100 duration-500 z-0 filter-blur-3"></div>
                    <div className="neon-bottom bg-blue-800 absolute -bottom-2 left-1/2 w-12 h-3 rounded-md transform -translate-x-1/2 transition-all delay-100 duration-500 z-0 filter-blur-3 "></div>
                </div>
                {/*  Second button */}
                <div className="w-max h-max mt-12 md:ml-6 sm:mt-0 sm:ml-8 relative transform transition-all duration-500">
                    <div className="w-max h-max relative overflow-hidden z-10">
                        <a
                            href={Cv_ENG}
                            target="_blank"
                            className="block bg-white bg-opacity-10 backdrop-btn-blur text-md cursor-pointer py-2 px-3 tracking-wider border-2 border-solid border-white border-opacity-90 rounded-sm relative z-20 transition-all duration-300"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            Check my CV
                        </a>
                        <div className="glass bg-gradient-to-l from-white to-transparent opacity-10 absolute top-0 -left-5 w-8/12 h-full transform skew-x-45 transition duration-500 z-10"></div>
                    </div>
                    <div className="neon-top bg-violet-800 absolute -top-2 left-1/2 w-12 h-3 rounded-md transform -translate-x-1/2 transition-all delay-100 duration-500 z-0 filter-blur-3 "></div>
                    <div className="neon-bottom bg-violet-800 absolute -bottom-2 left-1/2 w-12 h-3 rounded-md transform -translate-x-1/2 transition-all delay-100 duration-500 z-0 filter-blur-3 "></div>
                </div>
                {/* Third button */}
                <div className="w-max h-max mt-12 md:mt-0 sm:ml-20 md:ml-6 relative transform transition-all duration-500">
                    <div className="w-max h-max relative overflow-hidden z-10">
                        <a
                            href="#Contact"
                            className="block bg-white bg-opacity-10 backdrop-btn-blur text-md cursor-pointer py-2 px-3 tracking-wider border-2 border-solid border-white border-opacity-90 rounded-sm relative z-20 transition-all duration-300"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            Contact with me
                        </a>
                        <div className="glass bg-gradient-to-l from-white to-transparent opacity-10 absolute top-0 -left-5 w-8/12 h-full transform skew-x-45 transition duration-500 z-10"></div>
                    </div>
                    <div className="neon-top bg-pink-800 absolute -top-2 left-1/2 w-12 h-3 rounded-md transform -translate-x-1/2 transition-all delay-100 duration-500 z-0 filter-blur-3 "></div>
                    <div className="neon-bottom bg-pink-800 absolute -bottom-2 left-1/2 w-12 h-3 rounded-md transform -translate-x-1/2 transition-all delay-100 duration-500 z-0 filter-blur-3 "></div>
                </div>
            </div>
            <a
                href="#Projects"
                className="self-center mt-auto py-10 sm:py-0 sm:mb-1 animate-bounce hidden sm:flex">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="w-12 h-12 "
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                    />
                </svg>
            </a>
        </div>
    );
}

export default Home;
