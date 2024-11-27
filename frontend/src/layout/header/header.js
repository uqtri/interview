import React from "react";
import "./header.css";
import { logo, LeadingIcon } from "../../assets/image/index";

export default function header() {
  return (
    <div className="header">
      <div
        style={{
          width: "124px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img width="32px" height="32px" src={logo} alt="Anh" />
        <div>
          <p>One Life</p>
        </div>
      </div>
      <div className="search-box">
        <img width="20px" height="20px" src={LeadingIcon} />
        <input placeholder="Tìm sản phẩm"></input>
      </div>
      <p> Tạp chí</p>
    </div>
  );
}
