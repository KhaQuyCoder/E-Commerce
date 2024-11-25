import React, { useContext } from "react";
import "./Profile.css";
import "../../reponsive/Reponsive.css";
import { Link } from "react-router-dom";
import Footer from "../../Components/footer/Footer";
import { State } from "../../state/ManagerState";
const Profile = () => {
  const { infor } = useContext(State);
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
  return (
    <>
      <div className="container-profile">
        <div className="wraper-profile">
          {infors.map((item, index) => (
            <div key={index}>
              <span>{item} :</span>
              <p>{infor[index]}</p>
            </div>
          ))}
        </div>
        <Link to="/Profile/Edit-Profile">
          <button className="btn-profile">Chỉnh sửa thông tin</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
