import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./pages/home/Home";
import Heart from "./Components/heart/Heart";
import Login from "./Components/login/Login";
import Oshi from "./pages/milkTea/Oshi";
import ManagerState from "./state/ManagerState";
import MilkTea from "./pages/milkTea/MilkTea";
import Fruit from "./pages/milkTea/Fruit";
import ShowHearts from "./Components/ShowListsHeart/ShowHearts";
import Cart from "./pages/listCart/Cart";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import ViewProduct from "./pages/view/ViewProduct";
import CheckOut from "./pages/checkouts/CheckOut";

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
            <Route path="/MilkTea" element={<MilkTea />} />
            <Route path="/Fruits" element={<Fruit />} />
            <Route path="/ListsHeart" element={<ShowHearts />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Profile/Edit-Profile" element={<EditProfile />} />
            <Route path="/View/:id" element={<ViewProduct />} />
            <Route path="/CheckOut" element={<CheckOut />} />
          </Routes>
        </div>
      </Router>
    </ManagerState>
  );
}

export default App;
