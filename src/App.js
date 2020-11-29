import "./App.css";
import React from "react";
import { theme } from "./theme";
import Header from "./components/header/header";
import MainGrid from "./components/mozaik/main-grid";
import BreadcrumbsNav from "./components/breadcrumbs/breadcrumbs";
import Company from "./components/profile/company";
import Footer from "./components/footer/footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <BreadcrumbsNav />
      <Company />
      <MainGrid />
      <Footer />
    </React.Fragment>
  );
}

export default App;
