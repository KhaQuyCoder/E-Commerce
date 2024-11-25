import { useRef, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./ShowMenu.css";
import { Link } from "react-router-dom";
function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const blog = useRef();
  const other = useRef();
  const pro = useRef();
  const col = useRef();
  const handleCloseMobile = () => {
    setShow(false);
  };
  const optionMobile = [
    { name: "Trang chủ", url: "/", classN: "home" },
    {
      name: "Bộ sưu tập",
      url: "/Collections",
      classN: "collections",
      ref: col,
    },
    {
      name: "Sản phẩm",
      classN: "products",
      ref: pro,
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
    {
      name: "Trang khác",
      url: "/OtherPages",
      classN: "OtherPages",
      ref: other,
    },
    { name: "BLOG", url: "/Blog", classN: "Blog", ref: blog },
    { name: "Hồ sơ", url: "/Profile", classN: "profile" },
    { name: "Login", url: "/Login", classN: "login" },
  ];
  const handerShowMenuChild = (ref, name) => {
    if (ref === pro) {
      ref.current.style.height = "240px";
      col.current.style.height = "50px";
      other.current.style.height = "50px";
      blog.current.style.height = "50px";
    } else if (ref === col) {
      ref.current.style.height = "240px";
      pro.current.style.height = "50px";
      other.current.style.height = "50px";
      blog.current.style.height = "50px";
    } else if (ref === other) {
      ref.current.style.height = "240px";
      col.current.style.height = "50px";
      pro.current.style.height = "50px";
      blog.current.style.height = "50px";
    } else if (ref === blog) {
      ref.current.style.height = "240px";
      col.current.style.height = "50px";
      other.current.style.height = "50px";
      pro.current.style.height = "50px";
    } else if (name === "Trang chủ" || name === "Hồ sơ" || name === "Login") {
      setShow(false);
    }
  };
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
              to={
                item.name === "Trang chủ"
                  ? item.url
                  : "" || item.name === "Hồ sơ"
                  ? item.url
                  : "/Profile" || item.name === "Login"
                  ? item.url
                  : "/Login"
              }
              className={item.classN}
              onClick={() => handerShowMenuChild(item.ref, item.name)}
              ref={item.ref}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {item.name}
                <span>
                  {item.name !== "Trang chủ" &&
                  item.name !== "Login" &&
                  item.name !== "Hồ sơ" ? (
                    <i
                      class="fa-solid fa-chevron-down"
                      style={{ marginRight: "15px" }}
                    ></i>
                  ) : (
                    ""
                  )}
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
