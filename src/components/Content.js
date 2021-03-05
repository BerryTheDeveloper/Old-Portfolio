import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "./Footer";

const Content = ({
    homePageRef,
    projectsPageRef,
    aboutPageRef,
    contactPageRef,
    handleClickRef,
}) => {
    return (
        <>
            <div className="w-full h-max sm:w-4/5 flex flex-col z-20">
                <Home ref={homePageRef} handleClickRef={handleClickRef} />
                <Projects ref={projectsPageRef} />
                <About ref={aboutPageRef} />
                <Contact ref={contactPageRef} />
                <Footer />
            </div>
        </>
    );
};

export default Content;
