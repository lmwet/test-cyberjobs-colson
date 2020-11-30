import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, CardMedia, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    margin: "-3%",
    width: "105%",
    height: "20rem",
    objectPosition: "100% 20%",
    objectFit: "cover",
  },
}));

const JobImages = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={6} sm={3}></Grid>
      <Grid item xs={15} sm={9}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            alt="grid-images"
            height="175"
            image="/images/imagesGrid.png"
            title="Grid"
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default JobImages;
