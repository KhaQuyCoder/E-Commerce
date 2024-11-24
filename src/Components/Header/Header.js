import React, { useContext } from "react";
import "./Header.css";
import "../../reponsive/Reponsive.css";
import logoHeader from "../../assets/logo-2.avif";
import logoMobile from "../../assets/logofooter.avif";
import HeaderTwo from "./HeaderTwo";
import Show from "../showLogin/Show";
import { Link } from "react-router-dom";
import { State } from "../../state/ManagerState";
import ShowMenu from "../ShowMenuMobile/ShowMenu";
function Header() {
  const { countHeart, countCart } = useContext(State);
  return (
    <>
      <div className="container-header-destop">
        <div className="wraper-container">
          <div className="header-search">
            <div>
              <img src={logoHeader} alt="logo" />{" "}
            </div>
            <div className="main-search-header">
              <input
                className="input-header"
                type="text"
                placeholder="Nhập sản phẩm muốn tìm..."
              />
              <span className="search-icon-header">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
            <div className="icon-header">
              <div className="message-header">
                <Show />
              </div>

              <Link to="/HeartProducts" className="message-header">
                <i class="fa-solid fa-heart"></i>
                <p className="index-heart-header">{countHeart}</p>
              </Link>

              <div className="message-header">
                <i class="fa-solid fa-cart-shopping"></i>
                <p className="index-cart-header">{countCart}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeaderTwo />
      <div className="container-header-mobile">
        <div className="wrpaer-header-mobile">
          <div style={{ display: "flex", alignItems: "center" }}>
            <ShowMenu />
            <i
              class="fa-solid fa-magnifying-glass"
              style={{ margin: "0 30px" }}
            ></i>
          </div>

          <img
            className="logo-mobile"
            src="https://nov-petalia.myshopify.com/cdn/shop/files/logo_190x.png?v=1700036607"
            alt="logo"
          />

          <div>
            <i
              class="fa-solid fa-cart-shopping"
              style={{ margin: "0 30px" }}
            ></i>
            <i class="fa-solid fa-bars-staggered"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
