import React from "react";
import { useState, useRef } from "react";
import "./Login.css";
const Login = () => {
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState();
  const [email, setEmail] = useState();
  const [checkEmail, setCheckEmail] = useState();
  const [checkPass, setCheckPass] = useState();

  const emailRef = useRef();
  const passRef = useRef();
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
              Email phải hợp lệ!
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
              Mật khẩu không đủ mạnh!
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
    </div>
  );
};

export default Login;
