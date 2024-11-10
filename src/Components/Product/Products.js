import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Products.css";
import { useFetchData } from "../../FetchApi/useFetchData ";

function Products() {
  const data = useFetchData();
  return (
    <Container className="container d-flex justify-content-center">
      <Row style={{ marginTop: 120 }}>
        {data.map((item, index) => (
          <Col xl={3} key={index} className="col">
            <Card style={{ width: "18rem" }} className="hover">
              <Card.Img variant="top" src={item.image} className="img" />
              <Card.Body>
                <Card.Title className="title">{item.title}</Card.Title>
                <Card.Text>lorem</Card.Text>
                <div>{item.price} USE</div>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
