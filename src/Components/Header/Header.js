import React, { useContext } from "react";
import "./Header.css";
import logoHeader from "../../assets/logo-2.avif";
import HeaderTwo from "./HeaderTwo";
import Show from "../showLogin/Show";
import Left from "../../childComponents/left/Left";
import { Link } from "react-router-dom";
import { State } from "../../state/ManagerState";
function Header() {
  const { countHeart, setCountHeart, countCart } = useContext(State);
  return (
    <>
      <div className="container-header">
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
    </>
  );
}

export default Header;
