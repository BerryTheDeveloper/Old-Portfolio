import { ReactComponent as GithubIcon } from "../images/github.svg";
import { ReactComponent as NetlfiyIcon } from "../images/netlify.svg";
import landingPage from "../images/landingPage.png";

const Card = () => {
    return (
        <div className="w-5/12 bg-white bg-opacity-10 backdrop-custom-blur rounded-5xl">
            <img
                className="rounded-5xl w-11/12 h-2/4 my-6 mx-auto shadow-2xl"
                src={landingPage}
                alt=""
            />
            <p className="text-white font-bold text-2xl w-max ml-6">
                Mockups landing page
            </p>
            <div className="flex w-max h-max m-6 text-white text-xl font-semibold justify-center items-center">
                <GithubIcon className="w-14 h-14" />
                <p className="px-4">Github</p>
                <NetlfiyIcon className="w-14 h-14" />
                <p className="px-4">Netlify</p>
            </div>
        </div>
    );
};

export default Card;
