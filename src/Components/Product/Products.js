import React from "react";
import "./Products.css";
import "../../reponsive/Reponsive.css";
import { Link } from "react-router-dom";

const Products = () => {
  const product = [
    {
      clasN: "fruit",
      clasNimage: "fruitimg",
      url: "/Fruit",
      image:
        "https://png.pngtree.com/thumb_back/fw800/background/20240509/pngtree-fresh-fruit-3d-ai-background-image_15727754.jpg",
    },
    {
      clasN: "milktea",
      url: "/MilkFruit",
      clasNimage: "milkteaimg",
      image:
        "https://i.pinimg.com/736x/01/60/0e/01600e31ccea2ac6c2bb863de834cb52.jpg",
    },
    {
      clasN: "milkFruit",
      url: "/Oshi",
      clasNimage: "milkFruitimg",
      image:
        "https://www.arena-multimedia.vn/wp-content/uploads/2023/09/document61.png",
    },
    {
      clasN: "oshi",
      url: "/Milktea",
      clasNimage: "oshiimg",
      image:
        "https://i.pinimg.com/736x/d1/d8/56/d1d856edc5a51d4895e028cf63037408.jpg",
    },
  ];
  return (
    <div className="container-product">
      <h2>Đa dạng sản phẩm</h2>
      <div className="wraper-product">
        {product.map((item, index) => (
          <div key={index} className={item.clasN}>
            <Link to={item.url}>
              <img className={item.clasNimage} src={item.image} alt={index} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
