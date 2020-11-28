import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Container,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),

    // width: ""
  },
  cardMedia: {
    padding: 0,
  },
  cardContent: {
    fontSize: "0.8rem",
  },
  titleFrame: {
    position: "relative",
    margin: "-65",
    zIndex: "10",
  },
}));

const Company = () => {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          component="img"
          alt="company-image"
          height="175"
          image="/images/marine.png"
          title="Company Image"
        />
        <Container className={classes.titleFrame}>
          <Typography gutterBottom variant="h5" component="h2">
            Coordinateur service informatique
          </Typography>
          <Typography>à Marine Nationale</Typography>
        </Container>
        <CardContent className={classes.cardContent}></CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Company;

{
  /* <img
  className="logo-cyberjobs"
  height="100px"
  src="/images/logo-cyberjobs.png"
/>; */
}
