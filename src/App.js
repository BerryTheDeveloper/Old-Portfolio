import { useRef } from "react";
import Navbar from "./components/Navbar";
import LanguageIcons from "./components/LanguageIcons";
import Content from "./components/Content";

function App() {
    const homePageRef = useRef(null);
    const projectsPageRef = useRef(null);
    const aboutPageRef = useRef(null);
    const contactPageRef = useRef(null);

    const scrollIntoView = (ref) =>
        ref.current.scrollIntoView({ behavior: "smooth" });

    const handleClickRef = (e) => {
        if (projectsPageRef.current.id === e.target.id) {
            scrollIntoView(projectsPageRef);
        } else if (aboutPageRef.current.id === e.target.id) {
            scrollIntoView(aboutPageRef);
        } else if (contactPageRef.current.id === e.target.id) {
            scrollIntoView(contactPageRef);
        } else {
            scrollIntoView(homePageRef);
        }
    };

    return (
        <>
            <div className="w-11/12 m-auto z-20 relative">
                <LanguageIcons />
                <div className="w-full m-auto flex">
                    <Navbar handleClickRef={handleClickRef} />
                    <Content
                        homePageRef={homePageRef}
                        projectsPageRef={projectsPageRef}
                        aboutPageRef={aboutPageRef}
                        contactPageRef={contactPageRef}
                        handleClickRef={handleClickRef}
                    />
                </div>
            </div>
            <div className="bg-image-4 bg-cover bg-center fixed inset-0 bg-no-repeat "></div>
        </>
    );
}

export default App;
