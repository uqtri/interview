import React from "react";
import { Banner } from "../../assets/image";
import ItemList from "../../components/ItemList/ItemList";
import "./MainMenu.css";
import SectionItem from "../../components/SectionItem/Section";
export default function MainMenu() {
  return (
    <div className="main-menu">
      <div className="banner-container">
        <img
          width="1228px"
          height="307px"
          style={{ borderRadius: "8px" }}
          src={Banner}
        />
      </div>
      <ItemList />
      <SectionItem />
      <SectionItem />
      <SectionItem />
      <SectionItem />
    </div>
  );
}
