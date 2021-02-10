import Home from "../pages/Home";
import Projects from "../pages/Projects";

const Content = () => {
    return (
        <div className="flex flex-col ml-auto w-3/4 z-10">
            <Home />
            <Projects />
        </div>
    );
};

export default Content;
