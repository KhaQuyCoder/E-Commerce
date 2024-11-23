import React from "react";
import "./Header.css";
import { Tooltip } from "react-tippy";
import { Link } from "react-router-dom";
import Left from "../../childComponents/left/Left";
const HeaderTwo = () => {
  return (
    <div className="header-option">
      <ul className="wraper-option-header">
        <li className="collection-header">
          <span>
            <i
              class="fa-solid fa-bars"
              style={{
                marginRight: "10px",
                fontSize: "16px",
              }}
            ></i>
          </span>
          Mua sắm theo bộ sưu tập
        </li>
        <Link
          to="/"
          style={{ margin: " 0 10px", textDecoration: "none", color: "black" }}
        >
          Trang chủ
        </Link>
        <li style={{ margin: " 0 10px" }}>Bộ sưu tập</li>
        <li style={{ margin: " 0 10px" }}>Sản phẩm</li>
        <li style={{ margin: " 0 10px" }}>Trang khác</li>
        <li style={{ margin: " 0 10px" }}>BLOG</li>
      </ul>
    </div>
  );
};

export default HeaderTwo;
