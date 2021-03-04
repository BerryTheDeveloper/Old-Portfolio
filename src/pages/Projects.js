import ParticlesComp from "../components/ParticlesComp";
import Cards from "../components/Cards";
import { forwardRef } from "react";

const Projects = (props, ref) => {
    return (
        <div ref={ref} id="Projects" className="w-full relative pt-10">
            <ParticlesComp />
            <Cards />
        </div>
    );
};

export default forwardRef(Projects);
