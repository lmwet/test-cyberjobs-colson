import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Paper,
  Grid,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  spacing: 8,

  root: {
    flexGrow: 1,
  },
  cardGrid: {
    padding: theme.spacing(3),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  h6: {
    color: theme.palette.text.primary,
  },
}));

const cards = [1, 2, 3, 4, 5, 6];

const Otherjobs = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root} maxWidth="lg">
      <Grid item xs={6} sm={3}></Grid>
      <Grid item xs={12} sm={9}>
        <Paper className={classes.cardGrid}>
          <Typography variant="h6" className={classes.h6}>
            Autres Jobs
          </Typography>
          <Grid container spacing={6}>
            {cards.map((card) => (
              <Grid item key={card} xs={15} sm={9} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.cyberjobs.fr/api/Misc/Image/0/CJ-5b9baa0d7631920588e3318b_image?ca&size=800"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Bourse Cyber
                    </Typography>
                    <Typography variant="caption">Blabla</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Otherjobs;
