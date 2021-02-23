import { ReactComponent as GithubIcon } from "../images/github.svg";
import { ReactComponent as NetlfiyIcon } from "../images/netlify.svg";
import { ReactComponent as WebsiteIcon } from "../images/Website.svg";

const Card = ({ source, title, git, site }) => {
    return (
        <div className="w-11/12 sm:w-9/12 2xl:w-7/12 p-1 ml-auto mr-auto bg-black bg-opacity-10 backdrop-custom-blur rounded-xl mb-10">
            <img
                className="rounded-xl w-11/12 sm:w-10/12 h-56 my-6 mx-auto shadow-2xl"
                src={source}
                alt={`${title}`}
            />
            <div className="flex flex-col flex-wrap justify-center items-center">
                <p className="h-max text-center text-white font-bold text-xl md:text-2xl">
                    {title}
                </p>
                <div className="flex w-max h-max m-6 text-white text-xl font-semibold justify-center items-center">
                    <a href={git} className="flex items-end" target="=_blank">
                        <GithubIcon className="w-6 h-6 md:w-10 md:h-10" />
                        <p className="px-4 hover:text-blue-800">Source</p>
                    </a>
                    <a href={site} className="flex items-end" target="=_blank">
                        <WebsiteIcon className="w-6 h-6 md:w-10 md:h-10" />
                        <p className="px-4 hover:text-blue-800">Demo</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
