import React from "react";
import Navbar from "../layout/navbar/navbar.js";
import MainMenu from "../layout/MainMenu/MainMenu.js";
export default function HomePage() {
  return (
    <div style={{ display: "flex" }}>
      <Navbar></Navbar>
      <MainMenu></MainMenu>
    </div>
  );
}
