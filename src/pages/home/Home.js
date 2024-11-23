import React from "react";
import Slider from "../../Components/Slider/Slider";
import "./Home.css";
import Products from "../../Components/Product/Products";
const Home = () => {
  return (
    <div className="container-home">
      <Slider />
      <Products />
    </div>
  );
};

export default Home;
