import React from "react";
import "./AddCartSeccess.css";
const AddCartSeccess = () => {
  return (
    <div className="container-success">
      <div className="item-success">
        <div className="message-seccess">
          <i class="fa-solid fa-bell"></i>
          <span style={{ marginRight: "30px" }}>
            Thêm sản phẩm vào giỏ hàng thành công
          </span>
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
  );
};

export default AddCartSeccess;
