import { ReactComponent as Hello } from "../images/hello.svg";

const Navbar = () => {
    const nameForNavbar = ["Home", "Projects", "About", "Contact"];
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
                    Hi!
                </p>
                <div className="animate-hello">
                    <Hello className="w-6" />
                </div>
            </div>
            <ul className="flex flex-col text-decoration:none list-none  pb-24">
                {nameForNavbar.map((item, index) => (
                    <a
                        href={`#${item}`}
                        key={index}
                        className="py-3 w-2/5"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {item}
                    </a>
                ))}
                {/* <a href="#" className="py-3 hover:text-red-900  w-2/5">Home</a>
               <a href="#" className="py-3 hover:text-red-900  w-2/5">Projects</a>
               <a href="#" className="py-3 hover:text-red-900  w-2/5">Skills</a>
               <a href="#" className="py-3 hover:text-red-900  w-2/5">About</a>
               <a href="#" className="py-3 hover:text-red-900  w-2/5">Contact</a> */}
            </ul>
            <div className="h-12  pb-24"></div>
        </nav>
    );
};

export default Navbar;
