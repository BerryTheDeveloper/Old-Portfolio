import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"

function App() {
  return (
    <>
    <Header />
    <div className="w-10/12 m-auto py-12"> 
      <Navbar/>
    </div>
    </>
  );
}

export default App;
