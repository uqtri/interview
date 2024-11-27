import React from "react";
import { Advertisement } from "../../../assets/image";
import "./SectionHeader.css";

export default function SectionHeader() {
  return (
    <div className="section-header">
      <img src={Advertisement} />
    </div>
  );
}
