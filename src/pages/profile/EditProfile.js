import React, { useContext, useState } from "react";
import "./Profile.css";
import "../../reponsive/Reponsive.css";
import { Link } from "react-router-dom";
import Footer from "../../Components/footer/Footer";
import { State } from "../../state/ManagerState";
const EditProfile = () => {
  const { infor, setInfor } = useContext(State);
  const infors = [
    "Họ và tên",
    "Email",
    "Công việc",
    " Địa chỉ 1",
    "Địa chỉ 2",
    "Thành phố",
    "Mã ZIP",
    "Số điện thoại",
    "Quốc gia",
  ];
  const handleInputChange = (e, index) => {
    const updatedInfo = [...infor];
    updatedInfo[index] = e.target.value;
    setInfor(updatedInfo);
  };
  return (
    <>
      <div className="container-editprofile">
        <form
          style={{ display: "flex", flexDirection: "column", lineHeight: "2" }}
        >
          {infors.map((item, index) => (
            <>
              <label>{item}</label>
              <input
                className="input-editprofile"
                type="text"
                value={infor[index] || ""}
                onInput={(e) => handleInputChange(e, index)}
              />
            </>
          ))}
          <Link to="/Profile" className="link-confrom">
            <button className="btn-conform">Xác nhận</button>
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;
