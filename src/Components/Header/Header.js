import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <img
          className="logo"
          src="https://img.freepik.com/premium-photo/bag-with-star-it-that-says-shopping_1126821-20090.jpg?w=740"
        />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Trang chủ</Nav.Link>
            <Nav.Link href="#action2">Sản phẩm</Nav.Link>
            <Nav.Link href="#action2">Chính sách hỗ trợ</Nav.Link>
            <Nav.Link href="#action2">Liên hệ</Nav.Link>

            <NavDropdown title="Xem thêm" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Áo quần</NavDropdown.Item>
              <NavDropdown.Item href="#action3">trang sức</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Giày dép</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Kính</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
