import React from "react";
import RenderProducts from "../../Components/renderProducts/RenderProducts";
const MilkTea = () => {
  const APIMilktea = "https://674165bde4647499008d9332.mockapi.io/oshi/milkTea";
  return (
    <div>
      <RenderProducts url={APIMilktea} />
    </div>
  );
};

export default MilkTea;
