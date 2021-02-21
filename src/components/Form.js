const Form = ({ handleMouseEnter, handleMouseLeave }) => {
    return (
        <form action="#" className="w-full flex flex-col pl-2">
            <label
                htmlFor="name"
                className="text-md font-medium pt-7 pb-2 text-gray-300">
                Your name
            </label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Please enter your name"
                className="w-full h-12 text-white font-bold pl-3 bg-white bg-opacity-20 outline-none shadow-md ring-2 ring-gray-300 ring-opacity-30 focus:ring-white focus:ring-opacity-80"
            />
            <label
                htmlFor="email"
                className="text-md font-medium pt-10 pb-2 text-gray-300">
                E-mail
            </label>
            <input
                id="email"
                name="email"
                type="email"
                placeholder="Please enter your email"
                className="w-full h-12 text-white font-bold pl-3 bg-gray-300 bg-opacity-20 outline-none shadow-md ring-2 ring-gray-300 ring-opacity-30 focus:ring-red-500 focus:ring-opacity-80"
            />
            <label
                htmlFor="subject"
                className="text-md font-medium pt-10 pb-2 text-gray-300">
                Subject
            </label>
            <select
                id="subject"
                name="subject"
                className="w-full h-12 text-white font-bold pl-3 bg-gray-300 bg-opacity-20 outline-none shadow-md ring-2 ring-gray-300 ring-opacity-30 focus:ring-green-500 focus:ring-opacity-80">
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
                className="text-md font-medium pt-10 pb-2 text-gray-300">
                Message
            </label>
            <textarea
                name="message"
                id="message"
                placeholder="Please enter your message"
                className="w-full h-36 text-white font-bold px-3 pt-2 bg-gray-300 bg-opacity-20 outline-none resize-none shadow-md ring-2 ring-gray-300 ring-opacity-30 focus:ring-white focus:ring-opacity-80"></textarea>

            <button
                type="#"
                className="w-max h-12 text-xl cursor-pointer mt-16 py-2 px-3 bg-gray-300 bg-opacity-20 backdrop-filter text-white tracking-wider shadow-xl ring-2 ring-white ring-opacity-80 backdrop-filter shadow-2xl transition duration-500 relative overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className="bg-white bg-opacity-30 absolute top-0 left-0 w-12 h-full transform skew-x-45 translate-x-56 transition duration-500"></div>
                Let's cooparate!
            </button>
        </form>
    );
};

export default Form;
