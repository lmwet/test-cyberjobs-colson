import React from "react";
import { makeStyles } from "@material-ui/styles";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    margin: "-3%",
    width: "105%",
    height: "20rem",
    objectPosition: "100% 20%",
    objectFit: "cover",
  },
}));

const CompanyBanner = () => {
  const classes = useStyles();

  return (
    <CardMedia
      className={classes.cardMedia}
      component="img"
      alt="company-image"
      height="175"
      image="/images/marine.png"
      title="Company Image"
    />
  );
};

export default CompanyBanner;
