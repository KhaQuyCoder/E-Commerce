import React from "react";
import "./Footer.css";
import "../../reponsive/Reponsive.css";
import logo from "../../assets/logofooter.avif";
const Footer = () => {
  const help = [
    "Help center",
    "Shipping Info",
    "Returns",
    "How To Order",
    "How To Track",
    "Size Guide",
  ];
  const company = [
    "About Us",
    "Our Blog",
    "Careers",
    "Store Locations",
    "Testimonial",
    "Sitemap",
  ];
  return (
    <div className="container-footer">
      <div className="wraper-footer">
        <ul className="logo-footer">
          <li>
            <img src={logo} alt="logo" />
          </li>
          <li>
            <span className="icon-footer">
              <i class="fa-solid fa-phone"></i>
            </span>
            Call us now: 012345538
          </li>
          <li>
            <span className="icon-footer">
              <i class="fa-solid fa-envelope"></i>
            </span>
            khaquydev04@gmail.com
          </li>
          <li>
            <span className="icon-footer">
              <i class="fa-solid fa-clock"></i>
            </span>
            Monday till Friday 10 to 6 EST
          </li>
        </ul>
        <ul className="help-footer">
          <h5>HELP</h5>
          {help.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className="company-footer">
          <h5>COMPANY</h5>
          {company.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className="contact-footer">
          <h5>NEWSLETTER</h5>
          <li>
            Get 15% off your first purchaxse! Plus, be the first to know about
            sales new product launches and exclusive offers!
          </li>
          <li>
            <input
              className="input-footer"
              type="text"
              placeholder="Nhập Email..."
            />
          </li>
          <li className="infor-footer">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-tiktok"></i>
            <i class="fa-brands fa-twitter"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
