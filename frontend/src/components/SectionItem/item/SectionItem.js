import React from "react";
import { Product } from "../../../assets/image";
import "./SectionItem.css";
export default function SectionItem({
  previousCost,
  currentCost,
  text,
  name,
  promotion,
}) {
  return (
    <div className="detailed-item">
      <div className="promotion">
        <p>-10%</p>
      </div>
      <img width="164px" height="164px" src={Product} />
      <div className="item-info-container">
        <h3 style={{ color: "#DD6B20" }}>{currentCost}</h3>
        <h5>
          <span style={{ textDecoration: "line-through" }}>{previousCost}</span>
          <span style={{ color: "#38A169" }}>{text}</span>
        </h5>
        <h5>{name}</h5>
      </div>
    </div>
  );
}
