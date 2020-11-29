import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import {
  CardContent,
  CardMedia,
  Button,
  Container,
  Card,
} from "@material-ui/core";

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
    left: -10,
    top: -180,
  },
}));

const Titleframe = () => {
  const classes = useStyles();

  return (
    <Container id="title-frame">
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="company-image"
          max-height="45"
          max-width="30"
          image="/images/logo-marine.png"
          title="Company Image"
        />
      </Card>
      <Typography
        className={classes.titleFrame}
        gutterBottom
        variant="h4"
        component="h2"
      >
        Coordinateur service informatique
      </Typography>
      <Typography className={classes.titleFrame}>à Marine Nationale</Typography>
    </Container>
  );
};

export default Titleframe;
