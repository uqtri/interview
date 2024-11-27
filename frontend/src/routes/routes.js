import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
// import Header from "../layout/header/header";
import MainLayout from "../layout/MainLayout/MainLayout";
export default function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        ></Route>
        {/* <Route path="/he" element={<Header />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}
