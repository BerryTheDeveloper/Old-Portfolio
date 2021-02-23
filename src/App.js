import Navbar from "./components/Navbar";
import LanguageIcons from "./components/LanguageIcons";
import Content from "./components/Content";

function App() {
    return (
        <>
            <div className="w-11/12 m-auto z-20 relative">
                <LanguageIcons />
                <div className="w-full m-auto flex">
                    <Navbar />
                    <Content />
                </div>
            </div>
            <div className="bg-image-4 bg-cover bg-center fixed inset-0 bg-no-repeat "></div>
        </>
    );
}

export default App;
