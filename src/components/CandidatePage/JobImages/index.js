import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, CardMedia, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: "20rem",
  },
  spacing: 8,

  root: {
    flexGrow: 1,
  },
}));

const JobImages = ({ jobImages }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={6} sm={3}></Grid>
      {jobImages &&
        jobImages.map((image) => (
          <Grid item xs={15} sm={9}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                alt={image.alt}
                height="175"
                image={image.imgUrl}
                title={image.imgTitle}
              />
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default JobImages;
