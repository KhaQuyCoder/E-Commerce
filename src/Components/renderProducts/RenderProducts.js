import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useFetchData } from "../../FetchApi/useFetchData ";
import "./RenderProducts.css";
import { useContext, useEffect, useRef, useState } from "react";
import { State } from "../../state/ManagerState";
import Loading from "../../Components/loading/Loading";
import Footer from "../../Components/footer/Footer";
const RenderProducts = ({ url, check }) => {
  const dataOshi = useFetchData(url);
  const { countHeart, setCountHeart, countCart, setCountCart } =
    useContext(State);
  const [loading, setLoading] = useState(Array(dataOshi.length).fill(false));
  const [heartedStatus, setHeartedStatus] = useState(
    Array(dataOshi.length).fill(false)
  );
  const [load, setLoad] = useState(true);

  const displaySuccess = useRef();

  const handleClickHeart = (index) => {
    const newHeartedStatus = [...heartedStatus];
    newHeartedStatus[index] = !newHeartedStatus[index];
    setHeartedStatus(newHeartedStatus);

    if (newHeartedStatus[index]) {
      setCountHeart(countHeart + 1);
    } else {
      setCountHeart(countHeart - 1);
    }
  };

  const handerClickCart = (index) => {
    const newLoading = [...loading];
    newLoading[index] = true;
    setLoading(newLoading);

    const setTimeLoading = setTimeout(() => {
      const updateLoading = [...loading];
      updateLoading[index] = false;
      setLoading(updateLoading);
      setCountCart(countCart + 1);
    }, 2000);

    return () => clearTimeout(setTimeLoading);
  };

  useEffect(() => {
    const setLoadingComponent = setTimeout(() => {
      setLoad(false);
    }, 1500);

    return () => clearTimeout(setLoadingComponent);
  }, []);
  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div className="conainer-product">
          <div className="wraper-products">
            {(check ? dataOshi.record : dataOshi).map((item, index) => (
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
                  <Card.Title className="heart-product">
                    <i
                      className={`fa-solid fa-heart ${
                        heartedStatus[index] ? "theme-heart" : ""
                      }`}
                      onClick={() => handleClickHeart(index)}
                    ></i>
                  </Card.Title>
                  <Card.Title className="name-product">{item.name}</Card.Title>
                  <Card.Text className="weidth-product">
                    {item.weight}
                  </Card.Text>
                  <Card.Text className="des-product">
                    {item.description}
                  </Card.Text>
                  <Card.Text className="coin-product">{item.coin}</Card.Text>
                  <Card.Text className="star-product">
                    {Array.from({ length: item.start }).map((_, i) => (
                      <span key={i}>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    ))}
                  </Card.Text>
                  <Button className="buy-btn-product">Mua ngay</Button>
                  <Button
                    className="cart-btn-product"
                    onClick={() => handerClickCart(index)}
                  >
                    {loading[index] ? (
                      <i className="fa-solid fa-spinner"></i>
                    ) : (
                      <i className="fa-solid fa-cart-shopping"></i>
                    )}
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      )}
      {load ? "" : <Footer />}
    </>
  );
};

export default RenderProducts;
