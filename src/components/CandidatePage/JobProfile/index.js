import React from "react";
import { Card, Container, Grid } from "@material-ui/core";
import ApplyButton from "./JobProfileElements/ApplyButton";
import Pills from "./JobProfileElements/Pills";
import JobLinks from "./JobProfileElements/JobLinks";
import CompanyBanner from "./JobProfileElements/CompanyBanner";
import ChatOption from "./JobProfileElements/ChatOption";
import { makeStyles } from "@material-ui/styles";
import Booking from "./JobProfileElements/Booking";

const useStyles = makeStyles((theme) => ({
  buttonsContainer: {
    marginTop: "1rem",
    marginBottom: "1rem",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  profileCard: {
    padding: "1em",
  },
}));

const JobProfile = ({ jobProfile }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.profileCard} item xs={18} sm={12}>
      <Card className={classes.profileCard}>
        <CompanyBanner titles={jobProfile.titles} />
        <JobLinks />
        <Container maxWidth="md" className={classes.buttonsContainer}>
          <ApplyButton />
          <ChatOption />
          <Booking />
        </Container>
        <Pills pills={jobProfile.pills} />
      </Card>
    </Grid>
  );
};

export default JobProfile;
