import React from "react";
import Slider from "../../Components/Slider/Slider";
import "./Home.css";
import Products from "../../Components/Product/Products";
import Footer from "../../Components/footer/Footer";
import SaleToday from "../../Components/sale/SaleToday";
import BestSellingProducts from "../../Components/Selling/BestSellingProducts";
const Home = () => {
  return (
    <div className="container-home">
      <Slider />
      <Products />
      <SaleToday />
      <BestSellingProducts />
      <Footer />
    </div>
  );
};

export default Home;
