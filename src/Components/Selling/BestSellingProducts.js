import React, { useCallback, useContext } from "react";
import { Selling } from "../../data/Selling";
import "./BestSellingProducts.css";
import { Link } from "react-router-dom";
import { State } from "../../state/ManagerState";
const BestSellingProducts = () => {
  const { setViewProduct } = useContext(State);
  const handerGetIemToView = (item) => {
    setViewProduct([
      {
        idItem: item.id,
        nameItem: item.name,
        desItem: item.description,
        imageItem: item.image,
        coinItem: item.coin,
        saleItem: item.sale,
        starItem: item.star,
        weigthItem: item.weight,
      },
    ]);
  };
  return (
    <div className="container-bestSelling">
      <h2 className="title-bestSelling">Mặt hàng bán chạy</h2>
      <div className="wrapper-bestSelling">
        {Selling?.map((item) => (
          <Link
            className="item-selling"
            to={`/View/${item.id}`}
            key={item.id}
            onClick={() => handerGetIemToView(item)}
          >
            <div>
              <img src={item.image} alt={item.name} />
            </div>
            <div className="content-selling-pr">
              <p className="name-selling-pr">{item.name}</p>
              <p className="star-selling-pr">
                {Array.from({ length: item.star }).map((_, i) => (
                  <span key={i}>
                    <i className="fa-solid fa-star"></i>
                  </span>
                ))}
              </p>
              <p className="coin-selling-pr">{item.coin}</p>
              <p>
                Giảm ngay: <span className="sale-selling-pr">{item.sale}</span>{" "}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
