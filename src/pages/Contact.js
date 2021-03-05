import { forwardRef, useState, useEffect } from "react";
import ContactIcons from "../components/ContactIcons";
import Form from "../components/Form";
import useWindowWidth from "../hooks/useWindowWidth";
import PopUp from "../components/PopUp";

function Contact(props, ref) {
    const width = useWindowWidth();
    const [openPopUp, setOpenPopUp] = useState();
    const [formIsSuccess, setFormIsSuccess] = useState(null);

    useEffect(() => {
        if (formIsSuccess === null) return;
        if (formIsSuccess || !formIsSuccess) {
            setOpenPopUp(true);
            setTimeout(() => {
                setOpenPopUp(false);
                setFormIsSuccess(null);
            }, 2000);
        }
    }, [formIsSuccess]);

    const cssClasses = [
        "bg-gradient-to-r",
        "from-blue-800",
        "via-purple-800",
        "to-pink-800",
        "animate-btn-gradient",
        "bg-clip-text",
        "text-transparent",
    ];

    const getGetInTouchText = () => document.querySelector(".contact-title");

    const handleMouseEnter = (e) => {
        if (width < 1279) return;
        const div = e.target.querySelector("div");
        const getInTouch = getGetInTouchText();
        cssClasses.forEach((item) => {
            if (item !== cssClasses[5] && item !== cssClasses[6])
                e.target.classList.add(item);
            getInTouch.classList.add(item);
        });
        getInTouch.classList.remove("text-gray-300");
        div.classList.remove("translate-x-56");
        div.classList.add("-translate-x-52");
    };

    const handleMouseLeave = (e) => {
        if (width < 1279) return;
        const div = e.target.querySelector("div");
        const getInTouch = getGetInTouchText();
        cssClasses.forEach((item) => {
            e.target.classList.remove(item);
            getInTouch.classList.remove(item);
        });
        getInTouch.classList.add("text-gray-300");
        div.classList.add("translate-x-56");
        div.classList.remove("-translate-x-52");
    };

    return (
        <div
            className="w-10/12 m-auto pb-16 flex flex-col md:flex-row"
            id="Contact"
            ref={ref}>
            <div className="w-full md:w-3/4">
                <div className="w-full md:w-3/4 flex flex-col text-white pt-8">
                    <h1 className="contact-title text-4xl md:text-6xl font-semibold text-gray-300">
                        Get in touch!
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-600  pl-1 pt-3">
                        How can I help you?
                    </p>
                    <p className="text-2xl md:text-3xl text-gray-300 pl-2 mt-20 tracking-wide">
                        Leave a message
                    </p>
                    <Form
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                        setFormIsSuccess={setFormIsSuccess}
                    />
                </div>
            </div>
            <div className="w-full md:w-1/4 flex justify-center items-end">
                <ContactIcons width={width} />
            </div>
            {openPopUp && <PopUp formIsSuccess={formIsSuccess} />}
        </div>
    );
}

export default forwardRef(Contact);
