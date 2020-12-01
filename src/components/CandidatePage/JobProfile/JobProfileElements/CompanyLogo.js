import React from "react";
import { CardMedia } from "@material-ui/core";

// This component lives in the "Titles" file.

const CompanyLogo = ({ logo }) => {
  return (
    <CardMedia
      id="company-avatar"
      component="img"
      alt="company-image"
      max-height="45"
      max-width="30"
      image={logo}
      title="Marine Logo"
    />
  );
};

export default CompanyLogo;
