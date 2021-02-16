const nameForNavbar = ["Home", "Projects", "Skills", "About", "Contact"];

const Navbar = () => {
    return (
        <nav className="w-1/5 transform translate-y-1/2 text-white text-2xl font-normal leading-10 fixed z-20">
            <ul className="flex flex-col text-decoration:none list-none">
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
        </nav>
    );
};

export default Navbar;
