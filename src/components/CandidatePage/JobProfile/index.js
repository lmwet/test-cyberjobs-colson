import React from "react";
import { Card, Container } from "@material-ui/core";
import ApplyButton from "./JobProfileElements/ApplyButton";
import Titles from "./JobProfileElements/Titles";
import Pills from "./JobProfileElements/Pills";
import JobLinks from "./JobProfileElements/JobLinks";
import CompanyBanner from "./JobProfileElements/CompanyBanner";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: 16,
  },
}));

const JobProfile = ({ jobProfile }) => {
  const classes = useStyles();
  return (
    <Container className={classes.card}>
      <Card className={classes.card}>
        <CompanyBanner />
        <Titles titles={jobProfile.titles} />
        <JobLinks />
        <ApplyButton />
        <Pills pills={jobProfile.pills} />
      </Card>
    </Container>
  );
};

export default JobProfile;
