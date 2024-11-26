import React, { useContext, useRef, useState } from "react";
import "../../reponsive/Reponsive.css";
import "./Header.css";
import logoHeader from "../../assets/logo-2.avif";
import HeaderTwo from "./HeaderTwo";
import Show from "../showLogin/Show";
import { Link } from "react-router-dom";
import { State } from "../../state/ManagerState";
import ShowMenu from "../ShowMenuMobile/ShowMenu";
import ShowHearts from "../../Components/ShowListsHeart/ShowHearts";
function Header() {
  const { countHeart, countCart, showHeart, setShowHeart, checkLogin } =
    useContext(State);

  const handerShow = () => {
    setShowHeart(true);
  };
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
              <Link
                to={checkLogin ? "/Profile" : ""}
                className="message-header"
              >
                {checkLogin ? <i class="fa-solid fa-user"></i> : <Show />}
              </Link>

              <Link
                to={checkLogin ? "/ListsHeart" : "/HeartProducts"}
                className="message-header"
              >
                <i class="fa-solid fa-heart"></i>
                <p className="index-heart-header">{countHeart}</p>
              </Link>

              <Link className="message-header" to="/Cart">
                <i class="fa-solid fa-cart-shopping"></i>
                <p className="index-cart-header">{countCart}</p>
              </Link>
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link className="cart-mobile" to="/Cart">
              <i class="s fa-solid fa-cart-shopping"></i>
              <span className="count-cart-mobile">{countCart}</span>
            </Link>
            <Link className="cart-mobile" to="/ListsHeart">
              <i class="fa-solid fa-heart" onClick={handerShow}></i>
              <span className="count-heart-mobile">{countHeart}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
