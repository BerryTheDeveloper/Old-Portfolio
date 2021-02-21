import React from "react";
import ContactIcons from "../components/ContactIcons";
import Form from "../components/Form";

function Contact() {
    const cssClasses = [
        "bg-gradient-to-r",
        "from-blue-500",
        "via-purple-500",
        "to-pink-500",
        "animate-btn-gradient",
        "bg-clip-text",
        "text-transparent",
    ];

    const getGetInTouchText = () => document.querySelector(".contact-title");

    const handleMouseEnter = (e) => {
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
        <div className="w-10/12 m-auto pb-36 flex">
            <div className="w-3/4">
                <div className="w-3/4 flex flex-col text-white pt-8">
                    <h1 className="contact-title text-6xl font-semibold text-gray-300">
                        Get in touch!
                    </h1>
                    <p className="text-3xl text-gray-600  pl-1 pt-3">
                        How can I help you?
                    </p>
                    <p className="text-3xl text-gray-300 pl-2 mt-20 tracking-wide">
                        Leave a message
                    </p>
                    <Form
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                    />
                </div>
            </div>
            <div className="w-1/4 flex justify-center items-end">
                <ContactIcons />
            </div>
        </div>
    );
}

export default Contact;
