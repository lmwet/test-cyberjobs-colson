import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import {
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Container,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    padding: 0,
  },
  cardContent: {
    fontSize: "0.8rem",
  },
}));

const Topprofile = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CardMedia
        className={classes.cardMedia}
        component="img"
        alt="company-image"
        height="175"
        image="/images/marine.png"
        title="Company Image"
      />
      <Container id="title-frame" className={classes.titleFrame}>
        <Typography gutterBottom variant="h5" component="h2">
          Coordinateur service informatique
        </Typography>
        <Typography>à Marine Nationale</Typography>
      </Container>

      {/* <CardContent className={classes.cardContent}></CardContent> */}
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </React.Fragment>
  );
};

export default Topprofile;
