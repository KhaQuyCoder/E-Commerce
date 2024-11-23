import React from "react";
import "./Slider.css";
import Left from "../../childComponents/left/Left";
import Right from "../../childComponents/right/Right";
const SliderComponent = () => {
  return (
    <div className="container-slider">
      <div className="wraper-slider">
        <div>
          <Left />
        </div>
        <div>
          <Right />
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
