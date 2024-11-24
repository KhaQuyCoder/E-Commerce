import RenderProducts from "../../Components/renderProducts/RenderProducts";

function BasicExample() {
  const APIOhsi = "https://674165bde4647499008d9332.mockapi.io/oshi/oshi";
  return <RenderProducts url={APIOhsi} />;
}

export default BasicExample;
