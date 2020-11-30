import React from "react";
import { Card, Container } from "@material-ui/core";
import ApplyButton from "./JobProfileElements/ApplyButton";
import Titles from "./JobProfileElements/Titles";
import Pills from "./JobProfileElements/Pills";
import JobLinks from "./JobProfileElements/JobLinks";
import CompanyBanner from "./JobProfileElements/CompanyBanner";
import ChatOption from "./JobProfileElements/ChatOption";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: 16,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "no-wrap",
    justifyContent: "space-between",
  },
}));

const JobProfile = ({ jobProfile }) => {
  const classes = useStyles();
  return (
    <Container className={classes.card}>
      <Card className={classes.card}>
        <CompanyBanner />
        <Titles titles={jobProfile.titles} />
        <Container maxWidth="md" className={classes.buttonsContainer}>
          <ApplyButton />
          <ChatOption />
          <ApplyButton />
        </Container>
        <JobLinks />
        <Pills pills={jobProfile.pills} />
      </Card>
    </Container>
  );
};

export default JobProfile;
