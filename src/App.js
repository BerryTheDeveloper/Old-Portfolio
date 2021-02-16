import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
    return (
        <>
            <div className="bg-image bg-left-top bg-no-repeat bg-fixed">
                <div className="bg-white bg-opacity-10 fixed inset-0 backdrop-blur z-10"></div>
                <Header />
                <div className="w-10/12 m-auto pt-16 flex z-20">
                    <Navbar />
                    <Content />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
