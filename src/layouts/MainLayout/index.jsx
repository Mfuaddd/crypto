import React from "react";
import HeaderLayout from "../HeaderLayout";
import { Outlet } from "react-router-dom";
import FooterLayout from "../FooterLayout";

function MainLayout() {
  return (
    <>
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
    </>
  );
}

export default MainLayout;
