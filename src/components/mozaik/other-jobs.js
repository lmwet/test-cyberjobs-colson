import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  spacing: 8,

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "justify",
    color: theme.palette.text.primary,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  blue: {
    padding: theme.spacing(2),
    textAlign: "justify",
    backgroundColor: "#3eb8fd",
    color: "white",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  text: {
    color: theme.palette.text.secondary,
  },
}));

const Otherjobs = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={6} sm={3}></Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
      <Grid item xs={6} sm={3}></Grid>
    </Grid>
  );
};

export default Otherjobs;
