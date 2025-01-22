import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./SaleToday.css";
import { State } from "../../state/ManagerState";
import { dataSale } from "../../data/Sale";
const SaleToday = () => {
  const slider = useRef();
  const [index, setIndex] = useState(1);
  const [hours, setHours] = useState(8);
  const [mins, setMins] = useState(34);
  const [seconds, setSeconds] = useState(10);
  const { setViewProduct, viewProduct } = useContext(State);
  useEffect(() => {
    const time = setInterval(() => {
      if (seconds === 0) {
        setSeconds(60);
        setMins(mins - 1);
      } else if (mins === 0) {
        setMins(60);
        setSeconds(60);
        setHours(hours - 1);
      } else {
        setSeconds((pre) => {
          if (pre === 0) {
            if (mins > 0) {
              setMins((preMin) => preMin - 1);
              return 59;
            } else if (hours > 0) {
              setHours((preHours) => preHours - 1);
              setMins(59);
              return 59;
            } else {
              clearInterval(time);
              return;
            }
          }
          return pre - 1;
        });
      }
    }, 1000);

    return () => clearInterval(time);
  }, []);
  const handerNext = () => {
    let sliderElement = slider.current;
    const width = sliderElement.offsetWidth;

    if (index === 4) {
      setIndex(1);
      sliderElement.style.transform = `translateX(${0}px)`;
    } else {
      sliderElement.style.transform = `translateX(${-width * index}px)`;
      setIndex((pre) => pre + 1);
    }
  };
  const handerBack = () => {
    const sliderElement = slider.current;
    const width = sliderElement.offsetWidth;
    if (index === 0) {
      sliderElement.style.transform = `translateX(${-width * 3}px)`;
      setIndex((pre) => (pre = 4));
    } else {
      sliderElement.style.transform = `translateX(${-width * (index - 1)}px)`;
      setIndex((pre) => pre - 1);
    }
  };

  const handerBackClickProduct = (item) => {
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
    console.log(viewProduct);
  };

  return (
    <>
      <div className="container-saletoday">
        <h2>Giảm giá hôm nay</h2>
        <div className="wraper-saletoday" ref={slider}>
          {dataSale?.map((item) => (
            <div className="center-box-saltetoday">
              <Link
                className="main-saletoday"
                key={item.id}
                to={`/View/${item.id}`}
                onClick={() => handerBackClickProduct(item)}
              >
                <div className="block-image-saletoday">
                  <img
                    className="image-saletoday"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="item-saletoday">
                  <p>
                    {Array.from({ length: item.star }).map((_, i) => (
                      <span key={i}>
                        <i className="fa-solid fa-star fa-star-saletoday"></i>
                      </span>
                    ))}
                  </p>
                  <p className="name-saletoday">{item.name}</p>
                  <p className="coin-saletoday">
                    <span className="befor-coin">{item.coinAfter}</span>
                    <del className="after-coin">{item.coin}</del>
                  </p>
                  <div className="hoursSale-saletoday">
                    <p className="hours-saletoday">
                      <span className="time-saletoday">0{0}</span> ngày
                    </p>
                    <p className="hours-saletoday">
                      <span className="time-saletoday">{hours}</span> giờ
                    </p>
                    <p className="hours-saletoday">
                      <span className="time-saletoday">{mins}</span> phút
                    </p>
                    <p className="hours-saletoday">
                      <span className="time-saletoday">{seconds}</span> giây
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="next-salertoday" onClick={handerBack}>
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div className="back-salertoday" onClick={handerNext}>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </>
  );
};

export default SaleToday;
