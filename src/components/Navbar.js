import { useTranslation } from "react-i18next";
import { ReactComponent as Hello } from "../images/hello.svg";

const Navbar = ({ handleClickRef }) => {
    const { t } = useTranslation("common");

    const namesForNavbar = {
        Home: t("navbar.home"),
        Projects: t("navbar.projects"),
        About: t("navbar.about"),
        Contact: t("navbar.contact"),
    };

    const backgroundTextClases = [
        "text-blue-800",
        "text-purple-800",
        "text-pink-800",
    ];

    const handleMouseEnter = (e) => {
        const randomTextColor =
            backgroundTextClases[Math.round(Math.random() * 2)];
        e.target.classList.add(randomTextColor);
    };

    const handleMouseLeave = (e) => {
        backgroundTextClases.forEach((item) => {
            if (e.target.classList.contains(item))
                e.target.classList.remove(item);
        });
        e.target.classList.add("text-white");
    };

    return (
        <nav className="w-1/5 h-screen sticky top-0 text-white text-xl xl:text-2xl font-normal leading-10 fixed z-20 flex flex-col justify-between hidden sm:flex">
            <div className="flex items-center pt-10">
                <p className="tracking-wide text-xl text-white font-bold pr-1">
                    {t("common:navbar.hi")}
                </p>
                <div className="animate-hello">
                    <Hello className="w-6" />
                </div>
            </div>
            <ul className="flex flex-col text-decoration:none list-none  pb-24">
                {Object.keys(namesForNavbar).map((item) => (
                    <button
                        onClick={handleClickRef}
                        key={item}
                        id={item}
                        className="py-3 w-2/5 focus:outline-none"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {namesForNavbar[item]}
                    </button>
                ))}
            </ul>
            <div className="h-12  pb-24"></div>
        </nav>
    );
};

export default Navbar;
