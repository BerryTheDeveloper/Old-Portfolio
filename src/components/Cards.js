import Card from "../components/Card";
import landingPage from "../images/Projects/landingPage.png";
import DevsOnYT from "../images/Projects/DevsOnYT.png";
import ReactWeatherApp from "../images/Projects/ReactWeatherApp.png";
import FurnitureWebsite from "../images/Projects/FurnitureWebsite.png";
import PortfolioLandingPage from "../images/Projects/PortfolioLandingPage.png";
import PortfolioUXUI from "../images/Projects/PortfolioUXUI.png";
import RPSGame from "../images/Projects/RPSGame.png";

const Cards = () => {
    return (
        <div className="w-full flex z-10 realtive" id="Projects">
            <div className="w-full flex flex-col lg:flex-row flex-wrap m-auto">
                <div className="lg:w-1/2 flex justify-center flex-col">
                    <Card
                        source={landingPage}
                        git="https://github.com/Simply-man/DesignPage"
                        site="https://designpage.netlify.app/"
                        title="Mockups landing page"
                    />
                    <Card
                        source={DevsOnYT}
                        git="https://github.com/Simply-man/devsonyt"
                        site="https://www.devsonyt.guru/"
                        title="React Crawler developers on YT"
                    />
                    <Card
                        source={ReactWeatherApp}
                        git="https://github.com/Simply-man/weather-app-react"
                        site="https://myweatheter.netlify.app/"
                        title="React Weather App"
                    />
                    <Card
                        source={PortfolioLandingPage}
                        git="https://github.com/Simply-man/Portfolio-Landing-Page"
                        site="https://www.imfine.pl/"
                        title="Portfolio landing page"
                    />
                </div>
                <div className="lg:w-1/2 flex flex-col lg:pt-64">
                    <Card
                        source={FurnitureWebsite}
                        git="https://github.com/Simply-man/website-wojtekmeble.pl"
                        site="https://wojtekmeble-pl.herokuapp.com/"
                        title="Furniture Website"
                    />
                    <Card
                        source={PortfolioUXUI}
                        git="https://github.com/Simply-man/UX-UI-site"
                        site="https://www.wsawicka.com/"
                        title="Portfolio for a client"
                    />
                    <Card
                        source={RPSGame}
                        git="https://github.com/Simply-man/Rock-Paper-Scissors-Game"
                        site="https://simplyrockpapperscissors.netlify.app/"
                        title="Rock, Paper, Scissors game"
                    />
                </div>
            </div>
        </div>
    );
};

export default Cards;
