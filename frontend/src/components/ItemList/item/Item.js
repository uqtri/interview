import React from "react";
import { Meat } from "../../../assets/image";
import "./Item.css";
export default function item({ name }) {
  return (
    <div className="item-intro">
      <img src={Meat} />
      <p>{name}</p>
    </div>
  );
}
