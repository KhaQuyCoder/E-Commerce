import React from "react";
import { Link } from "react-router-dom";

const Heart = () => {
  return (
    <div
      style={{
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>
        Đăng nhập
        <Link to="/Login" style={{ textDecoration: "none" }}>
          {" "}
          tại đây{" "}
        </Link>
        để xem những sản phẩm yêu thích.
      </p>
    </div>
  );
};

export default Heart;
