import { useState, useRef, useEffect } from "react";

const Form = ({ handleMouseEnter, handleMouseLeave, setFormIsSuccess }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [option, setOption] = useState("Just saying hi");
    const [message, setMessage] = useState("");
    const [formIsValid, setFormIsValid] = useState(false);
    const [error, setError] = useState({});
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    useEffect(() => {
        if (Object.keys(error).length === 0 && name !== "" && email !== "") {
            setFormIsValid(true);
        }
    }, [error, name, email]);

    const noValid = (reference) => {
        reference.remove("focus:ring-green-500");
        reference.add("focus:ring-red-500");
    };

    const Valid = (reference) => {
        reference.remove("focus:ring-red-500");
        reference.add("focus:ring-green-500");
    };

    const handleChangeName = (e) => {
        let valueName = e.target.id === "name" ? e.target.value : name;
        setName(valueName);

        let nameRefCureentClassList = nameRef.current.classList;

        let errors = {};
        let nameIsValid = true;

        //Name
        if (valueName === "") {
            setFormIsValid(false);
            nameIsValid = false;
            errors["name"] = "Cannot be empty";
            noValid(nameRefCureentClassList);
        }

        if (nameIsValid) Valid(nameRefCureentClassList);

        setError(errors);
    };

    const handleChanegeEmail = (e) => {
        let valueEmail = e.target.id === "email" ? e.target.value : email;
        setEmail(valueEmail);
        let emailRefCureentClassList = emailRef.current.classList;
        let errors = {};
        let emailIsValid = true;

        // Email
        if (valueEmail === "") {
            setFormIsValid(false);
            emailIsValid = false;
            errors["email"] = "Cannot be empty";
            noValid(emailRefCureentClassList);
        }

        if (typeof valueEmail !== "undefined") {
            let lastAtPos = valueEmail.lastIndexOf("@");
            let lastDotPos = valueEmail.lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    valueEmail.indexOf("@@") == -1 &&
                    lastDotPos > 2 &&
                    valueEmail.length - lastDotPos > 2
                )
            ) {
                setFormIsValid(false);
                emailIsValid = false;
                errors["email"] = "Email is not valid";
                noValid(emailRefCureentClassList);
            }
        }

        if (emailIsValid) Valid(emailRefCureentClassList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formIsValid) {
            setFormIsSuccess(true);
            setFormIsValid(false);
            resetForm(e);
        } else {
            setFormIsSuccess(false);
            setFormIsValid(false);
        }
    };

    const resetForm = (e) => {
        e.target.reset();
        setEmail("");
        setName("");
        setMessage("");
        if (nameRef && emailRef) {
            nameRef.current.classList.remove("focus:ring-green-500");
            emailRef.current.classList.remove("focus:ring-green-500");
        }
    };

    return (
        <form
            action="#"
            className="w-full flex flex-col pl-2"
            onSubmit={handleSubmit}>
            <label
                htmlFor="name"
                className="text-sm font-medium pt-7 pb-2 text-gray-300">
                Your name
            </label>
            <input
                id="name"
                name="name"
                type="text"
                ref={nameRef}
                onChange={handleChangeName}
                placeholder="Please enter your name"
                className="w-full h-12 text-white font-bold pl-3 bg-white bg-opacity-20 outline-none shadow-md ring-2 ring-gray-300 ring-opacity-30 focus:ring-white focus:ring-opacity-80"
            />
            <label
                htmlFor="email"
                className="text-sm font-medium pt-10 pb-2 text-gray-300">
                E-mail
            </label>
            <input
                id="email"
                name="email"
                type="email"
                ref={emailRef}
                onChange={handleChanegeEmail}
                placeholder="Please enter your email"
                className="w-full h-12 text-white font-bold pl-3 bg-gray-300 bg-opacity-20 outline-none shadow-md ring-2 ring-gray-300 ring-opacity-30 focus:ring-red-500 focus:ring-opacity-80"
            />
            <label
                htmlFor="subject"
                className="text-sm font-medium pt-10 pb-2 text-gray-300">
                Subject
            </label>
            <select
                id="subject"
                name="subject"
                onChange={(e) => setOption(e.target.value)}
                className="w-full h-12 text-white text-sm sm:text-md font-bold pl-3 bg-gray-300 bg-opacity-20 outline-none shadow-md ring-2 ring-gray-300 ring-opacity-30 focus:ring-green-500 focus:ring-opacity-80">
                <option
                    value="Just saying hi"
                    className="bg-gray-500 text-white font-bold"
                    defaultValue>
                    Just saying hi
                </option>
                <option
                    value="I would like to cooparate"
                    className="bg-gray-500 text-white font-bold">
                    I would like to cooparate
                </option>
                <option
                    value="I have an idea for website"
                    className="bg-gray-500 text-white font-bold">
                    I have an idea for website
                </option>
                <option
                    value="Let's learn toogether"
                    className="bg-gray-500 text-white font-bold">
                    Let's learn toogether
                </option>
                <option
                    value="Diffrent (Explain in message)"
                    className="bg-gray-500 text-white font-bold">
                    Diffrent (Explain in message)
                </option>
            </select>
            <label
                htmlFor="message"
                className="text-sm font-medium pt-10 pb-2 text-gray-300">
                Message
            </label>
            <textarea
                name="message"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please enter your message"
                className="w-full h-36 text-white font-bold px-3 pt-2 bg-gray-300 bg-opacity-20 outline-none resize-none shadow-md ring-2 ring-gray-300 ring-opacity-30 focus:ring-white focus:ring-opacity-80"></textarea>

            <button
                type="submit"
                className="w-max h-12 text-md md:text-xl cursor-pointer mt-16 py-2 px-3 bg-gray-300 bg-opacity-20 backdrop-filter text-white tracking-wider shadow-xl ring-2 ring-white ring-opacity-80 backdrop-filter shadow-2xl transition duration-500 relative overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className="bg-white bg-opacity-30 absolute top-0 left-0 w-12 h-full transform skew-x-45 translate-x-56 transition duration-500"></div>
                Let's cooparate!
            </button>
        </form>
    );
};

export default Form;
