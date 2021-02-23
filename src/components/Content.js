import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "./Footer";

const Content = () => {
    return (
        <div className="w-full sm:w-4/5 flex flex-col z-20">
            <Home />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default Content;
