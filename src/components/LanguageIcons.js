import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as PolandIcon } from "../images/poland.svg";
import { ReactComponent as UKIcon } from "../images/united-kingdom.svg";

const LanguageIcons = () => {
    const { t, i18n } = useTranslation("common");
    const [lang, setlang] = useState(i18n.language);

    const handleClick = () => {
        if (i18n.language === "en") {
            i18n.changeLanguage("pl");
        } else {
            i18n.changeLanguage("en");
        }
        setlang(i18n.language);
    };

    return (
        <div className="fixed top-10 right-10 w-max h-max z-30">
            <button
                onClick={handleClick}
                className="w-max h-max relative z-30 cursor-pointer focus:outline-none">
                {lang === "en" ? <PolandIcon /> : <UKIcon />}
            </button>
        </div>
    );
};

export default LanguageIcons;
