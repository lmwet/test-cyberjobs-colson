import React from "react";
import { CardActions, Button } from "@material-ui/core";

const JobLinks = () => {
  return (
    <CardActions>
      <Button size="small" color="primary">
        PRESENTATION
      </Button>
      <Button size="small" color="primary">
        AUTRE JOBS
      </Button>
      <Button size="small" color="primary">
        ENTREPRISES
      </Button>
    </CardActions>
  );
};

export default JobLinks;
