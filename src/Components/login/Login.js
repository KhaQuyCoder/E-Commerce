import React, { useContext } from "react";
import { useState, useRef } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { State } from "../../state/ManagerState";
import Footer from "../footer/Footer";
const Login = () => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState();
  const [checkPass, setCheckPass] = useState();
  const navigate = useNavigate();
  const { setCheckLogin } = useContext(State);

  const emailRef = useRef();
  const passRef = useRef();
  const handerSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPassValid = pass?.length > 6;

    if (isEmailValid) {
      setCheckEmail(true);
      emailRef.current.style.borderColor = "";
    } else {
      setCheckEmail(false);
      emailRef.current.style.borderColor = "#EF5350";
    }

    if (isPassValid) {
      setCheckPass(true);
      passRef.current.style.borderColor = "";
    } else {
      setCheckPass(false);
      passRef.current.style.borderColor = "#EF5350";
    }

    if (isEmailValid && isPassValid) {
      setCheckLogin(true);
      navigate("/ListsHeart");
    }
  };
  return (
    <>
      <div>
        <form class="form-login">
          <h3>Tài khoản</h3>
          <label>
            <p>Địa chỉ Email</p>

            <input
              type="text"
              placeholder="Email..."
              onInput={(e) => setEmail(e.target.value)}
              ref={emailRef}
            />
            {checkEmail === false && (
              <p style={{ fontSize: "12px", color: "red", marginTop: "5px" }}>
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
              <p style={{ fontSize: "12px", color: "red", marginTop: "5px" }}>
                {pass?.length === 0
                  ? "Trường này không được để trống!"
                  : "Mật khẩu không đủ mạnh!"}
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
        <Footer />
      </div>
    </>
  );
};

export default Login;
