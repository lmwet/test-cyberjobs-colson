import React from "react";
import ReactDOM from "react-dom";
import JobProfile from "./JobProfile";
import BreadCrumbs from "./BreadCrumbs";
import Sider from "./Sider";
import JobDescription from "./JobDescription";
import Otherjobs from "./OtherJobs";
import JobImages from "./JobImages";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  spacing: 8,

  root: {
    flexGrow: 1,
    // shadows: theme.shadows[24],
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "justify",
    color: theme.palette.text.primary,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  text: {
    color: theme.palette.text.secondary,
  },
  cardMedia: {
    height: "20rem",
  },
  h5: {
    color: theme.palette.text.primary,
  },
}));

const CandidatePage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <BreadCrumbs />
      <Container maxWidth="lg" className={classes.row}>
        <Grid container spacing={3} className={classes.root}>
          <JobProfile />
          <Sider />
          <JobDescription />
        </Grid>
        <JobImages />
        <Otherjobs />
      </Container>
    </React.Fragment>
  );
};

export default CandidatePage;
