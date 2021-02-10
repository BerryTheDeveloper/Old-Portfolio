import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
    return (
        <>
            <div className="bg-white bg-opacity-10 fixed inset-0 backdrop-blur z-0"></div>
            <div className="bg-image  bg-no-repeat bg-cover z-0">
                <Header />
                <div className="w-10/12 m-auto pt-16 flex z-10">
                    <Navbar />
                    <Content />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
