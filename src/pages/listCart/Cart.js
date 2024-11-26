import React, { useContext, useEffect, useState } from "react";
import { State } from "../../state/ManagerState";
import Footer from "../../Components/footer/Footer";
import "../../reponsive/Reponsive.css";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  const MAX_TOTAL = 400000;
  const { setCountCart, listCarts, setListsCarts } = useContext(State);
  const handerDelete = (itemCart) => {
    const filterListCarts = listCarts.filter(
      (item) => item.idItem !== itemCart.idItem
    );
    setListsCarts(filterListCarts);
    setCountCart((pre) => pre - itemCart.slItem);
  };

  const handerCountCart = (item, plus) => {
    const updatedListCarts = listCarts.map((cartItem) => {
      if (cartItem.idItem === item.idItem && plus) {
        setCountCart((pre) => pre + 1);
        return {
          ...cartItem,
          slItem: cartItem.slItem + 1,
        };
      } else {
        if (item.slItem > 1 && cartItem.idItem === item.idItem) {
          setCountCart((pre) => pre - 1);
          return {
            ...cartItem,
            slItem: cartItem.slItem - 1,
          };
        }
      }
      return cartItem;
    });
    setListsCarts(updatedListCarts);
  };
  const TotalCoin = (item) => {
    return item.slItem * item.coinItem.replace("vnd", "") + ".000vnd";
  };
  const TotalCoinALl = () => {
    let sum = 0;
    listCarts.forEach((item) => {
      sum = sum + item.coinItem.replace("vnd", "") * item.slItem;
    });
    return sum * 1000;
  };
  const getRangeValue = () => {
    const total = TotalCoinALl();
    return total >= MAX_TOTAL ? MAX_TOTAL : total;
  };
  return (
    <>
      <div className="container-heart">
        <table className="wraper-heart">
          <tr className="col-heart">
            <td>STT</td>
            <td></td>
            <td>Tên sản phẩm</td>
            <td>Giá sản phảm</td>
            <td>Số lượng</td>
            <td>Tổng</td>
            <td>Thao tác</td>
          </tr>
          {listCarts?.map((item, index) => (
            <tr key={index} className="row-heart">
              <td>{index + 1}</td>
              <td>
                <img src={item.imageItem} alt={index} />
              </td>
              <td className="namItem-cart">{item.nameItem}</td>
              <td className="coinItem-cart">{item.coinItem}</td>
              <td>
                <div className="custom-Cart">
                  <span onClick={() => handerCountCart(item)}>
                    <i class="fa-solid fa-minus"></i>
                  </span>
                  <p className="custom-SL-Cart">{item.slItem}</p>
                  <span onClick={() => handerCountCart(item, true)}>
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </div>
              </td>
              <td style={{ fontWeight: "500", width: "120px" }}>
                {TotalCoin(item)}
              </td>
              <td>
                <span
                  onClick={() => handerDelete(item)}
                  style={{ marginLeft: "25px" }}
                >
                  <i class="fa-solid fa-trash"></i>
                </span>{" "}
              </td>
            </tr>
          ))}
        </table>
      </div>
      {listCarts?.length === 0 && (
        <div className="zero-cart">
          Bạn vẫn chưa thêm sản phẩm nào vào giỏ hàng.
          <Link to={"/"}>Xem sản phẩm</Link>
        </div>
      )}
      <div>
        <div className="main-total-cart">
          <h3>
            Tổng hóa đơn hiện tại:
            <span className="total-cart">{TotalCoinALl()}</span>
          </h3>
          <div>
            <input
              type="range"
              className="freeShip-cart"
              max={MAX_TOTAL}
              value={getRangeValue()}
              readOnly
            />
            <p>
              {getRangeValue() >= 400000
                ? "Chúc mừng bạn đã nhận ưu đãi miễn phí vẫn chuyển"
                : `Bạn cần ${
                    400000 - getRangeValue()
                  } để được miễn phí vận chuyển `}
              <span>
                <i class="fa-solid fa-truck-fast"></i>
              </span>
            </p>
          </div>
          <button class="glow-on-hover" type="button">
            Đi đến thanh toán
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
