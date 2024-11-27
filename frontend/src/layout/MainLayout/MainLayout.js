import React from "react";
import Header from "../header/header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
