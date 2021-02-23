import { ReactComponent as Facebook } from "../images/facebook.svg";
import { ReactComponent as Twitter } from "../images/twitter.svg";
import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Linkedin } from "../images/linkedin.svg";

const ContactIcons = () => {
    const handleMouseEnter = (e) => {
        const tagName = e.target.tagName;
        if (tagName === "A") {
            const div = e.target.querySelector("div");
            div.classList.remove("translate-x-40");
            div.classList.add("-translate-x-40");
        } else if (tagName === "svg") {
            const div = e.target.parentElement.querySelector("div");
            div.classList.remove("translate-x-40");
            div.classList.add("-translate-x-40");
        } else {
            const div = e.target.parentElement.parentElement.querySelector(
                "div"
            );
            div.classList.remove("translate-x-40");
            div.classList.add("-translate-x-40");
        }
    };

    const handleMouseLeave = (e) => {
        const tagName = e.target.tagName;
        if (tagName === "A") {
            const div = e.target.querySelector("div");
            div.classList.remove("-translate-x-40");
            div.classList.add("translate-x-40");
        } else if (tagName === "svg") {
            const div = e.target.parentElement.querySelector("div");
            div.classList.remove("-translate-x-40");
            div.classList.add("translate-x-40");
        } else {
            const div = e.target.parentElement.parentElement.querySelector(
                "div"
            );
            div.classList.remove("-translate-x-40");
            div.classList.add("translate-x-40");
        }
    };

    return (
        <div className="w-full pt-24 flex flex-row flex-wrap md:flex-col justify-center items-center">
            <a
                href="https://www.facebook.com/profile.php?id=100003344122574"
                target="_blank"
                className="w-16 h-16 sm:w-24 sm:h-24 m-8 bg-gray-300 bg-opacity-20 ring-2 ring-gray-300 ring-opacity-20 rounded-md backdrop-filter shadow-2xl flex items-center justify-center transition duration-500 transform hover:-translate-y-6 relative overflow-hidden z-20"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <Facebook className="w-8 h-8 sm:w-12 sm:h-12" />
                <div className="bg-white bg-opacity-30 absolute top-0 left-0 w-6 h-full transform skew-x-45 translate-x-40 transition duration-500"></div>
            </a>
            <a
                href="https://twitter.com/SimplyManDev"
                target="_blank"
                className="w-16 h-16 sm:w-24 sm:h-24 m-8 bg-gray-300 bg-opacity-20 ring-2 ring-gray-300 ring-opacity-20 rounded-md backdrop-filter shadow-2xl flex items-center justify-center transition duration-500 transform hover:-translate-y-6  relative overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <Twitter className="w-8 h-8 sm:w-12 sm:h-12" />
                <div className="bg-white bg-opacity-30 absolute top-0 left-0 w-6 h-full transform skew-x-45 translate-x-40 transition duration-500"></div>
            </a>
            <a
                href="https://github.com/Simply-man"
                target="_blank"
                className="w-16 h-16 sm:w-24 sm:h-24 m-8 bg-gray-300 bg-opacity-20 ring-2 ring-gray-300 ring-opacity-20 rounded-md backdrop-filter shadow-2xl flex items-center justify-center transition duration-500 transform hover:-translate-y-6  relative overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <Github className="w-8 h-8 sm:w-12 sm:h-12" />
                <div className="bg-white bg-opacity-30 absolute top-0 left-0 w-6 h-full transform skew-x-45 translate-x-40 transition duration-500"></div>
            </a>
            <a
                href="https://www.linkedin.com/in/bart%C5%82omiej-popio%C5%82ek-6394981b2/"
                target="_blank"
                className="w-16 h-16 sm:w-24 sm:h-24 m-8 bg-gray-300 bg-opacity-20 ring-2 ring-gray-300 ring-opacity-20 rounded-md backdrop-filter shadow-2xl flex items-center justify-center transition duration-500 transform hover:-translate-y-6  relative overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <Linkedin className="w-8 h-8 sm:w-12 sm:h-12" />
                <div className="bg-white bg-opacity-30 absolute top-0 left-0 w-6 h-full transform skew-x-45 translate-x-40 transition duration-500"></div>
            </a>
        </div>
    );
};

export default ContactIcons;
