import Navbar from "./components/Navbar";
import LanguageIcons from "./components/LanguageIcons";
import Content from "./components/Content";

function App() {
    return (
        <>
            <div className="bg-image-2 bg-cover bg-center static bg-no-repeat">
                <div className="bg-black bg-opacity-50 backdrop-blur z-10">
                    <div className="w-11/12 m-auto z-20 relative">
                        <LanguageIcons />
                        <div className="w-full m-auto flex">
                            <Navbar />
                            <Content />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
