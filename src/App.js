import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
    return (
        <>
            <Header />
            <div className="w-10/12 h-screen m-auto py-16 flex relative">
                <Navbar />
                <Content />
            </div>
            <Footer />
        </>
    );
}

export default App;
