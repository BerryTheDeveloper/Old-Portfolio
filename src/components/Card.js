import { ReactComponent as GithubIcon } from "../images/github.svg";
import { ReactComponent as NetlfiyIcon } from "../images/netlify.svg";
import landingPage from "../images/landingPage.png";

const Card = () => {
    return (
        <div className="w-10/12 p-1 ml-auto mr-auto bg-white bg-opacity-10 backdrop-custom-blur rounded-3xl mb-10">
            <img
                className="rounded-3xl w-11/12 h-2/4 my-6 mx-auto shadow-2xl"
                src={landingPage}
                alt=""
            />
            <p className="text-white font-bold text-2xl w-max ml-6">
                Mockups landing page
            </p>
            <div className="flex w-max h-max m-6 text-white text-xl font-semibold justify-center items-center">
                <a href="#" className="flex items-end">
                    <GithubIcon className="w-10 h-10" />
                    <p className="px-4">Github</p>
                </a>
                <a href="#" className="flex items-end">
                    <NetlfiyIcon className="w-10 h-10" />
                    <p className="px-4">Netlify</p>
                </a>
            </div>
        </div>
    );
};

export default Card;
