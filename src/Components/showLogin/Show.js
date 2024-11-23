import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Show.css";
function Example() {
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState();
  const [checkPass, setCheckPass] = useState();

  const emailRef = useRef();
  const passRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handerSubmit = (e) => {
    e.preventDefault();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setCheckEmail(true);
      emailRef.current.style.borderColor = "";
    } else {
      emailRef.current.style.borderColor = "#EF5350";
      setCheckEmail(false);
    }
    if (pass?.length > 6) {
      passRef.current.style.borderColor = "";
      setCheckPass(true);
    } else {
      passRef.current.style.borderColor = "#EF5350";
      setCheckPass(false);
    }
    if (checkEmail && checkPass) {
    }
  };
  return (
    <>
      <Button className="btn-show" onClick={handleShow}>
        <i class="fa-solid fa-user"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng nhập</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form class="styled-form">
            <label>
              <p>Địa chỉ Email</p>

              <input
                type="text"
                placeholder="Email..."
                onInput={(e) => setEmail(e.target.value)}
                ref={emailRef}
              />
              {checkEmail === false && (
                <p style={{ fontSize: "12px", color: "red" }}>
                  {email?.length === 0
                    ? "Trường này không được để trống!"
                    : "Email phải hợp lệ!"}
                </p>
              )}
            </label>
            <label>
              <p>Mật khẩu</p>
              <input
                type="password"
                placeholder="password..."
                onInput={(e) => setPass(e.target.value)}
                ref={passRef}
              />
              {checkPass === false && (
                <p style={{ fontSize: "12px", color: "red" }}>
                  {pass?.length === 0
                    ? "Trường này không được để trống!"
                    : "Email phải hợp lệ!"}
                </p>
              )}
            </label>
            <p>
              <span style={{ marginRight: "5px", color: "green" }}>
                <i class="fa-solid fa-envelope"></i>
              </span>
              Forgot your{" "}
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "500",
                }}
              >
                password?
              </a>{" "}
            </p>

            <button type="submit" onClick={(e) => handerSubmit(e)}>
              Đăng nhập
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
