import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  spacing: 8,

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "justify",
    color: theme.palette.text.primary,

    marginBottom: theme.spacing(2),
  },
  text: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
  },
  h5: {
    color: theme.palette.text.primary,
    padding: theme.spacing(2),
  },
}));

const JobDescription = ({ jobDescription }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={9} className={classes.root}>
      <Paper className={classes.paper}>
        <Typography
          className={classes.h5}
          gutterBottom
          variant="h5"
          component="h2"
        >
          Descriptif de l'offre
        </Typography>

        <Typography className={classes.text} variant="caption">
          {jobDescription.offre}{" "}
        </Typography>

        <Typography
          className={classes.h5}
          gutterBottom
          variant="h5"
          component="h2"
        >
          Profil recherché
        </Typography>

        <Typography className={classes.text} variant="caption">
          {jobDescription.profileRecherche}
        </Typography>
      </Paper>
    </Grid>
  );
};
export default JobDescription;
