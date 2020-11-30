import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Container, Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  candidater: {
    backgroundColor: "#f4d47d",
    color: theme.palette.text.primary,
  },
}));

const ApplyButton = () => {
  const classes = useStyles();

  return (
    <Container size="lg">
      <Button className={classes.candidater} variant="contained" size="large">
        Candidater <Icon>open</Icon>
      </Button>
    </Container>
  );
};

export default ApplyButton;
