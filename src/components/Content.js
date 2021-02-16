import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Footer from "./Footer";

const Content = () => {
    return (
        <div className="flex flex-col ml-auto w-3/4 z-20">
            <Home />
            <Projects />
            <Skills />
        </div>
    );
};

export default Content;
