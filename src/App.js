import Navbar from "./components/Navbar";
import Icons from "./components/Icons";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
    return (
        <>
            <div className="w-11/12 m-auto z-20 relative">
                <Icons />
                <div className="w-full m-auto flex">
                    <Navbar />
                    <Content />
                </div>
            </div>
            <div className="bg-black bg-opacity-50 fixed inset-0 backdrop-blur z-10"></div>
            <div className="bg-image bg-left-top bg-no-repeat bg-fixed fixed inset-0"></div>
        </>
    );
}

export default App;
