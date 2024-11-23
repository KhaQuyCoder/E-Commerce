import React from "react";
import "./Left.css";
import { Link } from "react-router-dom";
const Left = () => {
  const option = [
    {
      name: "Oshi Food",
      url: "/Oshi",
    },
    {
      name: "Thức uống từ trái cây",
      url: "/Oshi",
    },
    {
      name: "Hoa quả các loại",
      url: "/Oshi",
    },
    {
      name: "Trà trái cây",
      url: "/Oshi",
    },
    {
      name: "Trà sữa",
      url: "/Oshi",
    },
  ];
  return (
    <div>
      <ul className="wraper-left">
        {option.map((item, index) => (
          <Link to={item.url} key={index} className="item-left">
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Left;
