import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Container, Typography, Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  spacing: 8,
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "justify",
    color: theme.palette.text.primary,
  },
  // column: {
  //   height: "48rem",
  //   width: theme.spacing(90),
  // },
}));

const MainGrid = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.row}>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            La Marine nationale est une des composantes des forces armées et
            dépend du ministère des armées. Elle est engagée en permanence sur
            toutes les mers du monde.
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={15} sm={9}>
        <Card className={classes.card}>xs=15 sm=9</Card>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={15} sm={9}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainGrid;
