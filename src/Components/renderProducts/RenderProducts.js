import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useFetchData } from "../../FetchApi/useFetchData ";
import "./RenderProducts.css";
import { useContext, useEffect, useRef, useState } from "react";
import { State } from "../../state/ManagerState";
import Loading from "../../Components/loading/Loading";
import Footer from "../../Components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
const RenderProducts = ({ url, check }) => {
  const showMessage = useRef();
  const navigator = useNavigate();
  let setTimeShowMessage;
  const dataOshi = useFetchData(url);
  const {
    countHeart,
    setCountHeart,
    countCart,
    setCountCart,
    listHearts,
    setListsHeart,
    listCarts,
    setListsCarts,
    setViewProduct,
    showMessageItem,
    setShowMessageItem,
  } = useContext(State);
  const [loading, setLoading] = useState(Array(dataOshi.length).fill(false));
  const [heartedStatus, setHeartedStatus] = useState(
    Array(dataOshi.length).fill(false)
  );
  const [load, setLoad] = useState(true);

  const handleClickHeart = (index, image, name, description, coin, id) => {
    const newHeartedStatus = [...heartedStatus];
    newHeartedStatus[index] = !newHeartedStatus[index];
    setHeartedStatus(newHeartedStatus);

    let checkProductInList = listHearts?.every((item) => item.idItem !== id);
    if (newHeartedStatus[index]) {
      if (checkProductInList) {
        setCountHeart(countHeart + 1);
        setListsHeart((pre) => [
          ...pre,
          {
            idItem: id,
            nameItem: name,
            imageItem: image,
            coinItem: coin,
            desItem: description,
          },
        ]);
      }
    } else {
      let listHeartsRemove = listHearts.filter((item) => item.idItem !== id);
      setListsHeart(listHeartsRemove);
      setCountHeart(countHeart - 1);
    }
  };

  const handerClickCart = (index, image, name, coin, id) => {
    const newLoading = [...loading];
    newLoading[index] = true;
    setLoading(newLoading);
    const checkItemInCart = listCarts.every((item) => item.idItem !== id);
    const findProductInListCart = listCarts.find((item) => item.idItem === id);
    const setTimeLoading = setTimeout(() => {
      const updateLoading = [...loading];
      updateLoading[index] = false;
      setLoading(updateLoading);
      setCountCart(countCart + 1);
      if (checkItemInCart) {
        setListsCarts([
          ...listCarts,
          {
            idItem: id,
            imageItem: image,
            nameItem: name,
            coinItem: coin,
            slItem: 1,
          },
        ]);
        setShowMessageItem([
          {
            idItem: id,
            imageItem: image,
            nameItem: name,
            coinItem: coin,
            slItem: 1,
          },
        ]);
      }
      if (findProductInListCart) {
        const updatedListCarts = listCarts.map((item) => {
          if (item.idItem === id) {
            return {
              ...item,
              slItem: item.slItem + 1,
            };
          }
          return item;
        });
        setListsCarts(updatedListCarts);
      }
      setTimeShowMessage = setTimeout(() => {
        if (showMessage.current) {
          showMessage.current.style.transform = "translateX(105%)";
        }
      }, 3000);
      if (showMessage.current) {
        showMessage.current.style.transform = "translateX(0)";
      }
    }, 700);

    return () => clearTimeout(setTimeLoading);
  };

  useEffect(() => {
    const setLoadingComponent = setTimeout(() => {
      setLoad(false);
    }, 1500);

    return () => clearTimeout(setLoadingComponent);
  }, []);
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
  const handerClick = () => {
    clearTimeout(setTimeShowMessage);
    navigator("/Cart");
  };
  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div className="conainer-product">
          <div className="wraper-products">
            {(check ? dataOshi.record : dataOshi).map((item, index) => (
              <Link
                className="Link"
                to={`/View/${item.id}`}
                onClick={() => handerGetIemToView(item)}
              >
                <Card
                  style={{ width: "18rem" }}
                  key={index}
                  className="item-product"
                >
                  <Card.Img className="image-product" src={item.image} />
                  <Card.Body>
                    {item.sale !== "false" && (
                      <Card.Title className="sale-product">
                        {item.sale}
                      </Card.Title>
                    )}
                    <Card.Title
                      className="heart-product"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClickHeart(
                          index,
                          item.image,
                          item.name,
                          item.description,
                          item.coin,
                          item.id
                        );
                      }}
                    >
                      <i
                        className={`fa-solid fa-heart ${
                          heartedStatus[index] ? "theme-heart" : ""
                        }`}
                      ></i>
                    </Card.Title>
                    <Card.Title className="name-product">
                      {item.name}
                    </Card.Title>
                    <Card.Text className="weidth-product">
                      {item.weight}
                    </Card.Text>
                    <Card.Text className="des-product">
                      {item.description}
                    </Card.Text>
                    <Card.Text className="coin-product">{item.coin}</Card.Text>
                    <Card.Text className="star-product">
                      {Array.from({ length: item.star }).map((_, i) => (
                        <span key={i}>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      ))}
                    </Card.Text>
                    <Button className="buy-btn-product">Mua ngay</Button>
                    <Button
                      className="cart-btn-product"
                      onClick={(e) => {
                        e.preventDefault();
                        handerClickCart(
                          index,
                          item.image,
                          item.name,
                          item.coin,
                          item.id
                        );
                      }}
                    >
                      {loading[index] ? (
                        <i className="fa-solid fa-spinner"></i>
                      ) : (
                        <i className="fa-solid fa-cart-shopping"></i>
                      )}
                    </Button>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="show-message" ref={showMessage}>
        <div className="message-seccess">
          <i class="fa-solid fa-bell"></i>
          <span style={{ marginRight: "30px" }}>
            Thêm sản phẩm vào giỏ hàng thành công
          </span>
          <i
            class="fa-solid fa-xmark"
            onClick={() =>
              (showMessage.current.style.transform = "translateX(105%)")
            }
          ></i>
        </div>
        <div>
          {showMessageItem?.map((item) => (
            <div className="wraper-showmeesage-product" key={item.idItem}>
              <img
                className="imgae-showmeesage-product"
                src={item.imageItem}
                alt={item.nameItem}
              />
              <div>
                <p className="nameShow-product">{item.nameItem}</p>
                <p
                  style={{ transform: "translateY(-10px)" }}
                  className="coinshow-product"
                >
                  {item.coinItem}
                </p>
              </div>
              <p className="btn-showmeseage-product" onClick={handerClick}>
                Xem
              </p>
            </div>
          ))}
        </div>
      </div>
      {load ? "" : <Footer />}
    </>
  );
};

export default RenderProducts;
