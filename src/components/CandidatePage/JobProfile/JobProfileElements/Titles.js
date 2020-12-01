import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container, Card, Typography, Grid } from "@material-ui/core";
import CompanyLogo from "./CompanyLogo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardMedia: {
    padding: -2,
  },
  card: {
    maxWidth: "10rem",
  },
  titles: {
    padding: "0",
    margin: "1em",
    color: "white",
  },
}));

const Titles = ({ titles }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} id="title-frame">
      <Card className={classes.card}>
        <CompanyLogo logo={titles.imgUrl} />
      </Card>
      <Container className={classes.titles} maxWidth="sm">
        <Typography variant="h3">{titles.jobTitle}</Typography>
        <Typography variant="h6">à {titles.companyTitle}</Typography>
      </Container>
    </Grid>
  );
};

export default Titles;
