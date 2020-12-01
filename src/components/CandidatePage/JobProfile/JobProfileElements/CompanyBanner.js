import React from "react";
import { makeStyles } from "@material-ui/styles";
import { CardMedia, Container } from "@material-ui/core";
import Titles from "./Titles";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    width: "110%",
    height: "25rem",
    marginTop: "-15rem",
    marginLeft: "-5rem",
    objectPosition: "100% 20%",
  },
  titlesContainer: {
    position: "relative",
    top: "13rem",
    zIndex: 10000000000,
  },
}));

const CompanyBanner = ({ titles }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.titlesContainer}>
        <Titles titles={titles} />
      </Container>
      <CardMedia
        className={classes.cardMedia}
        component="img"
        height="175"
        alt="company-image"
        image="/images/marine.png"
        title="Company Image"
      />
    </React.Fragment>
  );
};

export default CompanyBanner;
