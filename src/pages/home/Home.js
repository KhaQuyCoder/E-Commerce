import React from "react";
import Slider from "../../Components/Slider/Slider";
import "./Home.css";
import Products from "../../Components/Product/Products";
import Loading from "../../Components/loading/Loading";
import Footer from "../../Components/footer/Footer";
const Home = () => {
  return (
    <div className="container-home">
      <Slider />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
