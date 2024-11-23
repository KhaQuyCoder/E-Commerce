import React, { useEffect, useState } from "react";
import oshi from "../../assets/oshi.jpg";
import milkTea from "../../assets/milkTea.jpg";
import milkfruit from "../../assets/2.jpg";
import fruit from "../../assets/fruit.jpg";

import "./Right.css";

const Right = () => {
  const imageUrl = [milkTea, milkfruit, fruit, oshi];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const sliders = setInterval(() => {
      setFade(true); // Trigger fade effect
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % imageUrl.length);
        setFade(false); // Remove fade effect after the transition
      }, 500); // Match the duration of the fade animation
    }, 3000);

    return () => {
      clearInterval(sliders);
    };
  }, []);

  return (
    <div className="container-right">
      <div className="wraper-right">
        <img
          className={`image-right ${fade ? "fade" : ""}`}
          src={imageUrl[index]}
          alt="slider"
        />
      </div>
    </div>
  );
};

export default Right;
