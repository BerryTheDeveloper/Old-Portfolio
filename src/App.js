import Navbar from "./components/Navbar";
import LanguageIcons from "./components/LanguageIcons";
import Content from "./components/Content";

function App() {
    return (
        <>
            {/* <div className="bg-black bg-opacity-50 backdrop-blur z-10"> */}
            <div className="w-11/12 m-auto z-20 relative">
                <LanguageIcons />
                <div className="w-full m-auto flex">
                    <Navbar />
                    <Content />
                </div>
            </div>
            <div className="bg-image-3 bg-cover bg-center fixed inset-0 bg-no-repeat ">
                {/* </div> */}
            </div>
        </>
    );
}

export default App;
