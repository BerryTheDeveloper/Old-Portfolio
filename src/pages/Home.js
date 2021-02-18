function Home() {
    return (
        <div className="w-full text-white h-screen  text-left pt-20 pl-8 z-20">
            <div className="pt-52">
                <p className="text-5xl font-medium tracking-wider">
                    A Frontend Developer Passionate
                </p>
                <p className="text-5xl font-medium tracking-wider">
                    About Creating User
                </p>
                <p className="text-5xl font-medium tracking-wider">
                    Friendly Products
                </p>
                <p className="tracking-wider text-2xl mt-12 opacity-50">
                    Currently frelancing and seraching for new oppurtonites.
                </p>
            </div>
            <div className="flex mt-24 justify-start">
                <a
                    href="#"
                    className="text-xl cursor-pointer py-2 px-3 tracking-wider border-2 border-solid border-white rounded-lg">
                    View my work
                </a>
                <a
                    href="#"
                    className="text-xl  cursor-pointer py-2 px-3 tracking-wider border-2 border-solid border-white rounded-lg ml-6 hover:bg-red-500">
                    Check my CV
                </a>
                <a
                    href="#"
                    className="text-xl  cursor-pointer py-2 px-3 tracking-wider border-2 border-solid border-white rounded-lg ml-6 hover:bg-red-500">
                    Contact with me
                </a>
            </div>
            {/* <img src="" alt=""/> */}
        </div>
    );
}

export default Home;
