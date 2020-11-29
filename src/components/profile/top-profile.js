import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import {
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Container,
} from "@material-ui/core";
import Titleframe from "./title-frame";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    padding: 0,
  },
  cardContent: {
    fontSize: "0.8rem",
  },
}));

const Topprofile = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* banner image */}
      <CardMedia
        className={classes.cardMedia}
        component="img"
        alt="company-image"
        height="175"
        image="/images/marine.png"
        title="Company Image"
      />
      <Titleframe />

      {/* Menu company */}
      <CardActions>
        <Button size="small" color="primary">
          PRESENTATION
        </Button>
        <Button size="small" color="primary">
          AUTRE JOBS
        </Button>
        <Button size="small" color="primary">
          ENTREPRISES
        </Button>
      </CardActions>
    </React.Fragment>
  );
};

export default Topprofile;
