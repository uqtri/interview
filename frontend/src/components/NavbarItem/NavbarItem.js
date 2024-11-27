import React from "react";
import "./NavbarItem.css";
export default function NavbarItem({ image, name }) {
  return (
    <div className="navbar-item">
      <img width="40px" height="40px" src={image} />
      <p>{name}</p>
    </div>
  );
}
