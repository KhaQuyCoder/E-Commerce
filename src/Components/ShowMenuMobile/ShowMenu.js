import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./ShowMenu.css";
import { Link } from "react-router-dom";
function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseMobile = () => {
    setShow(false);
  };
  const optionMobile = [
    { name: "Trang chủ", url: "/", classN: "home" },
    { name: "Bộ sưu tập", url: "/Collections", classN: "collections" },
    {
      name: "Sản phẩm",
      classN: "products",
      option: [
        {
          name: "Oshi Food",
          url: "/Oshi",
        },
        {
          name: "Hoa quả các loại",
          url: "/Fruits",
        },
        {
          name: "Trà sữa",
          url: "/MilkTea",
        },
        {
          name: "Trà trái cây",
          url: "/TeaFruis",
        },
      ],
    },
    { name: "Trang khác", url: "/OtherPages", classN: "OtherPages" },
    { name: "BLOG", url: "/Blog", classN: "Blog" },
  ];
  return (
    <>
      <p className="btn-showMeunu" onClick={handleShow}>
        <i class="fa-solid fa-bars"></i>
      </p>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src="https://nov-petalia.myshopify.com/cdn/shop/files/logo_190x.png?v=1700036607"
              alt="logo"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <ul className="option-showMenu">
          {optionMobile.map((item, index) => (
            <Link
              key={index}
              // to={item.url}
              className={item.classN}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {item.name}
                <span>
                  <i
                    class="fa-solid fa-chevron-down"
                    style={{ marginRight: "15px" }}
                  ></i>
                </span>
              </div>

              <div className="wraper-option-showMenu">
                {item.option?.map((itemOption, j) => (
                  <Link
                    className="item-option-showMenu"
                    to={itemOption.url}
                    onClick={handleCloseMobile}
                  >
                    {itemOption.name}
                  </Link>
                ))}
              </div>
            </Link>
          ))}
        </ul>
      </Offcanvas>
    </>
  );
}

export default Example;
