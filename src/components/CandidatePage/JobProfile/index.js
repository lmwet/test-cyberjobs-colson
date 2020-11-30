import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { Card, Container } from "@material-ui/core";
import ApplyButton from "./JobProfileElements/ApplyButton";
import Titles from "./JobProfileElements/Titles";
import Pills from "./JobProfileElements/Pills";
import JobLinks from "./JobProfileElements/JobLinks";
import CompanyBanner from "./JobProfileElements/CompanyBanner";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
  },
}));

const JobProfile = () => {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.card}>
        <CompanyBanner />
        <Titles />
        <JobLinks />
        <ApplyButton />
        <Pills />
      </Card>
    </Container>
  );
};

export default JobProfile;
