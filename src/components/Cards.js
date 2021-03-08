import Card from "../components/Card";
import landingPage from "../images/Projects/landingPage.png";
import DevsOnYT from "../images/Projects/DevsOnYT.png";
import ReactWeatherApp from "../images/Projects/ReactWeatherApp.png";
import FurnitureWebsite from "../images/Projects/FurnitureWebsite.png";
import PortfolioLandingPage from "../images/Projects/PortfolioLandingPage.png";
import PortfolioUXUI from "../images/Projects/PortfolioUXUI.png";
import RPSGame from "../images/Projects/RPSGame.png";
import Unsplash from "../images/Projects/unsplashGallery.png";
import { useTranslation } from "react-i18next";

const Cards = () => {
    const { t } = useTranslation("common");

    return (
        <div className="w-full flex z-10 relative" id="Projects">
            <div className="w-full flex flex-col lg:flex-row flex-wrap m-auto">
                <div className="lg:w-1/2 flex justify-center flex-col">
                    <Card
                        source={landingPage}
                        git="https://github.com/Simply-man/DesignPage"
                        site="https://designpage.netlify.app/"
                        title={t("projects.mockups")}
                    />
                    <Card
                        source={DevsOnYT}
                        git="https://github.com/Simply-man/devsonyt"
                        site="https://www.devsonyt.guru/"
                        title={t("projects.crawler")}
                    />
                    <Card
                        source={ReactWeatherApp}
                        git="https://github.com/Simply-man/weather-app-react"
                        site="https://myweatheter.netlify.app/"
                        title={t("projects.weather-app")}
                    />
                    <Card
                        source={PortfolioLandingPage}
                        git="https://github.com/Simply-man/Portfolio-Landing-Page"
                        site="https://www.imfine.pl/"
                        title={t("projects.portfolio-landing")}
                    />
                </div>
                <div className="lg:w-1/2 flex flex-col lg:pt-64">
                    <Card
                        source={FurnitureWebsite}
                        git="https://github.com/Simply-man/website-wojtekmeble.pl"
                        site="https://wojtekmeble-pl.herokuapp.com/"
                        title={t("projects.furniture")}
                    />
                    <Card
                        source={PortfolioUXUI}
                        git="https://github.com/Simply-man/UX-UI-site"
                        site="https://www.wsawicka.com/"
                        title={t("projects.portfolio-client")}
                    />
                    <Card
                        source={RPSGame}
                        git="https://github.com/Simply-man/Rock-Paper-Scissors-Game"
                        site="https://simplyrockpapperscissors.netlify.app/"
                        title={t("projects.rps-game")}
                    />
                    <Card
                        source={Unsplash}
                        git="https://github.com/Simply-man/unsplash-gallery"
                        site="https://unsplash-gall.netlify.app/"
                        title={t("projects.unsplash")}
                    />
                </div>
            </div>
        </div>
    );
};

export default Cards;
