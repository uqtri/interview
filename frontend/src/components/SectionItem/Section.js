import React from "react";
import SectionHeader from "./header/SectionHeader";
import SectionFooter from "./footer/SectionFooter";
import SectionItem from "./item/SectionItem";

import "./Section.css";
export default function Section() {
  return (
    <div className="section">
      <SectionHeader />
      <div className="item-container">
        <SectionItem
          previousCost={"1.500.000 đ"}
          currentCost={"1.200.000 đ"}
          text={"Tiết kiệm 12k"}
          name={"Táo Mỹ & Nam Phi túi 1.5kg (1 Túi)"}
        />{" "}
        <SectionItem
          previousCost={"1.500.000 đ"}
          currentCost={"1.200.000 đ"}
          text={"Tiết kiệm 12k"}
          name={"Táo Mỹ & Nam Phi túi 1.5kg (1 Túi)"}
        />{" "}
        <SectionItem
          previousCost={"1.500.000 đ"}
          currentCost={"1.200.000 đ"}
          text={"Tiết kiệm 12k"}
          name={"Táo Mỹ & Nam Phi túi 1.5kg (1 Túi)"}
        />{" "}
        <SectionItem
          previousCost={"1.500.000 đ"}
          currentCost={"1.200.000 đ"}
          text={"Tiết kiệm 12k"}
          name={"Táo Mỹ & Nam Phi túi 1.5kg (1 Túi)"}
        />{" "}
        <SectionItem
          previousCost={"1.500.000 đ"}
          currentCost={"1.200.000 đ"}
          text={"Tiết kiệm 12k"}
          name={"Táo Mỹ & Nam Phi túi 1.5kg (1 Túi)"}
        />{" "}
        <SectionItem
          previousCost={"1.500.000 đ"}
          currentCost={"1.200.000 đ"}
          text={"Tiết kiệm 12k"}
          name={"Táo Mỹ & Nam Phi túi 1.5kg (1 Túi)"}
        />
        <SectionItem
          previousCost={"1.500.000 đ"}
          currentCost={"1.200.000 đ"}
          text={"Tiết kiệm 12k"}
          name={"Táo Mỹ & Nam Phi túi 1.5kg (1 Túi)"}
        />
      </div>
      <SectionFooter />
    </div>
  );
}
