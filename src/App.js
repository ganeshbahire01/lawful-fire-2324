import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoute from "./Routes/Allroutes";
import Footer from "./Routes/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <AllRoute />
      <Footer/>
    </div>
  );
}

export default App;
