import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Components/Product/Products";
import Header from "./Components/Header/Header";
import Home from "./pages/home/Home";
import Heart from "./Components/heart/Heart";
import Login from "./Components/login/Login";
import Footer from "./Components/footer/Footer";
import Oshi from "./pages/home/Oshis/Oshi";
import Left from "./childComponents/left/Left";
import ManagerState from "./state/ManagerState";

function App() {
  return (
    <ManagerState>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/HeartProducts" element={<Heart />} />
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Oshi" element={<Oshi />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ManagerState>
  );
}

export default App;
