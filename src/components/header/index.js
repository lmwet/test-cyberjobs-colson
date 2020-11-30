import React from "react";
import ReactDOM from "react-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import TopLeft from "./top-left";
import TopCenter from "./top-center";
import TopRight from "./top-right";

const Header = () => {
  return (
    <AppBar color="#fff" position="relative">
      <Toolbar>
        <TopLeft />
        <TopCenter />
        <TopRight />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
