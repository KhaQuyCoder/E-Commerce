import Carousel from "react-bootstrap/Carousel";
import { useFetchData } from "../../FetchApi/useFetchData ";
import "./SliderComponent.css";
function SliderComponent() {
  const data = useFetchData();
  return (
    <Carousel className="slider">
      {data.map((item, index) => (
        <Carousel.Item className="slider">
          <img className="image" src={item.image} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default SliderComponent;
