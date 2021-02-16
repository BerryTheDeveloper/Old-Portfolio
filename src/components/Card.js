import { ReactComponent as GithubIcon } from "../images/github.svg";
import { ReactComponent as NetlfiyIcon } from "../images/netlify.svg";
import landingPage from "../images/landingPage.png";

const Card = () => {
    return (
        <div className="2xl:w-8/12 w-10/12 p-1 ml-auto mr-auto bg-black bg-opacity-30 backdrop-custom-blur rounded-3xl mb-10">
            <img
                className="rounded-3xl w-11/12 h-56 my-6 mx-auto shadow-2xl"
                src={landingPage}
                alt=""
            />
            <div className="flex flex-col  justify-center items-center">
                <p className="h-max text-white font-bold text-2xl w-max">
                    Mockups landing page
                </p>
                <div className="flex w-max h-max m-6 text-white text-xl font-semibold justify-center items-center">
                    <a href="#" className="flex items-end">
                        <GithubIcon className="w-10 h-10" />
                        <p className="px-4">Source</p>
                    </a>
                    <a href="#" className="flex items-end">
                        <NetlfiyIcon className="w-10 h-10" />
                        <p className="px-4">Demo</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
