import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useFetchData } from "../../../FetchApi/useFetchData ";
import "./Oshi.css";
import { State } from "../../../state/ManagerState";
import { useContext, useState } from "react";

function BasicExample() {
  const dataOshi = useFetchData("http://localhost:5280/oshi");
  const { countHeart, setCountHeart, countCart, setCountCart } =
    useContext(State);
  const [loading, setLoading] = useState(Array(dataOshi.length).fill(false));

  const [heartedStatus, setHeartedStatus] = useState(
    Array(dataOshi.length).fill(false)
  );

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
    setCountCart(countCart + 1);
    const newLoading = [...loading];
    newLoading[index] = true;
    setLoading(newLoading);
    const setTimeLoading = setTimeout(() => {
      const updateLoading = [...loading];
      updateLoading[index] = false;
      setLoading(updateLoading);
    }, 2000);

    return () => clearTimeout(setTimeLoading);
  };
  return (
    <div className="conainer-oshi">
      <h3>Oshi</h3>
      <div className="wraper-oshi">
        {dataOshi.map((item, index) => (
          <Card style={{ width: "18rem" }} key={index} className="item-oshi">
            <Card.Img className="image-oshi" src={item.image} />
            <Card.Body>
              {item.sale !== "false" && (
                <Card.Title className="sale-oshi">{item.sale}</Card.Title>
              )}
              <Card.Title className="heart-oshi">
                <i
                  className={`fa-solid fa-heart ${
                    heartedStatus[index] ? "theme-heart" : ""
                  }`}
                  onClick={() => handleClickHeart(index)}
                ></i>
              </Card.Title>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text className="weidth-oshi">{item.weight}</Card.Text>
              <Card.Text className="des-oshi">{item.description}</Card.Text>
              <Card.Text className="coin-oshi">{item.coin}</Card.Text>
              <Card.Text className="star-oshi">
                {Array.from({ length: item.start }).map((_, i) => (
                  <span key={i}>
                    <i className="fa-solid fa-star"></i>
                  </span>
                ))}
              </Card.Text>
              <Button className="buy-btn-oshi">Mua ngay</Button>
              <Button
                className="cart-btn-oshi"
                onClick={() => handerClickCart(index)}
              >
                {loading[index] ? (
                  <i class="fa-solid fa-spinner"></i>
                ) : (
                  <i class="fa-solid fa-cart-shopping"></i>
                )}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default BasicExample;
