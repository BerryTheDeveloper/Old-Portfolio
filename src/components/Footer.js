import { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
    return (
        <div
            className="py-12 w-full flex justify-center items-center text-white font-2xl font-semibold h-12"
            ref={ref}>
            Portfolio B. Popiołek © 2021
        </div>
    );
});

export default Footer;
