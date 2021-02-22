import { ReactComponent as PolandIcon } from "../images/poland.svg";
import { ReactComponent as UKIcon } from "../images/united-kingdom.svg";

const LanguageIcons = () => {
    return (
        <div className="fixed top-10 right-10 z-20">
            <a href="#">
                <PolandIcon />
            </a>
        </div>
    );
};

export default LanguageIcons;
