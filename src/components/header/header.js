import React from "react";
import ReactDOM from "react-dom";
import { Container } from "@material-ui/core";
import TopLeft from "./top-left";

const Header = () => {
  return (
    <Container fixed>
      <TopLeft />
    </Container>
  );
};
export default Header;
