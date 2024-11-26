import React, { useRef, useContext } from "react";
import "./ShowHearts.css";
import "../../reponsive/Reponsive.css";
import { State } from "../../state/ManagerState";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
const ShowHearts = () => {
  const {
    listHearts,
    setListsHeart,
    setCountHeart,
    setCountCart,
    listCarts,
    setListsCarts,
  } = useContext(State);

  const handerDelete = (id) => {
    const filterListHearts = listHearts.filter((item) => item.idItem !== id);
    setListsHeart(filterListHearts);
    setCountHeart((pre) => pre - 1);
  };

  const handerAddcart = (itemCart) => {
    const productExists = listCarts.find(
      (item) => item.idItem === itemCart.idItem
    );

    if (productExists) {
      const updatedListCarts = listCarts.map((item) => {
        if (item.idItem === itemCart.idItem) {
          return {
            ...item,
            slItem: item.slItem + 1,
          };
        }
        return item;
      });
      setListsCarts(updatedListCarts);
    } else {
      setListsCarts([
        ...listCarts,
        {
          idItem: itemCart.idItem,
          nameItem: itemCart.nameItem,
          imageItem: itemCart.imageItem,
          coinItem: itemCart.coinItem,
          slItem: 1,
        },
      ]);
    }
    setCountCart((pre) => pre + 1);
  };

  const handerViewProduct = () => {};
  return (
    <>
      <div className="container-heart">
        <table className="wraper-heart">
          <tr className="col-heart">
            <td>STT</td>
            <td></td>
            <td>Tên sản phẩm</td>
            <td>Giá sản phảm</td>
            <td>Thao tác</td>
          </tr>
          {listHearts?.map((item, index) => (
            <tr key={index} className="row-heart">
              <td>{index + 1}</td>
              <td>
                <img src={item.imageItem} alt={index} />
              </td>
              <td className="namItem-heart">{item.nameItem}</td>
              <td className="coinItem-heart">{item.coinItem}</td>
              <td>
                <span onClick={() => handerDelete(item.idItem)}>
                  <i class="trash fa-solid fa-trash"></i>
                </span>{" "}
                <span onClick={() => handerAddcart(item)}>
                  <i class="cart fa-solid fa-cart-shopping"></i>
                </span>{" "}
                <span onClick={handerViewProduct}>
                  <i class="fa-solid fa-eye"></i>
                </span>{" "}
              </td>
            </tr>
          ))}
        </table>
      </div>
      {listHearts?.length === 0 && (
        <div className="zero-cart">
          Bạn vẫn chưa yêu thích sản phẩm nào.
          <Link to={"/"}>Xem sản phẩm</Link>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ShowHearts;
