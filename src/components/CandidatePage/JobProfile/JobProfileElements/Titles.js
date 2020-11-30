import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { Container, Card } from "@material-ui/core";
import CompanyLogo from "./CompanyLogo";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    padding: -2,
  },
  card: {
    width: "5rem",
  },
  titleFrame: {
    color: "white",
    display: "block",
    position: "relative",
    zIndex: 100000000,
    left: 100,
    top: -180,
  },
}));

const Titles = ({ titles }) => {
  const classes = useStyles();

  return (
    <Container id="title-frame">
      <Card className={classes.card}>
        <CompanyLogo logo={titles.imgUrl} />
      </Card>
      <Typography
        className={classes.titleFrame}
        gutterBottom
        variant="h3"
        component="h2"
      >
        {titles.jobTitle}
      </Typography>
      <Typography className={classes.titleFrame}>
        {titles.companyTitle}
      </Typography>
    </Container>
  );
};

export default Titles;
