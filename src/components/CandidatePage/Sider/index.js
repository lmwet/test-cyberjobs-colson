import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  spacing: 8,

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "justify",
    color: theme.palette.text.primary,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  blue: {
    padding: theme.spacing(2),
    textAlign: "justify",
    backgroundColor: "#3eb8fd",
    color: "white",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  text: {
    color: theme.palette.text.secondary,
  },
  cardMedia: {
    height: "6rem",
    margin: "2rem",
  },
}));

const Sider = () => {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={3}>
      <Paper className={classes.blue}>
        La Marine nationale est une des composantes des forces armées et dépend
        du ministère des armées. Elle est engagée en permanence sur toutes les
        mers du monde.
      </Paper>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="/images/colleagues.svg"
          title="Shared Workspace"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Ce poste me plait!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Je postule
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Sider;
