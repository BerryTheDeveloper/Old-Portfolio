import { ReactComponent as Hello } from "../images/hello.svg";

const nameForNavbar = ["Home", "Projects", "About", "Contact"];

const Navbar = () => {
    return (
        <nav className="w-1/5 h-screen sticky top-0 text-white text-2xl font-normal leading-10 fixed z-20 flex flex-col justify-between">
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
                        href="#"
                        key={index}
                        className="py-3 hover:text-red-900  w-2/5">
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
