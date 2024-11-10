import "./App.css";
import Products from "./Components/Product/Products";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/SliderComponent";
function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Products />
    </div>
  );
}

export default App;
