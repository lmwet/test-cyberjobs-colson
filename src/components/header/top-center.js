import React from "react";
import ReactDOM from "react-dom";
import { Container, Button, Typography } from "@material-ui/core";
import { spacing } from "@material-ui/system";

const TopCenter = () => {
  return (
    <Container maxWidth="sm">
      <Button
        size="large"
        color="inherit"
        href="https://www.cyberjobs.fr/Companies"
      >
        Découvrir les entreprises
      </Button>
      <Button size="large" color="inherit" href="https://www.cyberjobs.fr/Jobs">
        Consulter les jobs
      </Button>
    </Container>
  );
};

export default TopCenter;
