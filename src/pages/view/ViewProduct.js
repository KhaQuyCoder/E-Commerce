import React, { useContext, useEffect, useState } from "react";
import "./ViewProduct.css";
import { State } from "../../state/ManagerState";
import Footer from "../../Components/footer/Footer";
const ViewProduct = () => {
  const { viewProduct } = useContext(State);
  const [dataPost, setDataPost] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
      .then((data) => data.json())
      .then((data) => setDataPost(data));
    fetch("https://jsonplaceholder.typicode.com/users?_limit=20")
      .then((data) => data.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <>
      <div>
        {viewProduct?.map((item, index) => (
          <div key={index} className="wraper-view">
            <img className="image-view" src={item.imageItem} alt={index} />
            <div>
              <p className="name-view">
                {item.nameItem} {item.weigthItem}
              </p>
              <p className="des-view">{item.desItem}</p>
              <p className="buy-view">
                Đã bán: <u>1243</u>
              </p>
              <p className="post-view">
                Đánh giá: <u>213</u>
              </p>

              <p className="coin-view">
                Giá sản phẩm: <span>{item.coinItem}</span>
              </p>
              <p className="sale-view">
                <span>
                  {item.saleItem === "false"
                    ? ""
                    : "Giảm giá khủng:" + item.saleItem}
                </span>{" "}
              </p>
              <p className="star-view">
                {Array.from({ length: item.starItem }).map((_, i) => (
                  <span key={i}>
                    <i className="fa-solid fa-star"></i>
                  </span>
                ))}
              </p>
              <p className="ship-view">Chi phí vận chuyển: 10.000vnd</p>
              <p className="ship-view">
                <i class="fa-solid fa-truck-fast"></i>
                {"  "}
                Hãy tạo đơn hàng 400.000vnd để được nhận ưu đãi miễn phí vận
                chuyển nhé!
              </p>

              <button className="btn-view">Mua ngay</button>
            </div>
          </div>
        ))}
        <div className="wraper-feedback-view">
          <h3>Khách hàng nói gì về sản phẩm này</h3>
          <div>
            {dataPost?.map((post, index) => (
              <div className="main-post-view" key={post.id}>
                <div className="user-view">
                  <img
                    className="image-user-view"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    alt="user"
                  />
                  <div className="infor-user_view">
                    <p
                      style={{ transform: "translateY(5px)", color: "#00A459" }}
                    >
                      {user[Math.floor(index / 2)]?.name}
                    </p>
                    <p>{user[Math.floor(index / 2)]?.username}</p>
                  </div>
                </div>
                <p className="content-view">{post.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewProduct;