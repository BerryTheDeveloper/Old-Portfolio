import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const Form = ({ handleMouseEnter, handleMouseLeave, setFormIsSuccess }) => {
    const { t } = useTranslation("common");
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
            sendEmail(e);
        } else {
            setFormIsSuccess(false);
            setFormIsValid(false);
        }
    };

    const sendEmail = (e) => {
        emailjs
            .sendForm(
                `${process.env.REACT_APP_SERVICE_ID}`,
                `${process.env.REACT_APP_TEMPLATE_ID}`,
                e.target,
                `${process.env.REACT_APP_USER_ID}`
            )
            .then(() => {
                setFormIsSuccess(true);
                setFormIsValid(false);
                resetForm(e);
            })
            .catch((err) => {
                console.error("FAIL!", err);
                setFormIsSuccess(false);
                setFormIsValid(false);
            });
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
                className="text-sm font-medium pt-7 pb-2 text-gray-300"
                data-aos="fade-right"
                data-aos-duration="1350"
                data-offset="200">
                {t("contact.form.name.name-label")}
            </label>
            <input
                id="name"
                name="user_name"
                type="text"
                ref={nameRef}
                onChange={handleChangeName}
                autoComplete="off"
                placeholder={t("contact.form.name.placeholder")}
                className="w-full h-12 text-white font-bold pl-3 bg-white bg-opacity-20 outline-none shadow-md ring-2 ring-gray-300 ring-opacity-30 focus:ring-white focus:ring-opacity-80"
                data-aos="fade-right"
                data-aos-duration="1350"
                data-offset="200"
            />
            <label
                htmlFor="email"
                className="text-sm font-medium pt-10 pb-2 text-gray-300"
                data-aos="fade-right"
                data-aos-duration="1350"
                data-offset="200">
                {t("contact.form.email.name-label")}
            </label>
            <input
                id="email"
                name="user_email"
                type="email"
                ref={emailRef}
                onChange={handleChanegeEmail}
                autoComplete="off"
                placeholder={t("contact.form.email.placeholder")}
                className="w-full h-12 text-white font-bold pl-3 bg-gray-300 bg-opacity-20 outline-none shadow-md ring-2 ring-gray-300 ring-opacity-30 focus:ring-red-500 focus:ring-opacity-80"
                data-aos="fade-right"
                data-aos-duration="1350"
                data-offset="200"
            />
            <label
                htmlFor="subject"
                className="text-sm font-medium pt-10 pb-2 text-gray-300"
                data-aos="fade-right"
                data-aos-duration="1350"
                data-offset="200">
                {t("contact.form.subject.name-label")}
            </label>
            <select
                id="subject"
                name="user_subject"
                onChange={(e) => setOption(e.target.value)}
                className="w-full h-12 text-white text-sm sm:text-md font-bold pl-3 bg-gray-300 bg-opacity-20 outline-none shadow-md ring-2 ring-gray-300 ring-opacity-30 focus:ring-green-500 focus:ring-opacity-80"
                data-aos="fade-right"
                data-aos-duration="1350"
                data-offset="200">
                <option
                    value={t("contact.form.subject.options.first")}
                    className="bg-gray-500 text-white font-bold"
                    defaultValue>
                    {t("contact.form.subject.options.first")}
                </option>
                <option
                    value={t("contact.form.subject.options.second")}
                    className="bg-gray-500 text-white font-bold">
                    {t("contact.form.subject.options.second")}
                </option>
                <option
                    value={t("contact.form.subject.options.third")}
                    className="bg-gray-500 text-white font-bold">
                    {t("contact.form.subject.options.third")}
                </option>
                <option
                    value={t("contact.form.subject.options.fourth")}
                    className="bg-gray-500 text-white font-bold">
                    {t("contact.form.subject.options.fourth")}
                </option>
                <option
                    value={t("contact.form.subject.options.fifth")}
                    className="bg-gray-500 text-white font-bold">
                    {t("contact.form.subject.options.fifth")}
                </option>
            </select>
            <label
                htmlFor="message"
                className="text-sm font-medium pt-10 pb-2 text-gray-300"
                data-aos="fade-right"
                data-aos-duration="1350"
                data-offset="200">
                {t("contact.form.message.name-label")}
            </label>
            <textarea
                name="message"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("contact.form.message.placeholder")}
                className="w-full h-36 text-white font-bold px-3 pt-2 bg-gray-300 bg-opacity-20 outline-none resize-none shadow-md ring-2 ring-gray-300 ring-opacity-30 focus:ring-white focus:ring-opacity-80"
                data-aos="fade-right"
                data-aos-duration="1350"
                data-offset="200"></textarea>

            <button
                type="submit"
                className="w-max h-12 text-md md:text-xl cursor-pointer mt-16 py-2 px-3 bg-gray-300 bg-opacity-20 backdrop-filter text-white tracking-wider shadow-xl ring-2 ring-white ring-opacity-80 backdrop-filter shadow-2xl transition duration-500 relative overflow-hidden"
                data-aos="fade-right"
                data-aos-duration="1350"
                data-offset="200"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className="bg-white bg-opacity-30 absolute top-0 left-0 w-12 h-full transform skew-x-45 translate-x-56 transition duration-500"></div>
                {t("contact.form.btn-submit.title")}
            </button>
        </form>
    );
};

export default Form;
