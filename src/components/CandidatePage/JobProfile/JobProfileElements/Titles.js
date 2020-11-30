import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { CardContent, Container, Card } from "@material-ui/core";
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

const Titles = () => {
  const classes = useStyles();

  return (
    <Container id="title-frame">
      <Card className={classes.card}>
        <CompanyLogo />
      </Card>
      <Typography
        className={classes.titleFrame}
        gutterBottom
        variant="h3"
        component="h2"
      >
        Coordinateur service informatique
      </Typography>
      <Typography className={classes.titleFrame}>à Marine Nationale</Typography>
    </Container>
  );
};

export default Titles;
