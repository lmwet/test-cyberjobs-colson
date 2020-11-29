import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Container,
} from "@material-ui/core";
import Topprofile from "./top-profile";
import Pills from "./pills";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
  },
}));

const Company = () => {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.card}>
        <Topprofile />
        <Pills />
      </Card>
    </Container>
  );
};

export default Company;
