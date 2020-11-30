import React from "react";
import { makeStyles } from "@material-ui/styles";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    padding: -2,
  },
}));

const CompanyLogo = () => {
  const classes = useStyles();

  return (
    <CardMedia
      id="company-avatar"
      component="img"
      alt="company-image"
      max-height="45"
      max-width="30"
      image="/images/logo-marine.png"
      title="Marine Logo"
    />
  );
};

export default CompanyLogo;
