import React, { useContext, useEffect, useState } from "react";
import "./CheckOut.css";
import "../../reponsive/Reponsive.css";
import { State } from "../../state/ManagerState";
import Footer from "../../Components/footer/Footer";
const CheckOut = () => {
  const { listCarts, infor } = useContext(State);
  const [backs, setBanks] = useState([]);
  const [methodpay, setMethodPay] = useState(false);
  const Total = (item) => {
    return item.coinItem.replace("vnd", "") * item.slItem + ".000vnd";
  };
  const TotalBill = () => {
    let sum = 0;
    listCarts.forEach((e) => {
      sum = sum + e.coinItem.replace("vnd", "") * e.slItem;
    });
    return sum;
  };
  useEffect(() => {
    fetch("https://api.vietqr.io/v2/banks")
      .then((data) => data.json())
      .then((data) => setBanks(data.data));
  }, []);
  return (
    <>
      <div className="container-checkout">
        <div className="wraper-checkout">
          <div className="payment-checkout">
            <h3>Kiểm tra thông tin</h3>
            <div className="infor-checkout">
              <label className="input-checkout">
                <span className="name-input-checkout">Họ và tên</span>
                <input className="sa" type="text" value={infor[0]} />
              </label>

              <label className="input-checkout">
                <span className="phone-input-checkout">Số điện thoại</span>
                <input className="sa" type="text" value={infor[7]} />
              </label>
              <label className="input-checkout">
                <span className="address-input-checkout">Địa chỉ</span>
                <input className="address" type="text" value={infor[4]} />
              </label>
            </div>
            <h3>Phương thức thanh toán</h3>
            <div className="methodpay-checkout">
              <div>
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  onClick={() => setMethodPay(false)}
                />
                <span>Thanh toán khi nhận hàng.</span>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment"
                  value="napas"
                  onClick={() => setMethodPay(true)}
                />
                <span>Thanh toán bằng thẻ nội địa Napas</span>
                {methodpay && (
                  <div className="bankss-checkout">
                    <p className="banks-checkout">
                      {backs.map((bank) => (
                        <div className="infor-bank">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={bank.short_name}
                            id={bank.short_name}
                          />
                          <label
                            htmlFor={bank.short_name}
                            className="label-bank"
                          >
                            <img
                              className="image-bank"
                              src={bank.logo}
                              alt={bank.short_name}
                            />
                            <p
                              className="namebank"
                              style={{ marginTop: "15px" }}
                            >
                              {bank.name}
                            </p>
                          </label>
                        </div>
                      ))}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <button className="btn-conform-buy">Xác nhận đặt hàng</button>
          </div>
          <div className="products-checkout">
            {listCarts.map((item) => (
              <div className="item-checkout">
                <img
                  className="image-product-checkout"
                  src={item.imageItem}
                  alt={item.nameItem}
                />
                <div>
                  <p className="name-checkout">{item.nameItem}</p>
                  <p className="coin-checkout">{item.coinItem}</p>
                </div>
                <p>{item.slItem}</p>
                <p className="total-checkout">{Total(item)}</p>
              </div>
            ))}
            <p className="footer-checkout">
              Tổng tiền hàng: <span>{TotalBill() + ".000vnd"}</span>
            </p>
            <p className="footer-checkout">
              Phí vận chuyển:{" "}
              <span>
                {TotalBill() >= 400 ? "Miễn phí vận chuyển" : "20.000vnd"}
                <i class="fa-solid fa-truck-fast"></i>
              </span>
            </p>
            <p className="footer-checkout">
              Tổng Hóa đơn:{" "}
              <span style={{ color: "#00A459", fontWeight: "500" }}>
                {TotalBill() >= 400 ? TotalBill() : TotalBill() + 20}.000vnd
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
